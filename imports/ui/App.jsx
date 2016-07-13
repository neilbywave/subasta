import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { AUCTIONS_COLLECTION } from '../api/Auctions.js';
import AuctionCard from './AuctionCard.jsx';
import Toolbar from './Toolbar.jsx';
import PostAuction from './PostAuction.jsx';

// App component - represents the whole app
class App extends Component {

  renderAuctions() {
    return this.props.auctions.map((item) => (
      <AuctionCard key={item._id} auction={item} />
    ));
  }

  render() {
    return (
      <div className="container">
        <Toolbar />

        <PostAuction />

        <div className="row">
          {this.renderAuctions()}
        </div>
      </div>
    );
  }
}  

App.propTypes = {
  auctions: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    auctions: AUCTIONS_COLLECTION.find({}).fetch(),
  };
}, App);