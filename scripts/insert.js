function insertPlayer () {
  var newItem = document.createElement("LI");
  var textnode = document.createTextNode("762 - Barry Bonds*");
  newItem.appendChild(textnode);

  var list = document.getElementById("myHomers");
  list.insertBefore(newItem, list.childNodes[0]);
}