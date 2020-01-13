import React, { Component } from 'react';
// import './List.css'
// import { Icon } from 'antd'
import '../../node_modules/antd/dist/antd.css'
// import Head from '../components/List/header'
import Top from '../components/Top';
import Nav from '../components/List/nav'
import Goodslist from '../components/List/goodslist'
// import axios from 'axios'
import { withStorage } from '../utils/hoc';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // contentclassName: "navbox",
            list:[],
            
        };
        this.bindHandleScroll = this.bindHandleScroll.bind(this)
    };

    componentDidMount() {
        window.addEventListener('scroll', this.bindHandleScroll);
    }
    
    bindHandleScroll() {
        let h = document.documentElement.scrollTop;
            if (h > 44) {                
                this.setState({
                    contentclassName: "navbox navboxfixd"
                })                
            } else {
                this.setState({
                    contentclassName: "navbox"
                })
            }    
    };

    render() {
        let obj = {
            background:''
        }
        return (
            <div className="listbox">
                {/* <Head /> */}
                <Top lur={this.props} color={{ background: '#fff' }}>女士裙装</Top>
                <Nav contentclassName={this.state.contentclassName} lur={this.props.match.path}/>
                <Goodslist list={this.state.list} lur={this.props}/>
            </div>
        )
    }

    // componentDidMount() {
    //     console.log(this.props.match.path);
        
    // }
}

List = withStorage(List);

export default List;