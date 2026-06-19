const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registeruser = async(username,email,password)=>{
        const existingUser = await User.findOne({ email });
        if(existingUser) {
            throw new Error("User already exists");
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            username,
            email,
            password: hashedPassword,
        });

        return user;
}

module.exports = { registeruser };