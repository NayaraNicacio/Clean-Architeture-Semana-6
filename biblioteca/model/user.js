import mongoose from 'mongoose'; // ES MODULE

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    username: { type: String },
    password: { type: String },
    watchList: { type: Array }
});

const User = mongoose.model('User', userSchema);

export default User; // ES Module
