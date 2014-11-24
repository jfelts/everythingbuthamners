'use strict';

/**
 * @ngdoc function
 * @name everythingbuthamnersApp.controller:CartcontrollerCtrl
 * @description
 * # CartcontrollerCtrl
 * Controller of the everythingbuthamnersApp
 */

var CartControllerFxn = function($scope, ngCart){
  $scope.ngCart = ngCart;
};

angular.module('everythingbuthamnersApp')
  .controller('CartController', ['$scope', 'ngCart', CartControllerFxn]);
