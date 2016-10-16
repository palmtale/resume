
'use strict';

/**
 *  The fake entry file.
 */

var http = require("http");
var server = http.createServer(function(req, res) {
    res.writeHeader(200, {'Content-Type': 'text/plain;charset=utf-8'});
    res.end("Hello, Welcome to Node.js world.");
});
var port = process.env.APP_PORT || 5000;
server.listen(port);