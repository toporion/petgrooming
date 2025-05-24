const mongoose = require('mongoose');

// Define the User schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: '', // Optional: Default to an empty string if no profile picture is provided
    },
    role: {
        type: String,
        enum: ['user', 'admin','groomer'], // Optional: Define roles
        default: 'user',
    },
}, {
    timestamps: true, // Automatically add createdAt and updatedAt fields
});

// Create the User model
const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;