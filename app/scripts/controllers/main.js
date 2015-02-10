'use strict';

angular.module('everythingbuthamnersApp')
  .controller('MainCtrl', function ($scope, $log) {
    $log.log('Load Up Our Cart :)');
    $scope.awesomeThings = [
      {id:1, price: 42.00, quantity:200, name:'Hamners', desc:'OUT OF STOCK'},
      {id:2, price: 100.00, name:'Scew Drivers', desc:'Drive Your Screw'},
      {id:3, price: 250.00, name:'Buz Saw', desc:'Saw Your Buzzes'},
    ];
  });

