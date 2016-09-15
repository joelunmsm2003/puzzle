angular
  .module('app')
  .component('admin', {
    templateUrl: 'src/component/admin/admin.html',
    controller: Admin

  });

function Admin($scope,$filter,$http,$q,puzzleService) {


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

 var entry = puzzleService.get({ id:'1' }, function(data) {
    console.log('puzzles',data);
  }); 


  var entries = puzzleService.query(function() {
   
    $scope.puzzles = entries

  }); 












    puzzleService.get({ id:'1' },function(data) {

    data.src = '8888'
   
    puzzleService.update({ id:'1' }, data);
  

  });



// Now call update passing in the ID first then the object you are updating



}

