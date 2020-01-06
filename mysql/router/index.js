//总路由-里面很多子路由  路由模块化遵循的是RESTful接口规范制作的

// function ss(req, res, next) {
//     //普通函数，不是中间件
// }
const express = require('express'); //模块访问：缓存

const Router = express.Router(); //express自带的中间件，路由设置 Router==app

Router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,PATCH,POST,GET,DELETE,OPTIONS");

    // 跨域请求CORS中的预请求
    if (req.method == "OPTIONS") { //特殊请求：发送了请求头的那些请求
        res.sendStatus(200); /*让options请求快速返回*/
    } else {
        next();
    }
})

Router.use(express.urlencoded({})); //为了获取req.body里面的数据

//引入子路由模块
const goodsRouter = require('./hua');
const usersRouter = require('./users');

//调用子路由
Router.use('/hua', goodsRouter); //goods.js模块导出了一个中间件
Router.use('/users', usersRouter); //goods.js模块导出了一个中间件

//暴露模块
module.exports = Router;

// 练习原生js拿数据
// let box = document.querySelectorAll('.product')[5];
// let divs = box.querySelectorAll('.product-item');
// let maxtitle = box.querySelector('.product-title');
// let arr = [];
// for (let item of divs) {
//     let imgurl = item.querySelector('.product-item-pic img');
//     let mintitle = item.querySelector('.product-item-info-name');
//     let text = item.querySelector('.product-item-info-desc') ? item.querySelector('.product-item-info-desc') : "";
//     let state = item.querySelector('.product-item-info-promo') ? item.querySelector('.product-item-info-promo') : "";
//     let newprice = item.querySelector('.product-item-info-prices strong');
//     let sendprice = item.querySelector('.product-item-info-prices s');
//     let textnum = item.querySelector('.product-item-info-sales');
//     let obj = {};
//     obj.maxtitle = maxtitle.innerText;
//     obj.imgurl = imgurl.src;
//     obj.mintitle = mintitle.innerText;
//     obj.text = text.innerText;
//     obj.state = state.innerText;
//     obj.newprice = newprice.innerText;
//     obj.sendprice = sendprice.innerText;
//     obj.textnum = textnum.innerText
//     arr.push(obj);
// }

// JSON.stringify(arr);