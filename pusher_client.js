var url = require('url');

module.exports.connect = function(pusher_url) {
  var parsed_url  = url.parse(pusher_url || process.env.PUSHER_URL);
  var parsed_auth = parsed_url.auth.split(':');
  var parsed_path = parsed_url.path.split('/');

  var Pusher = require('pusher-client');
  var pusher = new Pusher(parsed_auth[0]);

  return(pusher);
}
