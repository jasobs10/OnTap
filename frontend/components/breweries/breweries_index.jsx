import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { requestBreweries, addBreweryLike, removeBreweryLike } from '../../reducers/breweries_redux'
import BreweryIndexItem from './breweries_index_item';
import { WishlistBeerItem } from '../beers/beers';
import { addUserLike, removeUserLike } from '../../reducers/session_redux';
import { BreweryLikeItem } from './brewery_like_item';

const mapStateToProps = (state) => {

  return {
    currentUser: state.currentUser,
    breweries: Object.values(state.breweries)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestBreweries: (field, params) => dispatch(requestBreweries(field, params)),
    addBreweryLike: (brewery_id) => dispatch(addBreweryLike(brewery_id)),
    removeBreweryLike: (id) => dispatch(removeBreweryLike(id)),

    addUserLike: (brewery) => dispatch(addUserLike(brewery)),
    removeUserLike: (id) => dispatch(removeUserLike(id))

  }
};

class BreweriesIndex extends React.Component {
  constructor(props) {
    super(props)
    // debugger
    this.state = {state: "", name: "", id: "", rating: ""};
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // debugger
    this.props.requestBreweries();
  }

  handleChange(field) {
    // debugger
    return (e) => {
      // debugger
      this.setState({[field]: e.target.value});
      this.props.requestBreweries(field, e.target.value);
    }
  }


  render() {

    const ratings = ["0", "1", "2", "3", "4", "5"];
    const wishlistBeers = this.props.currentUser.wishlistBeers ? Object.values(this.props.currentUser.wishlistBeers).map((beer) => <WishlistBeerItem beer={beer} key={beer.id}/>) : "";
    const breweryLikes = this.props.currentUser.likedBreweries ? Object.values(this.props.currentUser.likedBreweries).map((brewery) => <BreweryLikeItem brewery={brewery} key={brewery.id}/>) : "";
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const selectRating = ratings.map((rating, i) => <option key={i} value={rating}>{rating}</option>);
    const selectName = alphabet.map((letter, i) => <option  key={i} value={letter}>{letter}</option>);
    const selectLoc = this.props.breweries.length > 0 ? this.props.breweries[0].allStates.map((state, i) => <option key={i} value={state}>{state}</option>) : "";
    // debugger
    const brewers = this.props.breweries.map((brewery) => {
      return <BreweryIndexItem key={brewery.id} brewery={brewery} addBreweryLike={this.props.addBreweryLike} removeBreweryLike={this.props.removeBreweryLike} addUserLike={this.props.addUserLike} removeUserLike={this.props.removeUserLike}/>
    });

    return(
      <div className="beers-wrapper">
        <div className="beers-index">
          <div className="beers-feed">

            <div className="beer-header">
              <h1>Top Rated Breweries</h1>
            </div>
            <hr className="orange-line"/>
            <div className="beer-filter">

              <div>
                State: &nbsp;
                <select value={this.state.loc} onChange={this.handleChange("state")}>
                  <option disabled={true}>Filter by state</option>
                  <option value="id">Show all breweries</option>
                  {selectLoc}
                </select>
              </div>
              <div>
                Rating: &nbsp;
                <select value={this.state.rating} onChange={this.handleChange("rating")}>
                  <option disabled={true}>Filter by rating</option>
                  <option value="id">Show all breweries</option>
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
              <div className="brewery-button">
                <button className="add-brewery">+ Brewery</button>
              </div>
            </div>
            { brewers }

          </div>
          <div className="side-bars">

            <div className="top-beers">
              <div className="header-side">
                <h1 className="beers-index-title">My Wishlist</h1>
              </div>
              <hr className="orange-line"/>

              {wishlistBeers}
            </div>
            <div className="top-beers">
              <div className="header-side">
                <h1 className="beers-index-title">My Likes</h1>
              </div>
              <hr className="orange-line"/>
              {breweryLikes}
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(BreweriesIndex);
