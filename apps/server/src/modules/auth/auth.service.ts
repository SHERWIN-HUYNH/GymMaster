import { BadRequestException, UnauthorizedException } from "../../lib/exceptions";
import * as bcrypt from "bcrypt";
import { db } from "../../lib/db";

export class AuthService {
    static async signUp(email: string, password: string) {
      const user = await db.user.findUnique({
        where: {
          email
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
    static async getByWithError(email: string) {
      const user = await db.user.findUnique({
        where: {
          email,
        },
      });
      if (!user) {
        throw new BadRequestException("No user found");
      }
      return user;
    }
    // static createToken(user: User) {
    //   return jwt.sign({ userId: user.id }, JWT_SECRET, {
    //     expiresIn: ACCESS_TOKEN_EXPIRE_IN,
    //   });
    // }
    static async signIn(email: string, password: string) {
      const user = await AuthService.getByWithError(email);
  
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        throw new UnauthorizedException("Wrong password");
      }
  
      // const accessToken = AuthService.createToken(user);
  
      return 1111;
    }
  }