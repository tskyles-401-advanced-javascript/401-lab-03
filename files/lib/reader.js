'use strict';

const fs = require('fs');
const util = require('util');


const readfilePromise = util.promisify(fs.readFile);
const readerWithFilePromise = (file) => {
  return readfilePromise(file)
    .then(data => JSON.parse(data))
    .catch(error => error);
};

module.exports = { readerWithFilePromise };

