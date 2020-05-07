/*
 * Primary file for the webstie
 *
 */

var http = require('http');
var url = require('url');
var stringDecoder = require('string_decoder').StringDecoder;

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

	console.log(path);
	console.log(queryStringObject);
	console.log(method);
	console.log(headers);
}

httpServer.listen(3000, function(){
	console.log("The server is listening on port 3000");
})