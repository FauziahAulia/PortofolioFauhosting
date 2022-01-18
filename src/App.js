import React from "react";
import Header from "./component/Header";
import Banner from "./component/Banner";
import About from "./component/About";
import Project from "./component/Project";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(props) {
  return (
    <Router>
      <div className="app">
        <Header />

        <Switch>
          <Route exact path="/PortofolioFauhosting/" component={Banner} />
          <Route path="/PortofolioFauhosting/about" component={About} />
          <Route path="/PortofolioFauhosting/project" component={Project} />
          <Route path="/PortofolioFauhosting/contact" component={Contact} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
