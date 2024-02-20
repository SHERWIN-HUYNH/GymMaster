import { User } from "@prisma/client";
export declare class AuthService {
    static signUp(email: string, fullName: string, password: string): Promise<void>;
    static createToken(user: User): any;
    static signIn(email: string, password: string): Promise<any>;
    static forgotPassword(email: string): Promise<void>;
    static resetPassword(user: User, newPassword: string): Promise<{
        id: string;
        email: string;
        fullName: string;
        password: string;
    }>;
}
