import { Pool, neonConfig } from "@neondatabase/serverless";

import { drizzle } from "drizzle-orm/neon-serverless";
import logger from "./utils/logger";
import schema from "./schema";

if (!process.env.VERCEL_ENV) {
  neonConfig.wsProxy = (host) => `${host}:5433/v1`;
  neonConfig.useSecureWebSocket = false;
  neonConfig.pipelineTLS = false;
  neonConfig.pipelineConnect = false;
}

const db = drizzle(
  new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    port: process.env.VERCEL_ENV ? undefined : 5433,
  }),
  {
    logger: process.env.PGLOGGING === "true" ? logger : false,
    schema,
  }
);

export default db;



export type DbClient = typeof db;
