// YOUR CODE HERE:
var app = {
  server: 'http://127.0.0.1:3000/classes/messages',
  query: {},
  rooms: {},
  friends: {},
  username: window.location.search.slice(window.location.search.indexOf('=') + 1),

  init: function() {
    // Start Process of Fetching Data from Sever
    this.loadMessages();
  },

  loadMessages: function() {
    this.fetch();
    setTimeout(this.loadMessages.bind(this), 1000);
  },

  send: function(message) {
    $.ajax({
      type: 'POST',
      url: this.server,
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function(data) {
        console.log(data)
      },
      error: function(data) {
        console.log('failure', data);
      }
    });
  },

  fetch: function() {
    $.ajax({
      type: 'GET',
      url: this.server,
      contentType: 'application/json',
      success: function(data) {

        data = JSON.parse(data);
        this.processMessages(data.results);
      }.bind(this),
      error: function(messages) {
        console.log('failure', messages);
      }
    });
  },

  clearMessages: function() {
    console.log("cleared");
    $('#chats').empty();
  },

  processMessages: function(messages) {
    // console.log(messages[0])
    for (var i = messages.length - 1; i >= 0; i--) {
      // if (this.validate(messages[i].text) && this.validate(messages[i].username)) {
        this.addMessage(messages[i]);
      // }

      if (this.validate(messages[i].roomname)) {
        this.addRoom(messages[i].roomname);
      }
    }

  },

  generateMessageDOM: function(message) {
    // var $user = $('<span class="user"></span>').text(message.username);
    // var $text = $('<span class="text"></span>').text(message.text);
    // var $time = $('<span class="time"></span>').html(moment(message.createdAt).fromNow());
    // var $message =  $('<li class="message" data-id="' + message.objectId + '"></li>');
    var $user = $('<span class="user"></span>').text(message.username);
    var $text = $('<span class="text"></span>').text(message.message);
    var $time = $('<span class="time"></span>').html(moment(message.created_at).fromNow());
    var $message =  $('<li class="message" data-id="' + message.message_id + '"></li>');

    return $message.append($user, $text, $time);
  },


  addMessage: function(message) {
    if (($('#chats').find('.message[data-id="' + message.message_id + '"]')).length === 0) {
      var $node = this.generateMessageDOM(message);
      $('#chats').prepend($node);
    }
  },

  addRoom: function(room) {
    // Check if New Room
    if (!this.rooms[room]) {
      var $node = this.generateRoomDOM(room);
      $(".Rooms").append($node);
      this.rooms[room] = true;
    }
  },

  generateRoomDOM: function(room) {
    var $room = $('<li class="room"></li>').text(room);
    $room.on('click', app.switchRooms);
    return $room;
  },

  switchRooms: function() {
    var $current = $('.current');
    if ($current.length) {
      $current.removeClass('current');
    }
    $(this).addClass('current');
    app.updateQuery('roomname', $(this).text());
  },

  addFriend: function(friend) {
    this.friends[friend] = true;
  },

  deleteFriend: function(friend) {
    delete this.friends[friend];
  },

  handleSubmit: function() {
    var message = {
      'username': app.username,
      'text': $('#message').val(),
      'roomname': $('.current').text()
    };

    app.send(message);
    $('#message').val('');
  },

  updateQuery: function(attr, value) {
    this.query[attr] = value;
    this.query = {roomname:$('.current').text()};
    this.clearMessages();
  },

  validate: function (text) {
    if(!text || text === '' || text === 'anonymous') {
      return false;
    } else if (text.indexOf('script') !== -1) {
      return false;
    }

    return true;
  }

};

