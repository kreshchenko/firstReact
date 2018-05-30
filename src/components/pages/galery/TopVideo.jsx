import React from 'react';

class TopVideo extends React.Component{
    render(){
        return  <article className="youtube video flex-video">
                    <iframe width="560" height="315" src={this.props.videoUrl}></iframe>
                </article> 
    }
}

export default TopVideo;