'use strict';

/**
 * @ngdoc service
 * @name retconWebsiteApp.TemplateDecorator
 * @description
 * # TemplateDecorator
 * Service in the retconWebsiteApp.
 */
angular.module('retconWebsiteApp')
  .service('TemplateDecorator', ['$location', function TemplateDecorator($location) {
    return {
      apply: function ($scope) {
        $scope.go = function (path) {
          //TODO: handle moving outside of scope
          $location.path(path);
        };
      }
    };
  }]);
