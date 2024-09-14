import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './Config/db.js';
import { router as userRoutes } from './routes/userRoutes.js';
import cors from 'cors';

dotenv.config();
connectDb();

const app = express();
app.use(express.json());

const port = process.env.PORT;

app.use(cors())

app.use('/api/user', userRoutes);

app.listen(port, (req, res) => {
    console.log('server is running at', port);
})
