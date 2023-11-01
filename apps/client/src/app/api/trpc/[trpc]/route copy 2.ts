import { appRouter } from "@repo/server/src/router";
import { createContext } from "@repo/server/src/context";
import { createNextApiHandler } from "@trpc/server/adapters/next";
import { NextApiHandler } from "next";

interface Handler {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (req: any, res: any): Promise<void | Response>;
}

// export API handler
const handler: Handler = async (req, res) => {
  const nextApiHandler: NextApiHandler = createNextApiHandler({
    router: appRouter,
    createContext,
    onError: process.env.NODE_ENV === "development"
      ? ({ error, path }) => {
        console.error(`❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`);
      }
      : undefined,
  });

  await nextApiHandler(req, res);
};

export { handler as GET, handler as POST };