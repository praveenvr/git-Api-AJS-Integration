'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));
  beforeEach(module('resource'));

  beforeEach(inject(function() {
    var $injector = angular.injector(['resource']);
    UserResource = $injector.get('UserResource');
  }));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl');
      expect(view1Ctrl).toBeDefined();
    }));

    it('Get All users', inject(function($http, UserResource) {

      var $scope = {};


      UserResource.getData().then(function(data){
        $scope.repoDetails = data;
      },function(data){
        $scope.statusMessage = data.statusText;
        if(data.status == -1){
          $scope.statusMessage = 'Not Responding';
        }
      });

      $httpBackend
          .when('GET', 'https://api.github.com/users')
          .respond(200);

      $httpBackend
          .expect('GET', 'https://api.github.com/users');

      expect($httpBackend.flush).not.toThrow();

    }));

  });
});