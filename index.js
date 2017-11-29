const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const CookieParser = require('cookie-parser');
const Cors = require('cors');
const Router = require('./router.js');

App.use(Cors());
App.use(BodyParser.json());
App.use(BodyParser.urlencoded({ extended: false }));
App.use(CookieParser());

Router(App);

App.listen('3000',function(){
    console.log("app corriendo en el puerto 3000")
});