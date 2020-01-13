import React from 'react';
// import './goodslist.css'
import axios from 'axios';



class Goodslist extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ipage: 1,
            num: 30,
            isok: true,
            list: [],
            axi: ''
        }

        this.getgood = this.getgood.bind(this);
        this.goods = this.goods.bind(this);
    }

    render() {
        let data = this.state.list;
        console.log(data);
        console.log(this.props);
        
        
        return (
            <section className="goods">
                <ul className="goodslist">
                    {data.map((item) => {
                        return (
                            <li className="listcon" key={item.gid} onClick={() => { this.props.lur.history.push('/details/'+'listdata,'+item.gid)}}>
                                <div className="imgbox"><img src={item.imgurl} /></div>
                                <div className="conbox">
                                    <span className="price-new">
                                        <i>￥</i>
                                        {item.newprice}
                                    </span>
                                    <i className="del">￥{item.usedprice}</i>
                                    <span className="types">{item.types}</span>
                                </div>
                                <h3 className="shoptitle">{item.title}</h3>
                            </li>
                        )
                    })}

                </ul>
            </section>
        )
    }

    componentDidMount() {
        this.getgood();
        this.goods();


        // window.addEventListener("scroll", () => {
        //     let scrollTop = window.scrollY;
        //     let list = document.querySelector(".goodslist");
        //     let ih = list.offsetTop + list.offsetHeight - window.innerHeight;

        //     if (scrollTop >= ih) {
        //         //加载下一页
        //         if (this.state.isok) {
        //             this.state.ipage++;
        //             this.state.isok = false; //进来就关掉开关防止多次达到临界值，不断ipage++
        //             setTimeout(() => {
        //                 this.getgood();
        //                 this.goods();
        //             }, 1000);
        //         }
        //     }
        // });
        
    }

    getgood() {
        console.log(this.props);
        
        if (this.props.lur.match.path == '/list' || this.props.lur.match.path == '/list1') {
            // this.setState({
            //     axi:'goodlists'
            // })
            this.state.axi = 'goodlists'
        } else if (this.props.lur.match.path == '/list2') {
            // this.setState({
            //     axi:'goodlist1'
            // })
            this.state.axi = 'goodlist2'
        } else if (this.props.lur.match.path == '/list3') {
            // this.setState({
            //     axi:'goodlist2'
            // })
            this.state.axi = 'goodlist3'
        } else if (this.props.lur.match.path == '/list4') {

            this.state.axi = 'goodlist1'

        }
    }

    async goods() {
        console.log(this.state.axi);
        
        await axios
            .get(`http://47.112.46.241:10086/skin/${this.state.axi}/${this.state.ipage},${this.state.num}`)
            .then(({ data }) => {
                console.log(data);
                console.log(this.state.list);
                this.state.isok = true;
                data.list.forEach(item => this.state.list.push(item));
                this.setState({
                    list:data.list
                })
                // console.log(this.state.list);
                // if (data.pages >= 2 && data.page != data.pages) {
                //     //可以显示
                //     // this.okok = true;
                // } else {
                //     // this.okis = true;
                //     // this.okok = false;
                //     window.onscroll = null; //如果没有新数据了，就不能发送请求，减少服务器负担
                // }
            })
            .catch(error => {
                window.console.log(error);
            });
    }

    // goto(ev){
    //     this.props.history.push('/details','listdata',);
    // }

}


export default Goodslist