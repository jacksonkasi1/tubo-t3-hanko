"use strict";
exports.__esModule = true;
exports.todoInputSchema = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
var zod_1 = require("zod");
exports.todoInputSchema = zod_1.z.object({
    text: zod_1.z
        .string({
        required_error: "Text is required"
    })
        .min(1, "Text must be at least 1 character")
        .max(50, "Text must be less than 50 characters")
});
