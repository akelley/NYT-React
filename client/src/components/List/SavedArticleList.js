import React from "react";
import "./ArticleList.css";

export const SavedArticleList = ({ handleCollectionDelete, children }) => {
  return (
	  <div className="main-container"> 
	    <div className="row"> 
	    	<div className="col-md-12">
	    		<div className="panel panel-primary">
	    			<button className="btn-clear" onClick={handleCollectionDelete}>Clear All</button>
	    		  <div className="panel-heading">
	    		  	<h1 className="panel-title"><strong><span className="glyphicon glyphicon-ok"> </span>&nbsp; Saved Articles</strong></h1>
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
