/*
-Do the "choose an extra ingredient" with tick boxes or radio buttons
implement code in jquery to prevent user from clicking for example both caramel syrup
and hazelnut syrup.
*/


function Coffee(size, style, ingredient, ingredient2, ingredient3, ingredient4) {
	//Array for ingredient objects
	this.size = size;
	this.style = style;
	this.ingredient = ingredient;
	this.ingredient2 = ingredient2;
	this.ingredient3 = ingredient3;
	this.ingredient4 = ingredient4;
}
	Coffee.prototype = Object.create(Ingredient.prototype);

	
	


	// determines the price of the coffee based on the size of the cup and initial ingredient
	Coffee.prototype.getSizePrice = function() {
		var ing1 = new Ingredient('Espresso');
		if (this.size === 'Short') {
			return 12 + ing1.getItemValue();
			this.ingredients.push(new Ingredient('Espresso'));
		} else if (this.size === 'Tall') {
			return 14 + ing1.getItemValue() * 2;
		} else if (this.size === 'Grande') {
			return 16 + ing1.getItemValue() * 3;
		}
	};

	//  determines the price of the coffee based on the style chosen and ingredient that accompanies it
	Coffee.prototype.getStylePrice = function() {
		var ing2 = new Ingredient('Cream');
		var ing3 = new Ingredient('Milk');
		var ing4 = new Ingredient('None');
		if (this.style === 'Cappuccino') {
			return ing2.getItemValue();
		} else if (this.style === 'Latte') {
			return ing3.getItemValue();
		} else if (this.style === 'Americano') {
			return ing4.getItemValue();
		} 
	};








		// Total price of the coffee
	Coffee.prototype.getCoffeePrice = function() {
		return this.getSizePrice() + this.getStylePrice() + this.getItemValue() + this.getItemValue2() + this.getItemValue3() + this.getItemValue4();
	}
		
		// Name of the coffee.
	Coffee.prototype.getCoffeeName = function() {
		return $("#coffeeCup").val() + " " + this.getItemName() + this.getItemName2()  + this.getItemName4() + $("#coffeeStyle").val() + this.getItemName3();
	}
		
	
