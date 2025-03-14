
import jwt from 'jsonwebtoken'
import UserModel from '../models/UserModel.js'

export const protect = async(req, res, next)=>{

    let token = req.headers.authorization?.split(" ")[1];

    if(!token)
        return res.status(401).json({message: "Not authorized, no token"})

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded) 
            return res.status(401).json({message: "Unauthorized - invalid token"});

        req.user = await UserModel.findById(decoded.id).select('-password');

        next();
        
    } catch (error) {
        res.status(401).json({message: "Not authorized, token failed"})
    }
}
 