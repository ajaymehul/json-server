# mini-json-server

mini-json-server is minimal node.js app that serves json object locally for testing.

## Installation

Use npm to install mini-json-server.

```bash
npm install -g mini-json-server
```

## Usage
Create a JSON file which includes the objects you want to serve.

JSON file includes a "collection" key with a list of JSON objects to serve as values and a "port" (optional) to specify port. 
Name the keys inside "collection" with the route you want it served on. 

```JSON
{ 
  "port" : 5000,
  "collection" : { 
    "/route1" : {
      "key1" : "value1",
      "key2" : "value2",
      "key3" : "value3"
    },
    "/route2" : {
      "key1" : "value1",
      "key2" : "value2",
      "key3" : "value3"
    }
  }
}
```

Launch the application and pass the path of the JSON file to serve.
```bash
mini-json-server serverCollection.json
``` 
Use the following command to initialize an example JSON file.
```bash
mini-json-server init example.json
``` 
## Issues
For issues and suggestions, please open issues in the [repo](https://github.com/ajaymehul/mini-json-server)


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[ISC](https://choosealicense.com/licenses/isc/)
