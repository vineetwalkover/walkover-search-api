/*
 * universal search engine
 * universal search engine api
 *
 * OpenAPI spec version: 1.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.18
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Object1', 'model/SearchParameters'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Object1'), require('../model/SearchParameters'));
  } else {
    // Browser globals (root is window)
    if (!root.UniversalSearchEngine) {
      root.UniversalSearchEngine = {};
    }
    root.UniversalSearchEngine.WalkoverSearch = factory(root.UniversalSearchEngine.ApiClient, root.UniversalSearchEngine.Object1, root.UniversalSearchEngine.SearchParameters);
  }
}(this, function(ApiClient, Object1, SearchParameters) {
  'use strict';

  /**
   * Default service.
   * @module api/WalkoverSearch
   * @version 1.0.1
   */

  /**
   * Constructs a new WalkoverSearch. 
   * @alias module:api/WalkoverSearch
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addIndex operation.
     * @callback module:api/WalkoverSearch~addIndexCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Index By Api
     * Add Index by Api, provide name and type for creating new index
     * @param {String} name name of index to be created
     * @param {String} type type of index, should be Simple_Search or Ecommerce
     * @param {String} API_KEY API_KEY for authentication
     * @param {module:api/WalkoverSearch~addIndexCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.addIndex = function(name, type, API_KEY, callback) {
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling addIndex");
      }

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling addIndex");
      }

      // verify the required parameter 'API_KEY' is set
      if (API_KEY === undefined || API_KEY === null) {
        throw new Error("Missing the required parameter 'API_KEY' when calling addIndex");
      }


      var pathParams = {
      };
      var queryParams = {
        'name': name,
        'type': type,
        'API_KEY': API_KEY,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = Object;

      return this.apiClient.callApi(
        '/addIndexByApi', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addObject operation.
     * @callback module:api/WalkoverSearch~addObjectCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This will add an object to the given index.
     * It rquire a json object which we want to add.
     * @param {String} indexName name of index
     * @param {String} API_KEY API_KEY for authentication
     * @param {Object} _object This is the single object to be add in index.
     * @param {module:api/WalkoverSearch~addObjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.addObject = function(indexName, API_KEY, _object, callback) {
      var postBody = _object;

      // verify the required parameter 'indexName' is set
      if (indexName === undefined || indexName === null) {
        throw new Error("Missing the required parameter 'indexName' when calling addObject");
      }

      // verify the required parameter 'API_KEY' is set
      if (API_KEY === undefined || API_KEY === null) {
        throw new Error("Missing the required parameter 'API_KEY' when calling addObject");
      }

      // verify the required parameter '_object' is set
      if (_object === undefined || _object === null) {
        throw new Error("Missing the required parameter '_object' when calling addObject");
      }


      var pathParams = {
        'index_name': indexName
      };
      var queryParams = {
        'API_KEY': API_KEY,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = Object;

      return this.apiClient.callApi(
        '/add/{index_name}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addObjects operation.
     * @callback module:api/WalkoverSearch~addObjectsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This will add an array of objects to the given index.
     * It rquire a json array of objects which we want to add.
     * @param {String} indexName name of index
     * @param {String} API_KEY API_KEY for authentication
     * @param {Array.<module:model/Object>} objectsList This is the single object to be add in index.
     * @param {module:api/WalkoverSearch~addObjectsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.addObjects = function(indexName, API_KEY, objectsList, callback) {
      var postBody = objectsList;

      // verify the required parameter 'indexName' is set
      if (indexName === undefined || indexName === null) {
        throw new Error("Missing the required parameter 'indexName' when calling addObjects");
      }

      // verify the required parameter 'API_KEY' is set
      if (API_KEY === undefined || API_KEY === null) {
        throw new Error("Missing the required parameter 'API_KEY' when calling addObjects");
      }

      // verify the required parameter 'objectsList' is set
      if (objectsList === undefined || objectsList === null) {
        throw new Error("Missing the required parameter 'objectsList' when calling addObjects");
      }


      var pathParams = {
        'index_name': indexName
      };
      var queryParams = {
        'API_KEY': API_KEY,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = Object;

      return this.apiClient.callApi(
        '/bulkadd/{index_name}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the copyIndexConfig operation.
     * @callback module:api/WalkoverSearch~copyIndexConfigCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Copy Index configuration from one index to another
     * Copy Index Configuration, provide src and dest for copying index configuration
     * @param {String} API_KEY API_KEY for authentication
     * @param {String} src Source Index
     * @param {String} dest Target Index
     * @param {module:api/WalkoverSearch~copyIndexConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.copyIndexConfig = function(API_KEY, src, dest, callback) {
      var postBody = null;

      // verify the required parameter 'API_KEY' is set
      if (API_KEY === undefined || API_KEY === null) {
        throw new Error("Missing the required parameter 'API_KEY' when calling copyIndexConfig");
      }

      // verify the required parameter 'src' is set
      if (src === undefined || src === null) {
        throw new Error("Missing the required parameter 'src' when calling copyIndexConfig");
      }

      // verify the required parameter 'dest' is set
      if (dest === undefined || dest === null) {
        throw new Error("Missing the required parameter 'dest' when calling copyIndexConfig");
      }


      var pathParams = {
      };
      var queryParams = {
        'API_KEY': API_KEY,
        'src': src,
        'dest': dest,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = Object;

      return this.apiClient.callApi(
        '/copyIndexConfig', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteIndex operation.
     * @callback module:api/WalkoverSearch~deleteIndexCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Index
     * Delete Index, provide name
     * @param {String} index name of index to be deleted
     * @param {String} API_KEY API_KEY for authentication
     * @param {module:api/WalkoverSearch~deleteIndexCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.deleteIndex = function(index, API_KEY, callback) {
      var postBody = null;

      // verify the required parameter 'index' is set
      if (index === undefined || index === null) {
        throw new Error("Missing the required parameter 'index' when calling deleteIndex");
      }

      // verify the required parameter 'API_KEY' is set
      if (API_KEY === undefined || API_KEY === null) {
        throw new Error("Missing the required parameter 'API_KEY' when calling deleteIndex");
      }


      var pathParams = {
      };
      var queryParams = {
        'index': index,
        'API_KEY': API_KEY,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = Object;

      return this.apiClient.callApi(
        '/deleteIndexByApi', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteObject operation.
     * @callback module:api/WalkoverSearch~deleteObjectCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This will delete the object with given object id
     * this require an objectID of object to be deleted
     * @param {String} indexName name of index
     * @param {String} API_KEY API_KEY for authentication
     * @param {String} objectID objectId of the object to be deleted
     * @param {module:api/WalkoverSearch~deleteObjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.deleteObject = function(indexName, API_KEY, objectID, callback) {
      var postBody = null;

      // verify the required parameter 'indexName' is set
      if (indexName === undefined || indexName === null) {
        throw new Error("Missing the required parameter 'indexName' when calling deleteObject");
      }

      // verify the required parameter 'API_KEY' is set
      if (API_KEY === undefined || API_KEY === null) {
        throw new Error("Missing the required parameter 'API_KEY' when calling deleteObject");
      }

      // verify the required parameter 'objectID' is set
      if (objectID === undefined || objectID === null) {
        throw new Error("Missing the required parameter 'objectID' when calling deleteObject");
      }


      var pathParams = {
        'index_name': indexName
      };
      var queryParams = {
        'API_KEY': API_KEY,
        'objectID': objectID,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = Object;

      return this.apiClient.callApi(
        '/delete/{index_name}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the generateEvent operation.
     * @callback module:api/WalkoverSearch~generateEventCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This will generate an event.
     * event type should be provided and it shoulb be click.
     * @param {String} indexName name of index
     * @param {String} API_KEY API_KEY for authentication
     * @param {String} type type of the event
     * @param {module:model/Object1} _object This is the single object to be add in index.
     * @param {module:api/WalkoverSearch~generateEventCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.generateEvent = function(indexName, API_KEY, type, _object, callback) {
      var postBody = _object;

      // verify the required parameter 'indexName' is set
      if (indexName === undefined || indexName === null) {
        throw new Error("Missing the required parameter 'indexName' when calling generateEvent");
      }

      // verify the required parameter 'API_KEY' is set
      if (API_KEY === undefined || API_KEY === null) {
        throw new Error("Missing the required parameter 'API_KEY' when calling generateEvent");
      }

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling generateEvent");
      }

      // verify the required parameter '_object' is set
      if (_object === undefined || _object === null) {
        throw new Error("Missing the required parameter '_object' when calling generateEvent");
      }


      var pathParams = {
        'index_name': indexName
      };
      var queryParams = {
        'API_KEY': API_KEY,
        'type': type,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = Object;

      return this.apiClient.callApi(
        '/event/{index_name}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllObjects operation.
     * @callback module:api/WalkoverSearch~getAllObjectsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All objects stored in index
     * Get All objects stored in index, limit is 1000
     * @param {String} index 
     * @param {String} API_KEY API_KEY for authentication
     * @param {module:api/WalkoverSearch~getAllObjectsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getAllObjects = function(index, API_KEY, callback) {
      var postBody = null;

      // verify the required parameter 'index' is set
      if (index === undefined || index === null) {
        throw new Error("Missing the required parameter 'index' when calling getAllObjects");
      }

      // verify the required parameter 'API_KEY' is set
      if (API_KEY === undefined || API_KEY === null) {
        throw new Error("Missing the required parameter 'API_KEY' when calling getAllObjects");
      }


      var pathParams = {
      };
      var queryParams = {
        'index': index,
        'API_KEY': API_KEY,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = Object;

      return this.apiClient.callApi(
        '/getAllObjects', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the searchQuery operation.
     * @callback module:api/WalkoverSearch~searchQueryCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of stuff
     * @param {String} indexName name of index
     * @param {String} query Query to be searched
     * @param {String} API_KEY API KEY for authentication
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size maximum number of results to be returned
     * @param {Number} opts.userToken userToken for personalization
     * @param {module:model/SearchParameters} opts.searchParameters The user to create.
     * @param {module:api/WalkoverSearch~searchQueryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.searchQuery = function(indexName, query, API_KEY, opts, callback) {
      opts = opts || {};
      var postBody = opts['searchParameters'];

      // verify the required parameter 'indexName' is set
      if (indexName === undefined || indexName === null) {
        throw new Error("Missing the required parameter 'indexName' when calling searchQuery");
      }

      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling searchQuery");
      }

      // verify the required parameter 'API_KEY' is set
      if (API_KEY === undefined || API_KEY === null) {
        throw new Error("Missing the required parameter 'API_KEY' when calling searchQuery");
      }


      var pathParams = {
        'index_name': indexName
      };
      var queryParams = {
        'query': query,
        'API_KEY': API_KEY,
        'size': opts['size'],
        'userToken': opts['userToken'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = Object;

      return this.apiClient.callApi(
        '/search/{index_name}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
