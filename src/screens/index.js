import React, { Component } from 'react';
import HeadingOne from "../components/texts/HeadingOne"

class GenDetailsScreen extends Component {
    GenDetailstitle = {
        instanceID: "GenDetailstitle",
        title: "General Details"
      };
    render(){
        return(
            <React.Fragment>
                <HeadingOne data={this.GenDetailstitle} />
            </React.Fragment>
        );
    }
}
export default GenDetailsScreen;