import express from 'express';
import authRoutes from './routes/auth.js';

const app = express();
app.use(express.json());
app.use("/api/routes", authRoutes);

export default app;