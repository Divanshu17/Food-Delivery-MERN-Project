import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' }, // Add role field with default value 'user'
});

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
