/*
 * Helpers File
 *
 */


var helpers = {}

helpers.checkNum = function(num, def){
	if(def == null){
		def = 0;
	}

	num = typeof(num) == 'number' ? num : def;
	return num;
};

helpers.checkObject = function(obj){
	finalobj = typeof(obj) == 'object' ? object : {};

	return finalobj;
};

helpers.checkString = function(str){
	finalstr = typeof(str) == 'string' ? str : '';

	return finalstr;
};

helpers.parseJsonToObject = function(str){
	try{
		var obj = JSON.parse(str);
		return obj;
	} catch(e){
		return {};
	}
}


module.exports = helpers;