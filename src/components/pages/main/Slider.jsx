import React from 'react';

import muffin from '../../../carousal/muffin.jpg';
import strawberries from '../../../carousal/strawberries.jpg';
import cheesecake from '../../../carousal/cheesecake.jpg';
import peppers from '../../../carousal/peppers.jpg';
import pomengranates from '../../../carousal/pomengranates.jpg';
import refreshment from '../../../carousal/refreshment.jpg';
import kitchen from '../../../carousal/kitchen.jpg';
import soup from '../../../carousal/soup.jpg';

class Slider extends React.Component{
    render(){
        return  <div class="list_carousel responsive">
                    <ul id="list_photos">
                        <li><img src={muffin} className="img-polaroid" />  </li>
                        <li><img src={strawberries} className="img-polaroid" />  </li>
                        <li><img src={cheesecake} className="img-polaroid" />  </li>
                        <li><img src={peppers} className="img-polaroid" />  </li>
                        <li><img src={pomengranates} className="img-polaroid" />  </li>
                        <li><img src={refreshment} className="img-polaroid" />  </li>
                        <li><img src={kitchen} className="img-polaroid" />  </li>
                        <li><img src={soup} className="img-polaroid" />  </li>                            
                    </ul>
                </div> 
    }
}

export default Slider;