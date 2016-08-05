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

function Filtro(hotelsService,interesService,$scope,$filter,$http,$q) {


    var defered = $q.defer();

    var promise = defered.promise;

    $scope.filtropri = true

    $scope.filtrosec = false

    $scope.resultaconteo = false

    $scope.listgroup = true

    $scope.web = false



    $http.get(host+'hotel/').success(function(data) {

    console.log('Hotel Primera Busqueda',data)

    $scope.hotels = data


    })

    this.hoteles = promise

    
 

    $scope.fil = false


	  interesService.getAll().then(function(data) {


    $scope.datax1 = data

    $scope.datax = data
            
    })

    $scope.chips =[]


     $scope.addchip = function (data,index) {

      $scope.chips.push(data)

      $scope.datax.splice(index,1)


    }

    $scope.add = function(data,index){


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


      $scope.resultaconteo = true

      $scope.listgroup = false

      $scope.web = true

      $scope.filtropri = false

  
    };

   


    $scope.filmouse = function (data) {

      console.log(data)

    }

    $scope.search = function () {


       $scope.listgroup = true

      
        console.log('search',$scope.tipo)

        if ($scope.tipo){

          $scope.fil = true
        }
        else{

          $scope.fil = false
        }


        $scope.datax = $filter('filter')($scope.datax1,$scope.tipo)

      }


    function ObjectLength( object ) {
    var length = 0;
    for( var key in object ) {
        if( object.hasOwnProperty(key) ) {
            ++length;
        }
    }
    return length;
    };

      
}


