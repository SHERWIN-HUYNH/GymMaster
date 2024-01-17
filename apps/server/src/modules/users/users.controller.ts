import { Hono } from "hono";
import { auth } from "@/middlewares/auth";
import { zValidator } from "@hono/zod-validator";
import { updateMeDto } from "./dtos/update-me.dto";
import { UsersService } from "./users.services";

export const router = new Hono();

router
  .get("/me", auth, async (c) => {
    const user = c.get("user");

    delete user.password;

    return c.json({
      data: user,
      status: 200,
    });
  })
  .put("/me", auth, zValidator("json", updateMeDto), async (c) => {
    const data = await c.req.json();
    const user = c.get("user");
    const updatedMe = await UsersService.updateBy(user.id, data);

    return c.json({
      data: updatedMe,
      status: 200,
    });
  });
