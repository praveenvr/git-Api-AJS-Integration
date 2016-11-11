(function(){

  'use strict';

angular.module('myApp.view1', ['ngRoute','resource'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])
.controller('View1Ctrl', function($scope, UserResource) {
  UserResource.getData().then(function(data){
    $scope.repoDetails = data;
  },function(data){
    $scope.statusMessage = data.statusText;
    if(data.status == -1){
      $scope.statusMessage = 'Not Responding';
    }
  });
});
}());