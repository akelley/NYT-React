import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Articles from "./pages/Articles";
import Saved from "./pages/Saved";

const App = () => 
	<Router>
	  <div>
	    <Nav />
		  <Jumbotron />
	    <Route exact path="/" component={Articles} />
	    <Route exact path="/saved" component={Saved} />
	    <Route exact path="/clear" component={Saved} />
	  </div>
  </Router>;

export default App;
