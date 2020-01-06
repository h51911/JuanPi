import React from 'react';
import { Carousel } from 'antd';

class HomeBanner extends React.Component {
  constructor() {
    super();

    this.state = {

    }
  }
  render() {
    return (
      <div>
        <Carousel autoplay>
          <div>
            <img src='https://goods2.juancdn.com/jas/200102/3/2/5e0d8c53b6f8ea43562e4ba0_1080x418.png'/>
          </div>
          <div>
            <img src='https://goods1.juancdn.com/jas/200103/0/0/5e0f05fd33b089067d4a2485_1080x418.jpg'/>
          </div>
          <div>
            <img src='https://goods4.juancdn.com/jas/200103/6/4/5e0f05e933b08935c2768eaa_1080x418.jpg'/>
          </div>
          <div>
            <img src='https://goods5.juancdn.com/jas/200103/9/7/5e0ee89cb6f8ea5d854cc39d_1080x418.jpg' />
          </div>
          <div>
            <img src='https://goods8.juancdn.com/jas/200103/f/6/5e0f10ef33b089475f520388_1080x418.jpg' />
          </div>
          <div>
            <img src='https://goods5.juancdn.com/jas/190422/8/2/5cbd6608b6f8ea54ff237631_1080x418.png' />
          </div>
        </Carousel>
      </div>
    )
  }
}

export default HomeBanner;