angular
  .module('app')

  .component('slidingPuzzle', {
    templateUrl: 'src/component/slidingPuzzle/slidingPuzzle.html',
    controller: Puzzle,
    bindings: {
      interes: '='
    }
  });

function Puzzle($scope,$filter,$http,$q) {



 

}

