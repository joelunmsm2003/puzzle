angular
  .module('app')
  .component('filtro', {
    templateUrl: 'component/filtro/filtro.html',
    controller: Filtro
  });

function Filtro(interesService,$scope,$filter) {

    $scope.fil = false

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






    $scope.fer ='jsjsjsj'

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


