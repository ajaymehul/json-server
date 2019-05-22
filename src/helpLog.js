const exampleJSON = require('./example.json');

module.exports = () =>{
  console.log('run the following command to autocreate a JSON file for serving');
  console.log('mini-json-server init [name for json file]\n');
  console.log('run the following command to serve the JSON file');
  console.log('mini-json-server [filename]\n');
  console.log('format for JSON file:');
  var jsonContent = JSON.stringify(exampleJSON, null, 2);  
  console.log(jsonContent);


};