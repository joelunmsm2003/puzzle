function HotelService() {
}


angular
  .module('app', ['ui.router'])
  .service('todoService', TodoService)
  .service('hotelService', HotelService);
