const request = require('request');

class WalkoverSearch {
    constructor(apiKey) {
        this.apiKey = apiKey 
        this.path = 'http://127.0.0.1:5000/'
    }

    initIndex(indexName) {
        this.indexName = indexName
    }

    addIndex(name, type, callback=null) {
        
        var options = {
            'method': 'POST',
            'url': this.path + 'addIndexByApi?name='+ name +'&type=' + type,
            'headers': {
                'API_KEY': this.apiKey
            }
        };
        request(options, function(error, response) {
            if (error) throw new Error(error);
            if (callback != null)
                callback(response.body)
        });
    }

    copyIndexConfiguration(sourceIndex, targetIndex, callback=null) {
        var options = {
            'method': 'POST',
            'url': this.path+'copyIndexConfig?src='+ sourceIndex +'&dest=' + targetIndex,
            'headers': {
                'API_KEY': this.apiKey
            }
        };
        request(options, function(error, response) {
            if (error) throw new Error(error);
            if (callback != null)
                callback(response.body)
        });
    }

    deleteIndex(index, callback=null) {
        var options = {
            'method': 'DELETE',
            'url': this.path + 'deleteIndexByApi?index='+index,
            'headers': {
              'API_KEY': this.apiKey,
              'Content-Type': 'application/json'
            }
        };
        request(options, function(error, response) {
            if (error) throw new Error(error);
            if (callback != null)
                callback(response.body)
        });
    }

    search(query, callback=null, parameters=null ) {
        if ( this.indexName == undefined) {
            throw new Error('Index not initialized\n call initIndex first')
        }
        
        var url = this.path + 'search/'+ this.indexName + '?query=' + query
        var jsonData = {}

        if (parameters != null) {
            if('userToken' in parameters) 
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
        request(options, function(error, response) {
            if (error) throw new Error(error);
            if (callback != null)
                callback(response.body)
        });
    }

    addData(object, callback=null){
        var jsonData = JSON.stringify(object)
        var options = {
            'method': 'POST',
            'url': this.path+'add/'+this.indexName,
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
    deleteData(objectId, callback=null){
        var options = {
            'method': 'DELETE',
            'url': this.path+'delete/'+this.indexName+'?objectID='+objectId,
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
    
    bulkAdd(objectsList,callback=null){
        var jsonData = JSON.stringify(objectsList)
        var options = {
            'method': 'POST',
            'url': this.path + 'bulkadd/'+this.indexName,
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

    event(type, parameters, callback=null){
        var jsonData = parameters
        var options = {
            'method': 'POST',
            'url': url+'/event/'+this.indexName+'?type='+type,
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

module.exports = {WalkoverSearch}
