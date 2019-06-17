function jindutiao() {
    //获取当前歌曲的歌长
    var lenth = mus.duration;
    timer1 = setInterval(function() {
        var cur = mus.currentTime; //获取当前的播放时间
        jindu1.style.width = parseFloat(cur / lenth) * 400 + "px";
    }, 50)
}