import { JWT_SECRET } from "@/lib/constants";
import { db } from "@/lib/db";
import { BadRequestException, UnauthorizedException } from "@/lib/exceptions";
import { User } from "@prisma/client";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UsersService } from "../users/users.services";
import { mailService } from "@/lib/mail.service";

const ACCESS_TOKEN_EXPIRE_IN = 60 * 60;

export class AuthService {
  static async signUp(email: string, password: string) {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      throw new BadRequestException("User already exists");
    }

    const salt = bcrypt.genSaltSync();
    const hashedPassword = await bcrypt.hash(password, salt);

    await db.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
  }

  static createToken(user: User) {
    return jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: ACCESS_TOKEN_EXPIRE_IN,
    });
  }

  static async signIn(email: string, password: string) {
    const user = await UsersService.getByWithError(email);

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new UnauthorizedException("Wrong password");
    }

    const accessToken = AuthService.createToken(user);

    return accessToken;
  }

  static async forgotPassword(email: string) {
    const user = await UsersService.getByWithError(email);

    const accessToken = AuthService.createToken(user);

    await mailService.sendMail({
      to: user.email,
      subject: "Reset password",
      html: `<a href='https://airbnb-clone-nu-rouge.vercel.app/reset-password?token=${accessToken}'> Reset password </a>`,
    });
  }

  static async resetPassword(user: User, newPassword: string) {
    const isMatch = await bcrypt.compare(newPassword, user.password);

    if (isMatch) {
      throw new UnauthorizedException(
        "New password must be different from old password",
      );
    }

    const salt = bcrypt.genSaltSync();
    const hashedNewPassword = await bcrypt.hash(newPassword, salt);

    return db.user.update({
      where: {
        email: user.email,
      },
      data: {
        password: hashedNewPassword,
      },
    });
  }
}
