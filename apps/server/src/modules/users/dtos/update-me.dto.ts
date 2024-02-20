import { z } from "zod";

export const updateMeDto = z.object({
  fullName: z.string({
    required_error: "Name is required",
  }),
  age: z.number({
    required_error: "Age is required",
  }),
  avatar: z.string({
    required_error: "Avatar is required",
  }),
  phone: z.string({
    required_error: "Phone is required",
  }),
});
