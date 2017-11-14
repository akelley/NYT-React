import React from "react";

export const SavedArticleListItem = props =>
  <li className="list-group-item">
    <div>
    	<h3><a href={props.web_url} target='_blank'>{props.title}</a></h3>
    	<h4>Date Published: {props.pub_date} <button onClick={() => props.handleArticleDelete(props._id)} className='btn btn-alert'><strong>Delete</strong></button></h4>
    	{props.author != null && <h4>Author: {props.author}</h4>}
    </div>
  </li>;
