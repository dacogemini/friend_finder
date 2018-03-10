var express = require('express');
var app = express();
// var logger = require('morgan'); // Instantiate and configure the app 

// sets the value for the name. app.set('port', 3000); 
app.set('port', process.env.PORT || 3000);
/* grab the port from system environment variable PORT (process.env.PORT).
    The env variable is used to store the current environment mode for this particular Node.js process.  */
 app.get('/', function(req, res) {
        res.send('home');
});
app.get('/about', function(req, res){ 
        res.type('text/plain'); 
        res.send('About Meadowlark Travel'); });
 
//app.use(logger('combined'));
// app.use(express.static(__dirname + '/public'));

// 404 catch-all handler (middleware). app.use, sets up middleware.
app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

// 500 error handler (middleware)
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.send('500 - Server Error');
});
app.listen(app.get('port'), function(){
    console.log( 'Express started on http://localhost:' + 
      app.get('port') + '; press Ctrl-C to terminate.' );
  });