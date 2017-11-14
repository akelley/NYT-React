import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Saved from "./pages/Saved";
import Articles from "./pages/Articles";
import Nav from "./components/Nav";

const App = () => 
	<Router>
	  <div>
	    <Nav />
	    <Route exact path="/" component={Articles} />
	    <Route exact path="/saved" component={Saved} />
	    <Route exact path="/search" component={Articles} />
	  </div>
  </Router>;

export default App;
