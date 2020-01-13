import React from 'react';
import { Input, message, Button } from 'antd';
import axios from 'axios';
import md5 from 'md5';
import { withStorage } from '../utils/hoc';
import Top from '../components/Top'

class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        }

        this.changename = this.changename.bind(this);
        this.changepsw = this.changepsw.bind(this);
        this.login = this.login.bind(this);
    }
    render() {
        return (
            <div className="main">
                <Top lur={this.props} color={{ background: '#ff464e' }} textcolor={{ color: '#fff' }} text={'注册'}>登录</Top>
                <div className="wap-login">
                    
                    <div className="login-txt">
                        <p className="active">卷皮账号登录</p>
                    </div>
                    <form action="">
                        <div className="login-info">
                            <ul className="info-input clear">
                                <li>
                                    <Input placeholder="请输入用户名" allowClear={true} onChange={this.changename} value={this.state.username} />
                                </li>
                                <li>
                                    <Input.Password placeholder="请输入密码" allowClear={true} onChange={this.changepsw} value={this.state.password} />
                                </li>
                            </ul>
                            <Button className="codeBtn" onClick={this.login}>登录</Button>
                            <div className="other-action">
                                <label className="freeLogin on">
                                    <i className="before">
                                        <img src="../images/label_on.png" alt="" />
                                    </i>
                                    两周内免登录
                        </label>
                                <a href="###" className="free-reg">忘记密码?</a>
                            </div>
                        </div>
                    </form>
                    <div className="wap-app">
                        <h3 className="third-txt">第三方账号快速登录</h3>
                        <div className="third-app clear">
                            <a href="#/login">
                                <img src="../images/tencent.png" alt="" />
                            </a>
                            <a href="#/login">
                                <img src="../images/taobao.png" alt="" />
                            </a>
                            <a href="#/login">
                                <img src="../images/sina.png" alt="" />
                            </a>
                        </div>
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

    login() {
        let { username, password } = this.state;
        let token = this.props.user;
        console.log(username, password, token);

        if (token) {
            message.error("你已经登陆过了");
        } else {
            // Toast.loading({
            //     message: "登录中...",
            //     forbidClick: true
            // });
            if (!username || !password) {
                message.error("账号或密码不能为空");
            } else {
                axios
                    .post(
                        `http://47.112.46.241:10086/users/login/${username},${md5(
                            password
                        )}`
                    )
                    .then(({ data }) => {
                        console.log(data);
                        if (data.length == 0) {
                            //为零密码错误
                            // window.console.log(data);
                            message.error("该用户名不存在或密码错误，请检查后再试");
                        } else {
                            //this.userToken = this.username; //Bearer令牌是。。。
                            // 将用户token保存到
                            localStorage.setItem('username', username);
                            // this.username = "";
                            // this.password = "";
                            message.success("登陆成功，欢迎来到皮皮~");
                           
                            this.props.history.push('/min');
                             window.history.go(0);
                        }
                    })
                    .catch(error => {
                        window.console.log(error);
                    });
            }
        }
    }
}

Login = withStorage(Login);

export default Login;