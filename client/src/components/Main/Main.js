import React from "react";
import "../styles/Main.css";

const Main= props =>
	<div className="main-container">
		<div className="main-container">
			<div className="row">
				<div className="col-lg-12">
					<div className="panel panel-primary">
						<div className="panel-heading">
							<h1 className="panel-title"><strong>Query</strong></h1>
						</div>
						<div className="panel-body">
							<form>
								<div className="form-group">
									<h4><strong>Topic</strong></h4>
									<input   
							      onChange={props.handleInputChange} 
										value={props.value}
							      name="topic"
	                  type="text"
	                  className="form-control"
										id="topic"
										required=""
	                />
									
									<h4><strong>Start Year</strong></h4>
									<input 
	                  onChange={props.handleInputChange} 
										value={props.value}
							      name="start_year"
	                  type="text"
	                  className="form-control"
										id="start_year"
										required=""
	                 />
									
									<h4><strong>End Year</strong></h4>
									<input 
	                  onChange={props.handleInputChange} 
										value={props.value}
							      name="end_year"
	                  type="text"
	                  className="form-control"
										id="end_year"
										required=""
	                />
								</div>
								
								<div className="pull-right">
									<button type="submit" onClick={props.handleFormSubmit} className="btn" style={{border: '1px dotted #2c3e50'}}><h4  style={{color: '#2c3e50'}}>Submit</h4></button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
		<li className="list-group-item">
			<h3><span><em>Enter search terms to begin...</em></span></h3>
		</li>
	</div>;

export default Main;

