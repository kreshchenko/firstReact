import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Link, Router} from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";


import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import PageView from "./components/PageView.jsx";

import img1 from './images/home-1.jpg';
import img2 from './images/home-2.jpg';
import img3 from './images/home-3.jpg';

import sideBarImg from './images/placeholder.gif';

const history = createBrowserHistory();

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      //Данные для блока с тремя материалами на Главной странице
      data: [
          {
          name: 'Про нас', 
          text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
          srcImg: img1,
          href: '/about'
          },
          {
            name: 'Our Passion', 
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
            srcImg: img2,
            href: '/'
          },
          {
            name: 'Special Events', 
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
            srcImg: img3,
            href: '/'
          },
      ],
      dataForSideBarContent: [
        {
          imgSrc: sideBarImg,
          text: 'Lorem ipsum dolor sit amet, consectetuera dipiscing elied diam nonummy nibh euisod tincidunt ut laoreet dolore magna aliquam erat.',
          url: '#'
        },
        {
          imgSrc: sideBarImg,
          text: 'Текст второй новости для сайдбара на странице про нас',
          url: '#'
        }
      ]
  }

  }


  render() {
    return (
      <div>
        <BrowserRouter history={history}> 
          <div>
            <Header />
            
            <PageView dataForThreeMaterials={this.state.data} dataForSideBarContent={this.state.dataForSideBarContent} />

            <Footer />
          </div>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
