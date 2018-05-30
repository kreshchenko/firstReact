import React from 'react';

class LeftMain extends React.Component{
    constructor(){
        super();

        this.state = {
            name: '',
            email: '',
            text: ''
        }
        this.changeName = this.changeName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeText = this.changeText.bind(this);
    }

    changeName(event){
        this.setState({name: event.target.value});
    }

    changeEmail(event){
        this.setState({email: event.target.value});
    }

    changeText(event){
        this.setState({text: event.target.value});
    }

    render(){
        return <div className="span8" id="divMain">

                            <h1>Contact Us</h1>
                            <hr/>
                    		                                                
                    <form name="enq" method="post" action="email/" onsubmit="return validation();">
                    <fieldset>

                    <input onChange={this.changeName} type="text" name="name" id="name" value={this.state.name}  className="input-block-level" placeholder="Name" />
                    <input onChange={this.changeEmail} type="text" name="email" id="email" value={this.state.email} className="input-block-level" placeholder="Email" />
                    <textarea onChange={this.changeText} value={this.state.text} rows="11" name="message" id="message" className="input-block-level" placeholder="Comments" />
                    <div className="actions">
                    <input type="submit" value="Send Your Message" name="submit" id="submitButton" className="btn btn-info pull-right" title="Click here to submit your message!" />
                    </div>

                    </fieldset>
                    </form>  				 										 
                </div>
    }
}

export default LeftMain;