import {
  BadRequestException,
  UnauthorizedException,
} from "../../lib/exceptions";
import * as bcrypt from "bcrypt";
import { db } from "../../lib/db";

export class AuthService {
  static async signUp(name: string, email: string, password: string) {
    const users = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (users) {
      throw new BadRequestException("User already exists");
    }

    const salt = bcrypt.genSaltSync();
    const hashedPassword = await bcrypt.hash(password, salt);

    await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    console.log(users);
  }
  // static async getByWithError(email: string) {
  //   const user = await db.user.findUnique({
  //     where: {
  //       email,
  //     },
  //   });
  //   if (!user) {
  //     throw new BadRequestException("No user found");
  //   }
  //   return user;
  // }

  // static async getByWithError(email: string) {
  //   const user = await db.user.findUnique({
  //     where: {
  //       email,
  //     },
  //   });
  //   if (!user) {
  //     throw new BadRequestException("No user found");
  //   }
  //   return user;
  // }

  // static async signIn(email: string, password: string) {
  //   const user = await AuthService.getByWithError(email);

  //   const isMatch = await bcrypt.compare(password, user.password);

  //   if (!isMatch) {
  //     throw new UnauthorizedException("Wrong password");
  //   }

  //   // const accessToken = AuthService.createToken(user);

  //   return 1111;
  // }
}
