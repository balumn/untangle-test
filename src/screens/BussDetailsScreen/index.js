import React, { Component } from 'react';
import HeadingTwo from '../../components/texts/HeadingTwo';
import "../styles.css"

class BussDetailsScreen extends Component {
    BussDetailstitle = {
        instanceID: "BussDetailstitle",
        title: "Business Details"
      };
    render(){
        return(
            <React.Fragment>
                <HeadingTwo data={this.BussDetailstitle} />
                <form method="post">
                    <div>
                        <div className="form">
                            <label> Business with ESSAR Group in last five years : *</label>
                            <input className="radioButton" type="radio" name="bussPartner" value="Yes" />Yes &nbsp;
                            <input type="radio" name="bussPartner" value="No" checked />No
                            <br /><br />

                            <label>If Yes please provide details : *</label>
                            <textarea className="iinput" style={{ height: 100, paddingTop: 10 }} placeholder="Existing Vendor Code&#10;Name of Essar Group Company&#10;PO no.&#10;Date" />
                        </div>
                        <div className="form-r">
                            hello world
                        </div>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}
export default BussDetailsScreen;