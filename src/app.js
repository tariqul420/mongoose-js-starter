import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import config from './config/config';
import { errorHandler } from './middleware/error.middleware';
import jwtRoutes from './routers/jwtRoutes';
import userRoutes from './routers/userRoutes';

// Express app initialization
const app = express();
app.use(express.json());

app.use(cors(config.cors));
app.use(cookieParser());
app.use(morgan('dev'));

// Routes
app.use('/api/user', userRoutes);
app.use('/api/jwt', jwtRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;
