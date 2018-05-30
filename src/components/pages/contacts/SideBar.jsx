import React from 'react';
import SideBarContacts from './sidebar/SideBarContacts.jsx';
import SideBarCategories from './sidebar/SideBarCategories.jsx';

class SideBar extends React.Component{
    render(){
        return <div className="span4 sidebar">

                    <div className="sidebox">
                        
                    <SideBarContacts />
                    <SideBarCategories />
                     
                    </div>
                </div>
    }
}

export default SideBar;