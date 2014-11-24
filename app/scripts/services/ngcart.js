'use strict';

/**
 * @ngdoc service
 * @name everythingbuthamnersApp.ngCart
 * @description
 * # ngCart
 * Service in the everythingbuthamnersApp.
 */

// AngularJS will instantiate a singleton by calling "new" on this function
var ngCartFxn = function ($rootScope, ngCartItem, store){
  this.init = function(){
    this.$cart = {
        shipping : null,
        tax : null,
        items : []
      };
  };

  this.addItem = function (id, name, price, quantity, data) {

    var inCart = this.getItemById(id);
    var newItem = null;

    if (typeof inCart === 'object'){
      this.quantity(inCart.setQuantity(1, true));
    } else {
      newItem = new ngCartItem(id, name, price, quantity, data);
      this.$cart.items.push(newItem);
    }
    $rootScope.$broadcast('ngCart:itemAdded', newItem);
    $rootScope.$broadcast('ngCart:change', {});
  };

  this.getItemById = function (itemId) {
    var items = this.getCart().items;

    var build;
    angular.forEach(items, function (item) {
        if  (item.getId() === itemId) {
          build = item;
        }
      });
    return build;
  };

  this.setShipping = function(shipping){
    this.$cart.shipping = shipping;
  };

  this.getShipping = function(){
    if (this.getCart().items.length === 0) {
      return 0;
    }
    return  this.getCart().shipping;
  };

  this.setTax = function(tax){
    this.$cart.tax = tax;
  };

  this.getTax = function(){
    return ((this.getSubTotal()/100) * this.getCart().tax );
  };

  this.setCart = function (cart) {
    this.$cart = cart;
  };

  this.getCart = function(){
    return this.$cart;
  };

  this.getItems = function(){
    return this.getCart().items;
  };

  this.totalItems = function () {
    return this.getCart().items.length;
  };

  this.getSubTotal = function(){
    var total = 0;
    angular.forEach(this.getCart().items, function (item) {
        total += item.getTotal();
      });
    return total;
  };

  this.totalCost= function () {
    return this.getSubTotal() + this.getShipping() + this.getTax();
  };

  this.removeItem = function (index) {
    this.$cart.items.splice(index, 1);
    $rootScope.$broadcast('ngCart:itemRemoved', {});
    $rootScope.$broadcast('ngCart:change', {});

  };

  this.empty = function () {
    this.$cart.items = [];
    localStorage.removeItem('cart');
  };


  this.$restore = function(storedCart){
    var _self = this;
    _self.init();
    _self.$cart.shipping = storedCart.shipping;
    _self.$cart.tax = storedCart.tax;

    angular.forEach(storedCart.items, function (item) {
        _self.$cart.items.push(new ngCartItem(item._id,  item._name, item._price, item._quantity, item._data));
      });
    this.$save();
  };

  this.$save = function () {
    return store.set('cart', JSON.stringify(this.getCart()));
  };
};


angular.module('everythingbuthamnersApp')
  .service('ngCart', ['$rootScope', 'ngCartItem', 'store', ngCartFxn]);
