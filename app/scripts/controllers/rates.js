'use strict';

/**
 * @ngdoc function
 * @name retconWebsiteApp.controller:RatesCtrl
 * @description
 * # RatesCtrl
 * Controller of the retconWebsiteApp
 */
angular.module('retconWebsiteApp')
  .controller('RatesCtrl', ['$scope', 'TemplateDecorator', function ($scope, TemplateDecorator) {
    TemplateDecorator.apply($scope);
  }]);
