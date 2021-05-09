const jwt = require('jsonwebtoken');
const response = require('../../lib/response');

const generateToken = () => {
    const secret = process.env.JWT_SECRET;
    const ttl = Number(process.env.JWT_TTL);
    const token = jwt.sign({}, secret, { expiresIn: ttl });

    return response.json({ token });
}

const verifyToken = (user) => {
    return response.json({ user });
}

module.exports = {
    generateToken,
    verifyToken,
}