const user = require('./user.controller');

module.exports = (app) => {
    app.get('/user', user.index);
    app.post('/user', user.store);
    app.get('/user/:id', user.show);
    app.put('/user/:id', user.update);
    app.delete('/user/:id', user.destroy);
}