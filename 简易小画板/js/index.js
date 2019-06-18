//获得画布
let canvas = document.getElementById("drawing-board");
let ctx = canvas.getContext("2d");
//调整画布的宽高
let pageWidth = document.documentElement.clientWidth;
let pageHeight = document.documentElement.clientHeight;
canvas.width = pageWidth;
canvas.height = pageHeight;

//实现画板
let painting = false;
let lastPoint = {
    x: undefined,
    y: undefined
};

//鼠标按下事件
canvas.onmousedown = function(e) {
    painting = true;
    let x = e.clientX;
    let y = e.clientY;
    lastPoint = {
        "x": x,
        "y": y
    };
    drawCircle(x, y, 5);
};
//鼠标移动事件
canvas.onmousemove = function(e) {
    if (painting) {
        let x = e.clientX;
        let y = e.clientY;
        let newPoint = {
            "x": x,
            "y": y
        };
        drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
        lastPoint = newPoint;
    }
};
//鼠标松开事件
canvas.onmouseup = function() {
    painting = false;
}

// 画点函数
function drawCircle(x, y, radius) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
}

// 划线函数
function drawLine(x1, y1, x2, y2) {
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
}