angular
  .module('app')
  .component('header', {
    templateUrl: 'src/component/header/header.html',
    controller: Header
  });

function Header($translate,$scope){

  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };
  
}