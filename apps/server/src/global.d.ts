import { User } from "@prisma/client";

declare global {
  interface Error {
    status?:  StatusCode;
  }
}

declare module "hono" {
  interface ContextVariableMap {
    user: User;
  }
}