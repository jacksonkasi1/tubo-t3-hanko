import { prisma } from '@repo/db'
import * as trpcExpress from '@trpc/server/adapters/express'
import express from 'express'
import { expressHandler } from 'trpc-playground/handlers/express'
import { appRouter } from './src/router'

const runApp = async () => {
  const app = express()

  const trpcApiEndpoint = '/api/trpc'
  const playgroundEndpoint = '/api/trpc-playground'

  app.use(
    trpcApiEndpoint,
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext: () => ({
        prisma,
        auth: "auth"
      }),
    }),
  )

  app.use(
    playgroundEndpoint,
    await expressHandler({
      trpcApiEndpoint,
      playgroundEndpoint,
      router: appRouter
    }),
  )

  app.get("/", (req: express.Request, res: express.Response) => {
    res.send("hello")
  })

  app.listen(5000, () => {
    console.log('listening at http://localhost:5000')
  })
}

runApp()