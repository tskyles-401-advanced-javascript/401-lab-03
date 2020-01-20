'use strict';

const fs = require('fs');
/**
 * Wraps fs.writeFile, turns text into JSON when an object and using text if not. Returns data to the call back as either data or error.
 * @param file
 * @param text
 * @param cb
 */
const writeFile = (file, text, cb) => {
  let buffer = Buffer.from( typeof text === 'object'? JSON.stringify(text): text);
  fs.writeFile(file, buffer, cb);
};
/**
 * @module writeFile
 */
module.exports = writeFile;