'use strict';

const readFile = require('./files/lib/readFile');
const writeFile = require('./files/lib/writeFile');
const validator = require('./files/lib/validator');
const schema = require('./files/lib/schema');
const handleError = require('./files/lib/errorHandler');

let argv = process.argv;
let file = `${__dirname}/files/data/${argv[2]}`;

/**
 * @function - async function that saves file after changes
 */
async function saveFile(){

  try {
    let data = await readFile(file);
    data.firstName = 'Travis';
    data.hair = { type: 'straight', color: 'brown' };
    data.lastName = 'Skyles';
    data.favoriteFoods = ['tacos', 'ice cream'];

    if(validator.isValid(schema, data)){
      writeFile(file, JSON.stringify(data), (error) => {
        if(error) throw error;
        console.log('The file was saved');
      });
    }
  }
  catch (error) {
    handleError(error);
  }
}
saveFile(file);

/**
 * @module - exports readFile and saveFile
 */
module.exports = saveFile;



