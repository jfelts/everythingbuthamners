"use strict";angular.module("everythingbuthamnersApp",["ngCookies","ngResource","ngSanitize","ngRoute","ngCart"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]).provider("$ngCart",function(){this.$get=function(){}}).run(["$rootScope","ngCart","ngCartItem","store",function(a,b,c,d){a.$on("ngCart:change",function(){b.$save()}),angular.isObject(d.get("cart"))?b.$restore(d.get("cart")):b.init()}]),angular.module("everythingbuthamnersApp").controller("MainCtrl",["$scope","$log",function(a,b){b.log("Load Up Our Cart :)"),a.awesomeThings=[{id:1,price:42,name:"Hamners",desc:"OUT OF STOCK"},{id:2,price:100,name:"Scew Drivers",desc:"Drive Your Screw"},{id:3,price:250,name:"Buz Saw",desc:"Saw Your Buzzes"}]}]),angular.module("ngCart.directives",[]).controller("CartController",["$scope","ngCart",function(a,b){a.ngCart=b}]).directive("addtocart",["ngCart",function(a){return{restrict:"E",controller:"CartController",scope:{id:"@",name:"@",quantity:"@",price:"@",data:"="},transclude:!0,templateUrl:"template/ngCart/addtocart.html",link:function(b,c,d){b.attrs=d,b.inCart=function(){return a.itemInCart(d.id)}}}}]).directive("cart",["ngCart",function(){return{restrict:"E",controller:"CartController",scope:{},templateUrl:"template/ngCart/cart.html",link:function(){}}}]).directive("summary",["ngCart",function(){return{restrict:"E",controller:"CartController",scope:{},transclude:!0,templateUrl:"template/ngCart/summary.html"}}]),angular.module("ngCart",["ngCart.directives"]).config([function(){}]).provider("$ngCart",function(){this.$get=function(){}}).run(["$rootScope","ngCart","ngCartItem","store",function(a,b,c,d){a.$on("ngCart:change",function(){b.$save()}),angular.isObject(JSON.parse(d.get("cart")))?b.$restore(JSON.parse(d.get("cart"))):b.init()}]).service("ngCart",["$rootScope","ngCartItem","store",function(a,b,c){this.init=function(){this.$cart={shipping:null,tax:null,items:[]}},this.addItem=function(c,d,e,f,g){var h=this.itemInCart(c);if(h!==!1)this.quantity(h.setQuantity(1,!0));else{var i=new b(c,d,e,f,g);this.$cart.items.push(i)}a.$broadcast("ngCart:itemAdded",i),a.$broadcast("ngCart:change",{})},this.itemInCart=function(a){var b=_.find(this.getCart().items,{_id:a});return void 0===b?!1:b},this.setShipping=function(a){this.$cart.shipping=a},this.getShipping=function(){return 0==this.getCart().items.length?0:this.getCart().shipping},this.setTax=function(a){this.$cart.tax=a},this.getTax=function(){return this.getSubTotal()/100*this.getCart().tax},this.setCart=function(a){this.$cart=a},this.getCart=function(){return this.$cart},this.getItems=function(){return this.getCart().items},this.totalItems=function(){return this.getCart().items.length},this.getSubTotal=function(){var a=0;return angular.forEach(this.getCart().items,function(b){a+=b.getTotal()}),a},this.totalCost=function(){return this.getSubTotal()+this.getShipping()+this.getTax()},this.removeItem=function(b){this.$cart.items.splice(b,1),a.$broadcast("ngCart:itemRemoved",{}),a.$broadcast("ngCart:change",{})},this.empty=function(){this.$cart.items=[],localStorage.removeItem("cart")},this.$restore=function(a){var c=this;c.init(),c.$cart.shipping=a.shipping,c.$cart.tax=a.tax,angular.forEach(a.items,function(a){c.$cart.items.push(new b(a._id,a._name,a._price,a._quantity,a._data))}),this.$save()},this.$save=function(){return c.set("cart",JSON.stringify(this.getCart()))}}]).factory("ngCartItem",["$rootScope","store",function(a){var b=function(a,b,c,d,e){this.setId(a),this.setName(b),this.setPrice(c),this.setQuantity(d),this.setData(e)};return b.prototype.setId=function(a){a?this._id=a:console.error("An ID must be provided")},b.prototype.getId=function(){return this._id},b.prototype.setName=function(a){a?this._name=a:console.error("A name must be provided")},b.prototype.getName=function(){return this._name},b.prototype.setPrice=function(a){var a=parseFloat(a);a?(0>=a&&console.error("A price must be over 0"),this._price=a):console.error("A price must be provided")},b.prototype.getPrice=function(){return this._price},b.prototype.setQuantity=function(b,c){var b=parseInt(b);b%1===0?(c===!0?this._quantity+=b:this._quantity=b,this._quantity<1&&(this._quantity=1)):(this._quantity=1,console.info("Quantity must be an integer and was defaulted to 1")),a.$broadcast("ngCart:change",{})},b.prototype.getQuantity=function(){return this._quantity},b.prototype.setData=function(a){a&&(this._data=a)},b.prototype.getData=function(){return this._data?this._data:void console.info("This item has no data")},b.prototype.getTotal=function(){return this.getQuantity()*this.getPrice()},b}]).service("store",["$window",function(a){return{get:function(b){return a.localStorage[b]?angular.fromJson(a.localStorage[b]):!1},set:function(b,c){return void 0===c?a.localStorage.removeItem(b):a.localStorage[b]=angular.toJson(c),a.localStorage[b]}}}]).controller("CartController",["$scope","ngCart",function(a,b){a.ngCart=b}]).value("version","0.0.1-rc.2");