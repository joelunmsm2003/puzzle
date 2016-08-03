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