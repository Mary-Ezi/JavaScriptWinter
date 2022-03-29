// Set up the object
var car1 = new Object();
 
car1.brand = 'Audi';
car1.inventory = 120;
car1.num_sold = 77;
car1.invoice_price = 35000;
car1.sell_price = 38000;
car1.checkAvailability = function() {
  return this.inventory - this.num_sold;  
};
car1.calculateProfit = function() {
    return (this.sell_price - this.invoice_price) * this.num_sold;  
};

var car2 = new Object();
 
car2.brand = 'Ford';
car2.inventory = 100;
car2.num_sold= 77;
car2.invoice_price = 27000;
car2.sell_price = 29000;
car2.checkAvailability = function() {
  return this.inventory - this.num_sold;  
};
car2.calculateProfit = function() {
    return (this.sell_price - this.invoice_price) * this.num_sold;  
};
 
 
var elName1 = document.getElementById('car1name'); // Get element
elName1.textContent = 'Car Brand: ' + car1.brand; // Update HTML with property of the object
elName1.style.marginLeft = "200px";

 
var elInventory1 = document.getElementById('car1inv'); // Get element
elInventory1.textContent = 'The numbers of available cars: ' + car1.checkAvailability(); // Update HTML with result of method
elInventory1.style.marginLeft = "200px";

var elProfit1 = document.getElementById('car1profit'); // Get element
elProfit1.textContent = 'Total Profit: $' + car1.calculateProfit(); // Update HTML with property of the object
elProfit1.style.marginLeft = "200px";

var elName2 = document.getElementById('car2name'); // Get element
elName2.textContent = 'Car Brand: ' + car2.brand; // Update HTML with property of the object
elName2.style.marginLeft = "200px";

var elInventory2 = document.getElementById('car2inv'); // Get element
elInventory2.textContent = 'The numbers of available cars: ' + car2.checkAvailability(); // Update HTML with result of method
elInventory2.style.marginLeft = "200px";

var elProfit2 = document.getElementById('car2profit'); // Get element
elProfit2.textContent = 'Total Profit: $' + car2.calculateProfit(); // Update HTML with property of the object
elProfit2.style.marginLeft = "200px";