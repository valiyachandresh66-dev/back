import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const User = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ success: false, message: "Please login first" });
  }

  try {
    console.log('JWT_SECRET:', process.env.JWT_SECRET);
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};
