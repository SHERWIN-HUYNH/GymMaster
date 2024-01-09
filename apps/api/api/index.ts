import { Hono } from "hono";
import { handle } from "hono/vercel";

export const config = {
  runtime: "edge",
};

const app = new Hono().basePath("/api");

app.get("/sign-in", (c) => {
  return c.json({
    message: "SIGN IN SUCCESSFULLY",
  });
});

app.get("/sign-up", async (c) => {
  const { name, email } = await c.req.json();
  return c.json({
    name,
    email,
  });
});

app.get("/hello", (c) => {
  return c.json({
    message: "hello SUCCESSFULLY",
  });
});

export default handle(app);
