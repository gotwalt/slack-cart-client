require('dotenv').load();

var osascript = require('node-osascript');
var notifier = require('node-notifier');
var pusher = require('./pusher_client').connect();
var path = require('path');

var channel = pusher.subscribe('cart');

channel.bind('show',
  function(data) {
    notifier.notify({
      'title': data.username + ' sent a url to the cart',
      'message': 'Opening ' + data.uri,
      'contentImage': path.join(__dirname, 'orphid.png'),
    });

    osascript.executeFile(path.join(__dirname, 'chrome.scpt'), { uri : data.uri }, function(err, result, raw){
      if (err) console.error(err);
    });
  }
);
