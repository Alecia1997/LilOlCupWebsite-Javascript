/* calling from a factory (so that (this) does not get interpreted wrong*/


function CoffeeShopFactory() {}
CoffeeShopFactory.prototype.createIngredient = function(name, ingredient, ingredient2, ingredient3, ingredient4) {
	return new Ingredient(name, ingredient, ingredient2, ingredient3, ingredient4);
};

CoffeeShopFactory.prototype.createCoffee = function(size, style, ingredient, ingredient2, ingredient3, ingredient4) {
	return new Coffee(size, style, ingredient, ingredient2, ingredient3, ingredient4);
};

CoffeeShopFactory.prototype.createOrder = function() {
	return new Order();
};

CoffeeShopFactory.prototype.createEmployeeOrder = function() {
	return new EmployeeOrder();
};