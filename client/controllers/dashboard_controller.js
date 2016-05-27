board.controller('DashboardController', function($scope,$location,$routeParams,ItemFactory,$window,$sce) {


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
};

// transition Start
function switchStart() {
  // update `scrolledPast` bool
  scrolledPast = false;
  // add/remove CSS classes
	$scope.into = false;
	$scope.start = true;
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

	$scope.htmlPopover = $sce.trustAsHtml('<div style="color:black">Test</div>');

  //carousel slides below.
  $scope.myInterval = 0;

      $scope.slides = [
        {
          image: 'http://images.performgroup.com/di/library/sporting_news/6c/3a/kobe-11_rwuzvx4yp7mx1bxmbufdo09s9.jpg?w=1920&h=1080&quality=100'
        },
        {
          image: 'http://sneakerhdwallpapers.com/wallpapers/2015/lebron-13-1920x1080-wallpaper.jpg'
        },
        {
          image: 'http://images.performgroup.com/di/library/sporting_news/f7/a8/kevin-durant-kd8-062315-ftr-nikejpg_1xhn93vs5u93t1g31d4pokz6x8.jpg?ggnoads'
        },
      ];



});
