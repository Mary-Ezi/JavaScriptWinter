function calcmpg() {  // Declare function
    var milesDriven = document.getElementById('milesDriven').value;// Get miles driven
    var gas = document.getElementById('gas').value;                // Get gas used
   
   

   
    if (isNaN(milesDriven)||isNaN(gas)) {                           //validation
        alert("please enter only number values");
        
    }
    else{
    var mpg = document.getElementById('mpg');
    var mpg_val= milesDriven/ gas;                                    // calculate mpg
    mpg.value = mpg_val.toFixed(1);                                  //round mpg
    }
  }

var el = document.getElementById('Calculate');                       // Get calculate
if (el.addEventListener) {                                            // If event listeners work
el.addEventListener("click", calcmpg);                               // Add listener on click             

}
  
 
