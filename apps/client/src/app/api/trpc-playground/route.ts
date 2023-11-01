// pages/api/trpc-playground.ts
import { NextApiHandler } from 'next'
import { appRouter } from '@repo/server/src/router'
import { nextHandler } from 'trpc-playground/handlers/next'

const setupHandler = nextHandler({
  router: appRouter,
  trpcApiEndpoint: '/api/trpc',
  playgroundEndpoint: '/api/trpc-playground',
  // Uncomment this if you're using superjson
  // request: {
  //   superjson: true,
  // },
})

const handler: NextApiHandler = async (req, res) => {
  try {
    // Ensure that setupHandler is awaited and returns a function
    const playgroundHandler = await setupHandler

    // Ensure that the handler is invoked properly with the request and response objects
    await playgroundHandler(req, res)
  } catch (error) {
    // Handle any errors that may occur during execution
    console.error('Error in playground handler:', error)
  }
}

export { handler as GET, handler as POST };
