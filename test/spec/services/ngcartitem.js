'use strict';

describe('Service: ngCartItem', function () {

  // load the service's module
  beforeEach(module('everythingbuthamnersApp'));

  // instantiate service
  var ngCartItem;
  beforeEach(inject(function (_ngCartItem_) {
    ngCartItem = _ngCartItem_;
  }));

  it('should do something', function () {
    expect(!!ngCartItem).toBe(true);
  });

});
