angular
  .module('app')
  .component('searchvert', {
    templateUrl: 'src/component/searchvertical/searchvertical.html',
    controller: Searchvertical
  });




/** @ngInject */
function Searchvertical($scope,$translate) {


   $scope.ninos = {
    model: null,
    availableOptions: [
      {id: '1', name: '1'},{id: '2', name: '2'},{id: '3', name: '3'},{id: '4', name: '4'},{id: '5', name: '5'},{id: '6', name: '6'},
      {id: '7', name: '7'},{id: '8', name: '8'},{id: '9', name: '9'}
    ],
   };

    $scope.adultos = {
    model: null,
    availableOptions: [
      {id: '1', name: '1'},{id: '2', name: '2'},{id: '3', name: '3'},{id: '4', name: '4'},{id: '5', name: '5'},{id: '6', name: '6'},{id: '7', name: '7'},
      {id: '8', name: '8'},{id: '9', name: '9'},{id: '10', name: '10'},{id: '11', name: '11'},{id: '12', name: '12'},{id: '13', name: '13'},{id: '14', name: '14'},
      {id: '15', name: '15'},{id: '16', name: '16'}
    ],
   };

   $scope.rooms = {
    model: null,
    availableOptions: [
      {id: '1', name: '1'},{id: '2', name: '2'},{id: '3', name: '3'},{id: '4', name: '4'},{id: '5', name: '5'},{id: '6', name: '6'},{id: '7', name: '7'},
      {id: '8', name: '8'},{id: '9', name: '9'},{id: '10', name: '10'},{id: '11', name: '11'},{id: '12', name: '12'},{id: '13', name: '13'},{id: '14', name: '14'},
      {id: '15', name: '15'},{id: '16', name: '16'}
    ],
   };



  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function() {
    $scope.dt = null;
  };

  $scope.inlineOptions = {
    customClass: getDayClass,
    minDate: new Date(),
    showWeeks: true
  };

  $scope.dateOptions = {
    dateDisabled: disabled,
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 1
  };

  // Disable weekend selection
  function disabled(data) {
    var date = data.date,
      mode = data.mode;
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  }

  $scope.toggleMin = function() {
    $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
    $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
  };

  $scope.toggleMin();

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];

  $scope.popup1 = {
    opened: false
  };

  $scope.popup2 = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events = [
    {
      date: tomorrow,
      status: 'full'
    },
    {
      date: afterTomorrow,
      status: 'partially'
    }
  ];

  function getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  }

  $scope.searchdetalle = function(data) {
    
    console.log(data)


  };


}





