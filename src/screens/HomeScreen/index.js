import React, { Component } from 'react';
import HeadingOne from '../../components/texts/HeadingOne';

class HomeScreen extends Component{
    WelcomeTitle = {
        instanceID: "WelcomeTitle",
        title: "New Vendor Registration"
      };
    render(){
        return(
            <div className="outer-div">
                <HeadingOne data={this.WelcomeTitle} />
            </div>
        );
    }
}

export default HomeScreen;