import React from "react";
import "./ArticleList.css";

export const ArticleList = ({ children }) => {
  return (
	  <div className="main-container"> 
	    <div className="row"> 
	    	<div className="col-md-12">
	    		<div className="panel panel-primary">
	    		  <div className="panel-heading">
	    		  	<h1 className="panel-title"><strong><span className="glyphicon glyphicon-th-list"> </span>&nbsp; Results Found: {children.length} </strong></h1>
	    		  </div>
	    		  <div className="panel-body">
	    		  	<div className="list-overflow-container">
					      <ul className="list-group">
					        {children}
					      </ul>
				      </div>
	    		  </div>
	    		</div>
	    	</div>
	    </div>
	  </div>
	);  
};
