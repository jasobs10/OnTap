import React from 'react';

class WishlistAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {beer: this.props.beer}
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.addBeerToWishlist = this.props.addBeerToWishlist.bind(this);
    this.addCurrentUserWishlist = this.props.addCurrentUserWishlist.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({beer: newProps.beer})
  }

  handleAdd(e) {
    this.props.removeBeerFromWishlist(this.props.beer.currentUserWishlist.id).then((id) => this.props.removeCurrentUserWishlist(id));
  }

  handleRemove(e) {
    this.props.addBeerToWishlist(this.props.beer.id).then(() => this.props.addCurrentUserWishlist(this.props.beer));
  }

  render() {
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
      return (
        <div className="wish-add" onClick={() => {
            this.props.addBeerToWishlist(this.props.beer.id).then(() => this.addCurrentUserWishlist(this.props.beer))}}>
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
