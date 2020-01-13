import React from 'react';
import {Icon,Badge} from 'antd';

class Mian extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  render() {
    // console.log(this.props);
    return (
      <div>
        <div className="QllnW">
          <ul className="izStSE">
            <a className="fSJdS" href="#/home" style={this.props.lur == '/home' ? { color: '#ff464e' } : { color: '#ccc' }}>
              <Icon type='home' />
              <div>首页</div>
            </a>
            <a className="fSJdS" href="#/classification" style={this.props.lur == '/classification' ? { color: '#ff464e' } : { color: '#ccc' }}>
              <Icon type='appstore' />
              <div>分类</div>
            </a>
            <a className="fSJdS" href="#/cart" style={this.props.lur == '/cart' ? { color: '#ff464e' } : { color: '#ccc' }}>
              <Badge count={this.props.cartnum ? this.props.cartnum : 0}>
                <Icon type='shopping-cart' />
              </Badge>
              <div>购物车</div>
            </a>
            <a className="fSJdS" href="#/min" style={this.props.lur == '/min' ? { color: '#ff464e' } : { color: '#ccc' }}>
              <Icon type='user' />
              <div>我的卷皮</div>
            </a>
          </ul>
        </div>
      </div>
    )
  }
}

export default Mian;