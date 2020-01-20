'use strict';
const fs = require('fs');
const util = require('util');

let readFilePromise = util.promisify(fs.readFile);
/**
 * @function - Error Handling Function
 * @param {object} err 
 */
function handleError(err) {
  throw err;
}
/**
 * @function - async function that gets data from file
 * @param {*} file 
 */
async function readFile(file){
  try {
    let data = await readFilePromise(file);
    let object = await JSON.parse(data.toString().trim());
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