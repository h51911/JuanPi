import React from 'react';
import { Carousel } from 'antd';
import '../../../node_modules/antd/dist/antd.css'
// import './Detailsimg.css'

function Detailsimg(props) {
  

    return (
      <div >
        <Carousel dots={false} style={{height:320,width:375}} >
          <div className="boximg">
            <img src={props.list[0].imgurl}  />
          </div>
          <div className="boximg">
            <img src='https://goods4.juancdn.com/goods/191207/6/9/5deb3e75b6f8ea2aaa1bdd4c_800x800.jpg?imageMogr2/quality/88!/format/jpg'  />
          </div>
          <div className="boximg">
            <img src='https://goods7.juancdn.com/goods/191207/c/9/5deb3e7433b0894ef12981d4_800x800.jpg?iopcmd=convert&Q=88&dst=jpg'  />
          </div>
          <div className="boximg">
            <img src='https://goods5.juancdn.com/bao/191012/9/7/5da17dd933b089568267d532_790x790.jpg?iopcmd=convert&Q=88&dst=jpg'  />
          </div>
          <div className="boximg">
            <img src='https://goods8.juancdn.com/bao/191012/f/8/5da17dd4b6f8ea7f764640aa_790x790.jpg?imageMogr2/quality/88!/format/jpg'  />
          </div>
        </Carousel>
      </div>
    )
 }


export default Detailsimg;