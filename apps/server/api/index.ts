import { Hono } from "hono";
import { handle } from "hono/vercel";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import app from "../src/app";
export const config = {
  runtime: "edge",
};

export default handle(app);
