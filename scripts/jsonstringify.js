var obj = { firstName: "Shaquille", lastName: "O'Neal", shoesize: "22", Weight: "325", gender: "Male"};
var myJSON = JSON.stringify(obj);
document.getElementById("players").innerHTML = myJSON;
