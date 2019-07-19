import React, { Component } from 'react';
import HeadingTwo from '../../components/texts/HeadingTwo';

class BussDetailsScreen extends Component {
    BussDetailstitle = {
        instanceID: "BussDetailstitle",
        title: "Business Details"
      };
    render(){
        return(
            <React.Fragment>
                <HeadingTwo data={this.BussDetailstitle} />
            </React.Fragment>
        );
    }
}
export default BussDetailsScreen;