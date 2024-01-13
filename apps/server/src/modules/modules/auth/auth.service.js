import * as bcrypt from "bcrypt";
import { db } from "../../lib/db";
export class AuthService {
    static async signUp(name, email, password) {
        // const user = await db.user.findUnique({
        //   where: {
        //     email,
        //   },
        // });
        // if (user) {
        //   throw new BadRequestException("User already exists");
        // }
        const salt = bcrypt.genSaltSync();
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await db.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });
        console.log(user);
    }
}
