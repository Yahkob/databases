$(document).ready(function() {
  app.init();
  $('.submit').on('click', app.handleSubmit);

  $('.add-room').on('click', function() {
    var roomName = $('.new-room').val();
    if (app.validate(roomName)) {
      app.rooms[JSON.stringify(roomName)] = JSON.stringify(roomName);
      app.addRoom(roomName);
      $('.new-room').val('');
    }
  });
});
