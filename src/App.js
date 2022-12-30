import React from "react";

import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer } from "./components";
import { Home, About, Contact, Projects, Notes } from "./pages";

import './App.scss'

const App = () => {

  return (

        <div className="App">
            <Router>
              <Navigation />
              <Switch>
              <div className="sections">
                <div style={{ position: 'fixed'}}>
                </div>
                <Route path="/" exact component={() => <Home />} />
                <Route path="/about" exact component={() => <About />} />
                <Route path="/Projects" exact component={() => <Projects />} />
                <Route path="/contact" exact component={() => <Contact />} />
                <Route path="/notes" exact component={() => <Notes />} />
              </div>
              </Switch>
              <Footer />
            </Router>
        </div>
      
  );
}

export default App;