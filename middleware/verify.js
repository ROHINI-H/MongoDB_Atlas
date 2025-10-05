import jwt from "jsonwebtoken";
import UserModel from "../models/User.model.js";

export function verifyToken(req,res,next) {
    if(
        req.header &&
        req.headers.authorization &&
        req.headers.authorization.split(' ')[0] === "JWT"
    ) {
        jwt.verify(req.headers.authorization.split(' ')[1], 
        'SECRETKEY',
    function(err, verifiedToken) {
        if(err) {
            return res.status(403).json({message: "TOKEN IS INVALID"})
        }
        console.log(verifiedToken, "verifiedToken");
        UserModel.findById(verifiedToken.id)
        .then((user)=>{
            req.user = user;
            next();
        })
    })
    } else {
        return res.status(404).json({message: "TOKEN NOT FOUND"})
    }
}