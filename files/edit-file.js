'use strict';

const reader = require('./lib/reader');
const file = `${__dirname}/data/person.json`;


reader.readerCallback(file, (err, data) => {
  if(err) {throw err;}
  console.log('callback from reader: ', data);
});

