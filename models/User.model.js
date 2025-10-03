import mongoose from "mongoose";

// creating Schema
const userSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String
});

// creating model
const UserModel = mongoose.model('Users', userSchema);

export default UserModel;