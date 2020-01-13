import React from 'react';
import { Tabs } from 'antd';
import Main from '../components/Mian';

class Classification extends React.Component {
    constructor() {
        super();

        this.state = {
            
        }
    }
    render() {
        return (
            <div>
                <div className="search-box">
                    <div className="box-search">
                        <input type="search" placeholder="搜索商品"/>
                    </div>
                    <button className="search-submit">
                        <img src="../images/search.png" alt="" />
                    </button>
                </div>
                <Tabs tabPosition='left'>
                    <Tabs.TabPane tab="女装" key="1">
                        <div className="third-cate">
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img src="http://s2.juancdn.com/bao/191101/4/1/5dbbe44433b089562c147214_200x200.png?iopcmd=convert&dst=webp" alt="" />
                                    <span>女士裙装</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/191101/6/5/5dbbe72133b089554a1a7630_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>羽绒棉服</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/191101/8/3/5dbbe91e33b08955ed35f212_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>卫衣</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/191101/6/3/5dbbdfd0b6f8ea60fc7c333e_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>衬衫雪纺</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/180510/f/6/5af4305c33b08974b25d97c5_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>休闲裤</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/191101/a/c/5dbbe5f233b089554d6251e4_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>大衣外套</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/191101/a/0/5dbbec4c33b08955ee6412f1_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>懒人套装</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/191101/9/e/5dbbe4e1b6f8ea60f03bc297_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>针织毛衫</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/191101/3/e/5dbbe70533b089553b0010a2_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>皮草</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/191101/2/a/5dbbea0f33b089564d680f24_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>西装外套</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/191101/a/e/5dbbe546b6f8ea5f0703fd0c_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>风衣</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/190220/d/a/5c6cda8233b0891a8c2ff71a_200x200.jpg?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>中老年女装</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/180517/b/0/5afd2b2133b08909906c57af_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>牛仔裤</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/181106/4/a/5be163f1b6f8ea61f7712835_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>职业套装</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/170502/3/2/5908496ca43d1f7f665137b7_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>T恤</span>
                                </a>
                            </div>
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="男装" key="2">
                        <div className="third-cate">
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img src="http://s2.juancdn.com/bao/170815/a/9/5992e3d18150a12e9903fc68_200x200.png?iopcmd=convert&dst=webp" alt="" />
                                    <span>夹克</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/190528/7/d/5cecdd8b33b08951d6492de9_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>套装</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/190528/2/a/5cecd8c9b6f8ea5ae1362821_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>T恤</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/190528/d/e/5cecdc3833b08955c532a6a4_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>男士衬衫</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/171011/7/c/59ddcb028150a1342d541a29_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>卫衣</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/190528/1/5/5cecd984b6f8ea5ca8567b37_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>POLO衫</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/170828/2/a/59a3d51a8150a108c4711bc3_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>牛仔裤</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/170828/6/a/59a3d4faa9fcf831ca0a6202_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>休闲裤</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/170828/4/6/59a3d531a9fcf8337b0f195e_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>西裤</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/170526/2/3/5927c3c9ad0a496da18b45cd_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>内衣</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/170526/f/6/5927c3d8a43d1f4ca80c9b57_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>袜子</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/170918/2/4/59bfc077a9fcf869cc021996_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>背心/马甲</span>
                                </a>
                            </div>
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="母婴" key="3">
                        <div className="third-cate">
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/180228/f/0/5a9669b5a9fcf89c253b904b_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>男童套装</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/180228/5/e/5a9677fea9fcf81fab76f155_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>女童套装</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/180228/c/e/5a96783da9fcf8211b3f1944_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>儿童裙装</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/180228/3/9/5a96726c8150a1463439c066_200x200.png?iopcmd=convert&dst=webp" />
                                    <span>儿童上衣</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/180228/0/4/5a96728da9fcf89c3959bf88_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>儿童裤子</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/180228/3/f/5a9680e3a9fcf820232d051c_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>内衣配饰</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/180228/4/9/5a9678cf8150a14543171d6a_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>儿童帆布鞋</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/180228/9/7/5a96791b8150a145e53384a7_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>儿童运动鞋</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/180228/8/a/5a9673118150a146a518b4c4_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>儿童皮鞋</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/180228/1/c/5a96734a8150a145ff079406_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>婴幼服饰</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/180228/1/a/5a9673748150a14689138d26_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>纸尿裤纸品</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/180228/9/6/5a9674eba9fcf89ca813961f_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>喂养用品</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/180228/d/7/5a967956a9fcf8213265ccd6_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>孕妈服饰</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/180228/0/5/5a96756ba9fcf89c3e6b4d8e_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>洗护用品</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/180228/3/d/5a9675948150a145ea2cc4c5_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>益智早教</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/180312/1/6/5aa5e22da9fcf803096f24f9_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>玩具乐器</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/180228/e/8/5a9676358150a1453e1d3db8_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>图书文具</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/180228/7/5/5a967745a9fcf8212f7cb015_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>寝居用品</span>
                                </a>
                            </div>
                            <div className="cate-second">
                                <a href="#/list1">
                                    <img
                                        src="http://s2.juancdn.com/bao/180228/a/e/5a9679768150a145265604ec_200x200.png?iopcmd=convert&dst=webp"
                                        alt=""
                                    />
                                    <span>孕妈用品</span>
                                </a>
                            </div>
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="鞋子" key="4">
                    <div className="third-cate">
                        <div className="cate-second">
                            <a href="#/list1">
                                <img
                                    src="http://s2.juancdn.com/bao/181009/3/4/5bbc0a07b6f8ea3a264b2077_200x200.png?iopcmd=convert&dst=webp"
                                    alt=""
                                />
                                <span>女休闲鞋</span>
                            </a>
                        </div>
                        <div className="cate-second">
                            <a href="#/list1">
                                <img src="http://s2.juancdn.com/bao/181009/d/f/5bbc0eae33b08916b93bc754_200x200.png?iopcmd=convert&dst=webp" alt="" />
                                <span>中/高跟单鞋</span>
                            </a>
                        </div>
                        <div className="cate-second">
                            <a href="#/list1">
                                <img src="http://s2.juancdn.com/bao/181009/9/6/5bbc0ec033b089152b0652f4_200x200.png?iopcmd=convert&dst=webp" alt="" />
                                <span>男休闲鞋</span>
                            </a>
                        </div>
                        <div className="cate-second">
                            <a href="#/list1">
                                <img src="http://s2.juancdn.com/bao/181009/5/a/5bbc0a80b6f8ea7e81191c30_200x200.png?iopcmd=convert&dst=webp" alt="" />
                                <span>男休闲鞋</span>
                            </a>
                        </div>
                        <div className="cate-second">
                            <a href="#/list1">
                                <img src="http://s2.juancdn.com/bao/181009/e/c/5bbc0a6f33b0891efa7703eb_200x200.png?iopcmd=convert&dst=webp" alt="" />
                                <span>商务皮鞋</span>
                            </a>
                        </div>
                        <div className="cate-second">
                            <a href="#/list1">
                                <img src="http://s2.juancdn.com/bao/181009/6/d/5bbc0a5a33b08902bc378795_200x200.png?iopcmd=convert&dst=webp" alt="" />
                                <span>坡跟厚底</span>
                            </a>
                        </div>
                        <div className="cate-second">
                            <a href="#/list1">
                                <img src="http://s2.juancdn.com/bao/181009/8/9/5bbc0a9fb6f8ea01c06bf3cd_200x200.png?iopcmd=convert&dst=webp" alt="" />
                                <span>冬靴上新</span>
                            </a>
                        </div>
                        <div className="cate-second">
                            <a href="#/list1">
                                <img src="http://s2.juancdn.com/bao/181009/8/6/5bbc0e9cb6f8ea1d44488f82_200x200.png?iopcmd=convert&dst=webp" alt="" />
                                <span>男士棉靴</span>
                            </a>
                        </div>
                        <div className="cate-second">
                            <a href="#/list1">
                                <img src="http://s2.juancdn.com/bao/181009/2/0/5bbc0adfb6f8ea7bdf1c524e_200x200.png?iopcmd=convert&dst=webp" alt="" />
                                <span>高跟凉鞋</span>
                            </a>
                        </div>
                        <div className="cate-second">
                            <a href="#/list1">
                                <img src="http://s2.juancdn.com/bao/181009/9/f/5bbc0af3b6f8ea02ae35dcff_200x200.png?iopcmd=convert&dst=webp" alt="" />
                                <span>平底凉鞋</span>
                            </a>
                        </div>
                        <div className="cate-second">
                            <a href="#/list1">
                                <img src="http://s2.juancdn.com/bao/181009/9/8/5bbc0b09b6f8ea1fad33ebc7_200x200.png?iopcmd=convert&dst=webp" alt="" />
                                <span>坡跟凉鞋</span>
                            </a>
                        </div>
                        <div className="cate-second">
                            <a href="#/list1">
                                <img src="http://s2.juancdn.com/bao/181009/9/c/5bbc0b2bb6f8ea017e06e730_200x200.png?iopcmd=convert&dst=webp" alt="" />
                                <span>外穿拖鞋</span>
                            </a>
                        </div>
                        <div className="cate-second">
                            <a href="#/list1">
                                <img src="http://s2.juancdn.com/bao/181009/8/9/5bbc0bad33b08922272f2296_200x200.png?iopcmd=convert&dst=webp" alt="" />
                                <span>男式凉鞋</span>
                            </a>
                        </div>
                        <div className="cate-second">
                            <a href="#/list1">
                                <img src="http://s2.juancdn.com/bao/181009/0/b/5bbc0bce33b089721c3bba04_200x200.png?iopcmd=convert&dst=webp" alt="" />
                                <span>居家拖鞋</span>
                            </a>
                        </div>
                        <div className="cate-second">
                            <a href="#/list1">
                                <img src="http://s2.juancdn.com/bao/181009/e/7/5bbc0be4b6f8ea230a3f736c_200x200.png?iopcmd=convert&dst=webp" alt="" />
                                <span>洞洞鞋</span>
                            </a>
                            </div>
                            <div className="cate-second">
                            <a href="#/list1">
                                <img src="http://s2.juancdn.com/bao/181009/c/8/5bbc0e8933b08919b10eb179_200x200.png?iopcmd=convert&dst=webp" alt="" />
                                <span>功能鞋</span>
                            </a>
                        </div>

                    </div>
                </Tabs.TabPane>
                    <Tabs.TabPane tab="箱包" key="5">
                    <div className="third-cate">
                        <div className="cate-second">
                            <a href="#/list1">
                                <img src="http://s2.juancdn.com/bao/170925/6/3/59c86a82a9fcf8675e021186_200x200.png?iopcmd=convert&dst=webp" alt="" />
                                <span>提挎包</span>
                            </a>
                        </div>
                        <div className="cate-second">
                            <a href="#/list1">
                                <img src="http://s2.juancdn.com/bao/170727/4/e/5979debca9fcf84de4585b35_200x200.png?iopcmd=convert&dst=webp" alt="" />
                                <span>双肩包</span>
                            </a>
                        </div>
                        <div className="cate-second">
                            <a href="#/list1">
                                <img src="http://s2.juancdn.com/bao/170727/c/8/5979df388150a14a7507105c_200x200.png?iopcmd=convert&dst=webp" alt="" />
                                <span>手提包</span>
                            </a>
                        </div>
                            <div className="cate-second">
                            <a href="#/list1">
                                <img src="http://s2.juancdn.com/bao/170727/c/4/5979e08ca9fcf8574d4ac70a_200x200.png?iopcmd=convert&dst=webp" alt="" />
                                <span>斜挎包</span>
                            </a>
                        </div>
                        <div className="cate-second">
                            <a href="#/list1">
                                <img src="http://s2.juancdn.com/bao/170727/7/4/5979df528150a14aaa53e879_200x200.png?iopcmd=convert&dst=webp" alt="" />
                                <span>单肩包</span>
                            </a>
                        </div>
                        <div className="cate-second">
                            <a href="#/list1">
                                <img src="http://s2.juancdn.com/bao/170727/d/f/5979e05fa9fcf893dd3778d6_200x200.png?iopcmd=convert&dst=webp" alt="" />
                                <span>斜挎男包</span>
                            </a>
                        </div>
                        <div className="cate-second">
                            <a href="#/list1">
                                <img src="http://s2.juancdn.com/bao/170727/8/d/5979e076a9fcf8a881738ce4_200x200.png?iopcmd=convert&dst=webp" alt="" />
                                <span>公文包</span>
                            </a>
                        </div>
                        <div className="cate-second">
                            <a href="#/list1">
                                <img src="http://s2.juancdn.com/bao/170727/4/b/5979dfcf8150a1493805bf2c_200x200.png?iopcmd=convert&dst=webp" alt="" />
                                <span>胸/腰包</span>
                            </a>
                        </div>
                        <div className="cate-second">
                            <a href="#/list1">
                                <img src="http://s2.juancdn.com/bao/170727/0/d/5979df74a9fcf86c47329f65_200x200.png?iopcmd=convert&dst=webp" alt="" />
                                <span>钱包</span>
                            </a>
                        </div>
                        <div className="cate-second">
                            <a href="#/list1">
                                <img src="http://s2.juancdn.com/bao/170727/b/d/5979df8a8150a11e8c057d4f_200x200.png?iopcmd=convert&dst=webp" alt="" />
                                <span>收纳包</span>
                            </a>
                        </div>
                            <div className="cate-second">
                            <a href="#/list1">
                                <img src="http://s2.juancdn.com/bao/170925/b/2/59c86c0ea9fcf86a8d27fba2_200x200.png?iopcmd=convert&dst=webp" alt="" />
                                <span>儿童书包</span>
                            </a>
                        </div>
                        <div className="cate-second">
                            <a href="#/list1">
                                <img src="http://s2.juancdn.com/bao/170727/5/1/5979e12c8150a14ade70b6fa_200x200.png?iopcmd=convert&dst=webp" alt="" />
                                <span>便当包</span>
                            </a>
                        </div>
                        <div className="cate-second">
                            <a href="#/list1">
                                <img src="http://s2.juancdn.com/bao/170727/d/6/5979e0c1a9fcf893181803ba_200x200.png?iopcmd=convert&dst=webp" alt="" />
                                <span>休闲包</span>
                            </a>
                        </div>
                        <div className="cate-second">
                            <a href="#/list1">
                                <img src="http://s2.juancdn.com/bao/170727/e/a/5979e0cfa9fcf86cdb7747ce_200x200.png?iopcmd=convert&dst=webp" alt="" />
                                <span>登山旅行包</span>
                            </a>
                        </div>
                        <div className="cate-second">
                            <a href="#/list1">
                                <img src="http://s2.juancdn.com/bao/170925/e/9/59c86b0ba9fcf8758c276128_200x200.png?iopcmd=convert&dst=webp" alt="" />
                                <span>零钱包</span>
                            </a>
                        </div>
                        <div className="cate-second">
                            <a href="#/list1">
                                <img src="http://s2.juancdn.com/bao/170727/e/b/5979e1188150a14ab829aa51_200x200.png?iopcmd=convert&dst=webp" alt="" />
                                <span>证件包</span>
                            </a>
                        </div>
                            <div className="cate-second">
                            <a href="#/list1">
                                <img src="http://s2.juancdn.com/bao/170925/a/3/59c86cc1a9fcf87591441053_200x200.png?iopcmd=convert&dst=webp" alt="" />
                                <span>户外包</span>
                            </a>
                        </div>
                    </div>
                </Tabs.TabPane>
                </Tabs>

                <Main lur={this.props.match.path}></Main>
            </div>
        )
    }
}

export default Classification;