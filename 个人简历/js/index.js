var pages = document.getElementsByClassName("page");
var wrap = document.getElementById("wrap");
var len = document.documentElement.clientHeight;
var main = document.getElementById("main");
wrap.style.height = len + "px";
for (var i = 0; i < pages.length; i++) {
    pages[i].style.height = len + "px";
}
if (navigator.userAgent.toLowerCase().indexOf("firefox") != -1) {
    document.addEventListener("DOMMouseScroll", scrollFun);
} else if (document.addEventListener) {
    document.addEventListener("mousewheel", scrollFun, false);
} else if (document.attachEvent) {
    document.attachEvent("onmousewheel", scrollFun);
} else {
    document.onmousewheel = scrollFun;
}
var startTime = 0;
var endTime = 0;
var now = 0;

function scrollFun(e) {
    startTime = new Date().getTime();
    var event = e || window.event;
    var dir = event.detail || -event.wheelDelta;
    if (startTime - endTime > 1000) {
        if (dir > 0 && now > -3 * len) {
            now -= len;
            main.style.top = now + "px";
            endTime = new Date().getTime();
        } else if (dir < 0 && now < 0) {
            now += len;
            main.style.top = now + "px";
            endTime = new Date().getTime();
        }
    } else {
        event.preventDefault();
    }
}