/*
 * 商品信息管理
 * 添加商品
 * 查询商品数据
 * 修改
 * 删除
 * 批量删除
 */

const express = require("express"); //模块访问：缓存
// const http = require("http");
const Router = express.Router();

const {
    mysql: query
} = require("../db"); //解构并重命名

//get请求获取所有是商品数据 首页数据
Router.get("/goodhome2", async (req, res) => {
    //查询数据库的数据
    let sql = "SELECT * FROM homedata2";

    let data = await query(sql); //await 等待的是一个promise对象;等到结果是：是对象里面resolve(data) 的结果；一定是放在async函数里面才能用
    res.send(data);
});

Router.get("/goodhome1", async (req, res) => {
    //查询数据库的数据
    let sql = "SELECT * FROM homedata1";

    let data = await query(sql); //await 等待的是一个promise对象;等到结果是：是对象里面resolve(data) 的结果；一定是放在async函数里面才能用
    res.send(data);
});

Router.get("/homelist1/:text", async (req, res) => {
    //查全部数据
    let sql2 = "SELECT * FROM homedata1";
    let data2 = await query(sql2); //数组 [{},{},{}] 总条数==数组长度

    //查询数据库的数据
    let sql = "";
    let result = {}; //传给客户端的数据  null假  {}真  []真  null假
    let {
        text
    } = req.params; //{page:1,num:5} 查询第一页5条数据
    // console.log(page, num);
    let page = text.split(',')[0];
    let num = text.split(',')[1];
    let index = (page - 1) * num;
    // console.log(str);
    //SELECT * FROM goodslist limit (page -1) * num,5：
    sql = `SELECT * FROM homedata1 limit ${index},${num}`;
    let data = await query(sql); //await 等待的是一个promise对象;等到结果是：是对象里面resolve(data) 的结果；一定是放在async函数里面才能用
    // console.log(data);
    let pages = Math.ceil(data2.length / num);
    result = {
        type: 1, //成功，
        mes: "成功",
        total: data2.length, //总条数
        pages, //总页码
        page, //当前页
        num, //每页条数
        list: data //数据
    };

    res.send(result);
});

// 正常数据
Router.get("/goodlist", async (req, res) => {
    // res.Header('Content-Type', 'text/html; charset=utf-8');
    //查询数据库的数据
    let sql = "SELECT * FROM datadata";

    let data = await query(sql); //await 等待的是一个promise对象;等到结果是：是对象里面resolve(data) 的结果；一定是放在async函数里面才能用
    res.send(data);
});

// 销量降序
Router.get("/goodlist1/:text", async (req, res) => {
    // res.Header('Content-Type', 'text/html; charset=utf-8');
    //查询数据库的数据
    let sql1 = `SELECT * FROM listdata where types='上新'`;

    let data1 = await query(sql1); //await 等待的是一个promise对象;等到结果是：是对象里面resolve(data) 的结果；一定是放在async函数里面才能用
    let data2 = [];
    let result = {}; //传给客户端的数据  null假  {}真  []真  null假
    let {
        text
    } = req.params; //{page:1,num:5} 查询第一页5条数据

    let page = text.split(',')[0];
    let num = text.split(',')[1];
    let nums = text.split(',')[2];
    let index = (page - 1) * num;

    for (let i = index; i < nums; i++) {
        data2.push(data1[i]);
    }
    let pages = Math.ceil(data1.length / num);
    result = {
        type: 1, //成功，
        mes: "成功",
        total: data1.length, //总条数
        pages, //总页码
        page, //当前页
        num, //每页条数
        list: data1 //数据
    }
    res.send(result);
});

// 价格升序
Router.get("/goodlist2/:text", async (req, res) => {
    // res.Header('Content-Type', 'text/html; charset=utf-8');
    //查询数据库的数据
    let sql1 = "SELECT * FROM listdata ORDER BY newprice ASC";

    let data1 = await query(sql1); //await 等待的是一个promise对象;等到结果是：是对象里面resolve(data) 的结果；一定是放在async函数里面才能用
    let data2 = [];
    let result = {}; //传给客户端的数据  null假  {}真  []真  null假
    let {
        text
    } = req.params; //{page:1,num:5} 查询第一页5条数据

    let page = text.split(',')[0];
    let num = text.split(',')[1];
    let nums = text.split(',')[2];
    let index = (page - 1) * num;

    for (let i = index; i < nums; i++) {
        data2.push(data1[i]);
    }
    let pages = Math.ceil(data1.length / num);
    result = {
        type: 1, //成功，
        mes: "成功",
        total: data1.length, //总条数
        pages, //总页码
        page, //当前页
        num, //每页条数
        list: data1 //数据
    }
    res.send(result);
});

