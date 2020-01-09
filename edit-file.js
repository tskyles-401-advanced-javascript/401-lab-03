'use strict';

const file = `${__dirname}/files/data/person.json`;
const util = require('util');
const fs = require('fs');

let readFilePromise = util.promisify(fs.readFile);

readFilePromise(file)
  .then(data =>  console.log(JSON.parse(data)))
  .catch(err => { throw err;});
