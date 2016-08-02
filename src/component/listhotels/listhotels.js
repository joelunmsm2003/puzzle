angular
  .module('app')
  .component('listhotels', {
    templateUrl: 'src/component/listhotels/listhotels.html',
    controller: Hotel
  });

/** @ngInject */
function Hotel(hotelsService,$scope) {


  console.log('data.......')

  hotelsService.getAll().then(function(data) {

  	console.log('hoteles',data)

    $scope.hotels = data.data



            
    })


}


