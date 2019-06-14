var i;
var result = [
    'dads',
    'adsa',
    'dsada'

]
for (i = 0; i <= 100; i++) {
    console.log(i);
}
//for 循环
result[0];
result[1];
result[3];
for (i = 0; i < result.length; i++) {
    console.log(result[i]);
}


//while
//如果括号里写死会一直执行导致死机
var attempt = 0;

while (attempt < 5) {
    console.log(attempt);
    attempt++;
}
console.log('循环停止');

// do {
//     代码
// } while (条件);
// 先执行代码，再进进行条件判断
// 如果条件成立再循环执行代码