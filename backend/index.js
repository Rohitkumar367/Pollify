
import express from 'express'
import authRoutes from './routes/authRoutes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import dotenv from 'dotenv'
dotenv.config()

// we can only connect to our database after dotnev configuration, because inside db.js we are using process.env
import { connectDB } from './config/db.js'
connectDB();

const app = express();
const PORT = process.env.PORT || 3000

app.use(cookieParser())// cookieParser extract cookies and makes them available in req.cookies

app.use(express.json());// express.json parses JSON payloads and makes them available in req.body

// frontend->3000 and backend->5000 so, cors allows us to make requests from different frontend to backend because browser blocks API requests from different origins
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

