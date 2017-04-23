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
      let id = this.props.beer.id
      return (
        <div className="wish-add wish-remove" onClick={() => this.props.removeBeerFromWishlist(this.props.beer.currentUserWishlist.id).then(() => this.props.removeCurrentUserWishlist(id))}>
          -
          <div className="wishlist-dropdown">
            Remove from wishlist
          </div>
        </div>
      );
    } else {
      // debugger
      return (
        <div className="wish-add" onClick={() => this.props.addBeerToWishlist(this.props.beer.id).then(() => this.props.addCurrentUserWishlist(this.props.beer))}>
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
