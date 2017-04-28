import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { requestBreweries, addBreweryLike, removeBreweryLike, createBrewery } from '../../reducers/breweries_redux'
import BreweryIndexItem from './breweries_index_item';
import { WishlistBeerItem } from '../beers/beers';
import { addUserLike, removeUserLike } from '../../reducers/session_redux';
import { BreweryLikeItem } from './brewery_like_item';
import { Spinner } from '../shared/spinner';


const mapStateToProps = (state) => {
  // debugger
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
    removeUserLike: (id) => dispatch(removeUserLike(id)),
    createBrewery: (brewery) => dispatch(createBrewery(brewery))

  }
};

class BreweriesIndex extends React.Component {
  constructor(props) {
    super(props)
    //
    this.state = {state: "", name: "", id: "", rating: "", breweryCount: 8};
    this.handleChange = this.handleChange.bind(this);
    this.handleShow = this.handleShow.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    //
    this.props.requestBreweries();
  }

  handleChange(field) {
    //
    return (e) => {
      //
      this.setState({[field]: e.target.value});
      this.props.requestBreweries(field, e.target.value);
    }
  }

  showMore() {
    //
    if (this.state.breweryCount < this.props.breweries.length || this.props.breweries.length === 0) {

      return (<div className="show-more" onClick={this.handleShow}>SHOW MORE</div>);
    }
    return "";
  }

  handleShow() {
    this.setState({breweryCount: this.state.breweryCount + 8});
  }

  render() {
    // debugger
    if (this.props.breweries.length === 0) {
      //
      return <Spinner />;
    }
    const logged_in = this.props.currentUser
    if (logged_in) {
      const ratings = ["0", "1", "2", "3", "4", "5"];
      // const wishlistBeers = this.props.currentUser.wishlistBeers ? Object.values(this.props.currentUser.wishlistBeers).map((beer) => <WishlistBeerItem beer={beer} key={beer.id}/>) : "";
      let wishlistBeers;
      if (this.props.currentUser && this.props.currentUser.wishlistBeers) {
        wishlistBeers = Object.values(this.props.currentUser.wishlistBeers).sort((a, b) => {
          return (a.id - b.id);
        }).map((beer) => <WishlistBeerItem beer={beer} key={beer.id}/>);
      } else {
        wishlistBeers = ""
      }
      // const breweryLikes = this.props.currentUser.likedBreweries ? Object.values(this.props.currentUser.likedBreweries).map((brewery) => <BreweryLikeItem brewery={brewery} key={brewery.id}/>) : "";

      const breweryLikesSorted = this.props.currentUser.likedBreweries ? Object.values(this.props.currentUser.likedBreweries).sort((a, b) => {
        return (b.id - a.id);
      }) : null;
      // debugger
      const breweryLikes = breweryLikesSorted ? breweryLikesSorted.map((brewery) => <BreweryLikeItem brewery={brewery} key={brewery.id}/>) : "";
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
      const selectRating = ratings.map((rating, i) => <option key={i} value={rating}>{rating}</option>);
      const selectName = alphabet.map((letter, i) => <option  key={i} value={letter}>{letter}</option>);
      // debugger
      const selectLoc = this.props.breweries.length > 0 ? this.props.breweries[0].allStates.map((state, i) => <option key={i} value={state}>{state}</option>) : "";
      // debugger
      const sortedBreweries = this.props.breweries ? this.props.breweries.sort((a, b) => {
        // debugger
        return (parseFloat(b.average) - (parseFloat(a.average)));
      }) : "";
      //
      let brewers;
      if (sortedBreweries.length - this.state.breweryCount <= 0) {
        brewers = sortedBreweries.map((brewery) => {

          return <BreweryIndexItem key={brewery.id}
            brewery={brewery}
            addBreweryLike={this.props.addBreweryLike}
            removeBreweryLike={this.props.removeBreweryLike}
            addUserLike={this.props.addUserLike}
            removeUserLike={this.props.removeUserLike}/>
        });
      } else {
       brewers = sortedBreweries.map((brewery) => {
              //  debugger
          return <BreweryIndexItem key={brewery.id}
            brewery={brewery}
            addBreweryLike={this.props.addBreweryLike}
            removeBreweryLike={this.props.removeBreweryLike}
            addUserLike={this.props.addUserLike}
            removeUserLike={this.props.removeUserLike}/>
        }).slice(0, this.state.breweryCount);
      }

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
                  <select className="dropdown-select" value={this.state.loc} onChange={this.handleChange("state")}>
                    <option disabled={true}>Filter by state</option>
                    <option value="id">Show all breweries</option>
                    {selectLoc}
                  </select>
                </div>
                <div>
                  Rating: &nbsp;
                  <select  className="dropdown-select" value={this.state.rating} onChange={this.handleChange("rating")}>
                    <option disabled={true}>Filter by rating</option>
                    <option value="id">Show all breweries</option>
                    {selectRating}
                  </select>
                </div>
                <div>
                  Name: &nbsp;
                  <select  className="dropdown-select" value={this.state.name} onChange={this.handleChange("name")}>
                    <option disabled={true}>Filter by name</option>
                    <option value="id">Show all beers</option>
                    {selectName}
                  </select>
                </div>
                <div className="brewery-button" style={{display: "none"}}>
                  <button className="add-brewery">+ Brewery</button>
                </div>
              </div>
              { brewers }

              {this.showMore()}


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
    } else {
      return <div></div>
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(BreweriesIndex);
