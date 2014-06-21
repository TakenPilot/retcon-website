'use strict';

/**
 * @ngdoc function
 * @name retconWebsiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the retconWebsiteApp
 */
angular.module('retconWebsiteApp')
  .controller('MainCtrl', ['$scope', 'TemplateDecorator', function ($scope, TemplateDecorator) {
    TemplateDecorator.apply($scope);
  }]);
