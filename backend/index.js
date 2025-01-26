
import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

dotenv.config()
const app = express();
const PORT = 5000;

app.use(cors());
app.use(cookieParser())
app.use(express.json());

app.get('/', (req, res)=>{
    res.send("Hello mrddroid")
})

app.use("/api/auth", authRoutes);

app.listen(PORT, ()=>{
    console.log(`Server listening at http://localhost:${PORT}`);
})

