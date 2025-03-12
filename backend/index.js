
import express from 'express'
import authRoutes from './routes/authRoutes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

import dotenv from 'dotenv'
dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// we can only connect to our database after dotenv configuration, because inside db.js we are using process.env
import { connectDB } from './config/db.js'
connectDB();

const app = express();
const PORT = process.env.PORT || 3000

app.use(cookieParser())// cookieParser extract cookies and makes them available in req.cookies

app.use(express.json());// express.json parses JSON payloads and makes them available in req.body

// frontend->3000 and backend->5000 SO, cors allows us to make requests from different frontend to backend because browser blocks API requests from different origins
app.use(cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));


// by default, express does not allow access to local files via HTTP. So, express.static() allow direct access to static files
app.use("/uploads", express.static(path.join(__dirname, "uploads")))


app.use("/api/auth", authRoutes);

app.get('/', (req, res)=>{
    res.send("Hello mrddroid")
})


app.listen(PORT, ()=>{
    console.log(`Server listening at http://localhost:${PORT}`);
})

