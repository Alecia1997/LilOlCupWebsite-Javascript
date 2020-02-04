/* EmployeeOrder constructor inherits from the Order constructor
meaning-inherits all the functionality that has been stored in the Order constructor
but extends the getTotal prototype method to return the price with a 25% discount.
*/

function EmployeeOrder() {
	//Calls the Order Constructor
    Order.call();
}

// Set EmployeeOrders's prototype to a copy of Order's prototype
EmployeeOrder.prototype = Object.create(Order.prototype);

/* Extend the functionality of Order's prototype by updating the getTotal method to 
return the total price of the order with the Employees 25% discount*/
EmployeeOrder.prototype.getTotal = function() {
    total = Order.prototype.getTotal.call(this);
	var discount = total * 0.25;
	return total - discount; 
		
		 
	};


// 100 * 25% = 25 (this is your discount total)
// 100 - 25% = 75 (this is the total of your order after the discount has been subtracted)
// When the user 