'use strict';

const reader = require('./lib/reader');
const file = `${__dirname}/data/person.json`;

function Object(data){
  this.firstName = data.firstName;
  this.lastName = data.lastName;
  this.hair = data.hair;
  this.favoriteFoods = data.favoriteFoods;
  this.married = data.married;
  this.kids = data.kids;
}

reader.readerWithFilePromise(file)
  .then(data => {
    data.firstName = 'bob';
    data.married = true;
    console.log(data);
  })
  .catch(err => {throw err;});

