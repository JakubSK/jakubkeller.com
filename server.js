let express = require('express');
let stylus = require('stylus');
let winston = require('winston');
let app = express();

// Create a HTTP server
let server = require('http').createServer(app);

// Configure server settings; 'views' directory and templating engine 'pug'
app.set('views', './views');
app.set('view engine', 'pug');

// Define the Stylus compile factory function
app.use(stylus.middleware({
  src: __dirname,
  dest: __dirname + '/public',
  compile: function(){
    return stylus(str)
      .set('filename', path)
      .set('compress', true);
  }
}));

// Mounts middle-ware
app.use(express.static(__dirname + '/public'));

// Mount routers at specific resource paths
app.use('/', require('./routers/site.js'));

let port = process.env.PORT || 80;

server.listen(port, function(){
  winston.info(`Development platform started on port ${port}`);
});
