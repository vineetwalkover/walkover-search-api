const request = require('request');

class WalkoverSearch {
    /**
     * @param {string} apiKey The api key avaialable on home page
     */
    constructor(apiKey) {
        this.apiKey = apiKey
        this.path = 'https://search-engine-walkover.el.r.appspot.com/'
    }

    /**
     * @param {string} indexName name of index
     */
    initIndex(indexName) {
        this.indexName = indexName
    }

    /**
     * @param {string} name The name of index
     * @param {string} type The type of index, it can be Simple_Search or Ecommerce
     * @param {Function} callback(data) a callback function which accepts one argument
     */
    createIndex(name, type, callback = null) {
        x

        var options = {
            'method': 'POST',
            'url': this.path + 'addIndexByApi?name=' + name + '&type=' + type,
            'headers': {
                'API_KEY': this.apiKey
            }
        };
        request(options, function (error, response) {
            if (error) throw new Error(error);
            if (callback != null)
                callback(response.body)
        });
    }

    /**
     * @param {string} sourceIndex The name of source index 
     * @param {string} targetIndex The name of target index
     * @param {Function} callback(data) a callback function which accepts one argument
     */
    copyIndexConfiguration(sourceIndex, targetIndex, callback = null) {
        var options = {
            'method': 'POST',
            'url': this.path + 'copyIndexConfig?src=' + sourceIndex + '&dest=' + targetIndex,
            'headers': {
                'API_KEY': this.apiKey
            }
        };
        request(options, function (error, response) {
            if (error) throw new Error(error);
            if (callback != null)
                callback(response.body)
        });
    }

    /**
     * @param {string} index The name of index 
     * @param {Function} callback(data) a callback function which accepts one argument
     */
    deleteIndex(index, callback = null) {
        var options = {
            'method': 'DELETE',
            'url': this.path + 'deleteIndexByApi?index=' + index,
            'headers': {
                'API_KEY': this.apiKey,
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
     * @param {string} query query to be searched
     * @param {Function} callback(data) a callback function which accepts one argument
     * @param {Object} parameters a dictionary which provides parameters size, userToken, preFilter, postFilters {{
     *      size:int,
     *      userToken:string,
     *      preFilter:string,
     *      postFilters:object 
     * }} 
     */
    search(query, callback = null, parameters = null) {
        if (this.indexName == undefined) {
            throw new Error('Index not initialized\n call initIndex first')
        }

        var url = this.path + 'search/' + this.indexName + '?query=' + query
        var jsonData = {}

        if (parameters != null) {
            if ('userToken' in parameters)
                url += '&userToken=' + parameters['userToken']

            if ('size' in parameters) {
                url += '&size=' + parameters['size']
            }

            if ('postFilters' in parameters) {
                jsonData['postFilter'] = parameters['postFilter']
            }

            if ('preFilter' in parameters) {
                jsonData['preFilter'] = parameters['preFilter']
            }
        }

        var options = {
            'method': 'GET',
            'url': url,
            'headers': {
                'API_KEY': this.apiKey,
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
     * @param {object} object a dictionary object
     * @param {Function} callback(data) a callback function which accepts one argument
     */
    addObject(object, callback = null) {
        if (this.indexName == undefined) {
            throw new Error('Index not initialized\n call initIndex first')
        }
        var jsonData = JSON.stringify(object)
        var options = {
            'method': 'POST',
            'url': this.path + 'add/' + this.indexName,
            'headers': {
                'API_key': this.apiKey,
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
     * @param {string} objectID objectID of the data to be deleted
     * @param {Function} callback(data) a callback function which accepts one argument
     */
    deleteObject(objectID, callback = null) {
        if (this.indexName == undefined) {
            throw new Error('Index not initialized\n call initIndex first')
        }
        var options = {
            'method': 'DELETE',
            'url': this.path + 'delete/' + this.indexName + '?objectID=' + objectId,
            'headers': {
                'API_key': this.apiKey,
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
     * @param {object} objectsList a list of dictionary objects
     * @param {Function} callback(data) a callback function which accepts one argument
     */
    addObjects(objectsList, callback = null) {
        if (this.indexName == undefined) {
            throw new Error('Index not initialized\n call initIndex first')
        }
        var jsonData = JSON.stringify(objectsList)
        var options = {
            'method': 'POST',
            'url': this.path + 'bulkadd/' + this.indexName,
            'headers': {
                'API_key': this.apiKey,
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
     * @param {string} type type of event(example: click)
     * @param {object} parameters a dictionary object which provides objectIDs of
     * objectClickedOn, and clickedByUser
     * {{
     *      "objectClickedOn":string,
     *      "clickedByUser":string
     * }}
     * @param {Function} callback(data) a callback function which accepts one argument
     */
    event(type, parameters, callback = null) {
        if (this.indexName == undefined) {
            throw new Error('Index not initialized\n call initIndex first')
        }

        var jsonData = parameters
        var options = {
            'method': 'POST',
            'url': url + '/event/' + this.indexName + '?type=' + type,
            'headers': {
                'API_key': this.apiKey,
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

console.log(typeof [{
    "title": ""
}])