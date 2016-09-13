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


