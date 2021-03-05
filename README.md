# universal-search-engine-api

UniversalSearchEngine - JavaScript client for universal-search-engine-api
universal search engine api


## Installation

### For [Node.js](https://nodejs.org/)

#### npm



Then install it via:

```shell
npm i universal-search-engine-api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your universal-search-engine-api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('universal-search-engine-api')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/vineetwalkover/walkover-search-api.git
then install it via:

```shell
    npm i universal-search-engine-api --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var UniversalSearchEngine = require('universal-search-engine-api');

var api = new UniversalSearchEngine.WalkoverSearch()

var name = "name_example"; // {String} name of index to be created

var type = "type_example"; // {String} type of index, should be Simple_Search or Ecommerce

var API_KEY = "API_KEY_example"; // {String} API_KEY for authentication


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
    console.error(response.body);
  } else {
    console.log(data);
  }
};
api.addIndex(name, type, API_KEY, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://search-engine-walkover.el.r.appspot.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*UniversalSearchEngine.WalkoverSearch* | [**addIndex**](docs/WalkoverSearch.md#addIndex) | **POST** /addIndexByApi | Add Index By Api
*UniversalSearchEngine.WalkoverSearch* | [**addObject**](docs/WalkoverSearch.md#addObject) | **POST** /add/{index_name} | This will add an object to the given index.
*UniversalSearchEngine.WalkoverSearch* | [**addObjects**](docs/WalkoverSearch.md#addObjects) | **POST** /bulkadd/{index_name} | This will add an array of objects to the given index.
*UniversalSearchEngine.WalkoverSearch* | [**copyIndexConfig**](docs/WalkoverSearch.md#copyIndexConfig) | **POST** /copyIndexConfig | Copy Index configuration from one index to another
*UniversalSearchEngine.WalkoverSearch* | [**deleteIndex**](docs/WalkoverSearch.md#deleteIndex) | **DELETE** /deleteIndexByApi | Delete Index
*UniversalSearchEngine.WalkoverSearch* | [**deleteObject**](docs/WalkoverSearch.md#deleteObject) | **DELETE** /delete/{index_name} | This will delete the object with given object id
*UniversalSearchEngine.WalkoverSearch* | [**generateEvent**](docs/WalkoverSearch.md#generateEvent) | **POST** /event/{index_name} | This will generate an event.
*UniversalSearchEngine.WalkoverSearch* | [**getAllObjects**](docs/WalkoverSearch.md#getAllObjects) | **POST** /getAllObjects | Get All objects stored in index
*UniversalSearchEngine.WalkoverSearch* | [**searchQuery**](docs/WalkoverSearch.md#searchQuery) | **POST** /search/{index_name} | 


## Documentation for Models

 - [UniversalSearchEngine.ModelObject](docs/ModelObject.md)
 - [UniversalSearchEngine.Object1](docs/Object1.md)
 - [UniversalSearchEngine.SearchParameters](docs/SearchParameters.md)


## Documentation for Authorization

 All endpoints do not require authorization.

