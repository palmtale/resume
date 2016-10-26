'use strict';

/**
 * @author palmtale
 * @since 2016/10/16.
 */

/**
 * Module import as order: system, third-party, local
 */
require('babel-polyfill');
var koaRoute = require('koa-router')();

/**
 * Pre-config on imported modules
 */
koaRoute.get('/', async (ctx, next) => {
    ctx.state = {
        title: 'Palmtale',
        subTitle: 'Summary'
    };
    await ctx.render('summary', {});
});
koaRoute.get('/track', async (ctx, next) => {
    ctx.state = {
        title: 'Palmtale',
        subTitle: 'Summary'
    };
    await ctx.render('track', {});
});
koaRoute.get('/idea', async (ctx, next) => {
    ctx.state = {
        title: 'Palmtale',
        subTitle: 'Summary'
    };
    await ctx.render('idea', {});
});
koaRoute.get('/contact', async (ctx, next) => {
    ctx.state = {
        title: 'Palmtale',
        subTitle: 'Summary'
    };
    await ctx.render('contact', {});
});
koaRoute.get('/portfolio', async (ctx, next) => {
    ctx.state = {
        title: 'Palmtale',
        subTitle: 'Summary'
    };
    await ctx.render('portfolio', {});
});
koaRoute.get('/ability', async (ctx, next) => {
    ctx.state = {
        title: 'Palmtale',
        subTitle: 'Summary'
    };
    await ctx.render('ability', {});
});
/**
 * Local Module Define.
 */
module.exports = koaRoute;