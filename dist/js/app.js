
host = 'http://localhost:8000/' 

class hotelsService {
  
    constructor($http) {
        this.$http = $http;
    }

    getAll() {
        return this.$http.get(host+'hotel/');
    }
}



host = 'http://localhost:8000/' 

class interesService {
  
    constructor($http) {
        this.$http = $http;
    }

    getAll() {
        return this.$http.get(host+'cities/interest/');
    }
}




angular
  .module('app', ['ui.router','ngStorage','pascalprecht.translate'])
  .service('interesService', interesService)
  .service('hotelsService', hotelsService)
  .config(routesConfig);


host = 'http://localhost:8000/' 

var lang = 'es'



/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider,$httpProvider,$translateProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');


  // Languages

  $.get("es.json", function(data){

  console.log(data)

  $translateProvider.translations('es',data);
         
  });

  $.get("en.json", function(data){

  console.log(data)

  $translateProvider.translations('en',data);
         
  });


 
  $translateProvider.preferredLanguage(lang);


  $stateProvider
    .state('app', {
      url: '/',
      template: '<home></home>'
    })
    .state('web', {
      url: '/web/:hoteles',
      template: '<web></web>'
    });
    



	 $httpProvider.interceptors.push(['$q', '$location', '$localStorage', function($q, $location, $localStorage) {
	return {
	    'request': function (config) {
	        config.headers = config.headers || {};
	        if ($localStorage.token) {
	            config.headers.Authorization = 'Bearer ' + $localStorage.token;
	        }
	        return config;
	    },
	    'responseError': function(response) {
	        if(response.status === 401 || response.status === 403) {
	            $location.path('/signin');
	        }
	        return $q.reject(response);
	    }
	};
	}]);



}






angular
  .module('app')
  .component('filtro', {
    templateUrl: 'src/component/filtro/filtro.html',
    controller: Filtro,
    bindings: {
      interes: '='
    }
  });

function Filtro(interesService,$scope,$filter,$http) {


    $scope.fil = false

    console.log('$scope.datainteres',this.interes)

	  interesService.getAll().then(function(data) {

    console.log('hshhs',data)

    $scope.datax1 = data.data

    $scope.datax = data.data
            
    })

    $scope.chips =[]


     $scope.addchip = function (data,index) {

      console.log('index',index)

      $scope.chips.push(data)

      $scope.datax.splice(index,1)


    }

    $scope.add = function(data,index){

      console.log('ajajaj',data)

      $scope.chips.splice(index,1)

      $scope.datax.push(data)

      $scope.sort_by('id',$scope.datax)

    }

    $scope.sort_by = function(newSortingOrder,array) {


        function sortByKey(array, key) {
            return array.sort(function(a, b) {
            var x = a[key]; var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });
        }

        $scope.datax = sortByKey(array, newSortingOrder);

        console.log('Order...',$scope.datax)

  
    };

    
    $scope.search_hotels = function() {


      console.log('Searching.......',$scope.chips)

      $http({

      url: host+"hotel/search/",
      data: $scope.chips,
      method: 'POST'

      }).
      success(function(data) {


        console.log('Resultados....',data)

        $scope.resultados = data


      })

  
    };


    $scope.filmouse = function (data) {

      console.log(data)

    }

    $scope.search = function () {

      
        console.log('search',$scope.tipo)

        if ($scope.tipo){

          $scope.fil = true
        }
        else{

          $scope.fil = false
        }


        $scope.datax = $filter('filter')($scope.datax1,$scope.tipo)

      }
      
}



angular
  .module('app')
  .component('header', {
    templateUrl: 'src/component/header/header.html',
    controller: Header
  });

function Header($translate,$scope){


	$scope.language = "Español"



  $scope.changeLanguage = function (langKey) {

  	console.log(langKey)

  	if(langKey == 'es'){

  		$scope.language = "Español"
  	}
  	else{

  		$scope.language = "English"
  	}



    $translate.use(langKey);

  };

  
  
}
angular
  .module('app')
  .service('interesService', interesService)
  .component('home', {
    templateUrl: 'src/component/home/home.html',
    controller: App
  });

function App(interesService,$translate,$scope){

	$translate.use('es');

	
    interesService.getAll().then(function(data) {

    $scope.intereses = data.data

    console.log('Dato Django....',typeof($scope.intereses),$scope.intereses)



	console.log('Dato Django....1', Object.keys($scope.intereses).map(function (key) {return $scope.intereses[key]}));


      
    })

	

	var interes = [

	{
	id: 1,
	categoria: 'City',
	interes: 'Lima',
	},
	{
	id: 2,
	categoria: 'Interes',
	interes: 'Natacion',
	},
	{
	id: 3,
	categoria: 'City',
	interes: 'Cuzco',
	},

	];

	this.interes = interes

	console.log('Dato Example....',typeof(this.interes),this.interes)

	
	
  
}
angular
  .module('app')
  .component('listhoteldetail', {
    templateUrl: 'src/component/listhoteldetail/listhoteldetail.html',
    controller: Hoteldetail,
    bindings: {
      hotels: '='
    }
  });

/** @ngInject */
function Hoteldetail($scope) {



  console.log('data.......',this.hotels)

  $scope.hotel = this.hotels

    $scope.range = function(n) {
        return new Array(n);
    };


}


angular
  .module('app')
  .component('listhotels', {
    templateUrl: 'src/component/listhotels/listhotels.html',
    controller: Hotel
  });

/** @ngInject */
function Hotel(hotelsService,$scope) {


  console.log('data.......')

  hotelsService.getAll().then(function(data) {

  	console.log('hoteles',data)

    $scope.hotels = data.data



            
    })


}



angular
  .module('app')
  .component('login', {
    templateUrl: 'src/component/login/login.html',
    controller: Login
  });

function Login($scope,$filter,$http,$rootScope,$location,$localStorage) {


	  function urlBase64Decode(str) {
        var output = str.replace('-', '+').replace('_', '/');
        switch (output.length % 4) {
            case 0:
                break;
            case 2:
                output += '==';
                break;
            case 3:
                output += '=';
                break;
            default:
                throw 'Illegal base64url string!';
        }
        return window.atob(output);
    }

    function getUserFromToken() {
        var token = $localStorage.token;
        var user = {};
        if (typeof token !== 'undefined') {
            var encoded = token.split('.')[1];
            user = JSON.parse(urlBase64Decode(encoded));
        }
        return user;
    }

     

    $scope.ingresar = function (data) {
        
        $http({

        url: "http://localhost:8000/api-token-auth/",
        data: data,
        method: 'POST'
        }).
        success(function(data) {
        
        console.log('returmmm',data.token)

        $localStorage.token = data.token;

        var currentUser = getUserFromToken();
        
        console.log('Decode',currentUser)



    
        })

    };



      
}

angular
  .module('app')
  .component('search', {
    templateUrl: 'src/component/search/search.html',
    controller: Search
  });

/** @ngInject */
function Search($scope) {




}




angular
  .module('app')
  .service('interesService', interesService)
  .component('web', {
    templateUrl: 'src/component/web/web.html',
    controller: Web
  });

function Web($scope,$stateParams){

	console.log('Web',$stateParams)




  
}