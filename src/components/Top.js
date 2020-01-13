import React from "react";
import { Icon, Menu, Dropdown } from "antd";

class Top extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }

    this.goto = this.goto.bind(this);
    this.d = this.d.bind(this);
    this.b = this.b.bind(this);
  }

  render() {
    console.log(this.props.lur);
    return (
      <div className="head_top" style={this.props.color}>
        <div className="fixtop">
          <span className={this.props.lur.match.path == '/min'?"t-find-t-k":"t-find-t-o"} onClick={this.goto}>
            <Icon type="left" className="iconfont" style={this.props.textcolor ? this.props.textcolor : null}/>
          </span>
          <span className="t-index" style={this.props.textcolor ? this.props.textcolor : null}>{this.props.children}</span>
          {/* {
            this.props.lur.match.path != '/cart' ?
              <a className="keywords" href="#/classification">
                <Icon type="search" className="iconfont" />
              </a>:<div/>
          } */}
          {
            this.props.lur.match.path != '/min' && this.props.lur.match.path != '/reg' && this.props.lur.match.path != '/login' ?
            <div className="menu-more">
              <Dropdown overlay={(
                <Menu>
                  <Menu.Item key="1">

                    <a href="#/home"><Icon type='home' />首页</a>
                  </Menu.Item>
                  <Menu.Item key="2">

                    <a href="#/cart"><Icon type='shopping-cart' />购物车</a>
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item key="3">

                    <a href="#/min"><Icon type='user' />个人中心</a>
                  </Menu.Item>
                </Menu>
              )} trigger={['click']}>
                {
                  this.props.lur.match.path != '/cart' ?
                    <Icon type="ellipsis" className="iconfont" style={this.props.textcolor ? this.props.textcolor : { color: '#666' }} /> :
                    <div />
                }
              </Dropdown>
              </div> : <div className={this.props.lur.match.path == '/min' ? "menu-more" :"menu-more-lj"} style={{ color: '#fff', display: this.props.lur.user == '' && this.props.lur.match.path == '/min' ? 'none' : 'block' }} onClick={this.props.lur.user == '' && this.props.lur.match.path != '/min' ? this.b : this.d}>{this.props.text ? this.props.text : null}</div>
          }
        </div>
      </div>
    )
  }

  goto() {
    this.props.lur.history.goBack();
  }

  d(){
    localStorage.clear();
    window.history.go(0);
  }

  b(){
    this.props.lur.history.push('/reg');
  }
}

export default Top;