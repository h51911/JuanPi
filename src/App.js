/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './App.css';
import {HashRouter,Route,Link,NavLink,Switch,Redirect,withRouter} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Classification from './pages/Classification';
import Min from './pages/Min';
import {Menu ,Icon , Row,Col,Badge} from 'antd';
import 'antd/dist/antd.css';
import {connect} from 'react-redux';
// import 'node sass'

class App extends React.Component{
  constructor(props){
    super(props);

    this.state={
        pathKey:['/home']
    }
  }
  render(){
    return (
        <div>
  <div className="QllnW">
  <ul className="izStSE">
    <a className="fSJdS" href="#/home">
    <Icon type='home'/>
        <div>首页</div>
        </a>
        <a className="fSJdS" href="#/classification">
        <Icon type='appstore'/>
            <div>分类</div>
            </a>
            <a className="fSJdS" href="#/cart">
            <Badge count={5}>
            <Icon type='shopping-cart'/>
            </Badge>
                <div>购物车</div>
                </a>
                <a className="fSJdS" href="#/min">
                <Icon type='user'/>
                    <div>我的卷皮</div>
                    </a>
                    </ul>
                    </div>

            <Switch>
            {/* 路由配置,当浏览器路径匹配path时,渲染component组件 */}
            <Route path='/home' component={Home}/>
            <Route path='/classification' component={Classification}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/min' component={Min}/>
            <Route path='/notfound' render={()=><h1>你访问的页面不存在</h1>}/>

            {/* "/" 跳转到 "/home" */}
            <Redirect from='/' to='/home' exact/>
            {/* 404 */}
            <Redirect to='/notfound'/>
            {/* <Route path="/" component={Home}/> */}
          </Switch>
        </div>
    )
  }
}
const mapStateTopProps = function(state) {
  // 需要传递什么数据到组件的props就返回什么
  return {
    cartlist:state.cartlist
  }
}

App = connect(mapStateTopProps)(App);

App = withRouter(App);

export default App;
