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
koaRoute.get(['/', '/summary'], function *() {
    yield this.render('summary', {
        'title': '',
        'subTitle': '',
    });
});
koaRoute.get('/track', function *() {
    yield this.render('track', {
        'title': '',
        'subTitle': '',
    });
});
koaRoute.get('/idea', function *() {
    yield this.render('idea', {
        'title': '',
        'subTitle': '',
    });
});
koaRoute.get('/contact', function *() {
    yield this.render('contact', {
        'title': '',
        'subTitle': '',
    });
});
koaRoute.get('/portfolio', function *() {
    yield this.render('summary', {
        'title': '',
        'subTitle': '',
    });
});
koaRoute.get('/ability', function *() {
    yield this.render('ability', {
        'title': '',
        'subTitle': '',
    });
});
/**
 * Local Module Define.
 */
module.exports = koaRoute;
