'use strict';

/**
 * @ngdoc service
 * @name everythingbuthamnersApp.ngCartItem
 * @description
 * # ngCartItem
 * Factory in the everythingbuthamnersApp.
 */

var ngCartItemFxn = function ($rootScope, store) {

  var item = function (id, name, price, quantity, data) {
      this.setId(id);
      this.setName(name);
      this.setPrice(price);
      this.setQuantity(quantity);
      this.setData(data);
    };

  item.prototype.setId = function(id){
      if (id) {
        this._id = id;
      }
      else {
        console.error('An ID must be provided');
      }
    };

  item.prototype.getId = function(){
      return this._id;
    };

  item.prototype.setName = function(name){
      if (name) {
        this._name = name;
      }
      else {
        console.error('A name must be provided');
      }
    };

  item.prototype.getName = function(){
      return this._name;
    };

  item.prototype.setPrice = function(price){
      var lprice = parseFloat(price);
      if (lprice) {
        if (lprice <= 0) {
          console.error('A price must be over 0');
        }
        this._price = (lprice);
      } else {
        console.error('A price must be provided');
      }
    };

  item.prototype.getPrice = function(){
      return this._price;
    };

  item.prototype.setQuantity = function(quantity, relative){
      var lquantity = parseInt(quantity);
      if (lquantity % 1 === 0){
        if (relative === true){
          this._quantity += lquantity;
        } else {
          this._quantity = lquantity;
        }
        if (this._quantity < 1) {
          this._quantity = 1;
        }

      } else {
        this._quantity = 1;
        console.info('Quantity must be an integer and was defaulted to 1');
      }
      $rootScope.$broadcast('ngCart:change', {});
    };

  item.prototype.getQuantity = function(){
      return this._quantity;
    };

  item.prototype.setData = function(data){
      if (data) {
        this._data = data;
      }
    };

  item.prototype.getData = function(){
      if (this._data){
        return this._data;
      }
      else {
        console.info('This item has no data');
      }
    };

  item.prototype.getTotal = function(){
      return this.getQuantity() * this.getPrice();
    };

  return item;

};

angular.module('everythingbuthamnersApp')
.factory('ngCartItem', ['$rootScope', 'store', ngCartItemFxn]);



//  .factory('ngCartItem', function () {
//    // Service logic
//    // ...
//
//    var meaningOfLife = 42;
//
//    // Public API here
//    return {
//      someMethod: function () {
//        return meaningOfLife;
//      }
//    };
//  });
