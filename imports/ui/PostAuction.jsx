import React, { Component, PropTypes } from 'react';
import { AUCTIONS_COLLECTION } from '../api/Auctions.js';

// PostAuction component
export default class PostAuction extends Component {
  handleSubmit(e) {
    e.preventDefault();

    var fldtitle = this.refs.posttitle.value,
        fldimg = this.refs.postimgurl.value;   

    AUCTIONS_COLLECTION.insert({
      title: fldtitle,
      img: fldimg
    });
  }
  render() {
    return (
          <form className="form-post-auction" onSubmit={this.handleSubmit.bind(this)} >
            <input
              type="text"
              ref="posttitle"
              placeholder="Your subasta"
            />

            <input
              type="text"
              ref="postimgurl"
              placeholder="Your image url"
            />
            <input
              type="submit"
              value="post"
            />
          </form>
    );
  }
}