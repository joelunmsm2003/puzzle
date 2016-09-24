angular
  .module('app', ['ui.router','ngStorage','pascalprecht.translate','ui.bootstrap','ngAnimate','ngTouch','ngResource'])
  .config(routesConfig)
 


//host = 'http://localhost:8000/'

host = 'http://andyjo.tk:3000/' 


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
  .factory('ctrlService', function ($resource) {

	 
	   

		return $resource(host+'control/:id/', {
            id: '@_id'
        }, { //parameters default
            update: {
                method: 'PUT'
            }
        });

	});



angular
  .module('app')
  .factory('fanService', function ($resource) {

	 
	   

		return $resource(host+'fan/:id/', {
            id: '@_id'
        }, { //parameters default
            update: {
                method: 'PUT'
            }
        });

	});



angular
  .module('app')
  .factory('puzzleService', function ($resource) {

	 
	   

		return $resource(host+'puzzle/:id/', {
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


angular
  .module('app')
  
  .component('header', {
    templateUrl: 'src/component/header/header.html',
    controller: Header,
    bindings: {
      name: '='
    }

  });

function Header($scope,$filter,$http,$q) {

	console.log('gsgsgsg',this.name)

	$scope.name = 'Puzzle'

	

		this.name.then(function(data) {

		if(data[0]){

			$scope.name=data[0].name

		}


    	

  	});










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

  });

function Home($scope,$filter,$http,$q,slidingPuzzle,$stateParams,puzzleService,fanService) {


    $scope.entry = new fanService(); 

    $scope.entry.$save();

    var defered = $q.defer();

    $scope.promise = defered.promise;


    $scope.puzz = puzzleService.query({ id:$stateParams.id }, function(data) {


        defered.resolve(data);

        data = data[0]



        $scope.src = data.src

        $scope.rows = data.rows

        $scope.cols = data.cols

        var img = new Image();
       
        img.src = data.src

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


    console.log('iii',$scope.puzz)
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


