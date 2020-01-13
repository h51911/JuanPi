import React from 'react';
import {Icon} from 'antd';

class HomeTop extends React.Component {
  constructor() {
    super();

    this.state = {

    }
  }
  render() {
    return (
      <div>
        <div className="sc-gzOgki jVdqXb">
          <div className="sc-iyvyFf jTpZiT">
            <a className="sc-hwwEjo cDNDuJ" href="#/classification" style={{ color: 'rgb(153, 153, 153)' }}>
              <Icon type="search" />
              <span className="search-img">
                <img className="sc-kfGgVZ dxtDGP" src="https://s1.juancdn.com/bao/170926/8/2/59ca3863a9fcf823cd42cfcb_84x60.png" />
              </span>
              <span>搜索</span>
            </a>
            <a className="sc-kPVwWT jktfkc" href="#/classification">
              <img className="sc-kfGgVZ dxtDGP" src="https://goods3.juancdn.com/bao/170421/4/9/58f9f3bca43d1f15ff678b8c_132x132.png" />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeTop;