(function() {
'use strict';

  angular.module('myFirstApp', [])

  .controller('MyFirstController', function($scope) {
    $scope.name = "Andrew"
    $scope.sayHello = function () {
      return "Hello Coursera!"
    }
  });

})();
