var fs = require("fs");

// var data = fs.readFileSync('input'); // 同步，有阻塞
//
// console.log(data.toString());
// console.log("程序执行结束!");
fs.readFile('input', function (err, data) { // 异步，无阻塞
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("程序执行结束!");
