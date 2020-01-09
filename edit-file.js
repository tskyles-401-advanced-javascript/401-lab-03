'use strict';

const file = `${__dirname}/files/data/person.json`;
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
async function readFile(file){
  try {
    let data = await readfilePromise(file);
    let objectData = await JSON.parse(data);
    return objectData;
  }
  catch (error) {
    errorHandler(error);
  }
}

/**
 * @function - async function that saves file after changes
 */
async function saveFile(){

  const schema = {
    firstName: { type: 'string', required: true },
    lastName: { type: 'string', required: true },
    hair: { type: 'object', required: true },
    favoriteFoods: { type: 'array', required: true },
    married: { type: 'boolean', required: true },
    kids: { type: 'number', required: true },
  };

  try {
    let data = await readFile(file);
    data.firstName = 'Travis';
    data.hair = { type: 'straight', color: 'brown' };
    data.lastName = 'Skyles';
    data.favoriteFoods = ['tacos', 'ice cream'];

    if(validator.isValid(schema, data)){
      console.log(data);
      fs.writeFile(file, JSON.stringify(data), (error) => {
        if(error) throw error;
        console.log('The file was saved');
      });
    }
  }
  catch (error) {
    errorHandler(error);
  }
}
readFile(file);
saveFile(file);

/**
 * @module - exports readFile and saveFile
 */
module.exports = { readFile, saveFile };



