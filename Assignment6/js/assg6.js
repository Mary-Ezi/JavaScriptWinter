var itemOne = document.getElementById('one');  // Select the element and store it in a variable.
itemOne.className = 'red';                    // Change the value of the class attribute. 



var itemThree = document.querySelectorAll('li.haze'); // Store NodeList in array
if(itemThree.length > 0 ){                            // If it contains items
    for( var i=0; i < itemThree.length - 1; i++){     // Loop through each item
        itemThree[i].className = 'lilac';             // Change value of class attribute except last one
    }
}




var itemFour = document.querySelectorAll('li.green'); // Store NodeList in array
if(itemThree.length > 0 ){                            // If it contains items
    for( var i=0; i < itemFour.length; i++){          // Loop through each item
        itemFour[i].innerHTML = 'Tulips';             // Change value of class attribute 
    }
}


var itemSix = document.createElement("li");             // Create <li> element and store it in a variable.
var newItem = document.createTextNode('Sunflower');     // Create a text node and store it in a variable.
itemSix.appendChild(newItem);                           // Attach the new text node to the new element.
var position = document.getElementsByTagName('ul')[0];  // Find the position where the new element should be added.
position.appendChild(itemSix);                         // Insert the new element into its position.




var page = document.getElementById('page');         // Getting the div element representing the page to add the message.
var flowers = document.getElementsByTagName('li');  // Get element with li tag and store it in a variable.
for (var i = 0; i < flowers.length; i++) {          // Loop through each item
  if (flowers[i].matches('.aqua')) {                //Check if a given element has the class 'aqua'.  
    //console.log(flowers[i])
    page.innerHTML += '<p>'+flowers[i].textContent+' is not available! </p>'; // Adding a <p> element to show that the target flower is not available.
  }
}
