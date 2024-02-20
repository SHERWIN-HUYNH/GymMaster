"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const hono_1 = require("hono");
const auth_1 = require("../../middlewares/auth");
const zod_validator_1 = require("@hono/zod-validator");
const update_me_dto_1 = require("./dtos/update-me.dto");
const users_services_1 = require("./users.services");
exports.router = new hono_1.Hono();
exports.router
    .get("/me", auth_1.auth, async (c) => {
    const user = c.get("user");
    delete user.password;
    return c.json({
        data: user,
        status: 200,
    });
})
    .put("/me", auth_1.auth, (0, zod_validator_1.zValidator)("json", update_me_dto_1.updateMeDto), async (c) => {
    const data = await c.req.json();
    const user = c.get("user");
    const updatedMe = await users_services_1.UsersService.updateBy(user.id, data);
    return c.json({
        data: updatedMe,
        status: 200,
    });
});
//# sourceMappingURL=users.controller.js.map