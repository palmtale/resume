
'use strict';

var path = require('path'),
    log4js = require('log4js'),
    KOA = require('koa'),
    koahbs  = require('koa-handlebars'),

    app = require('./context/app'),
    routers = require('./context/routers');

//Init app
var koa = KOA();

//Config app
log4js.configure(app.config.log4js, { cwd: app.config.log4js.cwd });

//koa.use(log4js.connectLogger(log4js.getLogger("http"), { level: 'auto' }));
//koa.use(routers);
koa.use(KOA.static(path.join(__dirname, 'public')));

koa.engine('.hbs', exphbs({defaultLayout: "default", extname: ".hbs"}));
koa.set('view engine', '.hbs');

//Start app
koa.listen(process.env.PORT || 5000);