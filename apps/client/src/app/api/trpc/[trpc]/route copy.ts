
import { appRouter } from "@repo/server";
import { createContext } from "@repo/server";
// import { NextResponse, type NextRequest } from "next/server";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch"

import { NextApiRequest, NextApiResponse } from 'next';
import { NextApiHandler } from 'next';

// const handler = (req: NextRequest) =>
// fetchRequestHandler({
//     endpoint: "/api/trpc",
//     req,
//     createContext: () =>  createContext({ req }),
//     router: appRouter,
//     onError:
//     process.env.NODE_ENV === "development"
//       ? ({ path, error }) => {
//           console.error(
//             `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
//           );
//         }
//       : undefined,
//   })

// export { handler as GET, handler as POST }


const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  await fetchRequestHandler({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    req: req as any,
    createContext: () => createContext({ req , res}),
    router: appRouter,
    endpoint: "/api/trpc",
    onError: process.env.NODE_ENV === "development"
      ? ({ error, path }) => {
        console.error(`❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`);
      }
      : undefined,
  });
};

export { handler as GET, handler as POST };