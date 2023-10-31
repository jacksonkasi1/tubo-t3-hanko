
import { appRouter } from "@repo/server";
import { createContext } from "@repo/server";
import { type NextRequest } from "next/server";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch"


const handler = (req: NextRequest) =>
fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => createContext({req}),
    onError:
    process.env.NODE_ENV === "development"
      ? ({ path, error }) => {
          console.error(
            `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
          );
        }
      : undefined,
  })

export { handler as GET, handler as POST }