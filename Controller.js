/* controller is the middle man.
If user interacts with the view the controller updates the model.
If the model is updated the controller updates the view to reflect this change.
*/

$(function() {
	
	$("#order").on("click", function(event) {
		event.preventDefault();
		var size = $("#coffeeCup").val();//get from form;
		var style = $("#coffeeStyle").val(); //get from form;
		var ingredient = $("#extra1").val();
		var ingredient2 = $("#extra2").val();
		var ingredient3 = $("#extra3").val();
		var ingredient4 = $("#extra4").val();
	
		var coffee = new Coffee(size, style, ingredient, ingredient2, ingredient3, ingredient4);
		var order = new Order();
		buy.order.addCoffee(coffee);
		
	
		$('#purchaseCoffee-table tr:last').after(('<tr><td>' + coffee.getCoffeeName() + '</td><td>' + coffee.getCoffeePrice() + '</td></tr><tr></tr><tr></tr>'));
	
		
		console.log(coffee.getCoffeePrice());
		console.log(coffee.getCoffeeName());
		console.log(buy.order.getTotal());
		console.log(buy.order.getTotal());
	/*
		var updateTotal = function() {
			$("#orderTotal").find("span").text(buy.order.getTotal());
		}
			var refresh = function() {
			updateTotal();
		};
		
	*/
		var updateTotal = $("#orderTotal").find("span").text(buy.order.getTotal());
		
			
			
	});
		
	
	

});




















// disable selection based on the users choice of cup (max 4 espresso shots)
	$(document).ready(function(){
		$('select[name= "coffeeCup"]').on('change', function() {
			var option = $(this).val();
			if (option  === "Tall") {
				$("#extra4 option").each (function() {
					var $thisOption = $(this);
					var valueToCompare = "3 extra shots";
					if($thisOption.val() == valueToCompare) {
						$thisOption.attr('disabled', 'disabled');
				
			}
		});
	}
		if (option  === "Grande") {
				$("#extra4 option").each (function() {
					var $thisOption = $(this);
					var $thisOption = $(this);
					var valueToCompare2 = "2 extra shots";
					var valueToCompare = "3 extra shots";
					if($thisOption.val() == valueToCompare2) {
						$thisOption.attr('disabled', 'disabled');
					} 
					if($thisOption.val() == valueToCompare) {
						$thisOption.attr('disabled', 'disabled');
			
					} 
		
	});
		};
			});
});

// disable selection based on the users choice coffee style (1part milk/ 1part cream)
	$(document).ready(function(){
		$('select[name= "coffeeStyle"]').on('change', function() {
			var option = $(this).val();
			if (option  === "Cappuccino") {
				$("#extra3 option").each (function() {
					var $thisOption = $(this);
					var valueToCompare = "Cream";
					if($thisOption.val() == valueToCompare) {
						$thisOption.attr('disabled', 'disabled');
				
			}
		});
	}
		if (option  === "Latte") {
				$("#extra3 option").each (function() {
					var $thisOption = $(this);
					var valueToCompare = "Milk";
					if($thisOption.val() == valueToCompare) {
						$thisOption.attr('disabled', 'disabled');
			
					} 
		
	});
		};
			});
});