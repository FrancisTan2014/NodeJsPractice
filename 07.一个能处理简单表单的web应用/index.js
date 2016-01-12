var server = require('./server');
var router = require('./router');
var handler = require('./handler');

var handle = {};
handle['/'] = handler.start;
handle['/start'] = handler.start;
handle['/upload'] = handler.upload;
handle['/notfound'] = handler.notfound;

server.start(router, handle);