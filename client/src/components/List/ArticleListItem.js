import React from "react";

export const ArticleListItem = props =>
  <li className="list-group-item">
    <div>
    	<h3><a href={props.web_url} target='_blank'>{props.title}</a></h3>
    	<h4>Date Published: {props.pub_date} <button onClick={props.handleArticleSubmit(props.id)} className='btn btn-success'><strong>Save</strong></button></h4>
    	{props.author != null && <h4>Author: {props.author}</h4>}
    </div>
  </li>;
