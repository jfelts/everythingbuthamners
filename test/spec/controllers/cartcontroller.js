'use strict';

describe('Controller: CartcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('everythingbuthamnersApp'));

  var CartcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CartcontrollerCtrl = $controller('CartcontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
