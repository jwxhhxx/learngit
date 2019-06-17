//音乐信息
var myMusic = [{
        name: '好久不见',
        author: '陈奕迅',
        album: 'unfined',
        URL: 'music/陈奕迅 - 好久不见.mp3',
        img: 'img/2.jpg'
    },
    {
        name: '温柔',
        author: '五月天',
        album: 'unfined',
        URL: 'music/温柔 - 五月天.mp3',
        img: 'img/4.png'
    },
    {
        name: '卡路里',
        author: '火箭少女',
        album: 'unfined',
        URL: 'music/卡路里（电影《西虹市首富》插曲） - 火箭少女101.mp3',
        img: 'img/3.png'
    },
];
window.onload = function() {



    document.getElementById('massage-name').innerHTML = "<b>" + myMusic[0].name + "</b>";
    document.getElementById('massage-author').innerHTML = "作者:" + myMusic[0].author;
    document.getElementById('massage-album').innerHTML = "专辑:" + myMusic[0].album;
    document.getElementById('pic_img1').setAttribute("src", myMusic[0].img);
    document.getElementById('mymusic').setAttribute("src", myMusic[0].URL)

}

//图片转动
var image = document.getElementById("pic_img1");
var btn = document.getElementById('"button_11');
var timer = null;
var flag = 0;

function rotate() {
    var deg = 0;
    timer = setInterval(function() {
        image.style.transform = "rotate(" + deg + "deg)";
        deg += 5;
        if (deg > 360) {
            deg = 0;
        }
    }, 30);
    flag = 1;
}

function imagePause() {
    clearInterval(timer);
    flag = 0;
}





function music(i) {
    document.getElementById('massage-name').innerHTML = "<b>" + myMusic[i].name + "</b>";
    document.getElementById('massage-author').innerHTML = "作者:" + myMusic[i].author;
    document.getElementById('massage-album').innerHTML = "专辑:" + myMusic[i].album;
    document.getElementById('pic_img1').setAttribute("src", myMusic[i].img);
    document.getElementById('mymusic').setAttribute("src", myMusic[i].URL);

}




var mus = document.getElementById('mymusic');

var jindu1 = document.getElementById('wrap-bar');

var timer1 = 0;

function jindutiao() {


    timer1 = setInterval(function() {
        var lenth = mus.duration;
        var cur = mus.currentTime; //获取当前时间

        jindu1.style.width = "" + parseFloat(cur / lenth) * 400 + "px" + "";
        // console.log(jindu1.style.width);
    }, 50);

}

function reducejindutiao() {
    clearInterval(timer1);
    jindu1.style.width = "0";
}

// function pauseall() {
//     for (var i = 0; i < myMusic.length; i++) {
//         if (mus) {
//             mus.pause();
//         }
//     }
// }

//点击播放，暂停 


function start() {

    if (flag) {
        imagePause();
        mus.pause();
    } else {
        rotate();
        mus.play();
        jindutiao();
    }
}




var index = 0;
//上一曲
function reduce() {
    imagePause();
    reducejindutiao();
    // pauseall();
    index--;

    if (index == -1) {

        index = myMusic.length - 1;

    }
    music(index);
    start();
}


function add() {
    imagePause();
    reducejindutiao();
    // pauseall();
    index++;
    if (index > myMusic.length - 1) {
        index = 0;
    }
    music(index);
    start();
}
//根据进度条调整播放
function adjust(event) {
    var bar = event.target;
    var x = event.offsetX;
    var lenth = mus.duration;
    jindu1.style.width = x + "px";
    mus.currentTime = "" + parseInt(x * lenth / 300) + "";
    mus.play();
}
// var flag1 = 0;

// function changecolor() {

//     document.getElementById('heart').style.color = "pink";
//     flag1 = 1;
// }

// function huifu() {

//     document.getElementById('heart').style.color = "rgba(109, 95, 95, 0.65);";

//     flag1 = 0;
// }

// function result() {

//     if (flag1) {
//         huifu();
//     } else {
//         changecolor();
//         flag1 = 1;
//     }

// }
//目前没有想到好的方法来写，先用jQury
$(".fa-star").on("click", function() {
    $(this).toggleClass('stared').toggleClass('colored');

})
$(".fa-heart").on("click", function() {
    $(this).toggleClass('loved').toggleClass('colored');

})