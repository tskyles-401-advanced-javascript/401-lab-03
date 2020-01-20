'use strict';

jest.mock('fs');
const editFile = require('../../edit-file');
const readFile = require('../lib/readFile');

describe('file reader module', () => {

  it('returns data when given good file', async () => {
    const file = '../data/person.json';
    let data = await readFile(file);
    expect(data).toBeDefined();
  });
  it('returns an object when given good file', async () => {
    let file = `${__dirname}/files/data/person.json`;

    try {
      let data = await editFile.readFile(file);
      expect(typeof(data)).toBe('object');
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
  it('recieves data from reader module', async () => {
    let file = `${__dirname}/../../data/person.json`;

    try {
      let data = await editFile.readFile(file);
      expect(editFile.writeFile(data)).toBeTruthy();
    }
    catch (error) {expect(error).toBeFalsy();}

  });
  it('successfully writes if data is valid', () => {

  });
  it('throws error if data recieved is not valid', () => {

  });
});