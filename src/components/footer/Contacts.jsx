import React from "react";

class Contacts extends React.Component{
    render(){
        return  <div className="span3" id="footerArea4">

                    <h3>Contacts</h3>  
                                                            
                    <ul id="contact-info">
                    <li>                                    
                        <i className="general foundicon-phone icon"></i>
                        <span className="field">Phone:</span>
                        <br />
                        (123) 456 7890 / 456 7891                                                                      
                    </li>
                    <li>
                        <i className="general foundicon-mail icon"></i>
                        <span className="field">Email:</span>
                        <br />
                        <a href="mailto:info@yourdomain.com" title="Email">info@yourdomain.com</a>
                    </li>
                    <li>
                        <i className="general foundicon-home icon" style={{marginBottom: '50px' }}></i>
                        <span className="field">Address:</span>
                        <br />
                        123 Street<br />
                        12345 City, State<br />
                        Country
                    </li>
                    </ul>

                </div>
    }
}

export default Contacts;