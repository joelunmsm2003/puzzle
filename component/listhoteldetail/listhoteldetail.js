angular
  .module('app')
  .component('listhoteldetail', {
    templateUrl: 'component/listhoteldetail/listhoteldetail.html',
    controller: Hoteldetail,
    bindings: {
      hotels: '='
    }
  });

/** @ngInject */
function Hoteldetail($scope) {



  console.log('data.......',this.hotels)

  $scope.hotel = this.hotels


}

