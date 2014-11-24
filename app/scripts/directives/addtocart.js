'use strict';

/**
 * @ngdoc directive
 * @name everythingbuthamnersApp.directive:addtocart
 * @description
 * # addtocart
 */

var AddToCartFxn = function(ngCart){
  return {
      restrict : 'E',
      controller : 'CartController',
      scope: {
          id:'@',
          name:'@',
          quantity:'@',
          price:'@',
          data:'='
        },
        transclude: true,
        templateUrl: 'template/ngCart/addtocart.html',
        link:function(scope, element, attrs){
          scope.attrs = attrs;
          scope.inCart = function(){
              return ngCart.getItemById(attrs.id);
            };
        }
      };
};

angular.module('everythingbuthamnersApp')
  .directive('addtocart', ['ngCart', AddToCartFxn]);

//    return {
//      template: '<div></div>',
//      restrict: 'E',
//      link: function postLink(scope, element, attrs) {
//        element.text('this is the addtocart directive');
//      }
//    };
//  });
