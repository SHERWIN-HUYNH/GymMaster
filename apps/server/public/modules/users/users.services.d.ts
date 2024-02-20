import { Prisma } from "@prisma/client";
export declare class UsersService {
    static getByWithError(email: string): Promise<{
        id: string;
        email: string;
        fullName: string;
        password: string;
    }>;
    static updateBy(userId: string, data: Prisma.UserUpdateInput): Promise<{
        id: string;
        email: string;
        fullName: string;
        password: string;
    }>;
}
