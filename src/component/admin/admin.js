angular
  .module('app')
  .component('admin', {
    templateUrl: 'src/component/admin/admin.html',
    controller: Admin

  });

function Admin($scope,$filter,$http,$q,puzzleService) {


  console.log('porque.....')


$scope.delete =function(data){

  console.log('shshsh',data)


   puzzleService.delete({ id:data.id} , function(data) {

      puzzleService.query(function(data) {

      $scope.puzzles = data

      }); 

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

