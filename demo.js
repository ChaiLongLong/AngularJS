    var app = angular.module('myApp',[]);

    app.service('serviceServices',function($http){
       var services={};
        services.request=function(){
            myUrl ="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1&callback=JSON_CALLBACK";
            return $http.jsonp(myUrl);
        };
       return services;
    })


    app.controller('firstController',['$scope','serviceServices',function($scope,serviceServices){
        
        $scope.data='';
        serviceServices.request().success(function(data){
            $scope.data=data.result;
        });
        
    }]);
