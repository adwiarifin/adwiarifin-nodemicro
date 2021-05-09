const auth = require('./auth.controller');
const authMiddleware = require('../../middlewares/authorization');

module.exports = (app) => {
    app.get('/auth/token', authMiddleware, auth.verifyToken);
    app.post('/auth/token', auth.generateToken);
}