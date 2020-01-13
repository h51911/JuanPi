import React from 'react';
import Detailsimg from '../components/Details/Detailsimg';
import Detailscon from '../components/Details/Detailscon';
import Detailsbottom from '../components/Details/Detailsbottom';
import DetailsButton from '../components/Details/DetailsButton';
import Top from '../components/Top'
import { withStorage } from '../utils/hoc';
import axios from 'axios'

class Details extends React.Component {
    constructor() {
        super();

        this.state = {
            list: [{
                gid:0,
                imgurl:'',
                newprice: 0,
                usedprice: 0,
                title: ''
            }]
        }
    }

    render() {
        return ( 
            <div>
                <Top lur={this.props} color={{ background: '#fff' }}>商品详情</Top>
                <Detailsimg list={this.state.list}/>
                <Detailscon lur={this.props} list={this.state.list}/>
                <Detailsbottom />
                <DetailsButton user={this.props.user} list={this.state.list} lur={this.props}/>
            </div>
        )
    }

    async componentDidMount(){
        await axios
            .get(`http://47.112.46.241:10086/skin/goodlist/${this.props.match.params.id.split(',')[0]},${this.props.match.params.id.split(',')[1]}`)
            .then(({ data }) => {
                console.log(data);
                this.setState({
                    list: data
                })
            })
            .catch(error => {
                window.console.log(error);
            });
    }
}

Details = withStorage(Details);

export default Details;