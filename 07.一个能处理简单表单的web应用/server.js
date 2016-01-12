var http = require('http');
var url = require('url');
var port = process.env.port || 1337;

function start(router, handle) {
    function onRequest(req, res) {
        console.log('Server started.');

        var pathname = url.parse(req.url).pathname;
        router.route(pathname, handle, res);
    }

    http.createServer(onRequest).listen(port);
}

exports.start = start;