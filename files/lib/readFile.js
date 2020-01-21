'use strict';
const fs = require('fs');
const util = require('util');
const handleError = require('./errorHandler');

let readFilePromise = util.promisify(fs.readFile);

/**
 * @function - async function that gets data from file
 * @param {*} file 
 */
async function readFile(file){
  try {
    let data = await readFilePromise(file);
    let object = await data.toString().trim();
    return object;
  }
  catch(err) {
    handleError(err);
  }
}
/**
 * @module readFile
 */
module.exports = readFile;