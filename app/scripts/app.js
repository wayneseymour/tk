'use strict';

var app = angular
  .module('tkApp', [
    // 'ngCookies',
    // 'ngResource',
    // 'ngSanitize',
    'ngRoute'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
app.service('SmithService',
  function() {
    this.getName = function(name) {
      return name + ' Smith';
    };
  }
);
