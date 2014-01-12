var module=angular.module("TodoModule",[]);
module.controller("TodoController",["$scope",function($scope){
	$scope.todoList=[{"text":"Go To Market","done":false},
					{"text":"Buy Vegetables","done":false}];

	$scope.addTodo=function(){
		if($scope.todoText){
			$scope.todoList.push({text:$scope.todoText,done:false});
			$scope.todoText="";
		}
		else{
			alert("Please enter todo message.");
		}
		
	}
	
	$scope.remaining=function(){
		var count=0;
		angular.forEach($scope.todoList,function(todo){
			count+=todo.done?0:1;
		});
		return count;
	}
	
	$scope.archive=function(){
		angular.forEach($scope.todoList,function(todo){
			if(todo.done){
				$scope.todoList.pop(todo);
			}
});
	}
}]);