
import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    fullName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    profileImageUrl: {type: String, default: null},
    bookmarkedPolls: [{type: mongoose.Schema.Types.ObjectId, ref: "Poll"}] // foreign key-like behavior, another collection -> Poll
}, {timestamps: true});

// Hash password before saving
UserSchema.pre('save', async function(next) {
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

// ComparePasswords custom method creation
UserSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
}

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;

