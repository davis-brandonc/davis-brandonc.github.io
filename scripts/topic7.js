var square = document.getElementById("square"),
    clickMe = document.getElementById('clickMe'); 
function doDemo () {

  var button = this;
  square.style.backgroundColor = "red";
  button.setAttribute("disabled", "true");
  setTimeout(clearDemo, 2000, button);
}

function clearDemo (button) {
  var square = document.getElementById("square");
  square.style.backgroundColor = "transparent";
  button.removeAttribute("disabled");
}

clickMe.onclick = doDemo;