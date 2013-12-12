'use strict';

angular.module('jasiApp', [
  'ngRoute',
  'ngResource',
  'ngSanitize',
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    window.$('body').niceScroll({touchbehavior:true, bouncescroll:true});
  });
