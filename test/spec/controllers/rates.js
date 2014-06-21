'use strict';

describe('Controller: RatesCtrl', function () {

  // load the controller's module
  beforeEach(module('retconWebsiteApp'));

  var RatesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RatesCtrl = $controller('RatesCtrl', {
      $scope: scope
    });
  }));

  it('should exist', function () {
    expect(!!RatesCtrl).toBe(true);
  });
});
