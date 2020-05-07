/*
 * File for all handlers
 *
 */


var handlers = {};

handlers.home = function(data, callback){
	finalData = "Home Page"
	code = 200;
	if(data.method !== 'GET'){
		finalData = "Error wrong method "+data.method;
		code = 400;
	}
	callback(code, "<h1>"+finalData+"<h1>");
};

handlers.ping = function(data, callback){
	finalData = "Successful Ping"
	code = 200;
	if(data.method !== 'GET'){
		finalData = "Error wrong method "+data.method;
		code = 400;
	}
	callback(code, "<h1>"+finalData+"<h1>");
};

handlers.notFound = function(data, callback){
	callback(404, "<h1>Could not find the path "+data.path+"<h1>");
}




module.exports = handlers;