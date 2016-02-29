board.factory('UserFactory', function($http) {
		var factory = {};
		var users = [];
		var current_user;

		factory.current_user = function(user)
		{
			current_user = user;
		}

		factory.get_current_user = function(callback){
			callback(current_user);
		} 

		factory.index = function(callback) {
			$http.get('/users').success(function(output) {
			users = output;
			callback(users);
			}) 
		};

	

		factory.create = function(user) {
			$http.post('/create_user',user).success(function(created_user){
				if (created_user){
					users.push(created_user);
					current_user = created_user;
				}
			})
		}

		factory.find = function(user,callback) {
			$http.post('/login', user).success(function(output_user){
				if (output_user.length == 0){
					console.log("Adding new user")
					factory.create(user);
					callback(current_user)
					
				}
				else {
					console.log("Found user")
					current_user = output_user[0]
					callback(current_user)
				}
			})
		}
		// note the use of callbacks!
		// Restful syntax: create = add one to that object

		factory.remove = function(user) {

			$http.delete('/remove_user/' + user._id).success(function(output){
				if (output){
					users.splice(users.indexOf(user),1);
				}
			});
		}

		return factory;
	});