import { Hono } from "hono";
import { AuthService } from "./auth.service";

export const router = new Hono();

router
  .post("/sign-up", async (c) => {
    const { name, email, password } = await c.req.json();

    await AuthService.signUp(name, email, password);

    return c.json({ message: "Sign up successfully!" }); // UNSUCCESS 
  })
  .get("/sign-in", async (c) => {
   //const user = await AuthService.getByWithError("trung123@gmail.com");
   return c.json({ message: "SUCCESSFULLY"}); // SUCCEESS 
  });
  
