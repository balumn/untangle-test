import React, { Component } from 'react';
import banner from './banner.jpg'

class Header extends Component {
    render(){
        return(
            <div style={{textAlign:'center'}}>
                <img src={banner} alt="banner" width="95%" />
            </div>
        );
    }
}
export default Header;