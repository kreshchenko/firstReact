import React from 'react';

class ElementText extends React.Component{
    render(){
        return  <span>
                    <h4><a href={this.props.url}>{this.props.name}</a></h4>
                    <p>{this.props.text} <br/><a href={this.props.url}> Читать больше</a></p>
                </span>
    }
}

export default ElementText;