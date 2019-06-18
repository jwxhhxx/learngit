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
        name: '一辈子的孤单',
        author: '刘若英',
        album: 'unfined',
        URL: 'music/一辈子的孤单 - 刘若英.mp3',
        img: 'img/5.png'
    },
    {
        name: '他不爱我',
        author: '莫文蔚',
        album: 'unfined',
        URL: 'music/他不爱我 - 莫文蔚.mp3',
        img: 'img/6.png'
    },
    {
        name: '我从崖边跌落',
        author: '谢春花',
        album: 'unfined',
        URL: 'music/我从崖边跌落 - 谢春花.mp3',
        img: 'img/7.png'
    },
    {
        name: '我都跟你走',
        author: '程璧',
        album: 'unfined',
        URL: 'music/我都跟你走 - 程璧.mp3',
        img: 'img/8.png'
    },
    {
        name: '无条件为你',
        author: '梁静茹',
        album: 'unfined',
        URL: 'music/无条件为你 - 梁静茹.mp3',
        img: 'img/9.png'
    },
    {
        name: '电台情歌',
        author: '莫文蔚',
        album: 'unfined',
        URL: 'music/电台情歌 - 莫文蔚.mp3',
        img: 'img/10.png'
    },
    {
        name: '知足',
        author: '五月天',
        album: 'unfined',
        URL: 'music/知足 - 五月天.mp3',
        img: 'img/11.png'
    },
    {
        name: '茉莉花',
        author: '梁静茹',
        album: 'unfined',
        URL: 'music/茉莉花 - 梁静茹.mp3',
        img: 'img/12.png'
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
    mus.volume = 0.5;
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
        if (cur >= lenth) {
            add();
        }
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
    //音量调节
function volumedisplay() {
    if (document.getElementById('display1').style.display == 'block') {
        document.getElementById('display1').style.display = 'none'; //隐藏
    } else {
        //如果不是block证明该div正在隐藏，需要显示
        document.getElementById('display1').style.display = 'block'; //显示
    }
}
var volume3 = document.getElementById('volume3');

function changeVolume(event) {
    var y = 100 - event.offsetY;
    mus.volume = parseFloat(y / 100) * 1;
    //改变按钮的位置
    console.log(mus.volume);
    volume3.style.marginTop = -y - 12 + "px";
}

function suiji() {
    reducejindutiao();
    imagePause();
    var random1 = Math.random() * 10;
    var zhengshu = parseInt(random1);
    music(zhengshu);

    start();
}