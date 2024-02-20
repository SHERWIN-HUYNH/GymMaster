"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAIL_TRANSPORT = exports.MAIL_FROM = exports.JWT_SECRET = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.JWT_SECRET = process.env.JWT_SECRET;
exports.MAIL_FROM = process.env.MAIL_FROM;
exports.MAIL_TRANSPORT = process.env.MAIL_TRANSPORT;
//# sourceMappingURL=constants.js.map