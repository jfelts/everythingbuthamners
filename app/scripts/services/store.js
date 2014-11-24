'use strict';

/**
 * @ngdoc service
 * @name everythingbuthamnersApp.store
 * @description
 * # store
 * Service in the everythingbuthamnersApp.
 */
var StoreFxn = function ($window) {
  return {
      get: function (key) {
          if ($window.localStorage [key]) {
            var cart = angular.fromJson($window.localStorage [key]);
            return JSON.parse(cart);
          }
          return false;

        },


      set: function (key, val) {

          if (val === undefined) {
            $window.localStorage .removeItem(key);
          } else {
            $window.localStorage [key] = angular.toJson(val);
          }
          return $window.localStorage [key];
        }
    };
};

angular.module('everythingbuthamnersApp')
  .service('store', ['$window', StoreFxn]);
