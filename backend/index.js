
import express from 'express'
import authRoutes from './routes/authRoutes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import dotenv from 'dotenv'
dotenv.config()

// we can only connect to our database after dotnev connection, because inside db.js we are ussing process.env
import { connectDB } from './config/db.js'
connectDB();

const app = express();
const PORT = process.env.PORT || 5000

app.use(cookieParser())

app.use(express.json());

app.use(cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use("/api/auth", authRoutes);

app.get('/', (req, res)=>{
    res.send("Hello mrddroid")
})


app.listen(PORT, ()=>{
    console.log(`Server listening at http://localhost:${PORT}`);
})

