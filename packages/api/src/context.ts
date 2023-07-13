import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next"
import db from "@t3dlc/db"
import { getAuth } from "@clerk/nextjs/server"
import { SignedInAuthObject, SignedOutAuthObject } from "@clerk/nextjs/api"

type AuthContextProps = {
  auth: SignedInAuthObject | SignedOutAuthObject
}

const createInnerTRPCContext = ({ auth }: AuthContextProps) => {
  return {
    auth,
    db,
  };
};

export const createContext = async (opts: trpcNext.CreateNextContextOptions) => {
  return await createInnerTRPCContext({ auth: getAuth(opts.req) });
};

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
