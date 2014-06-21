'use strict';

/**
 * @ngdoc overview
 * @name retconWebsiteApp
 * @description
 * # retconWebsiteApp
 *
 * Main module of the application.
 */
angular
  .module('retconWebsiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/services', {
        templateUrl: 'views/services.html',
        controller: 'ServicesCtrl'
      })
      .when('/rates', {
        templateUrl: 'views/rates.html',
        controller: 'RatesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
