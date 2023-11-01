"use strict";
exports.__esModule = true;
exports.appRouter = void 0;
var trpc_1 = require("../trpc");
var post_1 = require("./post");
var auth_1 = require("./auth");
var todo_1 = require("./todo");
exports.appRouter = (0, trpc_1.router)({
    post: post_1.postRouter,
    auth: auth_1.authRouter,
    todo: todo_1.todoRouter
});
