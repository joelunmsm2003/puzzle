angular
  .module('app', ['ui.router','ngStorage','pascalprecht.translate','ui.bootstrap','ngAnimate','ngTouch','ngResource'])
  .config(routesConfig)
 


host = 'http://localhost:8000' 

var lang = 'es'



/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider,$httpProvider,$translateProvider) {


  
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
      url: '/puzzle/:id',
      template: '<home></home>'
    })
    .state('admin', {
      url: '/admin',
      template: '<admin></admin>'
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





