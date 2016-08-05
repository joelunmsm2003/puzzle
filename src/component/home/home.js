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