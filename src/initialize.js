const fs = require('fs');
const exampleJSON = require('./example.json');

module.exports = (filename = "serveCollection.json") => {
  var jsonContent = JSON.stringify(exampleJSON); 
  fs.writeFile(filename, jsonContent, 'utf8', function (err) {
      if (err) {
          console.log("An error occured while writing JSON Object to File.");
          return console.log(err);
      }
      console.log("example JSON file has been created.");
  });
};