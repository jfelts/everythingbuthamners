'use strict';

angular.module('vsliveAngularApp')
  .controller('MainCtrl', function ($scope, $log) {
    $log.log("Called MainCtrl");
    $scope.awesomeThings = [
      {name:'chris Blazek', desc:'test 1'},
      {name:'amy Blazek', desc:'test 2'},
      {name:'andrew Blazek', desc:'test 3'},
      {name:'ethan Blazek', desc:'test 4'}
    ];
  });
