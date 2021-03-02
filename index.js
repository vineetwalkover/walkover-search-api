const request = require('request');

class WalkoverSearch {
    /**
     * @param {string} apiKey The api key.
     * @constructs
     */
    constructor(apiKey) {
        this.apiKey = apiKey 
        this.path = 'https://search-engine-walkover.el.r.appspot.com/'
    }

    /**
     * @param {string} indexName name of index.
     * @memberof WalkoverSearch
     */
    initIndex(indexName) {
        this.indexName = indexName
    }

    /**
     * @param {string} name The name of index.
     * @param {string} type The type of index, it can be Simple_Search or Ecommerce.
     * @param {Function} callback(data) a callback function which accepts one argument.
     * @memberof WalkoverSearch
     */
    addIndex(name, type, callback = null) {
        var options = {
            'method': 'POST',
            'url': this.path + 'addIndexByApi?name='+ name +'&type=' + type+'&API_KEY='+this.apiKey           
        };
        request(options, function (error, response) {
            if (error) throw new Error(error);
            if (callback != null)
                callback(response.body)
        });
    }

    /**
     * @param {string} sourceIndex The name of source index.
     * @param {string} targetIndex The name of target index.
     * @param {Function} callback(data) a callback function which accepts one argument.
     * @memberof WalkoverSearch
     */
    copyIndexConfiguration(sourceIndex, targetIndex, callback = null) {
        var options = {
            'method': 'POST',
            'url': this.path+'copyIndexConfig?src='+ sourceIndex +'&dest=' + targetIndex+'&API_KEY='+this.apiKey
        };
        request(options, function (error, response) {
            if (error) throw new Error(error);
            if (callback != null)
                callback(response.body)
        });
    }

    /**
     * @param {string} index The name of index .
     * @param {Function} callback(data) a callback function which accepts one argument.
     * @memberof WalkoverSearch
     */
    deleteIndex(index, callback = null) {
        var options = {
            'method': 'DELETE',
            'url': this.path + 'deleteIndexByApi?index='+index+'&API_KEY='+this.apiKey,
            'headers': {
              'Content-Type': 'application/json'
            }
        };
        request(options, function (error, response) {
            if (error) throw new Error(error);
            if (callback != null)
                callback(response.body)
        });
    }

    /**
     * @param {string} query query to be searched.
     * @param {Function} callback(data) a callback function which accepts one argument.
     * @param {Object} body a dictionary which provides parameters size, userToken, preFilter, postFilters {{
     *      size:int,
     *      userToken:string,
     *      preFilter:string,
     *      postFilters:object 
     * }}. 
     * @memberof WalkoverSearch
     */
    search(query, callback = null, body = null) {
        if (this.indexName == undefined) {
            throw new Error('Index not initialized\n call initIndex first')
        }
        
        var url = this.path + 'search/'+ this.indexName + '?query=' + query+'&API_KEY='+this.apiKey
        var jsonData = {}

        if (body != null) {
            if ('userToken' in body)
                url += '&userToken=' + body['userToken']

            if ('size' in body) {
                url += '&size=' + body['size']
            }

            if ('postFilters' in body) {
                jsonData['postFilters'] = body['postFilters']
            }

            if ('preFilter' in body) {
                jsonData['preFilter'] = body['preFilter']
            }
        }
        var options = {
            'method': 'POST',
            'url': url,
            'headers': {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        };
        request(options, function (error, response) {
            if (error) throw new Error(error);
            if (callback != null)
                callback(response.body)
        });
    }

    /**
     * @param {object} object a dictionary object.
     * @param {Function} callback(data) a callback function which accepts one argument.
     * @memberof WalkoverSearch
     */
    addObject(object, callback = null) {
        if (this.indexName == undefined) {
            throw new Error('Index not initialized\n call initIndex first')
        }
        var jsonData = JSON.stringify(object)
        var options = {
            'method': 'POST',
            'url': this.path+'add/'+this.indexName+'?API_KEY='+this.apiKey,
            'headers': {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        }
        request(options, function (error, response) {
            if (error) throw new Error(error);
            if (callback != null)
                callback(response.body);
        });
    }

    /**
     * @param {string} objectID objectID of the data to be deleted.
     * @param {Function} callback(data) a callback function which accepts one argument.
     * @memberof WalkoverSearch
     */
    deleteObject(objectID, callback = null) {
        if (this.indexName == undefined) {
            throw new Error('Index not initialized\n call initIndex first')
        }
        var options = {
            'method': 'DELETE',
            'url': this.path+'delete/'+this.indexName+'?objectID='+objectId+'&API_KEY='+this.apiKey,
            'headers': {
              'Content-Type': 'application/json'
            }    
          };
          request(options, function (error, response) {
            if (error) throw new Error(error);
            if (callback != null)
                callback(response.body);
        });
    }

    /**
     * @param {object} objectsList a list of dictionary objects.
     * @param {Function} callback(data) a callback function which accepts one argument.
     * @memberof WalkoverSearch
     */
    addObjects(objectsList, callback = null) {
        if (this.indexName == undefined) {
            throw new Error('Index not initialized\n call initIndex first')
        }
        var jsonData = JSON.stringify(objectsList)
        var options = {
            'method': 'POST',
            'url': this.path + 'bulkadd/'+this.indexName+'?API_KEY='+this.apiKey,
            'headers': {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        }

        request(options, function (error, response) {
            if (error) throw new Error(error);
            if (callback != null)
                callback(response.body);
        });
    }

    /**
     * @param {string} type type of event(example: click).
     * @param {object} parameters a dictionary object which provides objectIDs of
     * objectClickedOn, and clickedByUser
     * {{
     *      "objectClickedOn":string,
     *      "clickedByUser":string
     * }}.
     * @param {Function} callback(data) a callback function which accepts one argument.
     * @memberof WalkoverSearch
     */
    event(type, parameters, callback = null) {
        if (this.indexName == undefined) {
            throw new Error('Index not initialized\n call initIndex first')
        }

        var jsonData = parameters
        var options = {
            'method': 'POST',
            'url': url+'/event/'+this.indexName+'?type='+type+'&API_KEY='+this.apiKey,
            'headers': {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData)

        };
        request(options, function (error, response) {
            if (error) throw new Error(error);
            if (callback != null)
                callback(response.body);
        });
    }

}

module.exports = { WalkoverSearch }

