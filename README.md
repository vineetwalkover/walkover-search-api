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
syntax: searchClient.addIndex(name, type, callbackFunction)<br>
note: <br>
  1) type can be Simple_Search or Ecommerce<br>
  2) name should be in lowercase letters<br>
```
searchClient.addIndex('test', 'Simple_Search', function(data) {
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
syntax: searchClient.addObject(object, callbackFunction)<br>
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
syntax: searchClient.addObjects(objects, callbackFunction)<br>
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
method: deleteObject(objectID, callbackFunction)

```
searchClient.deleteObject(1, function(data) {
    console.log(data);
})

```

### Search 
This is the main function where search will be perform 

syntax: syntax: searchClient.addObjects(<query>, <callback function>, <parameters>)

query : Now here query will be the main query that we want the search to be done on.
parameters : It will be a json obejct that will contain following information :- 
```
  parameters = {
         'size': 15,
         'userToken': 'U986',
         'preFilter': "doc['type.keyword'].value=='U' && doc['_id'].value != 'U78'"
         'postFilter':
         })
```
  a) size : here size will define the total count of the result that will be returned matching 
    the query. It can take value between 0 -1000.
  b) userToken : This value is to pass when there is personalization. this denotes the user that used 
    the search.
  c) preFilter : The value of the prefilter is used to filter out the result to get the desired output.
  d) postFilter :

Example :- 
  ```
searchClient.search('vi', callback= function(data) {
     console.log(data)
    }, 
     parameters = {
         'size': 15,
         'userToken': 'U986',
         'preFilter': "doc['type.keyword'].value=='U' && doc['_id'].value != 'U78'"
         })

  ```
In this example 'vi' is the query whose search has to be done, callback function will display result and
in parameter size is of 15 that is only 15 results to be returned, userToken is 'U986' that  is search is 
done by this user whose id is 'U986', prefilter ensuring only that result containing only U in the id and
this own user is not included.

### Copy Configuration from one index to another
This function is used to copy configuratioed appiled on one index to another index.

syntax : copyIndexConfiguration(<sourceIndex>, <targetIndex>, <callback function>)

Here, 
sourceIndex : it is the index name from where the configuration is to be copied.
targetIndex : it is the index to which configuration is applied that is copied from sourceIndex.

Example,
```
searchClient.copyIndexConfiguration(testIndex1,textIndex2,function(result){
    console.log(result)
})

```

### Event 
This function is used to fire an event that will help in personalization.

syntax :  event(<type>, <parameters>, <callback function>)

Here, 
type : it denotes which type of event , e.g. 'click' event.
parameters : It will be a json object which will contain 2 requied fields :-
    a) objectClickedOn : This is the object id of the item that is clicked by the user.
    b) clickedByUser: This is the id of the used who clicked the item.

Example,

```
searchClient.event('clicked', parameters = {'objectClickedOn': 'U279','clickedByUser': 'U89'}, function(result){
    console.log(result);
})

```

