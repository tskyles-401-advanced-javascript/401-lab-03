'use strict';

const readFile = require('./files/lib/readFile');
const writeFile = require('./files/lib/writeFile');
const validator = require('./files/lib/validator');
const schema = require('./files/lib/schema');

let argv = process.argv;
let file = `${__dirname}/files/data/${argv[2]}`;
// use callback method to access file
// 1. read file from command line
// 2. edit data set and validate against schema
// 3. write the data to file
// 4. read file again
// 5. console.log results

// const editFile = () => {
//   return fsUsingCallback.readFile(file);
//   // .then(data => {
//   //   console.log(data);
//   // data.firstName = 'Bob';
//   // data.lastName = 'Smith';
//   // validator.isValid(schema, data)
//   //   .then
//   // });
// };

// editFile();



// const useCallbacks = cb => {

//   fsUsingCallback.readFile(file, (error, data) => {
//     if(error){
//       console.error(error);
//     }
//     else {
//       data.firstName = 'Bob';
//       data.lastName = 'Smith';

//       validator.isValid(schema, data, (error, result) => {
//         if(error){
//           console.error(error);
//         }
//         else {
//           fsUsingCallback.writeFile(file, result, (error, result) => {
//             if(error) {
//               console.error(error);
//             }
//             else {
//               fsUsingCallback.readFile(file, (error, changedData) => {
//                 cb(changedData);
//               });
//             }
//           });

//         }
//       });

//     };
//   }
// }

// useCallbacks((data) => console.log(data));

// fsUsingCallback.writeFile(file, data, (error, result) => {
//   if(error) {console.error(error);}
//   else {
//     fsUsingCallback.readFile(file, (error, changedData) => {
//       cb(changedData);
//     });
//   }
// });


// const readfilePromise = util.promisify(fs.readFile);






const errorHandler = (error) => {
  throw error;
};
// /**
//  * @function - async function that gets data from file
//  * @param {*} file 
//  */
// async function readFile(file){
//   try {
//     let data = await readfilePromise(file);
//     let objectData = await JSON.parse(data);
//     return objectData;
//   }
//   catch (error) {
//     errorHandler(error);
//   }
// }

/**
 * @function - async function that saves file after changes
 */
async function saveFile(){

  try {
    let data = await readFile(file);
    data.firstName = 'Travis';
    data.hair = { type: 'straight', color: 'brown' };
    data.lastName = 'Skyles';
    data.favoriteFoods = ['tacos', 'ice cream'];

    if(validator.isValid(schema, data)){
      writeFile(file, JSON.stringify(data), (error) => {
        if(error) throw error;
        console.log('The file was saved');
      });
    }
  }
  catch (error) {
    errorHandler(error);
  }
}
// readFile(file);
saveFile(file);

/**
 * @module - exports readFile and saveFile
 */
module.exports = saveFile;



