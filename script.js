// Function connected to Apply button 
function applyChanges() {
  
  // Taking the value from the user and save it in a variable x
  let x = document.querySelector(".getTheValue1").value;
  
  // Use that x value here
  document.querySelector(".board__note--statement").innerHTML = x;
  
  // Taking the font size from the user and save it in a variable y
  let y = document.querySelector(".getTheValue2").value;
  
  // Use that y value here
  document.querySelector(".board__note--statement").style.fontSize = y + "px";
  
  // Taking the font family from the user and save it in a variable z
  let z = document.querySelector(".controller__fontFamilyDiv--select").value;
  
  // Use that z value here
  document.querySelector(".board__note--statement").style.fontFamily = z;
  
  // Taking the font family from the user and save it in a variable k
  let k = document.querySelector(".calculator__controller__skewDiv--input").value;
  
  // Use that k value here
  document.querySelector(".board__note--statement").style.transform = "skew" + "(" + k + "deg)"; 
}

// As soon as the button geta clicked, the word "Screen" would disappear
document.querySelector(".buttonDiv__submit").addEventListener("click", function() {
    document.querySelector(".board__note--screenHeader").style.display = "none";
});

 // To refresh the page
document.querySelector(".buttonDiv__refresh").addEventListener("click", function() { 
                window.location.reload(true);  
  });
  
  
  
  