import React from "react";
import "./FooterPrimary.css";
import FooterLogo from "../../assets/images/footerLogo.png";
import { Icon } from "../Icons";

const FooterPrimary = () => {
    const currentYear = new Date().getFullYear();
    return (
       <div className="container-fluid p-5 mt-5" style={{ backgroundColor: '#cddee5' }}>
            <div className="container p-3" style={{ backgroundColor: '#fff', borderRadius: '5px' }}>
                <div className="d-flex flex-row justify-content-between">
                    <div className="p-2">
                        <img src={FooterLogo} alt="Jooste Heritage Foundation Logo" style={{ height: '60px' }} />
                        <table className="table table-borderless table-small" style={{ lineHeight: '0.8' }}>
                            <tbody>
                                <tr>
                                    <td>
                                        <Icon iconName="Geo"/>
                                    </td>
                                    <td>
                                        Old Paarl Road, Belgravia, Cape Town
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Icon iconName="EnvelopeAt"/>
                                    </td>
                                    <td>
                                        <a href="mailto:info@jooste.org" className="jhf-link">info@jooste.org</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Icon iconName="Briefcase"/>
                                    </td>
                                    <td>
                                        NPO No. 300-556
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="p-2">
                        <h5>Legal</h5>
                        <ul className="list-unstyled">
                            <li><a href="/privacy-policy" className="jhf-link">Privacy Policy</a></li>
                            <li><a href="/terms-of-service" className="jhf-link">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div className="p-2">
                        <h5>Connect</h5>
                        <div className="row">

                        </div>
                        <div className="d-flex flex-row justify-content-between">
                            <a href="https://www.facebook.com/joosteheritage/" target="blank" className="jhf-link"><Icon iconName="Facebook"/></a>
                            <a href="https://www.linkedin.com/company/joostehf" target="blank" className="jhf-link"><Icon iconName="Linkedin"/></a>
                            <a href="https://www.instagram.com/joostehf/" target="blank" className="jhf-link"><Icon iconName="Instagram"/></a>
                        </div>
                        
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col text-center">
                        <small>© {currentYear} Jooste Heritage Foundation NPC. All rights reserved.</small>
                    </div>
                </div>
            </div>
       </div> 
    );
};

export default FooterPrimary;