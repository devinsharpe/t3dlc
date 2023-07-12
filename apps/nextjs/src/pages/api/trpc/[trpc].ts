import { appRouter, createContext } from "@t3dlc/api";
import { createNextApiHandler } from "@trpc/server/adapters/next";

// export API handler
export default createNextApiHandler({
  router: appRouter,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  createContext,
});
