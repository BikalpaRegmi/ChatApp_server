import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './Config/db.js';
import { router as userRoutes } from './routes/userRoutes.js';
import cors from 'cors';
import {router as chatRoutes} from './routes/chatRoutes.js'


dotenv.config();
connectDb();

const app = express();
app.use(express.json());

const port = process.env.PORT;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes);

app.listen(port, (req, res) => {
    console.log('server is running at', port);
})
