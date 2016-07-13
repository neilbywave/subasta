import React, { Component, PropTypes } from 'react';

// Toolbar component
export default class Toolbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
      	<div className="container-fluid">
      		<div className="navbar-header">
      			Subasta Online
      		</div>
      		<form className="navbar-form navbar-left" role="search">
      			<div className="form-group">
      				<input type="text" className="form-control" placeholder="Search" />
      			</div>
      			<button type="submit" className="btn btn-default">Submit</button>
      		</form>
      	</div>
      </nav>
    );
  }
}