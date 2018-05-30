import React from 'react';

class SideBarContacts extends React.Component{
    render(){
        return <span>
            <h3 className="sidebox-title">Contact Information</h3>
                    <p>
                        <address><strong>Your Company, Inc.</strong><br />
                        Address<br />
                        City, State, Zip<br />
                        <abbr title="Phone">P:</abbr> (123) 456-7890</address> 
                        <address>  <strong>Email</strong><br />
                        <a href="mailto:#">first.last@gmail.com</a></address>  
                    </p>     
        </span>
    }
}

export default SideBarContacts;