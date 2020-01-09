'use strict';
const fs = require('fs');

/**
 * Wraps fs.readFile, and processes as JSON restring, returning object to the calling function
 * @param {} file - fullpath to file
 * @param {} cb - Error first callback
 */
const readFile = (file, cb) => {
  fs.readFile(file, (error, data) => {
    if(error) {cb(error);}
    else {
      try {
        cb(null, JSON.parse(data.toString().trim()));
      }
      catch (error) {cb(error);}
    }
  });
};

/**
 * Wraps fs.writeFile, turns text into JSON when an object and using text if not. Returns data to the call back as either data or error.
 * @param file
 * @param text
 * @param cb
 */
const writeFile = (file, text, cb) => {
  let buffer = Buffer.from( typeof text === 'object'? JSON.stringify(text): text);
  fs.writeFile(file, buffer, cb);
};

module.exports = { readFile, writeFile };