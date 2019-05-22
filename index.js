#!/usr/bin/env node

const jsonServer = require('./src/json-server');
const initialize = require('./src/initialize');
const helpLog = require('./src/helpLog');

if(process.argv.length === 2){
  console.log('Pass JSON file as argument to host.');
  console.log('use "json-server --help" for example');
}
else if (process.argv[2] === "--help"){
    helpLog();
}
else if(process.argv[2] === "init"){
    if(process.argv.length === 4){
        initialize(process.argv[3]);
    }
    else{
        console.log('Pass filename as argument');
    }
}
else if(process.argv.length === 3){
    jsonServer(process.argv[2]);
}
else{
  console.log('Invalid arguments');
  console.log('use "json-server --help" for example');
}


