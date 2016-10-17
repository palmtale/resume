
'use strict';

/**
 * @author palmtale
 * @since 2016/10/16.
 */

/**
 * Module import as order: system, third-party, local
 */
var path = require('path'),

    log4js = require('log4js'),
    KOA = require('koa'),
    /*koaLogger = require('koa-logger'),*/
    koaStatic = require('koa-static'),
    koaHbs  = require('koa-handlebars'),

    app = require('./context/app'),
    routers = require('./context/routers');

/**
 * Pre-config on imported modules
 */
var koa = KOA();
/* koa.use(koaLogger());*/

log4js.configure(app.config.log4js, { cwd: app.config.log4js.cwd });
koa.use(log4js.connectLogger(log4js.getLogger("http"), { level: 'auto' }));

koa.use(koaStatic('public'));
koa.use(koaHbs({defaultLayout: "default", extname: ".hbs"}));
koa.use(routers);
//Start app
koa.listen(process.env.PORT || 5000);