angular
  .module('app')
  .service('interesService', interesService)
  .component('filtro', {
    templateUrl: 'src/component/filtro/filtro.html',
    controller: Filtro,
    bindings: {
      interes: '='
    }
  });

function Filtro(hotelsService,interesService,$scope,$filter,$http) {



    hotelsService.getAll().then(function(data) {

    console.log('hoteles',data)

    $scope.hotels = data.data

    })


    $scope.fil = false

    console.log('$scope.datainteres',this.interes)

	  interesService.getAll().then(function(data) {

    console.log('hshhs',data)

    $scope.datax1 = data.data

    $scope.datax = data.data
            
    })

    $scope.chips =[]


     $scope.addchip = function (data,index) {

      console.log('index',index)

      $scope.chips.push(data)

      $scope.datax.splice(index,1)


    }

    $scope.add = function(data,index){

      console.log('ajajaj',data)

      $scope.chips.splice(index,1)

      $scope.datax.push(data)

      $scope.sort_by('id',$scope.datax)

    }

    $scope.sort_by = function(newSortingOrder,array) {


        function sortByKey(array, key) {
            return array.sort(function(a, b) {
            var x = a[key]; var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });
        }

        $scope.datax = sortByKey(array, newSortingOrder);

        console.log('Order...',$scope.datax)

  
    };

    
    $scope.search_hotels = function() {


      console.log('Searching.......',$scope.chips)

      $http({

      url: host+"hotel/search/",
      data: $scope.chips,
      method: 'POST'

      }).
      success(function(data) {


        console.log('Resultados....',data)

        $scope.hotels = data


      })

  
    };


    $scope.filmouse = function (data) {

      console.log(data)

    }

    $scope.search = function () {

      
        console.log('search',$scope.tipo)

        if ($scope.tipo){

          $scope.fil = true
        }
        else{

          $scope.fil = false
        }


        $scope.datax = $filter('filter')($scope.datax1,$scope.tipo)

      }
      
}


