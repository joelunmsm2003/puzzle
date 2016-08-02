
host = 'http://localhost:8000/' 

class hotelsService {
  
    constructor($http) {
        this.$http = $http;
    }

    getAll() {
        return this.$http.get(host+'hotel/');
    }
}