// 价格降序
Router.get("/goodlist3/:text", async (req, res) => {
    // res.Header('Content-Type', 'text/html; charset=utf-8');
    //查询数据库的数据
    let sql1 = "SELECT * FROM listdata ORDER BY newprice DESC";

    let data1 = await query(sql1); //await 等待的是一个promise对象;等到结果是：是对象里面resolve(data) 的结果；一定是放在async函数里面才能用
    let data2 = [];
    let result = {}; //传给客户端的数据  null假  {}真  []真  null假
    let {
        text
    } = req.params; //{page:1,num:5} 查询第一页5条数据

    let page = text.split(',')[0];
    let num = text.split(',')[1];
    let nums = text.split(',')[2];
    let index = (page - 1) * num;

    for (let i = index; i < nums; i++) {
        data2.push(data1[i]);
    }
    let pages = Math.ceil(data1.length / num);
    result = {
        type: 1, //成功，
        mes: "成功",
        total: data1.length, //总条数
        pages, //总页码
        page, //当前页
        num, //每页条数
        list: data1 //数据
    }
    res.send(result);
});

//get请求获取所有是商品数据 : page=1  num=12  列表页数据
Router.get("/goodlists/:text", async (req, res) => {
    //查全部数据
    let sql2 = "SELECT * FROM listdata";
    let data2 = await query(sql2); //数组 [{},{},{}] 总条数==数组长度

    //查询数据库的数据
    let sql = "";
    let result = {}; //传给客户端的数据  null假  {}真  []真  null假
    let {
        text
    } = req.params; //{page:1,num:5} 查询第一页5条数据
    // console.log(page, num);
    let page = text.split(',')[0];
    let num = text.split(',')[1];
    let index = (page - 1) * num;
    // console.log(str);
    //SELECT * FROM goodslist limit (page -1) * num,5：
    sql = `SELECT * FROM listdata limit ${index},${num}`;
    let data = await query(sql); //await 等待的是一个promise对象;等到结果是：是对象里面resolve(data) 的结果；一定是放在async函数里面才能用
    // console.log(data);
    let pages = Math.ceil(data2.length / num);
    result = {
        type: 1, //成功，
        mes: "成功",
        total: data2.length, //总条数
        pages, //总页码
        page, //当前页
        num, //每页条数
        list: data2 //数据
    };

    res.send(result);
});

//获取id为xx的数据：获取单条数据  /goods/2  代表：想要id为2的数据 列表页某个id那条数据
Router.route("/goodlist/:id")
    .get(async (req, res) => {
        let {
            id
        } = req.params;
        let sql = `SELECT * FROM ${id.split(',')[0]} where gid=${id.split(',')[1]}`;
        let data = await query(sql);
        res.send(data);
    })

    //删除id为xx数据
    .delete(async (req, res) => {
        let {
            id
        } = req.params;
        let sql = `DELETE FROM ${id.split(',')[0]} WHERE uid=${id.split(',')[1]}`;
        let data = await query(sql);
        res.send(data);
    })

    //修改
    .put(async (req, res) => {
        let {
            id
        } = req.params; //url动态路由  /goods/28 修改id=28的数据
        let sql = `UPDATE ${id.split(',')[0]} SET num=${id.split(',')[1]} WHERE uid='${id.split(',')[0]}'`;;

        let data = await query(sql);
        res.send(data);
        // res.send('修改成功');
    });

// 购物车接口
//get请求
Router.get("/cart/:text", async (req, res) => {

    let {
        text
    } = req.params; //url动态路由  /goods/28 修改id=28的数据

    //查询数据库有没有这个数据
    let sql = `SELECT * FROM cartshop WHERE title='${text.split(',')[0]}' and name='${text.split(',')[1]}'`;

    let data = await query(sql); //await 等待的是一个promise对象;等到结果是：是对象里面resolve(data) 的结果；一定是放在async函数里面才能用
    console.log(data);
    if (data == 'undefined') {
        res.send(data = []);
    } else {
        res.send(data);
    }
});

// 插入购物车商品数据
Router.get("/cartshopr/:id", async (req, res) => {

    let {
        id
    } = req.params;

    let sql1 = `SELECT * FROM ${id.split(',')[0]} where gid=${id.split(',')[1]}`;
    let data1 = await query(sql1); //await 等待的是一个promise对象;等到结果是：是对象里面resolve(data) 的结果；一定是放在async函数里面才能用
    console.log(data1);
    console.log(data1[0].newprice);

    let sql2 = `INSERT INTO cartshop(imgurl,title,newprice,usedprice,total,num,name,bool) VALUES('${data1[0].imgurl}','${data1[0].title}','￥${data1[0].newprice}','￥${data1[0].usedprice}',${data1[0].usedprice},'${1}','${id.split(',')[2]}',${1})`;

    let data = await query(sql2); //await 等待的是一个promise对象;等到结果是：是对象里面resolve(data) 的结果；一定是放在async函数里面才能用
    res.send(data);
});

