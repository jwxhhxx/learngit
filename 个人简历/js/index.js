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
        if (dir > 0 && now > -4 * len) {
            now -= len;
            main.style.top = now + "px";
            endTime = new Date().getTime();
        } else if (dir < 0 && now < 0) {
            now += len;
            main.style.top = now + "px";
            endTime = new Date().getTime();
        }
    } //else {
    //     event.preventDefault();
    // }
}

function change1() {
    document.getElementById("task-one").style.display = "block";
    document.getElementById("task-two").style.display = "none";
    document.getElementById("task-three").style.display = "none";
    document.getElementById("task-four").style.display = "none";
    document.getElementById("task-five").style.display = "none";
}

function change2() {
    document.getElementById("task-one").style.display = "none";
    document.getElementById("task-two").style.display = "block";
    document.getElementById("task-three").style.display = "none";
    document.getElementById("task-four").style.display = "none";
    document.getElementById("task-five").style.display = "none";
}

function change3() {
    document.getElementById("task-one").style.display = "none";
    document.getElementById("task-two").style.display = "none";
    document.getElementById("task-three").style.display = "block";
    document.getElementById("task-four").style.display = "none";
    document.getElementById("task-five").style.display = "none";
}

function change4() {
    document.getElementById("task-one").style.display = "none";
    document.getElementById("task-two").style.display = "none";
    document.getElementById("task-three").style.display = "none";
    document.getElementById("task-four").style.display = "block";
    document.getElementById("task-five").style.display = "none";
}

function change5() {
    document.getElementById("task-one").style.display = "none";
    document.getElementById("task-two").style.display = "none";
    document.getElementById("task-three").style.display = "none";
    document.getElementById("task-four").style.display = "none";
    document.getElementById("task-five").style.display = "block";
}