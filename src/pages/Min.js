import React from 'react';
import Main from '../components/Mian';
import { withStorage } from '../utils/hoc';
import {Icon} from 'antd';
import Top from '../components/Top'

class Min extends React.Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        // console.log(this.props);

        let token = this.props.user;
        return (
            <>
                <div className="main ">
                    <div className="app">
                        <div className="userCenter">
                            <div id="head">
                                <Top lur={this.props} color={{ background: '#ff464e' }} textcolor={{color:'#fff'}} text={'退出'}>个人中心</Top>
                                {
                                    token == "" ?
                                        <div className="user-login">
                                            <a href="#/reg">注册</a>
                                            <i className="line"></i>
                                            <a href="#/login">登录</a>
                                        </div>
                                        : <div className="user">
                                            <div className="head_img">
                                                <a href="#/min">
                                                    <img src="../images/default-img.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className="message">
                                                <p className="tel">
                                                    <a href="#/min">{token}</a>
                                                </p>
                                                <div className="message_detal">
                                                    <span>
                                                        <a href="#/min">我的账号</a>
                                                        <i className="arrow"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                }
                            </div>
                        </div>
                        <div className="userBox">
                            <a href="#/min" className="user-item">
                                <span>我的订单</span>
                                <span className="label">全部订单</span>
                            </a>
                            <div className="userItem">
                                <a href="#/min">
                                    <em className="iconfont"><Icon type="wallet" /></em>
                                    <span className="text">待付款</span>
                                </a>
                                <a href="#/min">
                                    <em className="iconfont"><Icon type="user-add" /></em>
                                    <span className="text">待成团</span>
                                </a>
                                <a href="#/min">
                                    <em className="iconfont"><Icon type="car" /></em>
                                    <span className="text">待收货</span>
                                </a>
                                <a href="#/min">
                                    <em className="iconfont"><Icon type="transaction" /></em>
                                    <span className="text">退款/售后</span>
                                </a>
                            </div>
                            <div className="userItems">
                                <a href="#/min" className="user-item">
                                    <span>我的优惠券</span>
                                </a>
                                <a href="#/min" className="user-item">
                                    <span>我的收藏</span>
                                </a>

                                <a href="#/min" className="user-item">
                                    <span>我的拼团</span>
                                </a>
                                <a href="#/min" className="user-item">
                                    <span>我的免单券</span>
                                    <span className="label">0张</span>
                                </a>
                                <a href="#/min" className="user-item">
                                    <span>借钱</span>
                                    <span className="label">新用户免费领1000元</span>
                                </a>
                            </div>
                            <div className="userItems">
                                <a href="#/min" className="user-item">
                                    <span>客服中心</span>
                                </a>
                                <a href="#/min" className="user-item">
                                    <span>关于卷皮</span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                <Main lur={this.props.match.path}></Main>
            </>
        )
    }

    // componentDidMount(){
       
    // }
}

Min = withStorage(Min);

export default Min;