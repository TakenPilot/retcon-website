'use strict';

/**
 * @ngdoc function
 * @name retconWebsiteApp.controller:ServicesCtrl
 * @description
 * # ServicesCtrl
 * Controller of the retconWebsiteApp
 */
angular.module('retconWebsiteApp')
  .controller('ServicesCtrl', ['$scope', 'TemplateDecorator', function ($scope, TemplateDecorator) {
    TemplateDecorator.apply($scope);
  }]);
