import React from "react";
import {BrowserRouter, Route, Link, Router} from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import Main from "../pages/Main.jsx";
import About from "../pages/About.jsx"

const history = createBrowserHistory();

class Navigation extends React.Component{
    render(){
        return  <div id="divMenuRight" className="pull-right">
                    <div className="navbar">
                        <button type="button" className="btn btn-navbar-highlight btn-large btn-primary" data-toggle="collapse" data-target=".nav-collapse">
                            NAVIGATION <span className="icon-chevron-down icon-white"></span>
                        </button>
                        <div className="nav-collapse collapse">
                                <ul className="nav nav-pills ddmenu">
                                    <li className="dropdown active">
                                        <Link to="/">Главная</Link>
                                    </li>
                                    <li className="dropdown">
                                    <Link to="/about">Про нас</Link>
                                    </li>
                                    <li className="dropdown">
                                        <Link to="/galery">Галерея</Link>
                                    </li>
                                    <li className="dropdown">
                                        <Link to="/contacts">Контакты</Link>
                                    </li>
                                </ul>
                        </div>
                    </div>
                </div>
    }
}

export default Navigation;