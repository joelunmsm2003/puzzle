angular
  .module('app')
  .component('listhotels', {
    templateUrl: 'component/listhotels/listhotels.html',
    controller: Hotel
  });

/** @ngInject */
function Hotel(interesService,$scope) {


  console.log('data.......')

  interesService.getAll().then(function(data) {

    $scope.hotels = data.data

            
    })


}


