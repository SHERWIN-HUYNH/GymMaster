"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const hono_1 = require("hono");
const zod_validator_1 = require("@hono/zod-validator");
const auth_dto_1 = require("./dtos/auth.dto");
const auth_service_1 = require("./auth.service");
const auth_1 = require("../../middlewares/auth");
exports.router = new hono_1.Hono();
exports.router
    .post("/sign-up", async (c) => {
    const { email, fullName, password } = await c.req.json();
    await auth_service_1.AuthService.signUp(email, fullName, password);
    return c.json({ message: "Sign up successfully!" });
})
    .post("/sign-in", async (c) => {
    const { email, password } = await c.req.json();
    const accessToken = await auth_service_1.AuthService.signIn(email, password);
    return c.json({ accessToken: accessToken });
})
    .post("/forgot-password", (0, zod_validator_1.zValidator)("json", auth_dto_1.forgotPasswordDto), async (c) => {
    const { email } = await c.req.json();
    await auth_service_1.AuthService.forgotPassword(email);
    return c.json({
        message: "Forgot password successfully! Please check your email",
        status: 200,
    });
})
    .post("/reset-password", auth_1.auth, async (c) => {
    const user = c.get("user");
    const { password } = await c.req.json();
    await auth_service_1.AuthService.resetPassword(user, password);
    return c.json({
        message: "Reset password successfully!",
        status: 200
    });
});
//# sourceMappingURL=auth.controller.js.map