board.controller('DashboardController', function($scope,$location,$routeParams,UserFactory,PollFactory) {

	$scope.new_poll = {};

	if ($routeParams.current_user)
	{
		$scope.current_user = $routeParams.current_user;
		UserFactory.current_user($scope.current_user)
	}
	else 
	{
		UserFactory.get_current_user(function (data){
			$scope.current_user = data;
		})
	}

	PollFactory.index(function(data){
		$scope.polls = data;
	})

	$scope.create_poll = function() {
		$scope.new_poll.user_name = $scope.current_user;
		PollFactory.create($scope.new_poll,function(errors) {
			if(errors.success)
				{
					$location.path('/dashboard/');
				}
			else 
				{
					$scope.errors = errors;
				}
		})
	}

	$scope.delete = function (poll){
		PollFactory.remove(poll)

	}

	if($routeParams._id){
		PollFactory.get_poll($routeParams._id,function(poll){
			$scope.current_poll = poll;
			$scope.current_poll.options = [$scope.current_poll.option1,$scope.current_poll.option2,$scope.current_poll.option3,$scope.current_poll.option4]
		})

			$scope.upvote1 = function() {
				
				$scope.current_poll.option1.votes += 1
				PollFactory.update($scope.current_poll)
			}
			$scope.upvote2 = function() {
				$scope.current_poll.option2.votes += 1
				PollFactory.update($scope.current_poll)
			}
			$scope.upvote3 = function() {
				$scope.current_poll.option3.votes += 1
				PollFactory.update($scope.current_poll)
			}
			$scope.upvote4 = function() {
				$scope.current_poll.option4.votes += 1
				PollFactory.update($scope.current_poll)
			}
	}







});