import React from 'react';

import SideBarContent from './SideBarContent.jsx';

class SideBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dataForSideBarContent: this.props.dataForSideBarContent
        }
    }
    render(){
        const sideBarElement = this.state.dataForSideBarContent.map(
            (item,i) => {
                return <SideBarContent text={item.text} url={item.url} imgSrc={item.imgSrc} />
            }
        );
        return  <div className="span4 sidebar">

                    <div className="sidebox">
                        <h3 className="sidebox-title">Sample Sidebar Content</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and <a href="#">typesetting industry</a>.  Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</p>
                        <hr />
                            {sideBarElement}
                    </div>
        
                </div>
    }
}

export default SideBar;