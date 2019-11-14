function parametersFunction(x, y, b, c, d) {
  if (y === undefined) {
}
     return x * y / b * c - d;
}
document.getElementById("test123").innerHTML = parametersFunction(4, 5, 2, 3, 4);
