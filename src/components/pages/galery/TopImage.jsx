import React from 'react';

class TopImage extends React.Component{
    render(){
        return  <a href="styles/thumbs/sticky_800.jpg" title="Sticky" rel="prettyPhoto[gallery1]">
                    <img src={this.props.imgSrc} alt="Sticky" title="Sticky"/>
                </a>
    }
}

export default TopImage;