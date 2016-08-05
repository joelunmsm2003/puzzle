
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


angular
  .module('app', ['ui.router','ngStorage','pascalprecht.translate','ui.bootstrap','ngAnimate','ngTouch'])
  .service('interesService', interesService)
  .service('hotelsService', hotelsService)
  .config(routesConfig)



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
  .service('interesService', interesService)
  .component('filtro', {
    templateUrl: 'src/component/filtro/filtro.html',
    controller: Filtro,
    bindings: {
      interes: '='
    }
  });

function Filtro(hotelsService,interesService,$scope,$filter,$http,$q) {


    var defered = $q.defer();

    var promise = defered.promise;

    $scope.filtropri = true

    $scope.filtrosec = false

    $scope.resultaconteo = false

    $scope.listgroup = true

    $scope.web = false



    $http.get(host+'hotel/').success(function(data) {

    console.log('Hotel Primera Busqueda',data)

    $scope.hotels = data


    })

    this.hoteles = promise

    
 

    $scope.fil = false


	  interesService.getAll().then(function(data) {


    $scope.datax1 = data

    $scope.datax = data
            
    })

    $scope.chips =[]


     $scope.addchip = function (data,index) {

      $scope.chips.push(data)

      $scope.datax.splice(index,1)


    }

    $scope.add = function(data,index){


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


      $scope.resultaconteo = true

      $scope.listgroup = false

      $scope.web = true

      $scope.filtropri = false

  
    };

   


    $scope.filmouse = function (data) {

      console.log(data)

    }

    $scope.search = function () {


       $scope.listgroup = true

      
        console.log('search',$scope.tipo)

        if ($scope.tipo){

          $scope.fil = true
        }
        else{

          $scope.fil = false
        }


        $scope.datax = $filter('filter')($scope.datax1,$scope.tipo)

      }


    function ObjectLength( object ) {
    var length = 0;
    for( var key in object ) {
        if( object.hasOwnProperty(key) ) {
            ++length;
        }
    }
    return length;
    };

      
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

function App(interesService,$translate,$scope,$http,$q){

	$translate.use('es');

	var defered = $q.defer();
	var promise = defered.promise;



	$http.get('http://jsonplaceholder.typicode.com/users')
	.success(function(data) {
		defered.resolve(data);
	})
    .error(function(err) {
        defered.reject(err)
    });



	
    interesService.getAll().then(function(data) {

    $scope.intereses = data.data

 

      
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

	this.interes = promise

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
    controller: Hotel,
    bindings: {
      data: '='
    }
  });

/** @ngInject */
function Hotel(hotelsService,$scope) {

  console.log('listhotels......',this.data)


  this.data.then(function(data) {

    console.log('Then...',data)

    $scope.hotels = data
     
  })




}



angular
  .module('app')
  .component('login', {
    templateUrl: 'src/component/login/login.html',
    controller: Login
  });

function Login($scope,$translate,$filter,$http,$rootScope,$location,$localStorage) {


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
function Search($scope,$translate) {





  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function() {
    $scope.dt = null;
  };

  $scope.inlineOptions = {
    customClass: getDayClass,
    minDate: new Date(),
    showWeeks: true
  };

  $scope.dateOptions = {
    dateDisabled: disabled,
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 1
  };

  // Disable weekend selection
  function disabled(data) {
    var date = data.date,
      mode = data.mode;
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  }

  $scope.toggleMin = function() {
    $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
    $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
  };

  $scope.toggleMin();

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];

  $scope.popup1 = {
    opened: false
  };

  $scope.popup2 = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events = [
    {
      date: tomorrow,
      status: 'full'
    },
    {
      date: afterTomorrow,
      status: 'partially'
    }
  ];

  function getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  }

  $scope.searchdetalle = function(data) {
    
    console.log(data)


  };


}






angular
  .module('app')
  .component('searchvert', {
    templateUrl: 'src/component/searchvertical/searchvertical.html',
    controller: Searchvertical,
    bindings: {
      checkin: '='
    }

  });




/** @ngInject */
function Searchvertical($scope,$translate) {


  $scope.checkin = this.checkin


  $scope.busqueda = function(data) {

    console.log('Filtro Secundario',data)

    this.checkin = data

  };

  



  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function() {
    $scope.dt = null;
  };

  $scope.inlineOptions = {
    customClass: getDayClass,
    minDate: new Date(),
    showWeeks: true
  };

  $scope.dateOptions = {
    dateDisabled: disabled,
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 1
  };

  // Disable weekend selection
  function disabled(data) {
    var date = data.date,
      mode = data.mode;
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  }

  $scope.toggleMin = function() {
    $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
    $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
  };

  $scope.toggleMin();

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];

  $scope.popup1 = {
    opened: false
  };

  $scope.popup2 = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events = [
    {
      date: tomorrow,
      status: 'full'
    },
    {
      date: afterTomorrow,
      status: 'partially'
    }
  ];

  function getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  }

  $scope.searchdetalle = function(data) {
    
    console.log(data)


  };


}






angular
  .module('app')
  .service('interesService', interesService)
  .component('web', {
    templateUrl: 'src/component/web/web.html',
    controller: Web,
     bindings: {
      hotels: '=',
      chips1: '='
    }
  });


/** @ngInject */
function Web($scope,$translate,$http) {

  $scope.resultaconteo = true

  $scope.listgroup = false

  $scope.chips1 = this.chips1



  $scope.$watch('chips1', function() {

        $http({

    url: host+"hotel/search/",
    data: $scope.chips1,
    method: 'POST'

    }).
    success(function(data) {


      $scope.hotels = data

      $scope.conteo = ObjectLength($scope.hotels)

    })

    
        
    }, true);




    $http({

    url: host+"hotel/search/",
    data: $scope.chips1,
    method: 'POST'

    }).
    success(function(data) {


      $scope.hotels = data

      $scope.conteo = ObjectLength($scope.hotels)

    })


  

  $scope.busqueda = function(data) {

    console.log('Filtro Secundario',data)


    $scope.resultaconteo = true

    var todo={

            filtro: data,
            chips: $scope.chips1
        }


    $http({

    url: host+"hotel/avaliable/",
    data: todo,
    method: 'POST'

    }).
    success(function(data) {

      console.log('Hoteles :)',data)

        $scope.hotels = data

        $scope.conteo = ObjectLength($scope.hotels)


    })



  };

    function ObjectLength( object ) {
    var length = 0;
    for( var key in object ) {
        if( object.hasOwnProperty(key) ) {
            ++length;
        }
    }
    return length;
    };




  

  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function() {
    $scope.dt = null;
  };

  $scope.inlineOptions = {
    customClass: getDayClass,
    minDate: new Date(),
    showWeeks: true
  };

  $scope.dateOptions = {
    dateDisabled: disabled,
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 1
  };

  // Disable weekend selection
  function disabled(data) {
    var date = data.date,
      mode = data.mode;
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  }

  $scope.toggleMin = function() {
    $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
    $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
  };

  $scope.toggleMin();

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];

  $scope.popup1 = {
    opened: false
  };

  $scope.popup2 = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events = [
    {
      date: tomorrow,
      status: 'full'
    },
    {
      date: afterTomorrow,
      status: 'partially'
    }
  ];

  function getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  }

  $scope.searchdetalle = function(data) {
    
    console.log(data)


  };


}





