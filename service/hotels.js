
class hotelsService {
  
    constructor($http) {
        this.$http = $http;
    }

    getAll() {
        return this.$http.get('http://jsonplaceholder.typicode.com/posts');
    }
}



