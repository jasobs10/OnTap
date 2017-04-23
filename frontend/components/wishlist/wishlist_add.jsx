import React from 'react';

class WishlistAdd extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    this.state = {beer: this.props.beer}
    // debugger
  }

  componentWillReceiveProps(newProps) {
    // debugger
    this.setState({beer: newProps.beer})
  }

  render() {
    // debugger
    if (this.props.beer.currentUserWishlist) {
      // debugger
      return (
        <div className="wish-add" onClick={() => this.props.removeBeerFromWishlist(this.props.beer.currentUserWishlist.id)}>
          -
          <div className="wishlist-dropdown">
            Remove from wishlist
          </div>
        </div>
      );
    } else {
      // debugger
      return (
        <div className="wish-add" onClick={() => this.props.addBeerToWishlist(this.props.beer.id)}>
          +
          <div className="wishlist-dropdown">
            Add to Wishlist
          </div>
        </div>
      );
    }
  }
}

export default WishlistAdd
