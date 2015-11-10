    var app = angular.module('myApp',[]);
	//��Ӧ�ó��������һ��service���
    app.service('serviceServices',function($http){
       var services={};
        services.request=function(){
            myUrl ="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1&callback=JSON_CALLBACK";
            return $http.jsonp(myUrl);
        };
       return services;
    })
	
	//ע��service���
    app.controller('firstController',['$scope','serviceServices',function($scope,serviceServices){
        
        $scope.data='';
        serviceServices.request().success(function(data){
            $scope.data=data.result;
        });
        
    }]);
