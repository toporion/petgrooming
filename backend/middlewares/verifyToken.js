const jwt = require('jsonwebtoken');
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    console.log('Received Token:', token); // 👈 Log the token
    console.log('Token Secret:', process.env.TOKEN_SECRET); // 👈 Log the secret
    if (!token) {
        return res.status(401).json({ message: "Access token is missing" });
    }
  const decoded=jwt.verify(token,process.env.TOKEN_SECRET)
    if (!decoded) {
        return res.status(403).json({ message: "Invalid access token" });
    }
    req.user = decoded; // Attach the decoded user information to the request object
    next();
}

module.exports = authenticateToken;