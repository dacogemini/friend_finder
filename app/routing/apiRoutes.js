// Pull in required dependencies
var path = require('path');

// Import the list of friend entries
var friends = require('../data/friends.js');

// Export API routes
module.exports = function(app) {
	// Total list of friend entries
	app.get('/api/friends', function(req, res) {
		res.json(friends);  //! << from friendsArray to friends 
	});
	// Add new friend entry
    app.post('/api/friends', function(req,res){
        //grabs the new friend's scores to compare with friends in friendArray array
        var newFriendScores = req.body.scores;
        var scoresArray = [];
        var friendCount = 0;
        var bestMatch = 0;
    
        //runs through all current friends in list
        for(var i=0; i<friends.length; i++){
          var scoresDiff = 0;
          //run through scores to compare friends
          for(var j=0; j<newFriendScores.length; j++){
            scoresDiff += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(newFriendScores[j])));
          }
    
          //push results into scoresArray
          scoresArray.push(scoresDiff);
        }
        console.log(scoresArray);
        //after all friends are compared, find best match
        for(var i=0; i<scoresArray.length; i++){
          if(scoresArray[i] <= scoresArray[bestMatch]){
            bestMatch = i;
          }
          
        }
    
        //return bestMatch data
        var bff = friends[bestMatch];
        res.json(bff);
        console.log(bff);
        //pushes new submission into the friendsList array
        friends.push(req.body);
      });
    };
