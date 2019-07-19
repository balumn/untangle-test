import React, { Component } from 'react';
import HeadingTwo from '../../components/texts/HeadingTwo';

class GenDetailsScreen extends Component {
    GenDetailstitle = {
        instanceID: "GenDetailstitle",
        title: "General Details"
      };
    render(){
        return(
            <React.Fragment>
                <HeadingTwo data={this.GenDetailstitle} />
                <p>GenDetailsScreen</p>
            </React.Fragment>
        );
    }
}
export default GenDetailsScreen;