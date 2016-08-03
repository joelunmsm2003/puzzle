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