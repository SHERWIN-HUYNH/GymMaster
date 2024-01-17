import { db } from "@/lib/db";
import { BadRequestException } from "@/lib/exceptions";
import { Prisma } from "@prisma/client";

export class ReviewsService {
  static async getAllBy(roomId: string) {
    const reviews = await db.review.findMany({
      where: {
        roomId,
      },
      select: {
        user: {
          select: {
            email: true,
          },
        },
        comment: true,
        id: true,
        rate: true,
      },
    });
    return reviews;
  }

  static async create(
    roomId: string,
    userId: string,
    createReviewDto: Omit<Prisma.ReviewCreateInput, "user" | "room">,
  ) {
    const review = await db.review.create({
      data: {
        ...createReviewDto,
        room: {
          connect: {
            id: roomId,
          },
        },
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
    return review;
  }

  static async deleteBy(reviewId: string, userId: string) {
    try {
      return await db.review.delete({
        where: {
          id: reviewId,
          userId: userId,
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2025") {
          throw new BadRequestException("Review not found");
        }
      }
      throw error;
    }
  }

  static async updateBy(
    reviewId: string,
    userId: string,
    updateReviewDto: Prisma.ReviewUpdateInput,
  ) {
    try {
      return await db.review.update({
        where: {
          id: reviewId,
          userId: userId,
        },
        data: updateReviewDto,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2025") {
          throw new BadRequestException("Review not found");
        }
      }
      throw error;
    }
  }
}
