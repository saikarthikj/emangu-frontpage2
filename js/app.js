var emanguApp = angular.module('emanguApp', ['ngRoute','frontPageControllers']);

emanguApp.config(function($routeProvider) {
    $routeProvider.
      when('/frontpage', {
        templateUrl: 'partials/frontpage.html'
      }).
      otherwise({
        redirectTo: '/frontpage'
      });
  });