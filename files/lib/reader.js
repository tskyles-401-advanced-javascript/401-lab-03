'use strict';

const fs = require('fs');
const util = require('util');
const file = `${__dirname}/data/person.json`;


const readerCallback = (file, callback) => {
  fs.readFile(file, (err,data) => {
    if(err) {callback(err);}
    else { callback(undefined, JSON.parse(data));}
  });
};

module.exports = { readerCallback };

