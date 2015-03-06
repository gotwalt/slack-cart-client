require('dotenv').load();
console.log(process.env);
var exec = require('child_process').exec;
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
    console.log(data);
    exec('open ' + data.uri)
  }
);
