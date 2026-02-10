import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';

dotenv.config();

const dbUrl = process.env.DB_URL;
if (!dbUrl) {
    console.error("❌ DB_URL is not defined in environment variables!");
} else {
    // Log only the host part to be safe (e.g. ep-xyz.aws.neon.tech)
    const host = dbUrl.split('@')[1]?.split('/')[0];
    console.log(`🔌 Connecting to Neon DB at host: ${host || 'Unknown Host'}`);
}

export const sql = neon(dbUrl as string);
