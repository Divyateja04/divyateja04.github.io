import React from "react";

import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer } from "./components";
import { Home, About, Contact, Projects } from "./pages";

import "./App.scss";

const App = () => {
    return (
        <div className="App">
            <Router>
                <Navigation />
                <Switch>
                    <div className="sections">
                        <div style={{ position: "fixed" }}></div>
                        {/* <Route path="/" exact component={() => <Home />} />
                        <Route
                            path="/about"
                            exact
                            component={() => <About />}
                        />
                        <Route
                            path="/Projects"
                            exact
                            component={() => <Projects />}
                        />
                        <Route
                            path="/contact"
                            exact
                            component={() => <Contact />}
                        /> */}
                        <Home />
                        <div id="about">
                            <About />
                        </div>
                        <div id="projects">
                            <Projects />
                        </div>
                        <div id="contact">
                            <Contact />
                        </div>
                    </div>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
