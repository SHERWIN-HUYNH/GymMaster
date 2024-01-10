import { Hono } from "hono";
import { handle } from "hono/vercel";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

export const config = {
  runtime: "edge",
};

const app = new Hono().basePath("/api");

app.use("*", logger());
app.use(
  "*",
  cors({
    origin: [
      "http://localhost:5173",
      "https://api-tau-seven-72.vercel.app",
    ],
    credentials: true,
  }),
);
app.get("/sign-in", (c) => {
  return c.json({
    message: "SIGN IN SUCCESSFULLY",
  });
});
// app.post("/sign-in",async (c) =>{
//   const res = await c.req.json();
//   return res.json()
// })

app.get('test',(c) => {

  return c.json({
    message: "hello SUCCESSFULLY",
  })
});
app.get("/hello", (c) => {

  return c.json({
    message: "hello SUCCESSFULLY",
  });

});




export default handle(app);
