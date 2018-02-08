/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  fs.readFile(filePath, (err, data) => {
    if(data) {
      data = data.toString();
      var i = data.indexOf('\n');
      data = data.slice(0,i);
    }
    callback(err, data);
  });
  //fs.readfile //returns string
  //check string for index of \n
  //return string.slice(0,index);
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  request(url, function (error, response, body) {
    response === undefined ? callback(error) : callback(error, response.statusCode);
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
