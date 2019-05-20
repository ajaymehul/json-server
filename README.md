# mini-json-server

mini-json-server is minimal node.js app that serves json object locally for testing.

## Installation

Use npm to install mini-json-server.

```bash
npm install -g mini-json-server
```

## Usage
Create a JSON file which includes the objects you want to serve.

JSON file must include a "collection" key with a list of JSON objects to serve as values. 
Name the keys inside "collection" with the route you want it served on.

```JSON
{
  "collection" : { 
    "/greeting" : {
      "hi" : "hey turtle",
      "bye" : "bye turtle",
      "compliment" : "turtle rock"
    },
    "/lunch" : {
      "chinese" : "orange chicken",
      "indian" : "chickien Tikka",
      "american" : "cheeseburger"
    }
  }
}
```

Launch the application and pass the path of the JSON file.
```bash
mini-json-server serverCollection.json
``` 



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
