//函数可以封装代码
function zuofan() {
    if (true) {
        console.log("dsd");
    } else console.log('ds');

}

zuofan(1);

//作用域

var a = 1;
console.log(a);

function fun() {
    var b = 2;
    console.log(b);
    console.log(a);
}
fun();