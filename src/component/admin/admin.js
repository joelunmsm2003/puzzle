angular
  .module('app')
  .component('admin', {
    templateUrl: 'src/component/admin/admin.html',
    controller: Admin

  });

function Admin($scope,$filter,$http,$q,puzzleService,fanService) {


  console.log('porque.....')

    var defered = $q.defer();

    $scope.promise = defered.promise;

        $scope.puzz = puzzleService.query({ id:1}, function(data) {


        defered.resolve(data);


    
    });



$scope.name = $scope.entry


$scope.entry = new fanService(); 


$scope.entry.$save();




$scope.delete =function(data){

  console.log('shshsh',data.id)


   puzzleService.delete({ id:data.id} , function(data) {

      puzzleService.query(function(data) {

      $scope.puzzles = data

      }); 

  }); 



}
$scope.data =function(data){


  console.log(data)

$scope.entry = new ctrlService(); 

$scope.entry.data = data

$scope.entry.$save(function() {

   
});

}

$scope.add =function(data){


$scope.entry = new puzzleService(); 

$scope.entry.data = data

$scope.entry.$save(function() {

   var entries = puzzleService.query(function() {
   
    $scope.puzzles = entries

  }); 

   
});

}




  var entries = puzzleService.query(function() {
   
    $scope.puzzles = entries

    console.log($scope.puzzles)

  }); 



// Now call update passing in the ID first then the object you are updating


}

