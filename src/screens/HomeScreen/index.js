import React, { Component } from 'react';
import GenDetailsScreen from '../GenDetailsScreen';
import { BussDetailsScreen } from '..';
import "./styles.css"
import HeadingOne from '../../components/texts/HeadingTwo';

class HomeScreen extends Component{
    WelcomeTitle = {
        instanceID: "WelcomeTitle",
        title: "New Vendor Registration"
      };

      state = {
          showGen: true,
          showBus: false
      };

      onClickGen = () => {
          this.setState({
            showGen: true,
            showBus: false
          })
      };
      onClickBus = () => {
        this.setState({
          showGen: false,
          showBus: true
        })
    };
    render(){
        return(
            <div className="outer-div">
                <p>
                <HeadingOne data={this.WelcomeTitle} />
                </p>
                <div className="panel">
                    <input value="General Details" class="panel-button" onClick={this.onClickGen} />
                    <input value="Business Details" class="panel-button" onClick={this.onClickBus} />
                </div>
                <div className="grid-outer">
                    { this.state.showGen ? <GenDetailsScreen /> : null }
                    { this.state.showBus ? <BussDetailsScreen /> : null }
                </div>
            </div>
        );
    }
}

export default HomeScreen;