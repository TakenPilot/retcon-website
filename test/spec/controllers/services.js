'use strict';

describe('Controller: ServicesCtrl', function () {

  // load the controller's module
  beforeEach(module('retconWebsiteApp'));

  var ServicesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServicesCtrl = $controller('ServicesCtrl', {
      $scope: scope
    });
  }));

  it('should exist', function () {
    expect(!!ServicesCtrl).toBe(true);
  });
});
