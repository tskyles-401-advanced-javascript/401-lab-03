'use strict';

const fs = require('fs');
const file = `${__dirname}/data/person.json`;

fs.readFile(file, (err,data) => {
  if(err) throw err;
  console.log(data.toString().trim());
});