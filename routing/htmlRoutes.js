var path = require('path');
module.exports = function(app) {
   /* app.use(function (req, res) {
        res.status(404);
        res.send('404 - Not Found');
    }); // custom 500 page 
    app.use(function (err, req, res, next) {
        console.error(err.stack);
        res.status(500);
        res.send('500 - Server Error');
    });*/
    app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
    app.post('/survey', function(req, res) {
		console.log(req.body);
	})
}
