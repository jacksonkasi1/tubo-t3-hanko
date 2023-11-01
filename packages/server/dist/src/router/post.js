"use strict";
exports.__esModule = true;
exports.postRouter = void 0;
var trpc_1 = require("../trpc");
var zod_1 = require("zod");
exports.postRouter = (0, trpc_1.router)({
    all: trpc_1.publicProcedure.query(function (_a) {
        var ctx = _a.ctx;
        return ctx.prisma.post.findMany();
    }),
    byId: trpc_1.publicProcedure.input(zod_1.z.string()).query(function (_a) {
        var ctx = _a.ctx, input = _a.input;
        return ctx.prisma.post.findFirst({ where: { id: input } });
    }),
    create: trpc_1.protectedProcedure
        .input(zod_1.z.object({ title: zod_1.z.string(), content: zod_1.z.string() }))
        .mutation(function (_a) {
        var ctx = _a.ctx, input = _a.input;
        return ctx.prisma.post.create({ data: input });
    })
});
