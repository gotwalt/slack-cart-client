require('dotenv').load();
var Service = require('node-mac').Service;

var svc = new Service({
  name: 'OrphidCartURL',
  description: 'Opens URLs from the slack channel',
  script: require('path').join(__dirname, 'client.js'),
  env: {
    name: 'PUSHER_URL',
    value: process.env.PUSHER_URL
  }
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  console.log('\nInstallation Complete\n---------------------');
  svc.start();
});

// Just in case this file is run twice.
svc.on('alreadyinstalled',function(){
  console.log('This service is already installed.');
  console.log('Attempting to start it.');
  svc.start();
});

svc.on('start',function(){
  console.log(svc.name + ' started!\n');
});

var Controller = {
  start: function() {
    svc.start();
  },
  stop: function() {
    svc.stop();
  },
  install: function() {
    svc.install();
  },
  uninstall: function() {
    svc.uninstall();
  }
}

module.exports = Controller;

if (Controller[process.argv[2]]) {
  Controller[process.argv[2]]()
}
