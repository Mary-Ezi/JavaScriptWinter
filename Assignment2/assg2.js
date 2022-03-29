function calculate() {
    var input = prompt("Let's play sum game.\nPlease enter your name");
   
    var x = prompt("Enter first number");

    //Convert x to integer 
    var num1 = parseInt(x);
    
    var y = prompt("Enter second number");
    
    //Convert y to integer 
    var num2 = parseInt(y);


    // Create variables to hold sum.
    var sum = num1 + num2;

    // Get the element with an id of add.
    var el = document.getElementById('add');

   // Replace the content of this element.
   el.textContent = 'Hi ' + input + '!' + ' The Sum of ' + num1 + ' + ' + num2 + ' is  ' + sum  ;
   
   // Style the text
   el.style.color= "#660066";
   el.style.textAlign= "center";
   el.style.fontVariant= "small-caps";
   el.style.fontSize= "xx-large";
   el.style.marginTop= "200px";
   
}
// Call the function
calculate()

