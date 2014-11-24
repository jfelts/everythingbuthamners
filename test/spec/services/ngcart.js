'use strict';

describe('Service: ngCart', function () {

  // load the service's module
  beforeEach(module('everythingbuthamnersApp'));

  // instantiate service
  var ngCart;
  beforeEach(inject(function (_ngCart_) {
    ngCart = _ngCart_;
  }));

  it('should do something', function () {
    expect(!!ngCart).toBe(true);
  });

});
