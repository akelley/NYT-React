import React from "react";
import "./ArticleList.css";

export const ArticleListItem = props =>
  <li className="list-group-item">
    <div>
    	<h3><a href={props.web_url} target='_blank'>{props.title}</a>
				<button onClick={() => props.handleArticleSave(props._id)} className='btn btn-success'><strong>Save</strong></button>
    	</h3>
    	<h4>Date Published: {props.pub_date}</h4>
    	{props.author != null && <h4>Author: {props.author}</h4>}
    	{props.author == null && <h4>Author: NONE</h4>}
    </div>
  </li>;
