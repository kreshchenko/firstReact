import React from 'react';

import AboutUsMainText from './aboutus/AboutUsLeftText.jsx';
import SideBar from './aboutus/SideBar.jsx'

class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dataForSideBarContent: this.props.dataForSideBarContent
        }
    }
    render(){
        return  <div className="container">

                    <div className="divPanel page-content">
    
                            <div class="row-fluid">
                                <AboutUsMainText />

                                <SideBar dataForSideBarContent={this.state.dataForSideBarContent} />
                            </div>
                        
                    </div>
                </div>
    }
}

export default About;