const routeAuth = require('../modules/auth/auth.route');
const routeUser = require('../modules/user/user.route');

module.exports = (app) => {
    routeAuth(app);
    routeUser(app);
}