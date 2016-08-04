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





