import { db } from "@/lib/db";
import { BadRequestException } from "@/lib/exceptions";
import { Prisma } from "@prisma/client";

export class RoomsService {
  static async getAllBy(categoryId: string) {
    const rooms = await db.room.findMany({ where: { categoryId } });
    return rooms;
  }

  static async getBy(roomId: string) {
    const room = await db.room.findFirst({
      where: {
        id: roomId,
      },
    });
    return room;
  }

  static async create(
    categoryId: string,
    userId: string,
    input: Omit<Prisma.RoomCreateInput, "user" | "category">,
  ) {
    const createdRoom = await db.room.create({
      data: {
        ...input,
        category: {
          connect: {
            id: categoryId,
          },
        },
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });

    return createdRoom;
  }

  static async delete(roomId: string, userId: string) {
    try {
      const deletedRoom = await db.room.delete({
        where: {
          id: roomId,
          userId: userId,
        },
      });

      return deletedRoom;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2025") {
          throw new BadRequestException("Room not found");
        }
      }
      throw error;
    }
  }
}
