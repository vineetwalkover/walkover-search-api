# walkover-search-api

## Installation
```
npm i universal-search-engine-api
```

## Example Code

### Initialize Client
```
const searchEngine = require('universal-search-engine-api')
searchClient = new searchEngine.WalkoverSearch(<apiKey>)
```

### Create Index
syntax: searchClient.addIndex(name, type, callback function)<br>
note: <br>
  1) type can be Simple_Search or Ecommerce<br>
  2) name should be in lowercase letters<br>
```
searchClient.createIndex('test', 'Simple_Search', function(data) {
    console.log(data)
})
```

### Add Data
first initialize index<br>
syntax: searchClient.initIndex(name)<br>
```
searchClient.initIndex('test')
```

#### Method 1) addObject:
syntax: searchClient.addObject(object, callback function)<br>
object should be a dictionary<br>
```
object = {
    "objectID": "1",
    "title": "This is a sample object",
    "content": "this is content from sample object"
}

searchClient.addObject(object, function(data){
    console.log(data)
})
```
note: objectId will be created if not provided, but it is recommended to provide one<br>

#### Method 2) addObjects:
syntax: searchClient.addObjects(objects, callback function)<br>
objects should be a list of dictionary<br>
```

objects = [
    {
        "objectID": "1",
        "title": "This is a sample object",
        "content": "this is content from sample object"
    },
    {
        "objectID": "2",
        "title": "Another Sample object",
        "content": "this is content from sample object"
    }
]
searchClient.addObjects(objects, function(data) {
    console.log(data)
})

```

### Delete Data
first initialize index<br>
```
searchClient.initIndex('test')
```
method: deleteObject(objectID, callback function)

```
searchClient.deleteObject(1, function(data) {
    console.log(data);
})

```

