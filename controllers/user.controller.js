import UserModel from "../models/User.model.js";
import bcrypt from "bcrypt";

export async function register(req, res) {
    try {
        const { fullName, email, password } = req.body;
        const data = await UserModel.findOne({ email });
        if (data) {
            return res.status(409).json({ "Message": "User Already exists" });
        } else {
            const newUser = await UserModel.create({
                email,
                fullName,
                password: bcrypt.hashSync(password, 10)
            });
            return res.status(201).json({ "Message": "User created successfully" })
        }
    } catch (err) {
        return res.status(500).json({ "Message": "Server error", err })
    }
}

export async function login(req, res) {
    try {
        const { email, password } = req.body;
        const data = await UserModel.findOne({ email });
        if (data) {
            let validPassword = bcrypt.compareSync(password, data.password);
            if (!validPassword) {
                return res.status(403).json({ "Message": "Invalid Password" });
            }
            // JWT token can be created here if needed
            res.status(200).json({
                user: {
                    email: data.email,
                    fullName: data.fullName,
                },
            })
            // accesstoken JWT token
        } else {
            return res.status(404).json({ "Message": "User doesn't exist" });
        }
    } catch (err) {
        return res.status(500).json({ "Message": "Server error", err })
    }
}