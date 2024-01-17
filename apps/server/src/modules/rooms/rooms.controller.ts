import { Hono } from "hono";
import { RoomsService } from "./rooms.service";
import { auth } from "@/middlewares/auth";
import { zValidator } from "@hono/zod-validator";
import { createReviewDto } from "./dtos/create-review.dto";
import { ReviewsService } from "../reviews/reviews.service";
import { BadRequestException } from "@/lib/exceptions";

export const router = new Hono();

router
  .get("/:roomId", async (c) => {
    const roomId = c.req.param("roomId");
    const room = await RoomsService.getBy(roomId);

    if (!room) {
      throw new BadRequestException("Room not found");
    }

    return c.json({
      status: 200,
      data: room,
    });
  })
  .delete("/:roomId", auth, async (c) => {
    const roomId = c.req.param("roomId");
    const user = c.get("user");
    await RoomsService.delete(roomId, user.id);
    return c.json({
      message: "Room deleted successfully",
      status: 200,
    });
  })
  .post(
    "/:roomId/reviews",
    auth,
    zValidator("json", createReviewDto),
    async (c) => {
      const user = c.get("user");
      const roomId = c.req.param("roomId");
      const data = await c.req.json();
      const review = await ReviewsService.create(roomId, user.id, data);

      return c.json({
        data: review,
        status: 201,
      });
    },
  )
  .get("/:roomId/reviews", async (c) => {
    const roomId = c.req.param("roomId");
    const reviews = await ReviewsService.getAllBy(roomId);

    return c.json({
      data: reviews,
      status: 200,
    });
  });
