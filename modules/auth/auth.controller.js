const service = require('./auth.service');

const generateToken = async (req, res) => {
    const result = await service.generateToken();
    res.json(result);
}

const verifyToken = async (req, res) => {
    const { user } = req;
    const result = await service.verifyToken(user);
    res.json(result);
}

module.exports = {
    generateToken,
    verifyToken,
}