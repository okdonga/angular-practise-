var app = angular.module("jobPostingApp", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');
  // $locationProvider.html5Mode(true);

  $stateProvider

    .state('register', {
            url: '/register',
            templateUrl: 'login.html',
            controller: 'loginCtrl'

    })

    .state('jobs', {
            url: '/jobs',
            templateUrl: 'job.html',
            controller: 'mainCtrl'
            // authenticate: true
    })

    .state('job', {
            url: '/jobs/:jobId',
            templateUrl: 'job-partial.html',
            controller: 'mainCtrl',
            resolve: {
                job: function($stateParams) {
                    // console.log($stateParams);
                    var id = $stateParams.jobId;
                    // console.log(id);
                    return id;
                }
            }
    });
});