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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.UniversalSearchEngine);
  }
}(this, function(expect, UniversalSearchEngine) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('SearchParameters', function() {
      beforeEach(function() {
        instance = new UniversalSearchEngine.SearchParameters();
      });

      it('should create an instance of SearchParameters', function() {
        // TODO: update the code to test SearchParameters
        expect(instance).to.be.a(UniversalSearchEngine.SearchParameters);
      });

      it('should have the property preFilter (base name: "preFilter")', function() {
        // TODO: update the code to test the property preFilter
        expect(instance).to.have.property('preFilter');
        // expect(instance.preFilter).to.be(expectedValueLiteral);
      });

      it('should have the property postFilters (base name: "postFilters")', function() {
        // TODO: update the code to test the property postFilters
        expect(instance).to.have.property('postFilters');
        // expect(instance.postFilters).to.be(expectedValueLiteral);
      });

    });
  });

}));