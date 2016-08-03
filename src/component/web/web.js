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