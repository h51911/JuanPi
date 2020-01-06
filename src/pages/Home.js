import React from 'react';
import HomeTop from '../components/Home/HomeTop';
import HomeBanner from '../components/Home/HomeBanner';
import HomeLinkImg from '../components/Home/HomeLinkImg';

class Home extends React.Component {
    constructor() {
        super();

        this.state = {

        }
    }
    render() {
        return (
            <div>
            <HomeTop></HomeTop>
            <HomeBanner></HomeBanner>
            <HomeLinkImg></HomeLinkImg>
            </div>
        )
    }
}

export default Home;