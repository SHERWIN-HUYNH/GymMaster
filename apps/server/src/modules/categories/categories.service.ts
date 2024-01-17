import { db } from "@/lib/db";
import { type Category } from "@prisma/client";

export class CategoriesService {
  static async getAll() {
    const data = await db.category.findMany({});
    return data;
  }

  static async create(data: Category) {
    const category = await db.category.create({ data });
    return category;
  }

  static async getBy(categoryId: string) {
    const category = await db.category.findUnique({
      where: { id: categoryId },
    });
    return category;
  }

  static async delete(categoryId: string) {
    const category = await db.category.delete({
      where: { id: categoryId },
    });
    return category;
  }
}
