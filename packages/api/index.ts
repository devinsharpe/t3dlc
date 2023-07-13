import { exampleRouter } from "./src/routers/example";
import { createTRPCRouter } from "./src/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
});

export { createContext } from "./src/context";
export type { Context } from "./src/context"
// export type definition of API
export type AppRouter = typeof appRouter;
