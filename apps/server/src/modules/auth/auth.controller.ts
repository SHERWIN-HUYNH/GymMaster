import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { forgotPasswordDto, signInDto, signUpDto } from "./dtos/auth.dto";
import { AuthService } from "./auth.service";
import { auth } from "@/middlewares/auth";

export const router = new Hono();

router
  .post("/sign-up", async (c) => {
    const { email,fullName,password } = await c.req.json();

    await AuthService.signUp(email,fullName, password);

    return c.json({ message: "Sign up successfully!" });
  })
  .post("/sign-in", async (c) => {
    const { email, password } = await c.req.json();

    const accessToken = await AuthService.signIn(email, password);

    return c.json({ accessToken: accessToken });
  })
  .post("/forgot-password",async (c) => {
    const { email } = await c.req.json();
    await AuthService.forgotPassword(email);
    return c.json({
      message: "Forgot password successfully! Please check your email",
      status: 200,
    });
  })

  // .post(
  //   "/forgot-password",
  //   zValidator("json", forgotPasswordDto),
  //   async (c) => {
  //     const { email,fullName } = await c.req.json();
  //     await AuthService.forgotPassword(email);

  //     return c.json({
  //       message: "Forgot password successfully! Please check your email",
  //       status: 200,
  //     });
  //   },
  // )
