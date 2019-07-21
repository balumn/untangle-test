import React, { Component } from 'react';
import HeadingOne from "../texts/HeadingOne"
import banner from './logo.svg'
import './styles.css'

class Header extends Component {
    WelcomeTitle = {
        instanceID: "WelcomeTitle",
        title: "New Vendor Registration"
      };
    render(){
        return(
            <div>
                <div className="header">
                    <a href="#default" className="logo"><img src={banner} alt="banner" width="150px" /></a>
                    <div className="header-right">
                        <HeadingOne data={this.WelcomeTitle} />
                    </div>
                </div>
            </div>
        );
    }
}
export default Header;