import React from "react";
import "./ArticleList.css";

export const SavedArticleList = ({ children }) => {
  return (
	  <div className="main-container"> 
	    <div className="row"> 
	    	<div className="col-md-12">
	    		<div className="panel panel-primary">
	    		  <div className="panel-heading">
	    		  	<h1 className="panel-title"><strong>Saved Articles</strong></h1>
	    		  </div>
	    		  <div className="panel-body">	  	
				      <ul className="list-group">
				        {children}
				      </ul>
	    		  </div>
	    		</div>
	    	</div>
	    </div>
	  </div>
	);  
};
