'use strict';

describe('myApp.view2 module', function() {

  beforeEach(module('myApp.view2'));
  beforeEach(module('resource'));

  describe('view2 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view2Ctrl = $controller('View2Ctrl');
      expect(view2Ctrl).toBeDefined();
    }));

    it('Get Single users', inject(function($http) {

      var $scope = {};
      var userName = 'praveenvr';
      $http.get("https://api.github.com/users/"+ userName).then(function(response){
        $scope.valid = true;
        $scope.result = response;
      },function(errorData){
        $scope.valid = false;
      });

      $httpBackend
          .expect('GET', 'https://api.github.com/users/'+ userName);

      expect($httpBackend.flush).not.toThrow();
      expect($scope.valid).toBe(true);

    }));

  });
});