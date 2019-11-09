var body = document.getElementById('body');
body.addEventListener('touchstart', touchFunction, false);

// what happens when touchstart
function touchFunction(ev) {
    var touch = ev.changedTouches;
    var i = 0;
    var x = event.changedTouches[i].pageX;
    var y = event.changedTouches[i].pageY;
    document.getElementById("outputDiv").innerHTML = "You are seeing this because you triggered a touch event!<br>" + "X position: " + x + "<br>Y position: " + y;
}