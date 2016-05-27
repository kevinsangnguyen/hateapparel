board.controller('storeController', function($scope){
	
	var imgPath = "./images/";
	
	$scope.menproducts = [ 
		{
			name : "Classic T-Shirt",
			price: "25",
			description : "100% cotton shirt Bleh Bleh",
			canPurchase : false,
			soldOut : true,
			image : imgPath + "menshirt.jpg"
		},
		{
			name : "Fitted T-Shirt",
			price: "25",
			description : "100% cotton shirt Bleh Bleh",
			canPurchase : true,
			soldOut : false,
			image : imgPath + "menshirt.jpg"
		},
		{
			name : "Oversized Hoodie",
			price: "35",
			description : "Bleh Bleh Bleh",
			canPurchase : true,
			soldOut : false,
			image : imgPath + "menshirt.jpg"
		}
	]

  $scope.class = "thumb";
  $scope.changeClass = function($scope){
    if ($scope.class === "thumb")
      $scope.class = "full";
    else
      $scope.class = "thumb";
  };
});