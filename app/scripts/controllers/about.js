'use strict';

/**
 * @ngdoc function
 * @name retconWebsiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the retconWebsiteApp
 */
angular.module('retconWebsiteApp')
  .controller('AboutCtrl', ['$scope', 'TemplateDecorator', function ($scope, TemplateDecorator) {
    TemplateDecorator.apply($scope);
  }]);
