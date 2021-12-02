import React from "react";

import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer } from "./components";
import { Home, About, Contact, Projects } from "./pages";

import './App.scss'

import Particles from 'react-particles-js';
import particlesConfig from './config/particlesConfig.js';

const App = () => {

  return (

        <div className="App">
            <Router>
              <Navigation />
              <Switch>
              <div className="sections">
                <div style={{ position: 'fixed'}}>
                  <Particles height="100vh" width="100vw" params={particlesConfig} />
                </div>
                <Route path="/" exact component={() => <Home />} />
                <Route path="/about" exact component={() => <About />} />
                <Route path="/Projects" exact component={() => <Projects />} />
                <Route path="/contact" exact component={() => <Contact />} />
              </div>
              </Switch>
              <Footer />
            </Router>
        </div>
      
  );
}

export default App;