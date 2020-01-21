'use strict';

const fs = require('fs');

const readFile = require('./files/lib/readFile');
// const writeFile = require('./files/lib/writeFile');
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
    let object = JSON.parse(data);

    data.firstName = 'Travis';
    data.hair = { type: 'straight', color: 'brown' };
    data.lastName = 'Skyles';
    data.favoriteFoods = ['tacos', 'ice cream'];

    await validator.isValid(schema, object);


    fs.writeFile(file, JSON.stringify(object, null), async (err) => {
      console.log(err || object);
    });
  }
  catch (error) {
    handleError(error);
  }
}


/**
 * @module - exports readFile and saveFile
 */
module.exports = saveFile;



