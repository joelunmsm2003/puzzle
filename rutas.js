angular
  .module('app', ['ui.router','ngStorage','pascalprecht.translate'])
  .service('interesService', interesService)
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider,$httpProvider,$translateProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  // Languages

  $translateProvider.translations('en', {
    'TITLE': 'Hello',
    'FOO': 'This is a paragraph'
  });
 
  $translateProvider.translations('de', {
    'TITLE': 'Hallo',
    'FOO': 'Dies ist ein Absatz'
  });
 
  $translateProvider.preferredLanguage('de');


  $stateProvider
    .state('app', {
      url: '/',
      template: '<home></home>'
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





