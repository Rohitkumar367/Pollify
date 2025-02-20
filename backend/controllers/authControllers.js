import UserModel from '../models/UserModel.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" })
}

// sign up new user
export const registerUser = async (req, res) => {

    const { fullName, username, email, password, profileImageUrl } = req.body;

    // Validation: Check for missing fields
    if (!fullName || !username || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // Validation: Check username format
    // Allows alphanumeric characters and hyphens only
    const usernameRegex = /^[a-zA-Z0-9-]+$/;
    if (!usernameRegex.test(username)) {
        return res.status(400).json({
            message: "Invalid username. Only alphanumeric characters and hyphens are allowed. No spaces are permitted."
        });
    }

    try {
        // check if email already exists or not
        const existingUser = await UserModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // check if username already exists or not
        const existingUsername = await UserModel.findOne({ username });

        if (existingUsername) {
            return res.status(400).json({ message: "Username already exists" });
        }

        // create the user
        const user = await UserModel.create({
            fullName,
            username,
            email,
            password,
            profileImageUrl
        });

        res.status(201).json({
            _id: user._id,
            user,
            token: generateToken(user._id)
        })

    } catch (err) {
        res.status(500).json({message:"Error registering user", error: err.message})
    }
};


export const checkAuth = async (req, res) => {
    try {
        const user = await UserModel.findById(req.userId).select("-password");

        if (!user) {
            return res.status(400).json({ success: false, message: "User not found" });
        }

        res.status(200).json({
            success: true,
            user
        })

    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

