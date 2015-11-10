    var app = angular.module('myApp',[]);
	//给应用程序中添加一个service组件
    app.service('serviceServices',function($http){
       var services={};
        services.request=function(){
            myUrl ="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1&callback=JSON_CALLBACK";
            return $http.jsonp(myUrl);
        };
       return services;
    })
	
	//注入service组件
    app.controller('firstController',['$scope','serviceServices',function($scope,serviceServices){
        
        $scope.data='';
        serviceServices.request().success(function(data){
            $scope.data=data.result;
        });
        
    }]);
