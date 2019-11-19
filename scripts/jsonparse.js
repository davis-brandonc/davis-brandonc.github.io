var txt = '{"firstName": "Shaquille", "lastName": "ONeal", "shoesize": "22", "Weight": "325 lbs", "gender": "Male"}'
var obj = JSON.parse(txt); 
document.getElementById("player").innerHTML = "Name: " + obj.firstName + " " + obj.lastName + "," + "  Weight: " + obj.Weight + "," + "  Gender: " + obj.gender + "," + "  Shoe Size: " + obj.shoesize;