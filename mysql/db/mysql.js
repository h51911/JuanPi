/*
    做mysql数据库的查询
*/

var mysql = require('mysql'); //引入mysql模块

//创建连接池：https://blog.csdn.net/zxsrendong/article/details/17006185
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'mogu',
    charset: 'UTF8_GENERAL_CI',
    multipleStatements: true //允许写多个sql语句,允许你拼接sql一次执行多个语句
});

//利用promise:处理异步请求，保证请求顺序，解决回调地狱
function query(sql) { //调用query方法会得到一个promise对象
    return new Promise((resolve, reject) => {
        pool.query(sql, (err, rows) => { //查询数据库所有商品数据响应给客户端
            if (err) reject(err); //if里面如果只有一个语句的时候，花括号可以省略
            resolve(rows);
        });
    })
}

module.exports = query;