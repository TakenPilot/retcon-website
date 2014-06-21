/*global sinon, _*/
'use strict';

describe('Controller: HeaderCtrl', function () {

  // load the controller's module
  beforeEach(module('retconWebsiteApp'));

  var HeaderCtrl, $location,
    scope, sandbox;

  // Initialize the controller and a mock scope
  beforeEach(function () {
    $location = { path: _.noop };
    sandbox = sinon.sandbox.create();

    module(function($provide) {
      $provide.value('$location', $location);
    });

    inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();

      HeaderCtrl = $controller('HeaderCtrl', {
        $scope: scope
      });
    })
  });

  afterEach(function () {
    sandbox.restore();
  })

  it('should exist', function () {
    expect(!!HeaderCtrl).toBe(true);
  });

  it('should be active if path matches location', function () {
    var testValue = 'testValue';

    sandbox.stub($location, 'path').returns(testValue)

    expect(scope.isActive(testValue)).toBe(true);
  });
});
