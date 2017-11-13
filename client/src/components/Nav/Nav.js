import React from "react";
import "../styles/Nav.css";

const Nav = () =>
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-1"></div>
        <div className="col-md-10">
          <nav className="navbar navbar-default" role="navigation">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="/">NYT-React</a>
              </div>
              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="/search">Search</a></li>
                  <li><a href="/saved">Saved Articles</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      <div className="col-md-1"></div>
    </div>
</div>;

export default Nav;


