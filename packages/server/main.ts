import { prisma } from "@repo/db";
import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'
import { trpc } from '@elysiajs/trpc'

import {  appRouter } from './index'

const app = new Elysia()
    .use(cors())
    .get('/', () => 'Hello Elysia')
    .use(
        trpc(appRouter, {
            endpoint: '/api/trpc',
            createContext: () => ({
                prisma,
            })
        })
    )
    .listen(5000)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)