import { Hono } from "hono";
import { handle } from "hono/vercel";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

export const config = {
  runtime: "edge",
};

const app = new Hono().basePath("/api");

export default handle(app);
