'use strict';

describe('Service: TemplateDecorator', function () {

  // load the service's module
  beforeEach(module('retconWebsiteApp'));

  // instantiate service
  var TemplateDecorator;
  beforeEach(inject(function (_TemplateDecorator_) {
    TemplateDecorator = _TemplateDecorator_;
  }));

  it('should do something', function () {
    expect(!!TemplateDecorator).toBe(true);
  });

});
