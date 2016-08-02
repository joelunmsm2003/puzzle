
class interesService {
  
    constructor($http) {
        this.$http = $http;
    }

    getAll() {
        return this.$http.get('http://localhost:8000/interests/');
    }
}



