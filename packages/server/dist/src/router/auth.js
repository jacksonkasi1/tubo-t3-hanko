"use strict";
exports.__esModule = true;
exports.authRouter = void 0;
var trpc_1 = require("../trpc");
exports.authRouter = (0, trpc_1.router)({
    getSession: trpc_1.publicProcedure.query(function (_a) {
        var ctx = _a.ctx;
        return ctx.auth;
    }),
    getSecretMessage: trpc_1.protectedProcedure.query(function () {
        return "you can see this secret message!";
    })
});
