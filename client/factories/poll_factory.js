board.factory('PollFactory', function($http) {
		var factory = {};
		var polls = [];
		var current_poll;


		factory.index = function(callback) {
			$http.get('/polls').success(function(output) {
			polls = output;
			callback(polls);
			}) 
		};

	

		factory.create = function(poll,error_callback) {
			$http.post('/create_poll',poll).success(function(created_poll){
				if (created_poll.errors){
					error_callback(created_poll.errors.errors)
				}
				else{
					polls.push(created_poll)
					error_callback({success:"Poll Created"});
				}
			})
		}


		factory.remove = function(poll) {

			$http.delete('/remove_poll/' + poll._id).success(function(output){
				if (output){
					polls.splice(polls.indexOf(polls),1);
				}
			});
		}

		factory.get_poll = function(id,callback) {
			$http.get('/get_poll/' + id).success(function(output) {
			current_poll = output;
			callback(output);
			}) 
		}

		factory.update = function(poll) {
			$http.post('/update',poll).success(function(updated_poll){
				
			})
		}

		return factory;
	});