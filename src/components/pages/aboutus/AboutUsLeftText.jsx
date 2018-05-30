import React from 'react';

import imgSrc from '../../../images/fingerfood-main.jpg';

class AboutUsMainText extends React.Component{
    render(){
        return  <div className="span8" id="divMain">

                    <h1>Про нас</h1>
                    <p>                        
                        <p>
                            Content on this page is for presentation purposes only. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        </p>
                            <img src={imgSrc} className="img-polaroid" style={ {margin:"12px 0px"} } />  
                    </p>    
                                                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum est at luctus tincidunt. Fusce pretium quam vel velit fringilla fringilla. Fusce sollicitudin, ligula vel tempus congue, ligula nisi facilisis lacus, et adipiscing justo arcu nec justo.  </p>
                    <p>Proin ipsum nulla, cursus vitae mollis iaculis, malesuada a dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla eu augue eu mauris sodales viverra at sed libero. Vivamus rhoncus volutpat hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>Quisque eu aliquam felis. Nam elementum dui eget fringilla vulputate. Suspendisse augue turpis, eleifend ac diam id, condimentum fermentum elit. Nunc laoreet turpis a risus luctus imperdiet. Suspendisse metus tellus, sodales nec elementum eu, facilisis at ante. Sed pharetra cursus metus, eget tempor dui. Nulla facilisi. Quisque congue justo odio, vitae fringilla sem sollicitudin sed.</p>

                </div>
    }
}

export default AboutUsMainText;