const user = require('./user.controller');
const authMiddleware = require('../../middlewares/authorization');

module.exports = (app) => {
    app.use(authMiddleware);

    app.get('/user', user.index);
    app.post('/user', user.store);
    app.get('/user/:id', user.show);
    app.put('/user/:id', user.update);
    app.delete('/user/:id', user.destroy);
}