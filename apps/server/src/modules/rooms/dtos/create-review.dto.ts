import { z } from "zod";

export const createReviewDto = z.object({
  comment: z.string({
    required_error: "Comment is required",
  }),
  rate: z
    .number({
      required_error: "Rate is required",
    })
    .min(0)
    .max(5),
});
