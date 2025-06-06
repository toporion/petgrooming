const UserModel = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        const profilePicture = req.file ? req.file.path : null
        const hashedPassword = await bcrypt.hash(String(password), 10);
        const newUser = new UserModel({
            ...req.body,
            password: hashedPassword,
            profilePicture
        });
        await newUser.save();
        res.status(201).json({ success: true, message: "User created successfully", data: newUser });

    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json({ message: "Users retrieved successfully",users });
    } catch (error) {
        console.error("Error retrieving users:", error);
        res.status(500).json({success:true, message: "Internal server error" ,users});
    }
}
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await UserModel.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully", data: user });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        if (req.file) {
            updatedData.profilePicture = req.file.path;
        }
        const user = await UserModel.findByIdAndUpdate(id, updatedData, { new: true });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User updated successfully", data: user });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await UserModel.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User retrieved successfully", data: user });
    } catch (error) {
        console.error("Error retrieving user by ID:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const isPasswordValid = await bcrypt.compare(String(password), user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" });
        }
        const jwtToken = jwt.sign(
            { id: user._id, email: user.email, role: user.role },
            process.env.TOKEN_SECRET,
            { expiresIn: '1h' }
        )
        res.status(200).json({
            success: true,
            message: "Login successful",
            jwtToken,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                profilePicture: user.profilePicture,
                role: user.role
            }
        });
    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

const getUserByEmail = async (req, res) => {
    try {
        const email = req.query.email;
        if (!email) {
            return res.status(400).json({ success: false, message: "Email is required" })
        }
        const user = await UserModel.findOne({ email })
        res.status(200).json({
            success: true,
            message: "User fetched successfully",
            user: {
                name: user.name,
                email: user.email,
                image: user.profilePicture,
            }
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        })
    }
}

const makeRole=async(req,res)=>{
    try{
        const {id}= req.params;
        const { role } = req.body;
        const newRole=await UserModel.findOneAndUpdate(
            { _id: id },
            { role: role },
            { new: true }
        );
        if (!newRole) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "Role updated successfully", data: newRole });
    }catch(error){
        console.error("Error making role:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = {
    createUser,
    getAllUsers,
    deleteUser,
    updateUser,
    getUserById,
    loginUser,
    getUserByEmail,
    makeRole
};