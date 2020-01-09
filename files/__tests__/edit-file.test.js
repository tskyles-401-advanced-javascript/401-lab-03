'use strict';

jest.mock('fs');
const editFile = require('../../edit-file');

describe('file reader module', () => {
  const file = `${__dirname}/files/data/person.json`;

  it('returns data when given good file', async () => {
    try {
      let data = await editFile.readFile(file);
      expect(data).toBeDefined();
    }
    catch (error) {expect(error).not.toBeDefined();}
  });
  it('returns an object when given good file', async () => {
    try{
      let data = await editFile.readFile(file);
      let objectData = await JSON.parse(data);
      expect(typeof(objectData)).toBe('object');
    }
    catch (error) {expect(error).not.toBeDefined();}
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
  it('recieves data from reader module', () => {

  });
  it('successfully writes if data is valid', () => {

  });
  it('throws error if data recieved is not valid', () => {

  });
});