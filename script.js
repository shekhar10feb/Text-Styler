// Function connected to Apply button 
function applyChanges() {
  
    // Taking the value from the user and save it in a variable x
    let x = document.querySelector(".getTheValue1").value;
    
    // Use that x value here
    document.querySelector(".statement").innerHTML = x;
    
    // Taking the font size from the user and save it in a variable y
    let y = document.querySelector(".getTheValue2").value;
    
    // Use that y value here
    document.querySelector(".statement").style.fontSize = y + "px";
    
    // Taking the font family from the user and save it in a variable z
    let z = document.querySelector(".font-family").value;
    
    // Use that z value here
    document.querySelector(".statement").style.fontFamily = z;
    
    // Taking the font family from the user and save it in a variable k
    let k = document.querySelector(".skewValue").value;
    
    // Use that k value here
    document.querySelector(".statement").style.transform = "skew" + "(" + k + "deg)"; 
  }
  
  // As soon as the button gets clicked, the word "Screen" would disappear
  document.querySelector(".buttonDiv__submit").addEventListener("click", function() {
      document.querySelector(".screenHeader").style.display = "none";
    });
  
  // By clicking the Refresh button location would be reloaded 
  document.querySelector(".buttonDiv__refresh").addEventListener("click", function() { 
                window.location.reload(true);  
   });
  
  
  
  