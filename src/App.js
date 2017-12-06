// @flow
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";

import './App.css';
import "bootstrap/dist/css/bootstrap.css";

type _Props = {};

class App extends Component<_Props> {
  render() {
    return (
      <Router basename="/">
        <div>
          <nav className="bg_color_main navbar navbar-expand-md navbar-dark" >
            <div className="container">
              <a className="NavbarBrand" >RectWeather</a>
              <div className="collapse show navbar-collapse">
                <ul className="mr-auto navbar-nav">
                  <RouteLink to="/"      activeOnlyWhenExact={true} label="Home"/>
                  <RouteLink to="/about" activeOnlyWhenExact={true} label="About"/>
                </ul>
              </div>
            </div>
          </nav>
          <div id="main" className="container">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

type RouteLink_Props = {
  label: string,
  to: string,
  activeOnlyWhenExact?: boolean,
};


const RouteLink = ({ label, to, activeOnlyWhenExact }:RouteLink_Props) => (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }:{ match?:boolean }) => (
        <li className={`nav-item ${ match?'active':'' }`}>
          <Link className='nav-link' to={to}>{label}</Link>
        </li>
    )}/>
);


export default App;
