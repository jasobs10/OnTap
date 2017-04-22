import React from 'react';

class WishlistAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {added: this.props.added}
  }

  render() {
    // debugger
    if (this.state.added) {
      return (
        <div className="wish-add" onClick={() => this.setState({added: false})}>
          -
          <div className="wishlist-dropdown">
            Remove from wishlist
          </div>
        </div>
      )
    }
    return (
      <div className="wish-add" onClick={() => this.setState({added: true})}>
        +
        <div className="wishlist-dropdown">
          Add to Wishlist
        </div>
      </div>
    );
  }
}

export default WishlistAdd
