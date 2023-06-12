/**
 * 同步数据库
 */

const seq = require('./seq-db');

// 测试连接
seq.authenticate().then(() => {
    console.log("authenticate ok");
}).catch(() => {
    console.log("authenticate err");
});

// 执行同步
seq.sync({ force: true }).then(() => {
    console.log("sync ok");
    process.exit();
})

