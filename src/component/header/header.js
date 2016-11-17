angular
  .module('app')
  
  .component('header', {
    templateUrl: 'src/component/header/header.html',
    controller: Header,
    bindings: {
      name: '='
    }

  });

function Header($scope,$filter,$http,$q) {

	console.log('gsgsgsg',this.name)

	$scope.name = 'Puzzle'


	

		this.name.then(function(data) {

		if(data[0]){

			$scope.name=data[0].name

		}


    	

  	});










}

