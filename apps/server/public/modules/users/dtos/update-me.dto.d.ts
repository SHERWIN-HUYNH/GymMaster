import { z } from "zod";
export declare const updateMeDto: z.ZodObject<{
    fullName: z.ZodString;
    age: z.ZodNumber;
    avatar: z.ZodString;
    phone: z.ZodString;
}, "strip", z.ZodTypeAny, {
    fullName?: string;
    age?: number;
    avatar?: string;
    phone?: string;
}, {
    fullName?: string;
    age?: number;
    avatar?: string;
    phone?: string;
}>;
