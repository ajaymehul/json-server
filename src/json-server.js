const fs = require('fs');
const routeGenerator = require('./routeGenerator');
const express = require('express');


module.exports = (jsonPath) => {
  console.log('\x1b]37m\x1b[42m%s\x1b[0m','hosting JSON...\n');
  const app = express();
  fs.readFile(jsonPath, (err,data) => {
    if(err) throw err;
    const json = JSON.parse(data);
    var PORT = 5000;
    if(json.hasOwnProperty('port')){
      PORT = json.port;
    }
    else{
      console.log('\x1b[37m\x1b[46m%s\x1b[0m', 'OPTIONAL', ' PORT not specfied. Serving on PORT 5000');
    }
    console.log('\x1b[44m\%s\x1b[0m', 'PORT', PORT.toString());
    if(!json.hasOwnProperty('collection')){
      console.log('\x1b[37m\x1b[41m%s\x1b[0m', 'ERR', ' No collection to host supplied. Exiting...');
      process.exit();
    }
    for(var bin in json.collection){
      routeGenerator(app, bin, json.collection[bin]);
    }
    
    app.listen(PORT);
  });
};

