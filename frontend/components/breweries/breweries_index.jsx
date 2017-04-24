import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { requestBreweries } from '../../reducers/breweries_redux'
import BreweryIndexItem from './breweries_index_item';
import { WishlistBeerItem } from '../beers/beers';

const mapStateToProps = (state) => {

  return {
    currentUser: state.currentUser,
    breweries: Object.values(state.breweries)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestBreweries: (field, params) => dispatch(requestBreweries(field, params))

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
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const selectRating = ratings.map((rating) => <option value={rating}>{rating}</option>);
    const selectName = alphabet.map((letter) => <option value={letter}>{letter}</option>);
    const selectLoc = this.props.breweries.length > 0 ? this.props.breweries[0].allStates.map((state) => <option value={state}>{state}</option>) : "";
    // debugger
    const brewers = this.props.breweries.map((brewery) => {
      return <BreweryIndexItem key={brewery.id} brewery={brewery} />
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
          </div>
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(BreweriesIndex);