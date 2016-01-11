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

  var ctrl = this;
  ctrl.jobId = $stateParams.jobId;
  $scope.detail = ctrl.jobId

  // Like particular job
  $scope.like = function(index) {
    $scope.model.jobs[index].like = true;
    // add class to indicate like
  };

  // Dislike particular job
  $scope.dislike = function(index) {
    $scope.model.jobs[index].like = false;
  };

  $scope.jobid = function(id) {
    $scope.idNum = $scope.model.jobs[id];
    console.log($scope.idNum);

  }
});

