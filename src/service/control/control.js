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


