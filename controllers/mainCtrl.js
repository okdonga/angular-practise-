app.controller('mainCtrl', function($scope) {

  $scope.model = {
    jobs: [{
      id: 0,
      title: "Junior web developer",
      company: "Uber",
      description: "asdfasefasdf"
    }, {
      id: 1,
      title: "Java developer",
      company: "Twitter",
      description: "asdfasefasdf"
    }, {
      id: 2,
      title: "Rails developer",
      company: "Google",
      description: "asdfasefasdf"
    }]
  };

  // $scope.detail = $scope.model.jobs[$routeParams.id];

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

