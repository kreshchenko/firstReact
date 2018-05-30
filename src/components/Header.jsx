import React from "react";

import Logo from "./header/Logo.jsx";
import Navigation from "./header/Navigation.jsx";

class Header extends React.Component{
    render(){
        return <div id="decorative2">
                    <div className="container">
    
                        <div className="divPanel topArea notop nobottom">
                            <div className="row-fluid">
                                <div className="span12">
                                    <Logo />
                                    <Navigation />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
    }
}

export default Header;