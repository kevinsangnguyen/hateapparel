var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = (function() {
 return {
  index: function(req, res) {
     User.find({}, function(err, results) {
       if(err) {
         console.log(err);
       } else {
         res.json(results);
       }
   })
  },

  create: function(req,res) {
  	var newUser = new User(req.body);
    newUser.created_at = new Date;
  		newUser.save(function(err,user){
  			if (err){
  				console.log("Error.");
  			}

  			else {
  				res.json(user);
  			}
  		})
  },

  remove: function(req,res){
  	User.remove({ _id : req.params.id },function(err){
  		if(err){
  			console.log(err);
  		}
  		else {
  			res.json("works");
  		}
  	})
  }

 }
})();