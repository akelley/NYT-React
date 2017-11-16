import React from "react";
import "./ArticleList.css";

export const SavedArticleListItem = props =>
  <li className="list-group-item">
    <div>
    	<h3><a href={props.web_url} target='_blank'>{props.title}</a>
				<button onClick={() => props.handleArticleDelete(props._id)} className='btn btn-alert'><strong>Delete</strong></button>
    	</h3>
    	<h4>Date Published: {props.pub_date}</h4>
    	{props.author != null && <h4>Author: {props.author}</h4>}
    </div>
  </li>;
