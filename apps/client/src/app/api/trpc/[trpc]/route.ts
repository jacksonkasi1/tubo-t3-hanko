// import { appRouter, createContext } from "@repo/server";
// import { createNextApiHandler } from "@trpc/server/adapters/next";
// import { NextApiHandler } from "next";

// interface Handler {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   (req: any, res: any): Promise<void | Response>;
// }

// // export API handler
// const handler: Handler = async (req, res) => {
//   const nextApiHandler: NextApiHandler = createNextApiHandler({
//     router: appRouter,
//     createContext,
//     onError: process.env.NODE_ENV === "development"
//     ? ({ error, path }) => {
//       console.error(`❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`);
//     }
//     : undefined,
//   });

//   await nextApiHandler(req, res);
// };

// export { handler as GET, handler as POST };


import { appRouter } from "@repo/server/src/router";
import { createContext } from "@repo/server/src/context";
import { type NextResponse, type NextRequest } from "next/server";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch"

import { NextApiRequest, NextApiResponse } from 'next';
import { NextApiHandler } from 'next';
// import { env } from "@/env";

// const handler = (req: NextRequest) =>
// fetchRequestHandler({
//     endpoint: "/api/trpc",
//     req,
//     createContext: () =>  createContext({req: req as NextRequest}),
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


// const handler: NextApiHandler = async (req, res) => {
//   await fetchRequestHandler({
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     req: req as any,
//     createContext: () => createContext({ req , res}),
//     router: appRouter,
//     endpoint: `${env.SERVER_URL}/api/trpc`,
//     onError: process.env.NODE_ENV === "development"
//       ? ({ error, path }) => {
//         console.error(`❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`);
//       }
//       : undefined,
//   });
// };

// export { handler as GET, handler as POST };



const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: `/api/trpc`,
    req,
    router: appRouter,
    createContext: (): any => ({req}),
    onError:
      process.env.NODE_ENV === 'development'
        ? ({ path, error }) => {
            console.error(
              `❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`
            );
          }
        : undefined,
  });

  export { handler as GET, handler as POST };
