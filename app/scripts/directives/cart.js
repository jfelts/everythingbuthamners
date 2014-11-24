'use strict';

/**
 * @ngdoc directive
 * @name everythingbuthamnersApp.directive:cart
 * @description
 * # cart
 */
var CartFxn = function(ngCart){
  return {
    restrict : 'E',
    controller : 'CartController',
    scope: {},
    templateUrl: 'template/ngCart/cart.html',
    link:function(scope, element, attrs){
    }
  };
};

angular.module('everythingbuthamnersApp')
  .directive('cart', ['ngCart', CartFxn]);

//    return {
//      template: '<div></div>',
//      restrict: 'E',
//      link: function postLink(scope, element, attrs) {
//        element.text('this is the cart directive');
//      }
//    };
//  });
