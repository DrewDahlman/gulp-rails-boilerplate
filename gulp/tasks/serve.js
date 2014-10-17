var connect = require('connect');
var gulp    = require("gulp");
var http    = require('http');
var config  = require('../config');
var ps      = require('connect-pushstate/lib/pushstate').pushState;

gulp.task('serve', function(){
  var app = connect()
    .use(connect.logger('dev'))
    .use(ps())
    .use(connect.static(config.root));

  http.createServer(app).listen(config.port);
});

