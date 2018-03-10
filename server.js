var bodyParser = require('body-parser');
var path = require('path');
var express = require('express');
var app = express();
// var logger = require('morgan'); // Instantiate and configure the app 

// sets the value for the name. app.set('port', 3000); 
var PORT = process.env.PORT || 8080;
/* grab the port from system environment variable PORT (process.env.PORT).
    The env variable is used to store the current environment mode for this particular Node.js process.  */

//==================================================================================
// urlencoded(): Processes URL-encoded data; e.g., name = value& name2 = value2
// urlencoded() takes an extended boolean option. The extended option is a mandatory field
// When it is set to true (the default value), body-parser uses the qs module
// qs allows you to create nested objects within your query strings, by surrounding the name of sub-keys with square brackets [].
//==================================================================================

// app.use, sets up middleware.
// body-parser processes incoming data, such as body payload, into usable JavaScript/Node.js objects.
app.use(bodyParser.urlencoded({extended: true }));
// parses JSON
app.use(bodyParser.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);
app.listen(PORT, function() {
// Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
