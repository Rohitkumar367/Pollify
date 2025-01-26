
import express from 'express'
import { checkAuth } from '../controllers/authControllers.js'
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.get("/check-auth", verifyToken, checkAuth);

export default router;

