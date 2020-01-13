import React from 'react';
import { Button,Icon,message } from 'antd';
import axios from 'axios';


class DetailsButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }

    this.onAddCartClicked = this.onAddCartClicked.bind(this);
  }

  render(){
    return (
      <Button.Group className='gr'>
        <a href="#/">
          <Icon type='home' />
          <div>首页</div>
        </a>
        <a href="#/cart">
          <Icon type='shopping-cart' />
          <div>购物车</div>
        </a>
        <Button icon="shopping" size="large" className='bt-gm'>立即购买</Button>
        <Button icon="shopping-cart" type="danger" className='bt-gw' size="large" onClick={this.onAddCartClicked}>添加到购物车</Button>
      </Button.Group>
    )
  }

  onAddCartClicked() {
    //点击加入购物车
    // window.console.log(1);
    //发送ajax把当前数据传入数据库，如果未登录就弹出登陆后才可以加入购物车
    let token = this.props.user;
    console.log(token);
    
    if (token) {
      axios
        .get(`http://47.112.46.241:10086/skin/cart/${this.props.list[0].title},${token}`)
        .then(({ data: data1 }) => {
          // window.console.log(data1);
          // window.console.log(typeof data1);
          // window.console.log(data1.length);

          if (data1.length > 0) {
            // window.console.log(555);
            // window.console.log(data1);
            // this.countNum++;
            axios
              .get(
                `http://47.112.46.241:10086/skin/cartshopisnum/${
                data1[0].gid
              },${token},${data1[0].newprice.slice(1)},${++data1[0].num}`
              )
              .then(({ data: data2 }) => {
                console.log(data2);

                // Dialog.alert({
                //     message: "购物车商品加一"
                // }).then(() => { });
                message.success('购物车商品数量加一');
              })
              .catch(error => {
                console.log(error);
              });
          } else {
            console.log(this.props);
            
            axios
              .get(
              `http://47.112.46.241:10086/skin/cartshopr/${this.props.lur.match.params.id.split(',')[0]},${this.props.list[0].gid},${token}`
              )
              .then(() => {
                // Dialog.alert({
                //     message: "成功添加到购物车"
                // }).then(() => { });
                message.success('成功添加到购物车');
              })
              .catch(error => {
                console.log(error);
              });
          }
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      // Dialog.alert({
      //     message: "登陆后才可以加入购物车奥~"
      // }).then(() => { });

      message.error('登陆后才可以加入购物车,快去登录吧！')
    }
  }

  componentDidMount(){
    message.config({
      top: 300,
      duration: 2,
      maxCount: 2,
    });
  }
}

export default DetailsButton;