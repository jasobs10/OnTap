import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { requestBeers, addBeerToWishlist, removeBeerFromWishlist } from '../../reducers/beers_redux';
import BeerIndexItem from './beer_index_item';
import { addCurrentUserWishlist, removeCurrentUserWishlist } from '../../reducers/session_redux';
// import { addBeerToWishlist, removeBeerFromWishlist } from '../../reducers/wishlist_redux';

const mapStateToProps = (state) => {

  return {
    currentUser: state.currentUser,
    beers: Object.values(state.beers)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestBeers: (field, params) => dispatch(requestBeers(field, params)),
    addBeerToWishlist: (beerId) => dispatch(addBeerToWishlist(beerId)),
    removeBeerFromWishlist: (id) => dispatch(removeBeerFromWishlist(id)),
    addCurrentUserWishlist: (beer) => dispatch(addCurrentUserWishlist(beer)),
    removeCurrentUserWishlist: (beer) => dispatch(removeCurrentUserWishlist(beer))

  }
};

// const SyleSelect = (props) => {
//   return(
//     <option value={props.value}
//   );
// }

const WishlistBeerItem = (props) => {
  // debugger
  const brewery = props.beer.brewery.name || props.beer.brewery;
  return(
    <div className="top-beers-item">
      <div>
        <img src="/images/chocolate.png"/>
      </div>
      <div>
        <div className="wishlist-beer">
          {props.beer.name}
        </div>
        <div className="wishlist-brewery">
          {brewery}
        </div>
      </div>
    </div>
  );
};

class Beers extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    this.state = {style: "", name: "", rating: "", id: ""}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.requestBeers();
  }
  // componentWillReceiveProps(newProps) {
  //   if (newProps.beers != this.props.beers) {
  //     this.props.requestBeers();
  //   }
  // }
  handleChange(field) {
    // debugger
    return (e) => {
      // debugger
      this.setState({[field]: e.target.value});
      this.props.requestBeers(field, e.target.value);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render () {

    // debugger
    const items = this.props.beers.map((beer) => <BeerIndexItem key={beer.id} beer={beer} addBeerToWishlist={this.props.addBeerToWishlist} removeBeerFromWishlist={this.props.removeBeerFromWishlist} addCurrentUserWishlist={this.props.addCurrentUserWishlist} removeCurrentUserWishlist={this.props.removeCurrentUserWishlist}/>)
    // debugger
    const wishlistBeers = this.props.currentUser.wishlistBeers ? Object.values(this.props.currentUser.wishlistBeers).map((beer) => <WishlistBeerItem beer={beer} key={beer.id}/>) : "";
    const selectStyles = this.props.beers.length > 0 ? this.props.beers[0].allStyles.map((style) => <option value={style}>{style}</option>) : "";
    const ratings = ["0", "1", "2", "3", "4", "5"];
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const selectRating = ratings.map((rating) => <option value={rating}>{rating}</option>);
    const selectName = alphabet.map((letter) => <option value={letter}>{letter}</option>);
    // debugger
    return (
      <div className="beers-wrapper">
        <div className="beers-index">
          <div className="beers-feed">
            <div className="beer-header">
              <h1>Top Rated Beers</h1>
            </div>
            <hr className="orange-line"/>
            <div className="beer-filter">
              <div>
                Styles: &nbsp;
                <select value={this.state.style} onChange={this.handleChange("style")}>
                  <option disabled={true}>Filter by style</option>
                  <option value="id">Show all beers</option>
                  {selectStyles}
                </select>
              </div>
              <div>
                Rating: &nbsp;
                <select value={this.state.rating} onChange={this.handleChange("rating")}>
                  <option disabled={true}>Filter by rating</option>
                  <option value="id">Show all beers</option>
                  {selectRating}
                </select>
              </div>
              <div>
                Name: &nbsp;
                <select value={this.state.name} onChange={this.handleChange("name")}>
                  <option disabled={true}>Filter by name</option>
                  <option value="id">Show all beers</option>
                  {selectName}
                </select>
              </div>
            </div>

            {items}

          </div>
          <div className="side-bars">

            <div className="top-beers">
              <div className="header-side">
                <h1 className="beers-index-title">My Wishlist</h1>
              </div>
              <hr className="orange-line"/>
              {wishlistBeers}
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
