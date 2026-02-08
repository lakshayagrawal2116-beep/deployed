import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
   

    const token = req.headers.token;

    if (!token) {
        return res.status(401).json({ success: false, message: "No token" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

   

    req.user = { id: decoded.id };

   

    next();
};

export default authMiddleware;
