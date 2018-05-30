import React from "react";

import AboutCompany from "./footer/AboutCompany.jsx";
import Contacts from "./footer/Contacts.jsx";
import Copyright from "./footer/Copyright.jsx";
import RecendBlogPosts from "./footer/RecendBlogPosts.jsx";
import SampleContent from "./footer/SampleContent.jsx";
import SocialMediaURLs from "./footer/SocialMediaURLs.jsx";

class Footer extends React.Component{
    render(){
        return  <div id="divFooter" className="footerArea">
                    <div className="container">
                        <div className="divPanel">
                            <div className="row-fluid">
                                <AboutCompany />

                                <RecendBlogPosts />

                                <SampleContent />

                                <Contacts />
                            </div>
                                <br />
                                <br />
                            <div className="row-fluid">
                                <div className="span12">
                                    <Copyright />

                                    <SocialMediaURLs />    
                                </div>
                            </div>
                                <br />
                        </div>
                    </div>
                </div>
    }
}

export default Footer;