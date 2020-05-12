/*
 * File for all handlers
 *
 */

 var files = require('./files');


var handlers = {};

var errmsg = "<h1>Oops! Something wrong happen</h1>"

handlers.home = function(data, callback){
	finalData = "Home Page"
	code = 200;
	if(data.method !== 'GET'){
		finalData = "Error wrong method "+data.method;
		code = 400;
		callback(400, finalData);
	}
	else{
		fs.read('assets', 'home.html', function(err, data){
			if(!err && data){
				callback(200, data);
			}
			else{
				callback(500, errmsg);
			}
		});
	}
};

handlers.posts = function(data, callback){
	finalData = "Home Page"
	code = 200;
	if(data.method !== 'GET'){
		finalData = "Error wrong method "+data.method;
		code = 400;
		callback(400, finalData);
	}
	else{
		fs.read('assets', 'posts.html', function(err, data){
			if(!err && data){
				callback(200, data);
			}
			else{
				callback(500, errmsg);
			}
		});
	}
};

handlers.contact = function(data, callback){
	finalData = "Home Page"
	code = 200;
	if(data.method !== 'GET'){
		finalData = "Error wrong method "+data.method;
		code = 400;
		callback(400, finalData);
	}
	else{
		fs.read('assets', 'contact.html', function(err, data){
			if(!err && data){
				callback(200, data);
			}
			else{
				callback(500, errmsg);
			}
		});
	}
};

handlers.about = function(data, callback){
	finalData = "Home Page"
	code = 200;
	if(data.method !== 'GET'){
		finalData = "Error wrong method "+data.method;
		code = 400;
		callback(400, finalData);
	}
	else{
		fs.read('assets', 'about.html', function(err, data){
			if(!err && data){
				callback(200, data);
			}
			else{
				callback(500, errmsg);
			}
		});
	}
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