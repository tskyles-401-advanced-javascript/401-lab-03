'use strict';

const fs = require('fs');
const util = require('util');
const validator = require('./files/lib/validator');

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

/**
 * @function - async function that saves file after changes
 */
async function saveFileAsync(file, text){

  const schema = {
    firstName: { type: 'string', required: true },
    lastName: { type: 'string', required: true },
    hair: { type: 'object', required: true },
    favoriteFoods: { type: 'array', required: true },
    married: { type: 'boolean', required: true },
    kids: { type: 'number', required: true },
  };

  try {

    if(validator.isValid(schema, data)){
      let buffer = Buffer.from( typeof text === 'object'? JSON.stringify(text): text);
      fs.writeFile(file, buffer, (error) => {
        if(error) throw error;
        console.log('The file was saved');
      });
    }
  }
  catch (error) {
    errorHandler(error);
  }
}