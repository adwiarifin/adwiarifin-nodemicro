const jwt = require('jsonwebtoken');
const response = require('../lib/response');

module.exports = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null || token == undefined) {
        const result = response.json(undefined, response.UNAUTHORIZED)
        res.sendStatus(result.status).json(result);
        return;
    };

    const secret = process.env.JWT_SECRET;
    jwt.verify(token, secret, (err, data) => {
        if (err) {
            console.log('err', err);
            const result = response.json(undefined, response.FORBIDDEN);
            res.sendStatus(result.status).json(result);
            return;
        }

        req.user = data;

        next();
    });
}