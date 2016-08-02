angular
  .module('app')
  .service('interesService', interesService)
  .component('home', {
    templateUrl: 'component/home/home.html',
    controller: App
  });

function App(){
  
}