board.controller('UserController', function($scope,UserFactory,$location) {

		UserFactory.index(function(data) {
		  $scope.users = data;

		});
		$scope.addCustomer = function() {
			UserFactory.create($scope.new_customer);
			$scope.new_customer = {};
		};

		$scope.deleteCustomer = function(customer) {
			UserFactory.remove(customer)
		}

		$scope.enter = function() {
			$scope.current_user = $scope.new_user.name
			$location.path('/dashboard/').search({current_user:$scope.current_user});
		}

	});