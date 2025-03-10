
import express from 'express'
import { checkAuth, registerUser, loginUser, getUserInfo } from '../controllers/authControllers.js'
import { verifyToken } from '../middleware/verifyToken.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/getUser', protect, getUserInfo);
router.get("/check-auth", verifyToken, checkAuth);

router.post('/register', registerUser);
router.post('/login', loginUser);



export default router;

