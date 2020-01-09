'use strict';

const fs = require('fs');
const util = require('util');

const readfilePromise = util.promisify(fs.readFile);

const errorHandler = (error) => {
  throw error;
};
/**
 * @function - async function that gets data from file
 * @param {*} file 
 */
async function readFileAsync(file){
  try {
    let data = await readfilePromise(file);
    let objectData = await JSON.parse(data.toString().trim());
    return objectData;
  }
  catch (error) {
    errorHandler(error);
  }
}