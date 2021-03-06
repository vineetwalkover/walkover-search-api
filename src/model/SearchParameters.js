/*
 * universal search engine
 * universal search engine api
 *
 * OpenAPI spec version: 2.0.1
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.UniversalSearchEngine) {
      root.UniversalSearchEngine = {};
    }
    root.UniversalSearchEngine.SearchParameters = factory(root.UniversalSearchEngine.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SearchParameters model module.
   * @module model/SearchParameters
   * @version 2.0.1
   */

  /**
   * Constructs a new <code>SearchParameters</code>.
   * @alias module:model/SearchParameters
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>SearchParameters</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchParameters} obj Optional instance to populate.
   * @return {module:model/SearchParameters} The populated <code>SearchParameters</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('preFilter'))
        obj.preFilter = ApiClient.convertToType(data['preFilter'], 'String');
      if (data.hasOwnProperty('postFilters'))
        obj.postFilters = ApiClient.convertToType(data['postFilters'], Object);
    }
    return obj;
  }

  /**
   * @member {String} preFilter
   */
  exports.prototype.preFilter = undefined;

  /**
   * a dictionary of key, value where key is category name, and value is array of accepted filters
   * @member {Object} postFilters
   */
  exports.prototype.postFilters = undefined;


  return exports;

}));
