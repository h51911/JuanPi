import React from 'react'
import { Icon } from 'antd'
import '../../../node_modules/antd/dist/antd.css'
import axios from 'axios'
// import './Detailscon.css'

class Detailscon extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // list: [{
            //     newprice: 0,
            //     usedprice: 0,
            //     title: '',
            // }]
        }
    }

    render() {
        console.log(this.props.list);

        return (
            <section>
                <div className="conboxs">
                    <div className="conbox-t">
                        <div className="conbox-t-l">
                            <span className="prices"><span></span>￥{this.props.list[0].newprice}</span>
                            <span className="dels">￥{this.props.list[0].usedprice}</span>
                            <span className="bao">包邮</span>
                        </div>

                        <span className="buys">一亿人已购</span>
                    </div>
                    <div className="conbox-b">
                        <p className="contitle">{this.props.list[0].title}</p>
                        <Icon type="heart" style={{ fontSize: 20 }} />

                    </div>
                </div>
            </section>
        )
    }

    // async componentDidMount() {
    //     // let { id } = this.props.match.params;
    //     // console.log(id);
    //     console.log(this.props.lur.match.params.id.split(',')[0]);


    //     await axios
    //         .get(`http://localhost:10086/skin/goodlist/${this.props.lur.match.params.id.split(',')[0]},${this.props.lur.match.params.id.split(',')[1]}`)
    //         .then(({ data }) => {
    //             console.log(data);
    //             this.setState({
    //                 list: data
    //             })
    //         })
    //         .catch(error => {
    //             window.console.log(error);
    //         });
    // }

}

export default Detailscon