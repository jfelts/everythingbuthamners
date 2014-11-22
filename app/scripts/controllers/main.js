'use strict';

angular.module('everythingbuthamnersApp')
  .controller('MainCtrl', function ($scope, $log) {
    $log.log('Load Up Our Cart :)');
    $scope.awesomeThings = [
      {name:'Hamners', desc:'OUT OF STOCK'},
      {name:'Scew Drivers', desc:'Drive Your Screw'},
      {name:'Buz Saw', desc:'Saw Your Buzzes'},
    ];
  });

