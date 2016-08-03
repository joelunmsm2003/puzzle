angular
  .module('app')
  .component('web', {
    templateUrl: 'component/web/web.html',
    controller: Web
  });

/** @ngInject */
function Web(interesService,$scope) {


  console.log('Web.......')




}


