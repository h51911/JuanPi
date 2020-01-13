import React, { Component } from 'react'
// import './nav.css'
// import { Icon } from 'antd'
import '../../../node_modules/antd/dist/antd.css'

class Nav extends Component {

    constructor() {
        super();
        this.state = {
            tdText: [, '', '', '', '筛选'],
        }

        // this.changestyle = this.changestyle.bind(this);
    }

    // changestyle = (key) => {

    //     this.refs.idx.childNodes.forEach((item, index) => {
    //         if (key === index) {
    //             this.refs.idx.childNodes[key].className = "active"
    //         } else {
    //             this.refs.idx.childNodes[index].className = ""
    //         }
    //     });
    // }

    // componentDidMount() {
    //     this.changestyle(0)
    // }

    render() {
        return (
            <div className={this.props.contentclassName ? this.props.contentclassName:'navbox'}>
                <div className="nav-t">
                    <table>
                        <tbody>
                            <tr>
                                <td><a href="#/lists1" style={this.props.lur == '/list1' ? { color: '#ff464e' } : { color: '#666' }}>推荐</a></td>
                                <td><a href="#/lists2" style={this.props.lur == '/list2' ? { color: '#ff464e' } : { color: '#666' }}>价格↑</a></td>
                                <td><a href="#/lists3" style={this.props.lur == '/list3' ? { color: '#ff464e' } : { color: '#666' }}>价格↓</a></td>
                                <td><a href="#/lists4" style={this.props.lur == '/list4' ? { color: '#ff464e' } : { color: '#666' }}>上新</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="nav-b">
                    <nav>
                        <span className="ac">全部</span>
                        <span>连衣裙</span>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Nav