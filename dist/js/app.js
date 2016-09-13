angular
  .module('app', ['ui.router','ngStorage','pascalprecht.translate','ui.bootstrap','ngAnimate','ngTouch','ngResource'])
  .config(routesConfig)
 


host = 'http://localhost:3000/' 

var lang = 'es'



/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider,$httpProvider,$translateProvider) {


  
  $urlRouterProvider.otherwise('/');

 

  // Languages

  $.get("es.json", function(data){

  console.log(data)

  $translateProvider.translations('es',data);
         
  });

  $.get("en.json", function(data){

  console.log(data)

  $translateProvider.translations('en',data);
         
  });


 
  $translateProvider.preferredLanguage(lang);


  $stateProvider
    .state('app', {
      url: '/puzzle/:id',
      template: '<home></home>'
    })
    .state('admin', {
      url: '/admin',
      template: '<admin></admin>'
    });
    



	 $httpProvider.interceptors.push(['$q', '$location', '$localStorage', function($q, $location, $localStorage) {
	return {
	    'request': function (config) {
	        config.headers = config.headers || {};
	        if ($localStorage.token) {
	            config.headers.Authorization = 'Bearer ' + $localStorage.token;
	        }
	        return config;
	    },
	    'responseError': function(response) {
	        if(response.status === 401 || response.status === 403) {
	            $location.path('/signin');
	        }
	        return $q.reject(response);
	    }
	};
	}]);



}






angular
  .module('app')
  .factory('puzzleService', function ($resource) {

	 
	   

		return $resource(host+'puzzle/:id', {
            id: '@_id'
        }, { //parameters default
            update: {
                method: 'PUT'
            }
        });

	});



angular
  .module('app')
  .component('admin', {
    templateUrl: 'src/component/admin/admin.html',
    controller: Admin

  });

function Admin($scope,$filter,$http,$q,puzzleService) {



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


angular
  .module('app')
  
  .component('header', {
    templateUrl: 'src/component/header/header.html',
    controller: Header

  });

function Header($scope,$filter,$http,$q) {



}


angular
  .module('app')
  .factory('slidingPuzzle', function() {
        function shuffle(a) {
            var q;
            for (var j, x, i = a.length; i; j = parseInt(Math.random() * i, 10), x = a[--i], a[i] = a[j], a[j] = x) { q = 0; }
            return a;
        }

        function SlidingPuzzle(rows, cols) {
            /**
             * Puzzle grid
             * @type {Array}
             */
            this.grid = [];

            /**
             * Moves count
             * @type {Number}
             */
            this.moves = 0;

            /**
             * Moves tile
             * @param srow
             * @param scol
             */
            this.move = function(srow, scol) {
                var dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]],
                    tref, trow, tcol;

                for (var d = 0; d < dirs.length; d++) {
                    trow = srow + dirs[d][0];
                    tcol = scol + dirs[d][1];
                    if (this.grid[trow] && this.grid[trow][tcol] && this.grid[trow][tcol].empty) {
                        tref = this.grid[srow][scol];
                        this.grid[srow][scol] = this.grid[trow][tcol];
                        this.grid[trow][tcol] = tref;
                        this.moves++;
                    }
                }
            };

            /**
             * Shuffles grid
             */
            this.shuffle = function() {
                var tiles = [];
                this.traverse(function(tile) {
                    tiles.push(tile);
                });
                shuffle(tiles);
                this.traverse(function(tile, row, col) {
                    this.grid[row][col] = tiles.shift();
                });
                this.moves = 0;
            };

            /**
             * Solves puzzle
             */
            this.solve = function() {
                var tiles = [];
                this.traverse(function(tile) {
                    tiles.push(tile);
                });
                tiles.sort(function(x, y) {
                    return (x.id - y.id);
                });
                this.traverse(function(tile, row, col) {
                    this.grid[row][col] = tiles.shift();
                });
            };

            /**
             * Is solved?
             * @type {Boolean}
             */
            this.isSolved = function() {
                var id = 1;
                for (var row = 0; row < rows; row++) {
                    for (var col = 0; col < cols; col++) {
                        if (this.grid[row][col].id !== id++) {
                            return false;
                        }
                    }
                }
                return true;
            };

            /**
             * Traverses grid and executes fn on every tile
             * @param fn
             */
            this.traverse = function(fn) {
                for (var row = 0; row < rows; row++) {
                    for (var col = 0; col < cols; col++) {
                        fn.call(this, this.grid && this.grid[row] ? this.grid[row][col] : undefined, row, col);
                    }
                }
            };

            // initialize grid
            var id = 1;
            this.traverse(function(tile, row, col) {
                if (!this.grid[row]) {
                    this.grid[row] = [];
                }
                this.grid[row][col] = {
                    id: id++,
                    empty: (row === rows - 1) && (col === cols - 1)
                };
                if (this.grid[row][col].empty) {
                    this.empty = this.grid[row][col];
                }
            });
        }

        return function(rows, cols) {
            return new SlidingPuzzle(rows, cols);
        };
    })

  .component('home', {
    templateUrl: 'src/component/home/home.html',
    controller: Home,
    bindings: {
      interes: '='
    }
  });

function Home($scope,$filter,$http,$q,slidingPuzzle,$stateParams,puzzleService) {

    console.log('hahaha',$stateParams)

    var entry = puzzleService.get({ id:$stateParams.id }, function(data) {

        $scope.src = data.data.src

        $scope.rows = data.data.rows

        $scope.cols = data.data.cols

        var img = new Image();
       
        img.src = data.data.src

        $scope.puzzle = slidingPuzzle($scope.rows, $scope.cols);

        var width = img.width / $scope.cols,
        height = img.height / $scope.rows;

        $scope.puzzle.traverse(function(tile, row, col) {
            tile.style = {
                width: width + 'px',
                height: height + 'px',
                background: (tile.empty ? 'none' : "url('" + $scope.src + "') no-repeat -" + (col * width) + 'px -' + (row * height) + 'px')
            };
        });

        $scope.puzzle.shuffle();

    
    });
    /*

    $scope.rows = 4
    $scope.cols = 3




    var todo = {
                "body": "some comment11111",
                "postId": 1
                }



    $scope.src = '/dist/img/ola.jpg'

    var img = new Image();
   
    img.src = '/dist/img/ola.jpg'

    $scope.puzzle = slidingPuzzle($scope.rows, $scope.cols);



    var width = img.width / $scope.cols,
    height = img.height / $scope.rows;

    $scope.puzzle.traverse(function(tile, row, col) {
        tile.style = {
            width: width + 'px',
            height: height + 'px',
            background: (tile.empty ? 'none' : "url('" + $scope.src + "') no-repeat -" + (col * width) + 'px -' + (row * height) + 'px')
        };
    });

    $scope.puzzle.shuffle();




    console.log('Puzzle..',$scope.puzzle)*/




}


