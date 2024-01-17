import { z } from "zod";

export const createRoomDto = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
  price: z.number({
    required_error: "Price is required",
  }),
  location: z.string({
    required_error: "Location is required",
  }),
  startDate: z.coerce.date({
    required_error: "Start date is required",
  }),
  endDate: z.coerce.date({
    required_error: "End date is required",
  }),
  images: z.array(z.string()),
  description: z.string({
    required_error: "Description is required",
  }),
});
