import React, { Component } from 'react';
import "./styles.css"

class Footer extends Component {
    render(){
        return(
            <div className="footer">
                <div className="element">
                	&copy;
               </div>
               <div className="element">
                A unit of Untangle Pro-Strategy Services Pvt Ltd.
               </div>
               <div className="element">
                <img src="https://untanglestrategy.com/assets/images/logo-footer.svg" alt="banner" width="150px" />
               </div>
            </div>
        );
    }
}

export default Footer;