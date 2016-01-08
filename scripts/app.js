var app = angular.module("jobPostingApp", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('jobs', {
            url: '/jobs',
            templateUrl: 'job.html',
            controller: 'mainCtrl'

    })

    .state('register', {
            url: '/register',
            templateUrl: 'login.html',
            controller: 'loginCtrl'

    })

});