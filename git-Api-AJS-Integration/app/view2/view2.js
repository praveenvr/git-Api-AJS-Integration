(function() {
  'use strict';

  angular.module('myApp.view2', ['ngRoute','resource'])

      .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
          templateUrl: 'view2/view2.html',
          controller: 'View2Ctrl'
        });
      }])

      .controller('View2Ctrl', function ($scope, UserResource) {
          $scope.userName = '';
          $scope.errorOccured = false;

          $scope.searchUser = function(){
              if($scope.userName){
                  UserResource.getSingleUser($scope.userName).then(function(response){
                      $scope.singleUser = response.data;

                      var repoUrl = response.data.repos_url;
                      UserResource.getRepo(repoUrl).then(function(response){
                        $scope.repos = response.data;
                      },function(data){
                          $scope.repoStatusMessage = data.statusText;
                      });

                  },function(data){
                      $scope.errorOccured = true;
                      if(data.status === -1){
                          $scope.statusMessage = 'Empty Response';
                      }
                      $scope.statusMessage = data.statusText;
                  });
              }
          }
      });
}());