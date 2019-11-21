function allAdditions() {
  var node = document.getElementById("allPlayers").lastChild;
  var list = document.getElementById("myHomers");
  list.insertBefore(node, list.childNodes[12]);
}