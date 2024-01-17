import { Hono } from "hono";
import { CategoriesService } from "./categories.service";
import { RoomsService } from "../rooms/rooms.service";
import { createRoomDto } from "./dtos/create-room.dto";
import { zValidator } from "@hono/zod-validator";
import { auth } from "@/middlewares/auth";

export const router = new Hono();

router
  .get("/", async (c) => {
    const categories = await CategoriesService.getAll();
    return c.json({
      data: categories,
      status: 200,
    });
  })
  .post("/", async (c) => {
    const data = await c.req.json();
    const category = await CategoriesService.create(data);
    return c.json({
      data: category,
      status: 200,
    });
  })
  .get("/:categoryId", async (c) => {
    const categoryId = c.req.param("categoryId");
    const category = await CategoriesService.getBy(categoryId);
    return c.json({
      data: category,
      status: 200,
    });
  })
  .delete("/:categoryId", async (c) => {
    const categoryId = c.req.param("categoryId");
    const category = await CategoriesService.delete(categoryId);
    return c.json({
      data: category,
      status: 200,
    });
  })
  .get("/:categoryId/rooms", async (c) => {
    const categoryId = c.req.param("categoryId");
    const rooms = await RoomsService.getAllBy(categoryId);
    return c.json({
      data: rooms,
      status: 200,
    });
  })
  .post(
    "/:categoryId/rooms",
    auth,
    zValidator("json", createRoomDto),
    async (c) => {
      const {
        name,
        price,
        location,
        startDate,
        endDate,
        rate,
        description,
        images,
      } = await c.req.json();
      const user = c.get("user");

      const categoryId = c.req.param("categoryId");
      const room = await RoomsService.create(categoryId, user.id, {
        name,
        price,
        startDate,
        endDate,
        rate,
        location,
        description,
        images,
      });

      return c.json({
        data: room,
        status: 200,
      });
    },
  );
