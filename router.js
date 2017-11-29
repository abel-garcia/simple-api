const UserController = require('./app/controller/UserController.js');

/**
 * en este modulo se declaran todas las rutas del la app
 * @param {*} app 
 */
function router(app) {
    app.post('/api/user',UserController.post);
    app.get('/api/user',UserController.get);
    app.put('/api/user',UserController.put);
    app.delete('/api/user',UserController.delete);
}

module.exports =  router