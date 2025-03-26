
import express from 'express'
import {protect} from '../middleware/authMiddleware.js'
import {createPoll} from '../controllers/pollControllers.js'

const router = express.Router();

router.post('/create', protect, createPoll);

export default router;