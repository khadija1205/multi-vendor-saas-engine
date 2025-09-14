import Redis from "ioredis";

const client = new Redis(process.env.REDIS_DATABASE_URI!);

// const redis = new Redis({
//     host: process.env.REDIS_HOST || '127.0.0.1',
//     port: Number(process.env.REDIS_PORT) || 6379,
//     password: process.env.REDIS_PASSWORD,
// });

export default client;
