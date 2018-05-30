import React from 'react';

import TimeAuthor from './TimeAuthor.jsx';
import TopImage from './TopImage.jsx';
import TopVideo from './TopVideo.jsx';
import ElementText from './ElementText.jsx';


class GaleryElement extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            imgSrc: this.props.imgSrc,
            time: this.props.time,
            author: this.props.author,
            name: this.props.name,
            text: this.props.text,
            url: this.props.url,
            videoUrl: this.props.videoUrl
        }
    }


    render(){
        if (this.state.imgSrc != null){
            var img = <TopImage imgSrc={this.state.imgSrc}/>
        }
        if (this.state.videoUrl != null){
            var video = <TopVideo videoUrl={this.state.videoUrl}/>
        }
        return <li>
                    {img}
                    {video}
                    <TimeAuthor time={this.state.time} author={this.state.author} />
                    <ElementText name={this.state.name} text={this.state.text} url={this.state.url}/>
                 </li> 
    }
}

export default GaleryElement;