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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelObject', 'model/Object1', 'model/SearchParameters', 'api/WalkoverSearch'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/ModelObject'), require('./model/Object1'), require('./model/SearchParameters'), require('./api/WalkoverSearch'));
  }
}(function(ApiClient, ModelObject, Object1, SearchParameters, WalkoverSearch) {
  'use strict';

  /**
   * universal_search_engine_api.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var UniversalSearchEngine = require('index'); // See note below*.
   * var xxxSvc = new UniversalSearchEngine.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new UniversalSearchEngine.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new UniversalSearchEngine.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new UniversalSearchEngine.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.1
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The ModelObject model constructor.
     * @property {module:model/ModelObject}
     */
    ModelObject: ModelObject,
    /**
     * The Object1 model constructor.
     * @property {module:model/Object1}
     */
    Object1: Object1,
    /**
     * The SearchParameters model constructor.
     * @property {module:model/SearchParameters}
     */
    SearchParameters: SearchParameters,
    /**
     * The WalkoverSearch service constructor.
     * @property {module:api/WalkoverSearch}
     */
    WalkoverSearch: WalkoverSearch
  };

  return exports;
}));
