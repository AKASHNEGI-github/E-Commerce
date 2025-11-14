import express from 'express';
import cors from 'cors';
import path from "path";
import { fileURLToPath } from "url";

import 'dotenv/config';
import { connectDB } from "./config/db.js";
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

// Fix dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Express
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
connectDB();

// API Endpoints
app.use("/images", express.static(path.join(__dirname, "uploads")));
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

app.get("/", (req, res) => {
    res.send("API Working");
});

// Listen
app.listen(port, () => {
    console.log(`Server started on ${port}`);
});