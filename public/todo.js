var SCOPE;

function Music() {
	this.Name="test";
	this.Artist = "koko";
}

function TodoCtrl($scope) {
SCOPE=$scope;
  $scope.todos = [
    {text:'learn angular', done:true},
    {text:'build an angular app', done:false}];

  $scope.musics = [
		new Music(), new Music()
	];

$scope.test=[];

 
  $scope.addTodo = function() {
	SCOPE=$scope;    
$scope.todos.push({text:$scope.todoText, done:false});
var i;
	for (i=0;i <1000;i++) {
		$scope.test.push({text:i, done:false});
	}
//$scope.todos=$scope.test;
    $scope.todoText = '';
  };
 

$scope.lol = function () {
	$scope.todos=$scope.test;
}
  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };
 
  $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) $scope.todos.push(todo);
    });
  };
}
