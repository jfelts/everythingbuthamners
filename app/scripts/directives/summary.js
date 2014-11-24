'use strict';

/**
 * @ngdoc directive
 * @name everythingbuthamnersApp.directive:summary
 * @description
 * # summary
 */

var SummaryFxn = function(ngCart){
  return {
    restrict : 'E',
    controller : 'CartController',
    scope: {},
    transclude: true,
    templateUrl: 'template/ngCart/summary.html'
  };
};

angular.module('everythingbuthamnersApp')
  .directive('summary', ['ngCart', SummaryFxn]);
//    return {
//      template: '<div></div>',
//      restrict: 'E',
//      link: function postLink(scope, element, attrs) {
//        element.text('this is the summary directive');
//      }
//    };
//  });
