app.controller('mainCtrl', function($scope, $stateParams) {

  $scope.model = {
    jobs: [{
      id: 0,
      title: "Junior web developer",
      company: "Uber",
      description: "Details description of Junior web developer for Uber"
    }, {
      id: 1,
      title: "Java developer",
      company: "Twitter",
      description: "Details description of Java Developer for Twitter"
    }, {
      id: 2,
      title: "Rails developer",
      company: "Google",
      description: "Details description of Rails developer for Google"
    }]
  };

  // specific job page
  var ctrl = this;
  $scope.jobId = $stateParams.id;

  // Like particular job
  $scope.like = function(index) {
    $scope.model.jobs[index].like = true;
  };

  // Dislike particular job
  $scope.dislike = function(index) {
    $scope.model.jobs[index].like = false;
  };

});

