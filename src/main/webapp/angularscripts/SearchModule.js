var module=angular.module('SearchModule', []);
module.controller("SearchController",["$scope",function($scope){
	$scope.playersName=[
						{"Name":"Rooney",
						 "Profession":"Footballer"},
						{"Name":"Sachin",
						 "Profession":"Cricketer"},
						{"Name":"Messi",
						 "Profession":"Footballer"}];
}]);
 /* setup: function() {
    // setup for SearchController 
 []);},
  teardown: function() {
    //teardown for SearchController
  []);*/
