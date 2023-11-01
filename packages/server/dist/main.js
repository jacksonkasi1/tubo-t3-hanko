"use strict";
var _a, _b;
exports.__esModule = true;
var db_1 = require("@repo/db");
var elysia_1 = require("elysia");
var cors_1 = require("@elysiajs/cors");
var trpc_1 = require("@elysiajs/trpc");
var index_1 = require("./index");
var app = new elysia_1.Elysia()
    .use((0, cors_1.cors)())
    .get('/', function () { return 'Hello Elysia'; })
    .use((0, trpc_1.trpc)(index_1.appRouter, {
    endpoint: '/api/trpc',
    createContext: function () { return ({
        prisma: db_1.prisma
    }); }
}))
    .listen(5000);
console.log("\uD83E\uDD8A Elysia is running at ".concat((_a = app.server) === null || _a === void 0 ? void 0 : _a.hostname, ":").concat((_b = app.server) === null || _b === void 0 ? void 0 : _b.port));
