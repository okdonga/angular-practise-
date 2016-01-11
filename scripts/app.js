var app = angular.module("jobPostingApp", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

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
            url: '/jobs/:id',
            templateUrl: 'job-partial.html',
            controller: 'mainCtrl',
            resolve: {
                job: function($stateParams) {
                    // console.log($stateParams);
                    var id = $stateParams.id;
                    // console.log(id);
                    return id;
                }
            }
    });
});