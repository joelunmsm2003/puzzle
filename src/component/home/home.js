angular
  .module('app')
  .service('interesService', interesService)
  .component('home', {
    templateUrl: 'src/component/home/home.html',
    controller: App
  });

function App(){
  
}