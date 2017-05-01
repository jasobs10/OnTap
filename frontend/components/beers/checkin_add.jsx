import React from 'react';

class CheckinAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {beer: this.props.beer}
  }

  componentWillReceiveProps(newProps) {
    this.setState({beer: newProps.beer})
  }

  render() {
    if (this.props.beer.currentUserWishlist) {
      let id = this.props.beer.id
      return (
        <div className="wish-add wish-remove" onClick={() => this.props.removeBeerFromWishlist(this.props.beer.currentUserWishlist.id).then(() => this.props.removeCurrentUserWishlist(id))}>
          ✓
          <div className="wishlist-dropdown">
            Check in Beer
          </div>
        </div>
      );
    } else {
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
