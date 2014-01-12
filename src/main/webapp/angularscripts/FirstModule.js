var module=angular.module("FirstModule",[])
module.controller("FirstController", ['$scope', function($scope) {
	$scope.message="Hola";
}]);

module.controller("SecondController", ['$scope', function($scope) {

	$scope.$watch('num',_reaction);
	$scope.double=function(value){
		if(!value){
			return "Yet to enter number";
		}
		else{
			return value*2;
		}
		
	}
	function _reaction(num){
		if(!num) return;
		alert("num ::"+num);
	}
}]);

module.controller("ThirdController", ['$scope', function($scope){
	$scope.addNumbers=function(Value1,Value2){
			var c="";
			!Value1 && !Value2 ? alert("Please enter numbers to add!") : !Value1 ?  c= parseInt(Value2) : !Value2 ?  c= parseInt(Value1) : c=parseInt(Value1)+parseInt(Value2);
			return c;
	}
}]);