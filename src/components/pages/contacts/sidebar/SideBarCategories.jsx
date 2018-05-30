import React from 'react';

class SideBarCategories extends React.Component{
    render(){
        return  <span> 
                    <h4 className="sidebox-title">Sidebar Categories</h4>
                    <ul>
                    <li><a href="#">Quisque diam lorem sectetuer adipiscing</a></li>
                    <li><a href="#">Interdum vitae, adipiscing dapibus ac</a></li>
                    <li><a href="#">Scelerisque ipsum auctor vitae, pede</a></li>
                    <li><a href="#">Donec eget iaculis lacinia non erat</a></li>
                    <li><a href="#">Lacinia dictum elementum velit fermentum</a></li>
                    <li><a href="#">Donec in velit vel ipsum auctor pulvinar</a></li>
                    </ul>
                </span>
    }
}

export default SideBarCategories;