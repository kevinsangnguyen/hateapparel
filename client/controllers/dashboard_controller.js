board.controller('DashboardController', function($scope,$location,$routeParams,ItemFactory,$window) {


scrolling = false,
scrolledPast = false;
$scope.into = false;
$scope.start = true;

// transition Into
function switchInto() {
  // update `scrolledPast` bool
  scrolledPast = true;
  // add/remove CSS classes
	$scope.start= false;
	$scope.into = true;
  console.log('into transition triggered!');
};

// transition Start
function switchStart() {
  // update `scrolledPast` bool
  scrolledPast = false;
  // add/remove CSS classes
	$scope.into = false;
	$scope.start = true;
  console.log('start transition triggered!');
}

// set `scrolling` to true when user scrolls
angular.element($window).bind("scroll", function() {
	scrolling = true;
	$scope.$apply();
});

setInterval(function () {
  // when `scrolling` becomes true...
  if (scrolling) {
    // set it back to false
    scrolling = false;
    // check scroll position
	angular.element($window).bind("scroll", function() {
  	if (this.pageYOffset > 200 || this.pageYOffset < -200) {
			if (!scrolledPast) {
        switchInto();
      }
		}
		else {
			if (scrolledPast) {
 			 switchStart();
 		 }
	 	}
   $scope.$apply();
 });
  };
  // take a breath.. hold event listener from firing for 100ms
}, 100);


});

