function Ingredient(ingredient, ingredient2, ingredient3, ingredient4 ) {
	//defining the parameter.
	this.ingredient = ingredient;
	this.ingredient2 = ingredient2;
	this.ingredient3 = ingredient3;
	this.ingredient4 = ingredient4;

}
	//method to determine the price of each ingredient.
	Ingredient.prototype.getItemValue = function() {
		if(this.ingredient === 'Espresso') {
			return 0.75;
		}else if(this.ingredient === '1 please') {
			return 0.20;
		} else if(this.ingredient === '2 please') {
			return 0.40;
		} else if(this.ingredient === 'Cream') {
			return 1;
		} else if(this.ingredient === 'Milk') {
			return 0.50;
		} else if(this.ingredient === 'None') {
			return 0;
		}
	}
	Ingredient.prototype.getItemValue2 = function() {
		if(this.ingredient2 === 'Caramel') {
			return 5;
		} else if(this.ingredient2 === 'Hazelnut') {
			return 5;
		} else if(this.ingredient2 === 'None') {
			return 0;
		}
	}
	Ingredient.prototype.getItemValue3 = function() {
		if(this.ingredient3 === 'Cream') {
			return 1;
		} else if(this.ingredient3 === 'Milk') {
			return 0.50;
		} else if(this.ingredient3 === 'None') {
			return 0;
		}
	}
	Ingredient.prototype.getItemValue4 = function() {
		if(this.ingredient4 === '1 extra shot') {
			return 0.75;
		} else if(this.ingredient4 === '2 extra shots') {
			return 1.50;
		} else if(this.ingredient4 === '3 extra shots') {
			return 2.25;
		} else if(this.ingredient4 === 'None') {
			return 0;
		}
	}
		
// You can do something similiar -like what you did in class notes 1.
// You can have if statements. But it's going to be really long.
// method to determine the name conditions of each ingredient.
	Ingredient.prototype.getItemName = function() {
		if(this.ingredient === '1 please') { 
			return " Sweet ";
		} else if(this.ingredient === '2 please') { 
			return " Very Sweet ";
		} else if(this.ingredient === 'None') {
			return "";
		}
	}
		Ingredient.prototype.getItemName2 = function() {
		if(this.ingredient2 === 'Caramel') {
			return " Caramel ";
		} else if(this.ingredient2 === 'Hazelnut') {
			return " Hazelnut ";
		} else if(this.ingredient2 === 'None') {
			return "";
		}
		}
		Ingredient.prototype.getItemName3 = function() {
			if( this.ingredient3 === 'Milk') {
			return " with  milk ";
		} else if(this.ingredient3 === 'Cream') {
			return " with  cream ";
		} else if(this.ingredient3 === 'None') {
			return "";
		}
		}
			Ingredient.prototype.getItemName4 = function() {
			if(this.ingredient4 === '1 extra shot') {
			return " Redeye ";
		}else if(this.ingredient4 === '2 extra shots') {
			return " Redeye ";
		}else if(this.ingredient4 === '3 extra shots') {
			return " Redeye ";
		}else if(this.ingredient4 === 'None') {
			return "";
		}
		}
		// Americano without milk or cream condition name = Black coffee.
		// two spoons of sugar condition name
		//the price of the ingredient sugar needs to be multiplied by 2 