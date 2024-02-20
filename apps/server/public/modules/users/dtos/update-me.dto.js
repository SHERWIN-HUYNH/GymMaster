"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMeDto = void 0;
const zod_1 = require("zod");
exports.updateMeDto = zod_1.z.object({
    fullName: zod_1.z.string({
        required_error: "Name is required",
    }),
    age: zod_1.z.number({
        required_error: "Age is required",
    }),
    avatar: zod_1.z.string({
        required_error: "Avatar is required",
    }),
    phone: zod_1.z.string({
        required_error: "Phone is required",
    }),
});
//# sourceMappingURL=update-me.dto.js.map