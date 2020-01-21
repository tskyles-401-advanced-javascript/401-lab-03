'use strict';

jest.mock('fs');
const editFile = require('../../edit-file');
const readFile = require('../lib/readFile');
// const writeFile = require('../lib/writeFile');
const saveFile = require('../../edit-file');

describe('file reader module', () => {

  it('returns data when given good file', async () => {
    const file = `${__dirname}/files/data/person.json`;
    let data = await readFile(file);
    expect(data).toBeDefined();
  });
  it('returns a string when given good file', async () => {
    let file = `${__dirname}/files/data/person.json`;
    let data = await readFile(file);
    expect(typeof data).toBe('string');
  });

  it('returns error when given a bad file', async () => {
    const file = `${__dirname}/files/data/bad.json`;
    try {
      let data = await editFile.readFile(file);
      expect(data).not.toBeDefined();
    }
    catch (error) {expect(error).toBeDefined();}
  });
});

describe('file writer module', () => {
  it('recieves data from reader module', async () => {
    let file = `${__dirname}/files/data/person.json`;

    try {
      let data = saveFile(file);
      expect(data).toBeTruthy();
    }
    catch (error) {expect(error).not.toBeDefined();}
  });
  it('successfully writes if data is valid', async () => {
    let file = `${__dirname}/../../data/person.json`;

    try {
      saveFile(file);
    }
    catch (error) {expect(error).not.toBeDefined();}

  });
  it('throws error if data recieved is not valid', () => {
    let file = `${__dirname}/../../data/bad.json`;

    try {
      expect(saveFile(file)).not.toBeDefined();
    }
    catch (error) {expect(error).toBeDefined();}
    
  });
});