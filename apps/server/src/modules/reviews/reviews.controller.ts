import { auth } from "@/middlewares/auth";
import { Hono } from "hono";
import { ReviewsService } from "./reviews.service";
import { zValidator } from "@hono/zod-validator";
import { updateReviewDto } from "./dtos/update-review.dto";

export const router = new Hono();

router
  .delete("/:reviewId", auth, async (c) => {
    const reviewId = c.req.param("reviewId");
    const user = c.get("user");

    await ReviewsService.deleteBy(reviewId, user.id);

    return c.json({
      message: "Review deleted successfully",
      status: 200,
    });
  })
  .put("/:reviewId", auth, zValidator("json", updateReviewDto), async (c) => {
    const reviewId = c.req.param("reviewId");
    const user = c.get("user");
    const updateReviewInput = await c.req.json();

    const updatedReview = await ReviewsService.updateBy(
      reviewId,
      user.id,
      updateReviewInput,
    );

    return c.json({
      data: updatedReview,
      status: 200,
    });
  });
