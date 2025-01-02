import jwt from "jsonwebtoken"

export const generateToken = (userId, res) => { 
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.cookie("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: 604800000,
        sameSite: "strict",
    });

    return token;
}