var text = "Spread Right Information!!! A little knowledge is a dangerous thing... ";

var chars = text.split('');
var container = document.getElementById("container");

var i = 0;
setInterval(function () {
    if (i < chars.length) {
        container.innerHTML += chars[i++];
    } else {
        i = 0;
        container.innerHTML = "";
    }
}, 80);