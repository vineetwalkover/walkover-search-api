# UniversalSearchEngine.WalkoverSearch

All URIs are relative to *https://search-engine-walkover.el.r.appspot.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addIndex**](WalkoverSearch.md#addIndex) | **POST** /addIndexByApi | Add Index By Api
[**addObject**](WalkoverSearch.md#addObject) | **POST** /add/{index_name} | This will add an object to the given index.
[**addObjects**](WalkoverSearch.md#addObjects) | **POST** /bulkadd/{index_name} | This will add an array of objects to the given index.
[**copyIndexConfig**](WalkoverSearch.md#copyIndexConfig) | **POST** /copyIndexConfig | Copy Index configuration from one index to another
[**deleteIndex**](WalkoverSearch.md#deleteIndex) | **DELETE** /deleteIndexByApi | Delete Index
[**deleteObject**](WalkoverSearch.md#deleteObject) | **DELETE** /delete/{index_name} | This will delete the object with given object id
[**generateEvent**](WalkoverSearch.md#generateEvent) | **POST** /event/{index_name} | This will generate an event.
[**getAllObjects**](WalkoverSearch.md#getAllObjects) | **POST** /getAllObjects | Get All objects stored in index
[**searchQuery**](WalkoverSearch.md#searchQuery) | **POST** /search/{index_name} | 


<a name="addIndex"></a>
# **addIndex**
> Object addIndex(name, type, API_KEY)

Add Index By Api

Add Index by Api, provide name and type for creating new index

### Example
```javascript
var UniversalSearchEngine = require('universal-search-engine-api');

var apiInstance = new UniversalSearchEngine.WalkoverSearch();

var name = "name_example"; // String | name of index to be created

var type = "type_example"; // String | type of index, should be Simple_Search or Ecommerce

var API_KEY = "API_KEY_example"; // String | API_KEY for authentication


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
    console.error(response.body)
  } else {
    console.log(data);
  }
};
apiInstance.addIndex(name, type, API_KEY, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of index to be created | 
 **type** | **String**| type of index, should be Simple_Search or Ecommerce | 
 **API_KEY** | **String**| API_KEY for authentication | 

### Return type

<a name="addObject"></a>
# **addObject**
> Object addObject(indexName, API_KEY, _object)

This will add an object to the given index.

It rquire a json object which we want to add.

### Example
```javascript
var UniversalSearchEngine = require('universal-search-engine-api');

var apiInstance = new UniversalSearchEngine.WalkoverSearch();

var indexName = "indexName_example"; // String | name of index

var API_KEY = "API_KEY_example"; // String | API_KEY for authentication

var _object = null; // Object | This is the single object to be add in index.
/*
  _object = {
    "objectID": 1,
    "title": "Sample Titile",
    "content": "Sample Content"
  }
*/

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
    console.error(response.body)
  } else {
    console.log(data);
  }
};
apiInstance.addObject(indexName, API_KEY, _object, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **indexName** | **String**| name of index | 
 **API_KEY** | **String**| API_KEY for authentication | 
 **_object** | [**Object**](Object.md)| This is the single object to be add in index. | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="addObjects"></a>
# **addObjects**
> Object addObjects(indexName, API_KEY, objectsList)

This will add an array of objects to the given index.

It rquire a json array of objects which we want to add.

### Example
```javascript
var UniversalSearchEngine = require('universal-search-engine-api');

var apiInstance = new UniversalSearchEngine.WalkoverSearch();

var indexName = "indexName_example"; // String | name of index

var API_KEY = "API_KEY_example"; // String | API_KEY for authentication

var objectsList = [new UniversalSearchEngine.[Object]()]; // [Object] | This is the single object to be add in index.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
    console.error(response.body)
  } else {
    console.log(data);
  }
};
apiInstance.addObjects(indexName, API_KEY, objectsList, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **indexName** | **String**| name of index | 
 **API_KEY** | **String**| API_KEY for authentication | 
 **objectsList** | **[Object]**| This is the single object to be add in index. | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="copyIndexConfig"></a>
# **copyIndexConfig**
> Object copyIndexConfig(API_KEY, src, dest)

Copy Index configuration from one index to another

Copy Index Configuration, provide src and dest for copying index configuration

### Example
```javascript
var UniversalSearchEngine = require('universal-search-engine-api');

var apiInstance = new UniversalSearchEngine.WalkoverSearch();

var API_KEY = "API_KEY_example"; // String | API_KEY for authentication

var src = "src_example"; // String | Source Index

var dest = "dest_example"; // String | Target Index


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
    console.error(response.body)
  } else {
    console.log(data);
  }
};
apiInstance.copyIndexConfig(API_KEY, src, dest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **API_KEY** | **String**| API_KEY for authentication | 
 **src** | **String**| Source Index | 
 **dest** | **String**| Target Index | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteIndex"></a>
# **deleteIndex**
> Object deleteIndex(index, API_KEY)

Delete Index

Delete Index, provide name

### Example
```javascript
var UniversalSearchEngine = require('universal-search-engine-api');

var apiInstance = new UniversalSearchEngine.WalkoverSearch();

var index = "index_example"; // String | name of index to be deleted

var API_KEY = "API_KEY_example"; // String | API_KEY for authentication


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
    console.error(response.body)
  } else {
    console.log(data);
  }
};
apiInstance.deleteIndex(index, API_KEY, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **index** | **String**| name of index to be deleted | 
 **API_KEY** | **String**| API_KEY for authentication | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteObject"></a>
# **deleteObject**
> Object deleteObject(indexName, API_KEY, objectID)

This will delete the object with given object id

this require an objectID of object to be deleted

### Example
```javascript
var UniversalSearchEngine = require('universal-search-engine-api');

var apiInstance = new UniversalSearchEngine.WalkoverSearch();

var indexName = "indexName_example"; // String | name of index

var API_KEY = "API_KEY_example"; // String | API_KEY for authentication

var objectID = "objectID_example"; // String | objectId of the object to be deleted


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
    console.error(response.body)
  } else {
    console.log(data);
  }
};
apiInstance.deleteObject(indexName, API_KEY, objectID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **indexName** | **String**| name of index | 
 **API_KEY** | **String**| API_KEY for authentication | 
 **objectID** | **String**| objectId of the object to be deleted | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="generateEvent"></a>
# **generateEvent**
> Object generateEvent(indexName, API_KEY, type, _object)

This will generate an event.

event type should be provided and it shoulb be click.

### Example
```javascript
var UniversalSearchEngine = require('universal-search-engine-api');

var apiInstance = new UniversalSearchEngine.WalkoverSearch();

var indexName = "indexName_example"; // String | name of index

var API_KEY = "API_KEY_example"; // String | API_KEY for authentication

var type = "type_example"; // String | type of the event

var _object = new UniversalSearchEngine.Object1(); // Object1 | This is the single object to be add in index.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
    console.error(response.body)
  } else {
    console.log(data);
  }
};
apiInstance.generateEvent(indexName, API_KEY, type, _object, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **indexName** | **String**| name of index | 
 **API_KEY** | **String**| API_KEY for authentication | 
 **type** | **String**| type of the event | 
 **_object** | [**Object1**](Object1.md)| This is the single object to be add in index. | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAllObjects"></a>
# **getAllObjects**
> Object getAllObjects(index, API_KEY)

Get All objects stored in index

Get All objects stored in index, limit is 1000

### Example
```javascript
var UniversalSearchEngine = require('universal-search-engine-api');

var apiInstance = new UniversalSearchEngine.WalkoverSearch();

var index = "index_example"; // String | 

var API_KEY = "API_KEY_example"; // String | API_KEY for authentication


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
    console.error(response.body)
  } else {
    console.log(data);
  }
};
apiInstance.getAllObjects(index, API_KEY, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **index** | **String**|  | 
 **API_KEY** | **String**| API_KEY for authentication | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="searchQuery"></a>
# **searchQuery**
> Object searchQuery(indexName, query, API_KEY, opts)



Returns a list of stuff

### Example
```javascript
var UniversalSearchEngine = require('universal-search-engine-api');

var apiInstance = new UniversalSearchEngine.WalkoverSearch();

var indexName = "indexName_example"; // String | name of index

var query = "query_example"; // String | Query to be searched

var API_KEY = "API_KEY_example"; // String | API KEY for authentication

var opts = { 
  'size': 56, // Number | maximum number of results to be returned
  'userToken': 56, // Number | userToken for personalization
  'searchParameters': new UniversalSearchEngine.SearchParameters() // SearchParameters | The user to create.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
    console.error(response.body)
  } else {
    console.log(data);
  }
};
apiInstance.searchQuery(indexName, query, API_KEY, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **indexName** | **String**| name of index | 
 **query** | **String**| Query to be searched | 
 **API_KEY** | **String**| API KEY for authentication | 
 **size** | **Number**| maximum number of results to be returned | [optional] 
 **userToken** | **Number**| userToken for personalization | [optional] 
 **searchParameters** | [**SearchParameters**](SearchParameters.md)| The user to create. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

