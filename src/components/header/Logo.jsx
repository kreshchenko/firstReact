import React from "react";

class Logo extends React.Component{
    render(){
        return <div id="divLogo" className="pull-left">
                    <a href="/" id="divSiteTitle">Первый сайт REACT</a><br />
                    <a href="/" id="divTagLine">Мой первый проект на реакте</a>
                </div>
    }
}

export default Logo;