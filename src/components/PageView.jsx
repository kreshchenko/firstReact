import React from "react";
import {BrowserRouter, Route, Link, Router} from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import Main from "./pages/Main.jsx";
import About from "./pages/About.jsx";
import Galery from "./pages/Galery.jsx";
import Contacts from "./pages/Contacts.jsx";

const history = createBrowserHistory();

class PageView extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            data: this.props.dataForThreeMaterials,
            dataForSideBarContent: this.props.dataForSideBarContent
        }
    }

    render(){
        
        return <div>
          
                <div>
                    <Route exact path="/" render={()=><Main dataForThreeMaterials={this.state.data}/>} />
                    <Route exact path="/about" render={()=><About dataForSideBarContent={this.state.dataForSideBarContent} />} />
                    <Route exact path="/galery" component={Galery} />
                    <Route exact path="/contacts" component={Contacts} />
                </div>
           
        </div>
    }
}

export default PageView;