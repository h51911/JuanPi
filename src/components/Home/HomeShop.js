import React from 'react';
import { Tabs } from 'antd';
import axios from 'axios';

class HomeShop extends React.Component {
  constructor() {
    super();

    this.state = {
      dataList1: [],
      dataList2: [],
      ipage: 1,
      num: 30,
      isok: true,
    }

    this.goodData1 = this.goodData1.bind(this);
    this.goodData2 = this.goodData2.bind(this);
  }
  render() {
    // let { dataList1, dataList2 } = this.state;
    return (
      <div>
        <Tabs defaultActiveKey="1" animated={false}>
          <Tabs.TabPane tab="精选专场" key="1" className='tab1'>
            <div className='goods sc-uJMKN eAzbYJ'>
              {
                this.state.dataList1.map(item => {
                  return <div className="sc-bbmXgH gCgGoL" key={item.gid}>
                    <a className="GoodsLink" href="#/list1">
                      <div className="sc-gGBfsJ bHohRa">
                        <div className="sc-jnlKLf bYqRFU">
                          <img className="sc-fYxtnH idxkID" src={item.imgurl} />
                        </div>
                        <div className="sc-tilXH cEQZgN">
                          <span className="sc-ktHwxA gVLSd">{item.newprice}</span>
                          {/* <span className="sc-cIShpX dgjaoA">{item.usedprice}</span> */}
                        </div>
                        <div className="sc-cmTdod dFUsnh">{item.title}</div>
                      </div>
                    </a>
                  </div>
                })
              }
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="精选单品" key="2" className='tab2'>
            <div className='goods sc-uJMKN eAzbYJ'>
              {
                this.state.dataList2.map(item => {
                  return <div className="sc-bbmXgH gCgGoL" key={item.gid}>
                    <a className="GoodsLink" href={"#/details/homedata2,"+item.gid}>
                      <div className="sc-gGBfsJ bHohRa">
                        <div className="sc-jnlKLf bYqRFU">
                          <img className="sc-fYxtnH idxkID" src={item.imgurl}/>
                        </div>
                        <div className="sc-tilXH cEQZgN">
                          <span className="sc-ktHwxA gVLSd">{item.newprice}</span>
                          <span className="sc-cIShpX dgjaoA">{item.usedprice}</span>
                        </div>
                        <div className="sc-cmTdod dFUsnh">{item.title}</div>
                      </div>
                    </a>
                  </div>
                })
              }
            </div>
          </Tabs.TabPane>
        </Tabs>
      </div>
    )
  }

  componentDidMount() {
    let box = document.querySelector(".ant-tabs-nav-wrap");
    
    // 吸顶效果
    window.addEventListener("scroll", () => {
      let scltop = window.scrollY;
      if (scltop > 750) {
        box.className = "ant-tabs-nav-wrap fix";
      } else {
        box.className = "ant-tabs-nav-wrap";
      }
    })

    // 懒加载效果
    // window.addEventListener("scroll", () => {
    //   let scrollTop = window.scrollY;
    //   let list = document.querySelector(".ant-tabs-content");
    //   let ih = list.offsetTop + list.offsetHeight - window.innerHeight;
    //   console.log(scrollTop, ih);
      
    //   if (scrollTop >= ih) {
    //     //加载下一页
    //     if (this.state.isok) {
    //       this.state.ipage++;
    //       this.state.isok = false; //进来就关掉开关防止多次达到临界值，不断ipage++
    //       setTimeout(() => {
    //         this.goodData1();
    //       }, 1000);
    //     }
    //   }
    // });

    this.goodData1();
    this.goodData2();
  }

  async goodData1(){
    // await axios
    //   .get(`http://localhost:10086/skin/homelist1/${this.state.ipage},${this.state.num}`)
    //   .then(({ data }) => {
    //     console.log(data);

    //     // this.setState({
    //     //   dataList1: data
    //     // })
    //     this.state.isok = true;
    //     data.list.forEach(item => this.state.dataList1.push(item));
        
    //     // this.setState({
    //     //   datalist1:data.list
    //     // })
    //     console.log(this.state.dataList1);
    //     if (data.pages >= 2 && data.page != data.pages) {
    //       //可以显示
    //       // this.okok = true;
    //     } else {
    //       // this.okis = true;
    //       // this.okok = false;
    //       window.onscroll = null; //如果没有新数据了，就不能发送请求，减少服务器负担
    //     }
    //     //  console.log(this.state.dataList2);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    await axios
      .get('http://47.112.46.241:10086/skin/goodhome1')
      .then(({ data }) => {
        // console.log(data);

        this.setState({
          dataList1: data
        })

        //  console.log(this.state.dataList2);

      })
      .catch(error => {
        console.log(error);
      });
  }

  async goodData2(){
    await axios
      .get('http://47.112.46.241:10086/skin/goodhome2')
      .then(({ data }) => {

        // console.log(data);

        this.setState({
          dataList2: data
        })

        //  console.log(this.state.dataList2);

      })
      .catch(error => {
        console.log(error);
      });
  }
}

export default HomeShop;