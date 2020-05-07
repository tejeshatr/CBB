/*
 * Primary file for the webstie
 *
 */

var http = require('http');
var url = require('url');
var stringDecoder = require('string_decoder').StringDecoder;
var helpers = require('lib/helpers');
var handlers = require('lib/handlers');

var httpServer = http.createServer(function(req, res){
	mainServer(req, res);
});


mainServer = function(req, res){
	var parsedUrl = url.parse(req.url, true);
	var path = parsedUrl.pathname;
	var trimmedPath = path.replace(/^\/+|\/+$/g, '');

	var queryStringObject = parsedUrl.query;
	var method = req.method;
	var headers = req.headers;
		var decoder = new StringDecoder('utf-8');
	var buff = '';
	req.on('data', function(data){
		buff += decoder.write(data);
	});
	req.on('end', function(){
		buff += decoder.end();

		var handler = typeof(router[trimmedPath]) !== 'undefined' ? router[trimmedPath] : handlers.notFound;

		var data = {
			'path': trimmedPath,
			'query': queryStringObject,
			'headers': headers,
			'method': method,
			'payload': helpers.parseJsonToObject(buff)
		};

		handler(data, function(statusCode, returnData){
			statusCode = helpers.checknum(statusCode, 200);

			res.setHeader('content-type', 'html');
			res.writeHead(statusCode);
			res.end(dataString);

			console.log("Sent status code:", statusCode);
		});

	};
};

httpServer.listen(3000, function(){
	console.log("The server is listening on port 3000");
});

var router = {
	'notFound' : handlers.notFound,
	'ping' : handlers.ping
};