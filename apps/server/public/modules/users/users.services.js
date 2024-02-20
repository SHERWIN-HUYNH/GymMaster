"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const db_1 = require("../../lib/db");
const exceptions_1 = require("../../lib/exceptions");
class UsersService {
    static async getByWithError(email) {
        const user = await db_1.db.user.findUnique({
            where: {
                email,
            },
        });
        if (!user) {
            throw new exceptions_1.BadRequestException("No user found");
        }
        return user;
    }
    static async updateBy(userId, data) {
        const user = await db_1.db.user.update({
            where: {
                id: userId,
            },
            data,
        });
        return user;
    }
}
exports.UsersService = UsersService;
//# sourceMappingURL=users.services.js.map