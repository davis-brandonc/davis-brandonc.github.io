function parametersFunction(x, y, b, c, d) {
  if (y === undefined) {
}
     return x * y / b * c - d;
}
document.getElementById("test123").innerHTML = parametersFunction(4, 1, 5, 3, 4);
