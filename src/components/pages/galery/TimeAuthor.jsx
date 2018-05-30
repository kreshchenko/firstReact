import React from 'react';

class TimeAuthor extends React.Component{
    render(){
        return  <div class="meta"><span>{this.props.time} minutes ago</span><span class="pull-right">{this.props.author}</span></div>
    }
}

export default TimeAuthor;