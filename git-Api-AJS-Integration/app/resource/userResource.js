(function(){

    var UserResource = function($http){
        //$http.defaults.useXDomain = true;
        var values, userValues = [];
        var getData = function(){
            return $http.get("https://api.github.com/users");
        };
        var getSingleUser = function(uId){
            return $http.get("https://api.github.com/users/"+ uId );
        };
        var getRepo = function(repoUrl){
            return $http.get(repoUrl);
        }

        return {
            getData: getData,
            getSingleUser: getSingleUser,
            getRepo: getRepo
        };
    };

    angular.module('resource',[]).factory("UserResource",UserResource);

}());
