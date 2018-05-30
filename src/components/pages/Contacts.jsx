import React from 'react';

import LeftMain from './contacts/LeftMain.jsx';
import SideBar from './contacts/SideBar.jsx';

class Contacts extends React.Component{
    render(){
        return  <div className="container">
                    <div className="divPanel page-content">
                        <div className="row-fluid">
                            <LeftMain />

                            <SideBar />
                        </div>
                    </div>
                </div>
    }
}

export default Contacts;