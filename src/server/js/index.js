
'use strict';

/**
 * @author palmtale
 * @since 2016/10/16.
 */

/**
 * Module import as order: system, third-party, local
 */
const path = require('path');
const co = require("co");
const KOA = require('koa');
const router = require('koa-router')();
const views = require('koa-views');
const convert = require('koa-convert');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');
const statics = require('koa-static');
const handlebars = require('handlebars');
const layouts = require('handlebars-layouts');

// const app = require('./context/app');
const routes = require('./context/routers');
/**
 * Pre-config on imported modules
 */
var koa = new KOA();
/* koa.use(koaLogger());*/

// log4js.configure(app.config.log4js, { cwd: app.config.log4js.cwd });
// koa.use(log4js.connectLogger(log4js.getLogger("http"), { level: 'auto' }));
// logger
koa.use( async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

koa.use(convert(bodyparser));
koa.use(convert(json()));
koa.use(convert(logger()));
koa.use(convert(statics('public')));
koa.use(views('views', {
    extension: 'hbs',
    map: { hbs: handlebars },
    options: {
        defaultLayout: "default",
        helpers: {
            uppercase: (str) => str.toUpperCase()
        },
        partials: {
            before: '../partials/before',
            after: '../partials/after',
            header: '../partials/header',
            footer: '../partials/footer',
        }
    }
}));

router.use('/', routes.routes(), routes.allowedMethods());
koa.use(router.routes(), router.allowedMethods());
// response

koa.on('error', function(err, ctx){
    console.log(err);
    log.error('server error', err, ctx);
});
//Start app
koa.listen(process.env.PORT || 5000);
// module.exports = koa;