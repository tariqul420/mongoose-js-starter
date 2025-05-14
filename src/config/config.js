import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  cors: {
    origin: ['http://localhost:5173'],
    credentials: true,
  },
  mongodb: {
    uri: process.env.MONGODB_DATABASE_URL || '',
    password: process.env.MONGODB_DATABASE_PASSWORD || '',
  },
  cookie: {
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET || '',
  },
};

export default config;
