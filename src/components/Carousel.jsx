import React from "react";

import LeftPartCarousel from "./carousel/LeftPartCarousel.jsx";
import RightPartCarouselImage from "./carousel/RightPartCarouselImage.jsx";



class Carousel extends React.Component{

    render(){
        return  <div>
                    <div id="decorative1" >
                        <div className="container">

                            <div className="divPanel headerArea">
                                <div className="row-fluid">
                                    <div className="span12">
        
                                        <div id="headerSeparator"></div>

                                        <div className="row-fluid">
                                            <div className="span6">

                                                <LeftPartCarousel /> 
                            
                                            </div>

                                            <div className="span6">
                                                
                                                <RightPartCarouselImage />

                                            </div>
                                            
                                        </div>

                                        <div id="headerSeparator2"></div>
            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="contentOuterSeparator"></div>
                </div>
    }
}

export default Carousel;