import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';
import { join } from 'path';

config({
  path: '.env.local',
});

export default defineConfig({
  schema: './lib/db/schema.ts',
  out: './lib/db/migrations',
  dialect: 'sqlite',
  verbose: true,
  dbCredentials: {
    url: join(process.cwd(), 'sqlite.db'),
  },
});
