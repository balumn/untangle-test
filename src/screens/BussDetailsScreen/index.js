import React, { Component } from 'react';
import HeadingOne from "../../components/texts/HeadingOne"

class BussDetailsScreen extends Component {
    BussDetailstitle = {
        instanceID: "BussDetailstitle",
        title: "Business Details"
      };
    render(){
        return(
            <React.Fragment>
                <HeadingOne data={this.BussDetailstitle} />
            </React.Fragment>
        );
    }
}
export default BussDetailsScreen;