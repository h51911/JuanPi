// 表单接口

const express = require('express'); //模块访问：缓存

const Router = express.Router();



const {
    mysql: query
} = require('../db'); //解构并重命名

//查询用户名
Router.post('/reg1/:name', async (req, res) => {
    // res.Header('Content-Type', 'text/html; charset=utf-8');
    //查询数据库的数据
    let {
        name
    } = req.params;
    let sql = `SELECT * FROM users where username='${name}'`;

    let data = await query(sql); //await 等待的是一个promise对象;等到结果是：是对象里面resolve(data) 的结果；一定是放在async函数里面才能用
    res.send(data);
});
//INSERT INTO user(name,PASSWORD) VALUES('lideji','123456')
//加入用户
Router.post('/reg2/:name', async (req, res) => {
    // res.Header('Content-Type', 'text/html; charset=utf-8');
    //查询数据库的数据
    let {
        name
    } = req.params;

    let sql = `INSERT INTO users(username,password) VALUES('${name.split(',')[0]}','${name.split(',')[1]}')`;

    let data = await query(sql); //await 等待的是一个promise对象;等到结果是：是对象里面resolve(data) 的结果；一定是放在async函数里面才能用
    data.message = '成功'
    res.send(data);
});

//前端登陆功能
Router.post('/login/:name', async (req, res) => {
    // res.Header('Content-Type', 'text/html; charset=utf-8');
    //查询数据库的数据
    let {
        name
    } = req.params;
    // let sql = `INSERT INTO user(name,password) VALUES('lihuangbao1','123456')`;
    let sql = `SELECT * FROM  users where username='${name.split(',')[0]}' AND password = '${name.split(',')[1]}'`;

    let data = await query(sql); //await 等待的是一个promise对象;等到结果是：是对象里面resolve(data) 的结果；一定是放在async函数里面才能用
    res.send(data);
});

//后台登陆功能
Router.post('/htailogin/:name', async (req, res) => {
    // res.Header('Content-Type', 'text/html; charset=utf-8');
    //查询数据库的数据
    let {
        name
    } = req.params;
    // let sql = `INSERT INTO user(name,password) VALUES('lihuangbao1','123456')`;
    let sql = `SELECT * FROM  user where username='${name.split(',')[0]}' AND password = '${name.split(',')[1]}'`;

    let data = await query(sql); //await 等待的是一个promise对象;等到结果是：是对象里面resolve(data) 的结果；一定是放在async函数里面才能用
    res.send(data);
});

//修改密码
//UPDATE USER SET PASSWORD = PASSWORD('123456') WHERE USER = 'root';
Router.post('/put/:name', async (req, res) => {
    // res.Header('Content-Type', 'text/html; charset=utf-8');
    //查询数据库的数据
    let {
        name
    } = req.params;
    // let sql = `INSERT INTO user(name,password) VALUES('lihuangbao1','123456')`;
    let sql = `UPDATE user SET password=('${name.split(',')[2]}') WHERE name='${name.split(',')[0]}' AND password='${name.split(',')[1]}'`;

    let data = await query(sql); //await 等待的是一个promise对象;等到结果是：是对象里面resolve(data) 的结果；一定是放在async函数里面才能用
    data.message = '成功'
    res.send(data);
});

//get请求获取所有是商品数据 首页数据
Router.get("/userdata", async (req, res) => {
    //查询数据库的数据
    let sql = "SELECT * FROM users";

    let data = await query(sql); //await 等待的是一个promise对象;等到结果是：是对象里面resolve(data) 的结果；一定是放在async函数里面才能用
    res.send(data);
});

module.exports = Router;