"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const constants_1 = require("../../lib/constants");
const db_1 = require("../../lib/db");
const exceptions_1 = require("../../lib/exceptions");
const bcrypt = __importStar(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const users_services_1 = require("../users/users.services");
const mail_service_1 = require("../../lib/mail.service");
const ACCESS_TOKEN_EXPIRE_IN = 60 * 60;
class AuthService {
    static async signUp(email, fullName, password) {
        const user = await db_1.db.user.findUnique({
            where: {
                email,
            },
        });
        if (user) {
            throw new exceptions_1.BadRequestException("User already exists");
        }
        const salt = bcrypt.genSaltSync();
        const hashedPassword = await bcrypt.hash(password, salt);
        await db_1.db.user.create({
            data: {
                email,
                fullName,
                password: hashedPassword,
            },
        });
    }
    static createToken(user) {
        return jsonwebtoken_1.default.sign({ userId: user.id }, constants_1.JWT_SECRET, {
            expiresIn: ACCESS_TOKEN_EXPIRE_IN,
        });
    }
    static async signIn(email, password) {
        const user = await users_services_1.UsersService.getByWithError(email);
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new exceptions_1.UnauthorizedException("Wrong password");
        }
        const accessToken = AuthService.createToken(user);
        return accessToken;
    }
    static async forgotPassword(email) {
        const user = await users_services_1.UsersService.getByWithError(email);
        const accessToken = AuthService.createToken(user);
        await mail_service_1.mailService.sendMail({
            to: user.email,
            subject: "Reset password",
            html: `<a href='https://gym-master-server.vercel.app'> Reset password </a>`,
        });
    }
    static async resetPassword(user, newPassword) {
        const isMatch = await bcrypt.compare(newPassword, user.password);
        if (isMatch) {
            throw new exceptions_1.UnauthorizedException("New password must be different from old password");
        }
        const salt = bcrypt.genSaltSync();
        const hashedNewPassword = await bcrypt.hash(newPassword, salt);
        return db_1.db.user.update({
            where: {
                email: user.email,
            },
            data: {
                password: hashedNewPassword,
            },
        });
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map