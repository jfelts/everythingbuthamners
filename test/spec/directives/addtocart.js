'use strict';

describe('Directive: addtocart', function () {

  // load the directive's module
  beforeEach(module('everythingbuthamnersApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<addtocart></addtocart>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the addtocart directive');
  }));
});
