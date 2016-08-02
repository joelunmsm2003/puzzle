angular
  .module('app')
  .component('listhoteldetail', {
    templateUrl: 'src/component/listhoteldetail/listhoteldetail.html',
    controller: Hoteldetail,
    bindings: {
      hotels: '='
    }
  });

/** @ngInject */
function Hoteldetail($scope) {



  console.log('data.......',this.hotels)

  $scope.hotel = this.hotels

    $scope.range = function(n) {
        return new Array(n);
    };


}

