'use strict';

/**
 * @ngdoc function
 * @name retconWebsiteApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the retconWebsiteApp
 */
angular.module('retconWebsiteApp')
  .controller('HeaderCtrl', ['$scope', '$location', '$log', function ($scope, $location, $log) {
    $scope.isActive = function (path) {
      return path === $location.path();
    };
  }]);
