import React, { Component, PropTypes } from 'react';

// Task component - represents a single todo item
export default class AuctionCard extends Component {
  render() {
    return (
      <div className="col-md-4">
      	<img className="img img-responsive img-thumbnail" src={this.props.auction.img} />
      	<h2>{this.props.auction.title}</h2>
      </div>
    );
  }
}

AuctionCard.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  auction: PropTypes.object.isRequired,
};