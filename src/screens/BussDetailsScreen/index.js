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
                    <div className="wrapper"> {/* wrapper of 2 divs */}
                        <div className="form">
                            <label> Business with ESSAR Group in last five years : *</label>
                            <input className="radioButton" type="radio" name="bussPartner" value="Yes" />Yes &nbsp;
                            <input className="radioButton" type="radio" name="bussPartner" value="No" checked />No
                            <br /><br />

                            <label>If Yes please provide details : *</label>
                            <textarea className="iinput" required style={{ height: 100, paddingTop: 10 }} placeholder="Existing Vendor Code&#10;Name of Essar Group Company&#10;PO no.&#10;Date" />
                            <br /><br />
                            
                            <label> Are you ISO certified? : *</label>
                            <input className="radioButton" type="radio" name="isoCertified" value="Yes" />Yes &nbsp;
                            <input type="radio" name="isoCertified" value="No" checked />No
                            <br /><br />

                            <label>Type of Certificate:&nbsp;</label>
                            <input type="text" className="iinput" style={{ minWidth: "55%" }} name="certType" />
                            <br />

                            <label> Validity of Certificate: </label>
                            <input type="text" className="iinput" style={{ minWidth: "52%" }} name="certValidity" />
                            <br />

                            <label>Issuing authority :  </label>
                            <input type="text" className="iinput" style={{ minWidth: "57%" }} name="certIssueAuth" />
                            <br />
                            <label>Year of Validation </label>
                            <input type="text" className="iinput" style={{ minWidth: "57%" }} name="certyearValidation" />
                            <br /><br />
                            
                            <label>Type of Firm: ?</label>
                            <select className="drop" required style={{ marginLeft:40, paddingLeft:10  ,minWidth: "80%"  }}>
                                <option selected="selected" value="Select An Option">Select An Option</option>
                                <option value="jointVenture">Joint Venture</option>
                                <option value="ngoFirm">NGO Firm</option>
                                <option value="partnershipFirm">Partnership Firm</option>
                                <option value="propritorship">Propritorship</option>
                                <option value="psuGovtOrg">PSU / Govt. Org.</option>
                                <option value="publicLtdCo">Public Ltd. Co.</option>
                                <option value="PvtLtdCo">Pvt. Ltd. Co.</option>
                            </select>
                            <br /><br />

                            <label> Type Of Business ? : * </label>
                            <select className="drop" required style={{  paddingLeft:10  ,minWidth: "80%"  }}>
                                <option selected="selected" value="Select An Option">Select An Option</option>
                                <option value="Manufacturer">Manufacturer</option>
                                <option value="Agent/Dealer">Agent/Dealer</option>
                                <option value="Stockiest">Stockiest </option>
                                <option value="Service Provider">Service Provider</option>
                                <option value="EPC">EPC</option>
                                <option value="Supply & Service Provider">Supply & Service Provider</option>
                            </select>
                            <br /><br />


                            <label>Address of Workshop / Name &amp; Address of Principal: *</label>
                            <textarea className="iinput" required style={{ height: 100, paddingTop: 20 }} placeholder="Address of Workshop(For Manufacturer) &#10;Name & Address of Principal (For Agent/Dealer/Stockiest):" />
                            <br /><br />
                        </div>

                        {/* RHS */}

                        <div className="form-r">
                        <label> First Level Product Category ? : * </label>
                            <select className="drop" required style={{  paddingLeft:10  ,minWidth: "80%"  }}>
                            <option value="Select An Option">Select An Option</option>
                                <option selected="selected" value="41">Others</option>
                                <option value="39">Agriculture product</option>
                                <option value="52">Ambient Air Monitoring</option>
                                <option value="19">Automobile</option>
                                <option value="66">Blast Cleaning</option>
                                <option value="40">Books</option>
                                <option value="47">Brake Oil</option>
                                <option value="25">Chemical &amp; Catalyst</option>
                                <option value="35">Construction Civil Works</option>
                                <option value="37">Construction Electrical Works</option>
                                <option value="17">Construction Equipment</option>
                                <option value="38">Construction Instrumentation Works</option>
                                <option value="16">Construction Material</option>
                                <option value="36">Construction Mechanical Works</option>
                                <option value="26">Construction Waste &amp; Surplus</option>
                                <option value="14">Consultancy,Contract &amp; Service </option>
                                <option value="30">Consumables</option>
                                <option value="51">Effluent Treatment Plants</option>
                                <option value="8">Electrical Item</option>
                                <option value="50">Environmental Consultants</option>
                                <option value="46">Fuel and Oil</option>
                                <option value="69">Furnishings</option>
                                <option value="18">Furniture, Fixture,Storage Material &amp; Office Equip</option>
                                <option value="67">Galvanizing</option>
                                <option value="48">Hydraulic Hoses</option>
                                <option value="12">Information Technology</option>
                                <option value="9">Instrumentation  </option>
                                <option value="22">Insulation</option>
                                <option value="23">Luricant,Petroleum Product, Fuel &amp; Gas</option>
                                <option value="62">machinery</option>
                                <option value="28">Machinery, Equipment &amp; Tools</option>
                                <option value="20">Marine Equipment and Accessories</option>
                                <option value="10">Material Handling</option>
                                <option value="44">Medical equipment supply</option>
                                <option value="29">Medical Item &amp; Equipment</option>
                                <option value="43">Medicines</option>
                                <option value="54">Noise Monitoring</option>
                                <option value="64">Non Destructive Testing</option>
                                <option value="33">Packaging</option>
                                <option value="27">Paint</option>
                                <option value="7">Pipe,Valve,Hardware &amp; Piping Accessories</option>
                                <option value="65">Post Weld Heat</option>
                                <option value="24">Raw Material &amp; Production Consumables</option>
                                <option value="11">Refractory</option>
                                <option value="1">Rotary Equipment</option>
                                <option value="15">Safety &amp; Fire System</option>
                                <option value="32">Scrap</option>
                                <option value="59">Ship service supplies</option>
                                <option value="58">Ship spare supplies</option>
                                <option value="57">Ship stores supplies</option>
                                <option value="60">Ship supply &amp; service providers</option>
                                <option value="45">slag &amp; scrap</option>
                                <option value="55">Solid waste management</option>
                                <option value="53">Stack Monitoring</option>
                                <option value="2">Static Equipment</option>
                                <option value="31">Steel &amp; Structural</option>
                                <option value="68">Structural Painting</option>
                                <option value="42">Structural Steel and Granting</option>
                                <option value="5">Technological Package-Power / BTG/Non Conventional</option>
                                <option value="6">Technological Package-Refinery</option>
                                <option value="4">Technological Package-Steel</option>
                                <option value="13">Telecommunication</option>
                                <option value="56">test product</option>
                                <option value="3">Utility</option>
                                <option value="63">Waste Management</option>
                            </select>
                            <br /><br />

                            <label> Second Level Product Category ? : * </label>
                            <select className="drop" required style={{  paddingLeft:10  ,minWidth: "80%"  }}>
                                <option selected="selected" value="Select An Option">Select An Option</option>
                                <option selected="selected" value="41">Others</option>
                                <option value="Manufacturer">Manufacturer</option>
                                <option value="Agent/Dealer">Agent/Dealer</option>
                                <option value="Stockiest">Stockiest </option>
                                <option value="Service Provider">Service Provider</option>
                                <option value="EPC">EPC</option>
                                <option value="Supply & Service Provider">Supply & Service Provider</option>
                            </select>
                            <br /><br />

                            <label> Industry Specialization: * </label>
                            <select className="drop" required style={{  paddingLeft:10  ,minWidth: "80%"  }}>
                                <option value="1">Steel</option>
                                <option value="2">Power</option>
                                <option value="3">Oil &amp; Gas</option>
                                <option value="4">Infrastructure</option>
                                <option value="5">EPC</option>
                            </select>
                            <br /><br />

                            <label>   Mode of Transaction:  *</label>
                            <input className="radioButton" type="radio" name="modeOfTransaction" value="asn" />ASN &nbsp;
                            <input className="radioButton" type="radio" name="modeOfTransaction" value="email" checked />Email
                            <br /><br />

                            <label>Details of Machinery installed : </label>
                            <textarea className="iinput" style={{ height: 70, paddingTop: 20 }} placeholder="(For Manufacturer Only)&#10;(Max 250 char)&#10;" />
                            <br /><br />

                            <label>List of major customers : </label>
                            <textarea className="iinput" style={{ height: 70, paddingTop: 20 }} />
                            <br /><br /> 

                            <label>List of third party approvals (If any) : </label>
                            <textarea className="iinput" style={{ height: 70, paddingTop: 20 }} />
                            <br /><br />

                            <label>Key Technical person details : </label>
                            <textarea className="iinput" style={{ height: 70, paddingTop: 20 }} />
                            <br /><br />
                            <br /><br />
                        </div>
                    </div>
                    <label  style={{ marginLeft: 50 }}>Attach File (Product Catalogue / Certificate etc.) : </label>
                    <input className="fattach" type="file" name="file1" accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, image/*" />
                    <input className="fattach" type="file" name="file2" accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, image/*" />
                    <input className="fattach" type="file" name="file3" accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, image/*" />
                    <br /><br />
                    <input className="subButton" type="Submit" name="Submit" value="Submit" />

                </form>
            </React.Fragment>
        );
    }
}
export default BussDetailsScreen;