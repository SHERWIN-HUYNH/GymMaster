import { z } from "zod";

export const updateReviewDto = z.object({
  comment: z.string().optional(),
  rate: z.number().min(0).max(5).optional(),
});
