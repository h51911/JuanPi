import React from 'react';
import HomeTop from '../components/Home/HomeTop';
import HomeBanner from '../components/Home/HomeBanner';
import HomeLinkImg from '../components/Home/HomeLinkImg';
import HomeShop from '../components/Home/HomeShop';
import Main from '../components/Mian';
import { withStorage } from '../utils/hoc';

class Home extends React.Component {
    constructor() {
        super();

        this.state = {

        }
    }
    render() {
        // console.log(this.props.match.path);
        
      
        return (
            <div>
                <HomeTop></HomeTop>
                <HomeBanner></HomeBanner>
                <HomeLinkImg></HomeLinkImg>
                <HomeShop></HomeShop>
                <Main lur={this.props.match.path}></Main>
            </div>
        )
    }
    componentDidMount(){
        let list = document.querySelector(".tab1");
        let ih = list.offsetTop + list.offsetHeight - window.innerHeight;
        console.log(ih);
    }
}

Home = withStorage(Home)

export default Home;