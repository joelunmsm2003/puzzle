host = 'http://localhost:8000/' 

function interesService ($http,$q) {  
    return {
        getAll: getAll
    }

    function getAll () {

        var defered = $q.defer();
        var promise = defered.promise;

        $http.get(host+'cities/interest/')
            .success(function(data) {
                defered.resolve(data);
            })
            .error(function(err) {
                defered.reject(err)
            });

        return promise;
    }
}


/*

class interesService {
  
    constructor($http) {
        this.$http = $http;
    }

    getAll() {
        return this.$http.get(host+'cities/interest/');
    }
}

*/

