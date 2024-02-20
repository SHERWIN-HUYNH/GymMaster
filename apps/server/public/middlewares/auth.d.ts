import { Context, Next } from "hono";
export declare const verifyToken: (token: string) => Promise<{
    id: string;
    email: string;
    fullName: string;
    password: string;
}>;
export declare const auth: (c: Context, next: Next) => Promise<void>;
