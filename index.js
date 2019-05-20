#!/usr/bin/env node

const jsonServer = require('./src/json-server');

if(process.argv.length === 2){
  console.log('Pass JSON file as argument to host.');
  console.log('use "json-server --help" for example');
}
else if(process.argv[2] === "--help"){
  console.log('help will arrive');
}
else if(process.argv.length === 3){
  console.log('\x1b]37m\x1b[42m%s\x1b[0m','hosting JSON...\n');
  jsonServer(process.argv[2]);
}
else{
  console.log('Invalid arguments');
  console.log('use "json-server --help" for example');
}


