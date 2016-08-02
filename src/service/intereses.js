host = 'http://localhost:8000/' 

class interesService {
  
    constructor($http) {
        this.$http = $http;
    }

    getAll() {
        return this.$http.get(host+'cities/interest/');
    }
}



