app.controller('mainCtrl', function($scope) {
  $scope.model = {
    jobs: [{
      id: 0,
      title: "Junior web developer",
      company: "Uber"
    }, {
      id: 1,
      title: "Java developer",
      company: "Twitter"
    }, {
      id: 2,
      title: "Rails developer",
      company: "Google"
    }],
    selected: {}
  };

  // Like particular job
  $scope.like = function(index) {
    console.log("you like this job" + index);
    console.log($scope.model.selected);
    console.log($scope.model.jobs[index]);
    $scope.model.jobs[index].like = true;
    console.log($scope.model.jobs[index]);
    // add class to indicate like
  };

  // Dislike particular job
  $scope.dislike = function(index) {
    console.log("you do not like this job");
    $scope.model.jobs[index].like = false;
    console.log($scope.model.jobs[index]);
  };
});

