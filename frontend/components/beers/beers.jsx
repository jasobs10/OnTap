import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { requestBeers } from '../../reducers/beers_redux'
import BeerIndexItem from './beer_index_item';
import { addBeerToWishlist, removeBeerFromWishlist } from '../../reducers/wishlist_redux';

const mapStateToProps = (state) => {

  return {
    currentUser: state.currentUser,
    beers: state.beers,
    wishlist: state.wishlist
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestBeers: () => dispatch(requestBeers()),
    addBeerToWishlist: (beerId) => dispatch(addBeerToWishlist(beerId)),
    removeBeerFromWishlist: (id) => dispatch(removeBeerFromWishlist(id))

  }
};

class Beers extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    this.state = {beers: this.props.beers}
  }

  componentDidMount() {
    this.props.requestBeers();
  }

  render () {
    // debugger
    const items = this.props.beers.map((beer) => <BeerIndexItem key={beer.id} beer={beer} added={this.props.wishlist.added} addBeerToWishlist={this.props.addBeerToWishlist} removeBeerFromWishlist={this.props.removeBeerFromWishlist}/>)
    const smallItems = items.slice(0, 7).map((beer) => <BeerIndexItem key={beer.id} beer={beer.props.beer} sideItem={true}/>);
    // debugger
    return (
      <div className="beers-wrapper">
        <div className="beers-index">
          <div className="beers-feed">
            {items}

          </div>
          <div className="side-bars">

            <div className="top-beers">
              <div className="header-side">
                <h1 className="beers-index-title">Top Global Beers</h1>
              </div>
              {smallItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// <div className="header-main">
//   <h1 className="beers-index-title">Whats ONTAP?</h1>
// </div>
export default connect(mapStateToProps, mapDispatchToProps)(Beers);
