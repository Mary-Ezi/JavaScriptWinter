// Create a variable to hold the message text and assigns the strings.
var message = 'Welcome to my calculator';

// Create variables to hold num1 and num2 and sum.
var num1 = 5;
var num2 = 7;
var sum = num1 + num2;

// Get the element with an id of note.
var elNote = document.getElementById('note');

// Replace the content of this element.
elNote.textContent = message;

// Get the element with an id of cost.
var el = document.getElementById('cost');

// Replace the content of this element.
el.textContent = 'The Sum of ' + num1 + ' + ' + num2 + ' is : ' + sum  ;

 