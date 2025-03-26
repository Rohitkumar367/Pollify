
import express from 'express';
import { checkAuth, registerUser, loginUser, getUserInfo } from '../controllers/authControllers.js';
import { verifyToken } from '../middleware/verifyToken.js';
import { protect } from '../middleware/authMiddleware.js';
import upload from '../middleware/uploadMiddleware.js';

const router = express.Router();

router.get('/getUser', protect, getUserInfo); // in use
router.get("/check-auth", verifyToken, checkAuth); // not in use

router.post('/register', registerUser);
router.post('/login', loginUser);

router.post('/upload-image', upload.single('image'), (req,res)=>{

    if(!req.file){
        return res.status(400).json({message: "No file uploaded"});
    }

    const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

    res.status(200).json({imageUrl});
});


export default router;

