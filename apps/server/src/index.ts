
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { serve } from "@hono/node-server";
import {router as auth} from './modules/auth/auth.controller'


const app = new Hono().basePath("/api");

app.use("*", logger());
app.use(
  "*",
  cors({
    origin: ["http://localhost:5173","https://gym-master-server.vercel.app"],
    credentials: true,
  })
);

app.route('/',auth);
serve(app, () => {
  console.log("Server is running on http://localhost:3000");
});
