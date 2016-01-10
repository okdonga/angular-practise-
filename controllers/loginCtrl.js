app.controller('loginCtrl', function($scope, $location) {
  $scope.master = {};

  $scope.save = function(user, loginForm) {
    $scope.master = angular.copy(user);
    console.log(loginForm);
    if (loginForm.$valid) {
      $location.path("/jobs");
    };
  };
});