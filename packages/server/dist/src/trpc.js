"use strict";
exports.__esModule = true;
exports.protectedProcedure = exports.publicProcedure = exports.router = void 0;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var server_1 = require("@trpc/server");
var superjson_1 = require("superjson");
var t = server_1.initTRPC.context().create({
    transformer: superjson_1["default"],
    errorFormatter: function (_a) {
        var shape = _a.shape;
        return shape;
    }
});
var isAuthed = t.middleware(function (_a) {
    var next = _a.next, ctx = _a.ctx;
    // todo: need to implement auth
    // if (!ctx.auth) {
    //   throw new TRPCError({ code: "UNAUTHORIZED", message: "Not authenticated" });
    // }
    return next({
        ctx: {
            auth: ctx.auth
        }
    });
});
exports.router = t.router;
exports.publicProcedure = t.procedure;
exports.protectedProcedure = t.procedure.use(isAuthed);
