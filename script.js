var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
	//给Model对象的属性值赋值
    $scope.firstName= "John";
    $scope.lastName= "Doe";
});
