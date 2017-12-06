// @flow
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import './App.css';

type _Props = {};

class App extends Component<_Props> {
  render() {
    return (
      <Router basename="/">
        <div>
          <header>
            <RouteLink to="/"      activeOnlyWhenExact={true} label="Home"/>
            <RouteLink to="/about" activeOnlyWhenExact={true} label="About"/>
          </header>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

type RouteLink_Props = {
  label: string,
  to: string,
  activeOnlyWhenExact?: boolean,
}


const RouteLink = ({ label, to, activeOnlyWhenExact }:RouteLink_Props) => (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }:{ match?:boolean }) => (
          <Link className='nav-link' to={to}>{label}</Link>
    )}/>
);


export default App;
