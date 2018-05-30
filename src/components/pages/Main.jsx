import React from 'react';

import Carousel from '../Carousel.jsx';
import WelcomeText from './main/WelcomeText.jsx';
import ThreeMaterials from './main/ThreeMaterials.jsx';
import SecondText from './main/SecondText.jsx';
import Slider from './main/Slider.jsx';
import FooterText from './main/FooterText.jsx';

class Main extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            data: this.props.dataForThreeMaterials
        }
    }
    render(){
        return <div>
            <Carousel />
            <div className="container">

                <div className="divPanel page-content">
                    <div className="row-fluid">
                        <WelcomeText /> 

                        <ThreeMaterials dataForThreeMaterials={this.state.data} />

                        <hr style={ {margin:'45px 0 35px'} } />

                        <SecondText />

                        <Slider />

                        <FooterText />
                    </div>
                </div>

            </div>    
        </div>
    }
}

export default Main;