// 购物车商品数量加一
Router.get("/cartshopisnum/:text", async (req, res) => {

    let {
        text
    } = req.params;

    let id = text.split(',')[0];
    let token = text.split(',')[1];
    let pnum = text.split(',')[2];
    let num = text.split(',')[3];
    let sql = `UPDATE cartshop SET num=${num},total=${num * pnum} where gid=${id} and name='${token}'`;

    let data = await query(sql); //await 等待的是一个promise对象;等到结果是：是对象里面resolve(data) 的结果；一定是放在async函数里面才能用
    res.send(data);
});

// 购物车数据渲染
Router.get("/cartdata/:name", async (req, res) => {
    // res.Header('Content-Type', 'text/html; charset=utf-8');

    let {
        name
    } = req.params;
    let data2=[];
    //查询数据库的数据
    let sql = `SELECT * FROM cartshop ORDER BY gid DESC`;

    let data = await query(sql); //await 等待的是一个promise对象;等到结果是：是对象里面resolve(data) 的结果；一定是放在async函数里面才能用
    data.forEach(item=>{
        if(item.name==name){
            data2.push(item);
        }
    })
    
    res.send(data2);
});

// 购物车全部商品数量统计
Router.get("/cartnum/:name", async (req, res) => {
    // res.Header('Content-Type', 'text/html; charset=utf-8');
    let {
        name
    } = req.params;
    //查询数据库的数据
    let sql = `SELECT * FROM cartshop where name='${name}'`;

    let data1 = await query(sql); //await 等待的是一个promise对象;等到结果是：是对象里面resolve(data) 的结果；一定是放在async函数里面才能用
    // console.log(typeof data1[0].num);

    let data2 = [];
    let nub = 0;
    // data1.forEach(item => data2 += item.num);
    for (let i = 0; i < data1.length; i++) {
        nub = data1[i].num + nub;

    }
    // console.log(data2);
    data2.push(nub)
    res.send(data2);
});

//获取id为xx的数据：获取单条数据  /goods/2  代表：想要id为2的数据 列表页某个id那条数据
Router.route("/cartshopdata/:id")
    .get(async (req, res) => {
        let {
            id
        } = req.params;
        let sql = 'SELECT * FROM cartshop';
        let data = await query(sql);
        res.send(data);
    })

    //删除id为xx数据
    .delete(async (req, res) => {
        let {
            id
        } = req.params;
        let sql = `DELETE FROM cartshop WHERE gid=${id.split(',')[0]}`;
        let data = await query(sql);
        res.send(data);
    })

    //修改
    .put(async (req, res) => {
        let {
            id
        } = req.params; //url动态路由  /goods/28 修改id=28的数据

        let sql1 = `SELECT * FROM cartshop where gid=${id.split(',')[0]}`

        let data1 = await query(sql1)
        let sql2 = `UPDATE cartshop SET num=${id.split(',')[1]},total=${id.split(',')[1] * data1[0].newprice.slice(1)} WHERE gid=${id.split(',')[0]}`;

        let data2 = await query(sql2);
        res.send(data2);
        // res.send('修改成功');
    });

// 修改true，flase
Router.put("/cartbool/:id", async (req, res) => {
    // res.Header('Content-Type', 'text/html; charset=utf-8');

    let {
        id
    } = req.params; //url动态路由  /goods/28 修改id=28的数据

    // let sql1 = `SELECT * FROM cartshop where gid=${id.split(',')[0]}`

    // let data1 = await query(sql1)
    let sql = `UPDATE cartshop SET bool=${id.split(',')[1]} WHERE gid=${id.split(',')[0]}`;

    let data = await query(sql);
    res.send(data);
    // res.send('修改成功');
});

// 全选修改
Router.put("/boolall/:id", async (req, res) => {
    // res.Header('Content-Type', 'text/html; charset=utf-8');

    let {
        id
    } = req.params; //url动态路由  /goods/28 修改id=28的数据
    // console.log(id);

    // let sql1 = `SELECT * FROM cartshop where gid=${id.split(',')[0]}`

    // let data1 = await query(sql1)
    let sql = `UPDATE cartshop SET bool=${Number(id)}`;

    let data = await query(sql);
    res.send(data);
    // res.send('修改成功');
});

module.exports = Router;