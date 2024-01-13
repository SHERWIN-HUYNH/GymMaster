import { Hono } from "hono";
import { AuthService } from "./auth.service";
export const router = new Hono();
router
    .post("/sign-up", async (c) => {
    const { name, email, password } = await c.req.json();
    await AuthService.signUp(name, email, password);
    return c.json({ message: "Sign up successfully!" });
})
    .get("/sign-in", async (c) => {
    return c.json({ message: "SUCCESS" });
});
