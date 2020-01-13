import React from 'react';
import { Input, message, Button } from 'antd';
import axios from 'axios';
import md5 from 'md5';
import { withStorage } from '../utils/hoc';
import Top from '../components/Top'

class Reg extends React.Component {
    constructor() {
        super();
        
        this.state = {
            username: '',
            password: '',
            uoks: '',
            poks: '',
        }

        this.changename = this.changename.bind(this);
        this.changepsw = this.changepsw.bind(this);
        this.ss = this.ss.bind(this);
        // this.register = this.register.bind(this);
    }
    render() {
        return (
            <div className='main1'>
                <div className='app1'>

                    <div className="head">
                        <Top lur={this.props} color={{ background: '#fff' }}>注册</Top>
                    </div>

                    <div className="wap-login">
                        <p className="reg-notice">请使用你的用户名注册</p>
                        <form action="" method="post">
                            <div className="login-info">
                                <ul className="info-input clear">
                                    <li>
                                        <Input placeholder="请输入用户名" allowClear={true} onChange={this.changename} value={this.state.username} />
                                    </li>
                                    <li>
                                        <Input.Password placeholder="请输入密码" allowClear={true} onChange={this.changepsw} value={this.state.password} />
                                    </li>
                                </ul>
                                <Button className="codeBtn" onClick={this.ss}>下一步</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        message.config({
            top: 300,
            duration: 2,
            maxCount: 2,
        });
    }

    // 获取账号
    changename(event) {
        this.setState({
            username: event.target.value
        })
        // console.log(this.state.username);

    }

    // 获取密码
    changepsw(event) {
        this.setState({
            password: event.target.value
        })
    }

    ss() {
        let { username, password } = this.state;
        //用户名正则，4到16位（字母，数字，下划线，减号）
        let reg1 = /^[a-zA-Z0-9_-]{4,16}$/;
        let reg2 = /^[a-zA-Z0-9]{4,10}$/;
        if (!username) {
            //未输入
            message.error("请输入用户名");
            return;
        }
        if (!reg1.test(username)) {
            //不合法
            message.error("您输入的用户名不合法，请重新输入");
            // username = "";
            this.setState({
                username: ''
            })
            // this.$refs.username.focus();
            // this.ushows = "";
        } else {
            axios
                .post(`http://47.112.46.241:10086/users/reg1/${username}`)
                .then(({ data }) => {
                    console.log(data);
                    if (data.length) {
                        message.error("您输入的用户名太受欢迎了，请换一个吧");

                        this.state.uoks = false;
                    } else {
                        this.state.uoks = true;

                        if (!password) {
                            //未输入手机号
                            message.error("请输入密码");
                            return;
                        }
                        if (!reg2.test(password)) {
                            //密码不合法
                            this.setState({
                                password: ''
                            })
                            // this.$refs.password.focus();
                            message.error("您输入的密码格式不合法，密码不能含有非法字符，长度在4-10之间");
                            // password = "";
                            this.state.poks = false;
                        } else {
                            // this.pshows = "success";
                            this.state.poks = true;

                            if (this.state.uoks && this.state.poks) {
                                // console.log(this.state.uoks, this.state.poks);

                                axios
                                    .post(
                                        `http://47.112.46.241:10086/users/reg2/${username},${md5(
                                            password
                                        )}`
                                    )
                                    .then(({ data }) => {
                                        console.log(data);
                                        if (data.message != "成功") {
                                            message.error("您的用户名已被注册了，快换个");
                                        } else {
                                            // this.username = "";
                                            // this.password = "";
                                            // this.ushows = "";
                                            // this.pshows = "";
                                            message.success("注册成功，马上跳转登录页面");
                                            this.props.history.push('/login'); //成功就跳转到登录页
                                            // localStorage.setItem('username',username);
                                        }
                                    })
                                    .catch(error => {
                                        window.console.log(error);
                                    });
                            }
                        }
                    }
                })
                .catch(error => {
                    console.log(error);
                });
            // console.log(this.state.uoks);
        }
    }


}

Reg = withStorage(Reg);

export default Reg;