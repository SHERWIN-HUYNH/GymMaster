
import { Hono } from "hono";
import { handle } from "hono/vercel";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import {router as auth} from '../src/modules/auth/auth.controller'
export const config = {
  runtime: "edge",
};

const app = new Hono().basePath("/api");

app.use("*", logger());
app.use(
  "*",
  cors({
    origin: ["http://localhost:5173", "https://api-tau-seven-72.vercel.app"],
    credentials: true,
  })
);

app.route('/',auth);
export default app;
