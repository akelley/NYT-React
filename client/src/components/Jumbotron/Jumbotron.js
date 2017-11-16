import React from "react";
import "./Jumbotron.css";

const Jumbotron = () =>
	<div className="container-fluid">
		<div className="row">
			<div className="col-md-1"></div>
			<div className="col-md-10">
			  <div style={{ height: 125 }} className="jumbotron">
					<div className="container-fluid">
						<h2 className="text-center">(ReactJS) New York Times Article Scraper</h2>
			      <h3 className="text-center">Search for and save articles of interest.</h3>
			    </div>
			  </div>
			</div>
			<div className="col-md-1"></div>
		</div>
  </div>;

export default Jumbotron;
