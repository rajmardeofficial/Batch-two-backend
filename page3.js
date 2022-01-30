const os = require("os");
const fileSystem = require("fs");

//using os module from node.js
// console.log(os.type());

// let text = 'My name is .......'

// function writeFile(){
//     fileSystem.writeFileSync('./sample.txt', text)
// }

// function readFile(){
//     const data = fileSystem.readFileSync('./sample.txt')

//     console.log(data.toString());
// }

// writeFile()

// readFile()

//single threaded operation

// synchronous/blocking/sequntial/serial

// function readContentSync() {
//   // first operation
//   console.log("file reading started");
//   const data = fileSystem.readFileSync("./sample.txt");
//   console.log("file reading finished");
//   console.log(data.toString());

//   //second operation
//   console.log("Calculation started");
//   const calculation = 12346541236546132456 * 234135456456453163;
//   console.log("calculation finished");
//   console.log(calculation);
// }

// readContentSync();


// multithreded opration

// Asynchronous/non-blocking/parallel/non-sequential
function readContentAsync() {
  // first operation

  console.log("file reading started");

  // readFile
  // -1. first parameter: path of the file
  //  2. second parameter: callback function
  fileSystem.readFile("./sample.txt", (error, data) => {
    console.log("file reding finished");
    console.log(data.toString);
  });

  // second operation

  console.log("calculation started");
  const calculation = 12346541236546132456 * 234135456456453163;
  console.log("calculation finished");
  console.log(calculation);
}

readContentAsync();
