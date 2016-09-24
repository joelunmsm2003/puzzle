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

	})
  .factory('fanpuzzleService', function ($resource) {

   
     

    return $resource(host+'fan/puzzle/:id/', {
            id: '@_id'
        }, { //parameters default
            update: {
                method: 'PUT'
            }
        });

  });


