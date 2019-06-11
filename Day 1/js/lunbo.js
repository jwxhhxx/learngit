 window.onload = function() {
     //获取imgList
     var imgList = document.getElementById("imgList");
     //获取所有img标签
     var imgArr = document.getElementsByClassName("i");
     //获取img的宽度
     imgList.style.width = 1020 * imgArr.length + "px";
     //设置导航按钮居中
     //获取navDiv
     var navDiv = document.getElementById("navDiv");
     //获取outer
     var outer = document.getElementById("outer");
     //设置navDiv的left值offsetwidth是获取元素的宽
     navDiv.style.left = (outer.offsetWidth - navDiv.offsetWidth) / 2 + "px";
 }