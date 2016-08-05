angular
  .module('app')
  .component('listhotels', {
    templateUrl: 'src/component/listhotels/listhotels.html',
    controller: Hotel,
    bindings: {
      data: '='
    }
  });

/** @ngInject */
function Hotel(hotelsService,$scope) {

  console.log('listhotels......',this.data)


  this.data.then(function(data) {

    console.log('Then...',data)

    $scope.hotels = data
     
  })




}


