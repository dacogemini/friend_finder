var path = require('path');
var friendArray = require("../data/friends");

module.exports = function (app) {
    
  /*  app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    }); */
    app.get("/api/friends", function(req, res) {
        res.json(friendArray);
      });
      app.post("/api/friends", function(req, res) {

        console.log(req.body);
  
  
        // var scores = [parseInt(req.body.q1), parseInt(req.body.q2), parseInt(req.body.q3), parseInt(req.body.q4), parseInt(req.body.q5)];
        // console.log(scores)
  
        function getSum(total,num) {
            return total + Math.round(num);
        }
    // custom 404 page 
    app.use(function (req, res) {
        res.status(404);
        res.send('404 - File Not Found');
    }); // custom 500 page 
    app.use(function (err, req, res, next) {
        console.error(err.stack);
        res.status(500);
        res.send('500 - Server Error');
    });  
})
}