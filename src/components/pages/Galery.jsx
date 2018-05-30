import React from 'react';

import GaleryElement from './galery/GaleryElement.jsx';

import img1 from '../../styles/thumbs/sticky_350.jpg'; 

class Galery extends React.Component{
    constructor(){
        super();

        this.state = {
            dataImages: [
                {
                    imgSrc: img1,
                    time: 7,
                    author: 'Igor Kresh',
                    name: 'FirstBlock',
                    text: 'long text to read in this exaple',
                    url: '#',
                    videoUrl: null
                },
                {
                    imgSrc: null,
                    time: 12,
                    author: 'Igor Хрущ',
                    name: 'Second Block',
                    text: 'long text to read in this exaple ant it more longer then text in First Block for exaple',
                    url: '#',
                    videoUrl: 'http://www.youtube.com/embed/e7OYeIXsW60'
                },
                {
                    imgSrc: img1,
                    time: 7,
                    author: 'Igor Kresh',
                    name: 'FirstBlock',
                    text: 'long text to read in this exaple',
                    url: '#',
                    videoUrl: null
                },
                {
                    imgSrc: null,
                    time: 12,
                    author: 'Igor Хрущ',
                    name: 'Second Block',
                    text: 'long text to read in this exaple ant it more longer then text in First Block for exaple',
                    url: '#',
                    videoUrl: 'http://www.youtube.com/embed/e7OYeIXsW60'
                },
                {
                    imgSrc: img1,
                    time: 7,
                    author: 'Igor Kresh',
                    name: 'FirstBlock',
                    text: 'long text to read in this exaple',
                    url: '#',
                    videoUrl: null
                },
                {
                    imgSrc: null,
                    time: 12,
                    author: 'Igor Хрущ',
                    name: 'Second Block',
                    text: 'long text to read in this exaple ant it more longer then text in First Block for exaple',
                    url: '#',
                    videoUrl: 'http://www.youtube.com/embed/e7OYeIXsW60'
                },
                {
                    imgSrc: img1,
                    time: 7,
                    author: 'Igor Kresh',
                    name: 'FirstBlock',
                    text: 'long text to read in this exaple',
                    url: '#',
                    videoUrl: null
                },
                {
                    imgSrc: img1,
                    time: 7,
                    author: 'Igor Kresh',
                    name: 'FirstBlock',
                    text: 'long text to read in this exaple',
                    url: '#',
                    videoUrl: null
                },
            ]
        }
    }


    render(){

        const elements = this.state.dataImages.map(
            (item, i) => {
                return <GaleryElement 
                    imgSrc={item.imgSrc}
                    time={item.time}
                    author={item.author}
                    name={item.name}
                    text={item.text}
                    url={item.url}
                    videoUrl={item.videoUrl} 
                />
            }
        );

        return  <div class="container">
                    <div class="divPanel page-content">
                        <div class="row-fluid">
                            <div class="span12">
                                <h1>Gallery</h1>
                                <div id="gridArea">
                                    <ul id="tiles">
                                        {elements}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    }
}

export default Galery;