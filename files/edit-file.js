'use strict';

const reader = require('./lib/reader');
const file = `${__dirname}/data/person.json`;


reader.readerWithFilePromise(file)
  .then(data => console.log('promise from reader: ', data))
  .catch(err => {throw err;});


