import React from 'react';
import { Link } from "react-router-dom";

import img1 from '../../../images/home-1.jpg';

class ThreeMaterials extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            data: this.props.dataForThreeMaterials
        }
    }

    render(){
        
        var code = this.state.data.map(
            (item, i) => {
                return  <div class="span4">
                            <h4>{item.name}</h4>
                            <img src={item.srcImg} class="img-polaroid" style={ {margin: "5px 0px 15px"} } alt="" />                
                            <p>{item.text}  <br /></p>
                            <p>
                                <Link className="btn btn-primary" style={ {margin: "5px 0px 15px"} } to={item.href}>Больше</Link> 
                            </p>
                        </div>
            }
        );
        return <div>
            {code}
        </div>
    }
}

export default ThreeMaterials;