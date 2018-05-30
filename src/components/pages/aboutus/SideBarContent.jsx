import React from 'react';

class SideBarContent extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return   <div className="row-fluid">		
                    <div className="span4">                           
                        <img src={this.props.imgSrc} className="img-polaroid" style={ {margin:'5px 0px 15px'} } alt="" />   </div>          
                    <div className="span8">            
                        <p>{this.props.text} <a href={this.props.url}>Читать больше</a> </p>
                    </div>		 
                </div>
    }
}

export default SideBarContent;