'use strict';

/**
 * @author palmtale
 * @since 2016/10/16.
 */

/**
 * Module import as order: system, third-party, local
 */
var koaRoute = require('koa-power-router');

/**
 * Pre-config on imported modules
 */
koaRoute.get('/', function *() {
    yield this.render('index', {
        'title': '',
        'subTitle': '',
    });
});

/**
 * Local Module Define.
 */
module.exports = koaRoute;
