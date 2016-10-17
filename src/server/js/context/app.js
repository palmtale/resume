'use strict';

/**
 * @author palmtale
 * @since 2016/10/16.
 */

/**
 * Module import as order: system, third-party, local
 */
var fs = require('fs'),

    Logger = require('log4js'),

    config = require('../data/config.json');

/**
 * Pre-config on imported modules
 */
var logger = Logger.getLogger("club-wxs");

/**
 * Local Module Define.
 */
var App = function () {

    var app = {
        config: config
    };
    return app;
};

module.exports = new App();