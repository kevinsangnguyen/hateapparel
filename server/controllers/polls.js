// var mongoose = require('mongoose');
// var Poll = mongoose.model('Poll');
// module.exports = (function() {
//  return {
//   index: function(req, res) {
//      Poll.find({}, function(err, results) {
//        if(err) {
//          console.log(err);
//        } else {
//          res.json(results);
//        }
//    })
//   },
//
//   create: function(req,res) {
//   	var newPoll = new Poll(req.body);
//     newPoll.created_at = new Date;
//   		newPoll.save(function(err,poll){
//   			if (err){
//   				res.json({errors : err})
//   			}
//   			else {
//   				res.json(poll);
//   			}
//   		})
//   },
//
//   remove: function(req,res){
//   	Poll.remove({ _id : req.params.id },function(err){
//   		if(err){
//   			console.log(err);
//   		}
//   		else {
//   			res.json("works");
//   		}
//   	})
//   },
//
//   find: function(req,res){
//   	Poll.findOne({_id: req.params.id}, function(err,results){
//   		if(err) {
//          console.log(err);
//        } else {
//          res.json(results);
//        }
//   	})
//   },
//
//   update: function(req,res){
//   	Poll.update({_id: req.body._id}, {$set : req.body}, function (err,results){
//   		if(err) {
//          console.log(err);
// 	       } else {
// 	         res.json(results);
// 	       }
//   	})
//   }
//
//
//  }
// })();
