var fs = require("fs");
/* Source files start here */
source = fs.readFileSync("classes/Ingredient.js", "utf-8");
eval(source);
source = fs.readFileSync("classes/Coffee.js", "utf-8");
eval(source);
source = fs.readFileSync("classes/Order.js", "utf-8");
eval(source);
source = fs.readFileSync("classes/EmployeeOrder.js", "utf-8");
eval(source);
/* Source files end here */

describe("ordered coffees", function() {
	describe("Coffee", function() {
		it("has a price determined by the size, style, ingredient, ingredient2, ingredient3, ingredient4", function() {
			var coffee = new Coffee("Tall", "Latte", "Sugar", "Caramel", "Cream", "1 extra shot");
			expect (coffee.getCoffeePrice()).toBe(22.95);
		});
	
	
		it("has a name determined by  size, style, ingredient, ingredient2, ingredient3, ingredient4", function() {
			var coffee = new Coffee("Tall", "Latte", "Sugar", "Caramel", "Cream", "1 extra shot");
			expect (coffee.getCoffeeName()).toBe("Tall Sweet Caramel Redeye Latte with cream");
		});
		
		it("pushes a new Coffee object into the coffee array", function() {
			var order = new Order();
			order.addCoffee(new Coffee("Tall", "Latte", "Sugar", "Caramel", "Cream", "1 extra shot"));
			expect(order.coffee.length).toBe([0]);
		});
	});
});
							
	
									