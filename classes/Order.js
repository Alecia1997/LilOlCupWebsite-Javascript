/* 
Array of coffee objects in the order constructor. Loops through each coffee object and 
gets the price of each coffee (total of order) and the name of each coffee( that
goes all the way back to the ingredient constructor
*/

function Order() {
	
	this.coffee = [];
	
	Order.prototype.addCoffee = function(cof) {
		this.coffee.push(cof);
	};
	
	Order.prototype.getTotal = function() {
		var total = 0;
		for (var i = 0; i < this.coffee.length; i++) {
			total = total + this.coffee[i].getCoffeePrice();
		}
		
		return total;
	};
}

