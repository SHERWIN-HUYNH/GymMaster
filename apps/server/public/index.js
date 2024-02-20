"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hono_1 = require("hono");
const node_server_1 = require("@hono/node-server");
const cors_1 = require("hono/cors");
const logger_1 = require("hono/logger");
const auth_controller_1 = require("./modules/auth/auth.controller");
const error_filter_1 = require("./lib/error-filter");
const app = new hono_1.Hono().basePath("/api");
app.use("*", (0, logger_1.logger)());
app.use("*", (0, cors_1.cors)({
    origin: [
        "http://localhost:5173",
        "https://gym-master-server.vercel.app",
    ],
    credentials: true,
}));
app.route("/", auth_controller_1.router);
app.notFound((c) => {
    return c.json({
        message: "Not found",
        statusCode: 404,
    }, 404);
});
app.onError(error_filter_1.errorFilter);
(0, node_server_1.serve)(app, () => {
    console.log("Server is running on http://localhost:3000");
});
//# sourceMappingURL=index.js.map