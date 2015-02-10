'use strict';

angular.module('everythingbuthamnersApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngCart'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

//  .provider('$ngCart', function () {
//      var shipping = false;
//      var tax = false;
//      this.$get = function () {
//
//      };
//    })
//
//  .run(['$rootScope', 'ngCart','ngCartItem', 'store', function ($rootScope, ngCart, ngCartItem, store) {
//      $rootScope.$on('ngCart:change', function(){
//          ngCart.$save();
//        });
//
//      if (angular.isObject(store.get('cart'))) {
//        ngCart.$restore(store.get('cart'));
//      } else {
//        ngCart.init();
//      }
//
//    }]);
