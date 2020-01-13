import React from 'react';
import { withStorage } from '../utils/hoc';
import Main from '../components/Mian';
import { Icon, InputNumber, Modal, message } from 'antd';
import axios from 'axios';
import Top from '../components/Top'

class Cart extends React.Component {
    constructor() {
        super();

        this.state = {
            value: false,
            token: '',
            cartlist: [],
            num: 0,
            checkedAll: true,
            checkeds: [],
            totalPrice: 0,
            shopNum: 0
        }

        this.cartgood = this.cartgood.bind(this);
        this.changeNum = this.changeNum.bind(this);
        // this.setNum = this.setNum.bind(this);
        this.setBool = this.setBool.bind(this);
        this.setBoolAll = this.setBoolAll.bind(this);
        // this.setTotal();
        // this.open=this.open.bind(this);
        this.romoveItem = this.romoveItem.bind(this);
    }
    render() {
        // console.log(this.props);
        console.log(this.state.checkedAll);
        return (
            <div>
                <Top lur={this.props} color={{ background: '#fff' }}>购物车</Top>
                {
                    this.props.user ? <div>
                        <div className="item_body">
                            <ul className="good_list">
                                {
                                    this.state.cartlist.map((item, index) => {
                                        let num = 0;
                                        // console.log(num, this.state.checkedAll);

                                        this.state.cartlist.forEach(ele => {
                                            if (ele.bool.data[0] == 1) {
                                                num++;
                                                if (num == this.state.cartlist.length) {
                                                    this.state.checkedAll = true;
                                                } else {
                                                    this.state.checkedAll = false;
                                                }
                                            } else {
                                                this.state.checkedAll = false;
                                            }
                                        })
                                        return (
                                            <li className="good_item" key={item.gid}>
                                                <div className="good_radio">
                                                    <input type="checkbox" defaultChecked={Boolean(item.bool.data[0])} onChange={(ev) => this.setBool(ev, item.gid)} />
                                                </div>
                                                <div className="good_info clear">
                                                    <div className="pic">
                                                        <img src={item.imgurl} alt="" />
                                                    </div>
                                                    <div className="info_box">
                                                        <div className="info_first clear">
                                                            <p className="title">{item.title}</p>
                                                            <div onClick={(ev) => this.romoveItem(ev, index, item.gid)}>
                                                                <Icon type="delete" style={{ float: 'right' }} className='icondel' />
                                                            </div>

                                                        </div>
                                                        <div className="info_third clear">
                                                            <p className="price fl">
                                                                <span className="new-price">{item.newprice}</span>
                                                                <span className="vip-price">{item.usedprice}</span>
                                                            </p>
                                                            <div className="num">
                                                                <span className="changeNum" style={{ display: 'inline' }}>
                                                                    <InputNumber size="small" min={1} max={99} defaultValue={item.num} onChange={(ev) => this.changeNum(ev, item.gid)} />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>



                        <div className="bag-total">
                            <div className="sel-all">
                                <input className="iconfont" type="checkbox" checked={this.state.checkedAll} onChange={this.setBoolAll} />
                                全选
                    </div>
                            <div className="bag-money">
                                <p className="count">
                                    <span>合计
                        <em>￥{this.state.totalPrice}</em>
                                    </span>
                                </p>
                            </div>
                            <a href="#/cart" className="go_pay">去结算({this.state.shopNum})</a>
                        </div>
                        </div>:
                        <div style={{textAlign:'center',marginTop:'300px'}}>你还没登录哦，快去登录吧！！！</div>
                }

                <Main lur={this.props.match.path} cartnum={this.state.cartlist.length}></Main>
            </div>
        )
    }

    async componentDidMount() {
        this.cartgood();
    }

    async cartgood() {
        // console.log(666);

        this.state.token = this.props.user;
        let total = 0;
        let shop = 0;
        let num = 0;
        //  console.log(this.state.token);
        // console.log(this.state.checkedAll);


        await axios
            .get(`http://47.112.46.241/:10086/skin/cartdata/${this.state.token}`)
            .then(({ data }) => {
                // this.cartlist = data;
                this.setState({
                    cartlist: data,
                    // checkedAll: this.state.cartlist[0].bool.data[0]
                })

                this.state.cartlist.forEach(item => {
                    // console.log(item.bool.data[0], item.total);

                    if (item.bool.data[0] == 1) {
                        num++;

                        total += item.total;
                        shop += item.num;
                        this.setState({
                            totalPrice: total,
                            shopNum: shop,
                            cartlist: data,
                            // checkedAll: !this.state.checkedAll
                        })
                    } else {
                        // num--;
                        this.setState({
                            totalPrice: total,
                            shopNum: shop,
                            // checkedAll: this.state.checkedAll
                        })
                    }
                    // if (num == this.state.cartlist.length) {
                    //     this.setState({
                    //         checkedAll: true
                    //     })
                    // } else {
                    //     this.setState({
                    //         checkedAll: false
                    //     })
                    // }
                    // console.log(num, this.state.checkedAll);
                    // // if (num)
                })
            })
            .catch(error => {
                window.console.log(error);
            });
    }

    async changeNum(ev, id) {
        await axios
            .put(`http://47.112.46.241:10086/skin/cartshopdata/${id},${ev}`)
            .then(() => {
                // console.log(data);
                this.cartgood();
            })
            .catch(error => {
                console.log(error);
            });
    }

    async setBool(ev, id) {
        // console.log(ev.target.checked);
        await axios
            .put(`http://47.112.46.241:10086/skin/cartbool/${id},${Number(ev.target.checked)}`)
            .then(({ data }) => {
                // console.log(data);
                this.cartgood();
            })
            .catch(error => {
                window.console.log(error);
            });
        // this.setBoolAll();
    }

    async setBoolAll() {
        console.log(!this.state.checkedAll);
        // console.log(checkedAll);
        await axios
            .put(`http://47.112.46.241:10086/skin/boolall/${Number(!this.state.checkedAll)}`)
            .then(({ data }) => {
                console.log(data);
                this.cartgood();
                // this.props.history.push('/home');
                // window.history.go(0);
                this.props.history.push('/cartr');
                this.props.history.push('/cart');
            })
            .catch(error => {
                window.console.log(error);
            });
    }

    // open(index,gid){
    //     Modal.confirm({
    //         title: '你确定要移除这个商品吗?',
    //         content: '确定移除？不再考虑一下吗？',
    //         onOk() {
    //             console.log('OK');
    //             // message.success('移除成功！');
    //             this.state.cartlist.splice(index,1);
    //             this.romoveItem(gid)
    //         },
    //         onCancel() {
    //             console.log('Cancel');
    //             // message.warning('已取消移除！');
    //         },
    //     });
    // }

    async romoveItem(ev,index,gid) {
        // console.log(ev.target.target.target.target.target);
        // targ
        // let cartlist = this.state.cartlist.splice(index, 1);
        //  this.setState({
        //      cartlist
        //  })
        await axios
            .delete(`http://47.112.46.241:10086/skin/cartshopdata/${gid},${gid}`)
            .then(() => {
                // console.log(data);
                 this.cartgood();
            })
            .catch(error => {
                console.log(error);
            });
    }
}

Cart = withStorage(Cart);

export default Cart;