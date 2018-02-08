/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  // TODO
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data.toString());
      }
    });
  })

  // promise()
  .then(function(result){
    var index = result.indexOf('\n');
    result = result.slice(0,index);
    return result;
  });

};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
  return new Promise(function (resolve, reject) {
    request(url, function (error, response, body){
      if(error) {
        reject(error);
      } else {
        if(response) {
          resolve(response);
        }
      }
    });
  })
  .then(function (result) {
    return result.statusCode;
  });
  // request(url, function (error, response, body) {
  //   response === undefined ? callback(error) : callback(error, response.statusCode);
  // });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
