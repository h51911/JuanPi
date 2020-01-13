/* eslint-disable jsx-a11y/alt-text */
import React, { Suspense, lazy } from 'react';
import './base.css';
import './App.css';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { BackTop } from 'antd';
import '../node_modules/antd/dist/antd.css'
import { connect } from 'react-redux';
const Home = lazy(()=> import('./pages/Home'));
const Cart = lazy(() => import('./pages/Cart'));
const Classification = lazy(() => import('./pages/Classification'));
const Min = lazy(() => import('./pages/Min'));
const Login = lazy(() => import('./pages/Login'));
const Reg = lazy(() => import('./pages/Reg'));
const List = lazy(() => import('./pages/List'));
const Details = lazy(() => import('./pages/Details'));



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pathKey: ['/home']
    }
  }
  render() {
    return (
      <div className='App'>
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            {/* 路由配置,当浏览器路径匹配path时,渲染component组件 */}
            <Route path='/home' component={Home} />
            <Route path='/classification' component={Classification} />
            <Route path='/cart' component={Cart} />
            <Route path='/min' component={Min} />
            <Route path='/login' component={Login} />
            <Route path='/reg' component={Reg} />
            <Route path='/details/:id' component={Details} />
            <Route path='/list1' component={List} />
            <Route path='/list2' component={List} />
            <Route path='/list3' component={List} />
            <Route path='/list4' component={List} />
            <Route path='/notfound' render={() => <h1>你访问的页面不存在</h1>} />

            {/* "/" 跳转到 "/home" */}
            <Redirect from='/' to='/home' exact />
            <Redirect from='/list' to='/list1' exact />
            <Redirect from='/lists1' to='/list1' exact />
            <Redirect from='/lists2' to='/list2' exact />
            <Redirect from='/lists3' to='/list3' exact />
            <Redirect from='/lists4' to='/list4' exact />
            {/* 404 */}
            <Redirect to='/notfound' />
            {/* <Route path="/" component={Home}/> */}
            </Switch>
        </Suspense>
        

        <BackTop visibilityHeight='350'/>
      </div>
    )
  }
}
const mapStateTopProps = function (state) {
  // 需要传递什么数据到组件的props就返回什么
  return {
    cartlist: state.cartlist
  }
}

App = connect(mapStateTopProps)(App);

App = withRouter(App);

export default App;
