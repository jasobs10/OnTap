import React from 'react';
import { connect } from 'react-redux';
import { hashHistory, Link } from 'react-router';
import { requestBeers, addBeerToWishlist, removeBeerFromWishlist, createBeer, createPhotoBeer } from '../../reducers/beers_redux';
import BeerIndexItem from './beer_index_item';
import { addCurrentUserWishlist, removeCurrentUserWishlist } from '../../reducers/session_redux';
import { BreweryLikeItem } from '../breweries/brewery_like_item';
import { receiveComponent, activateModal } from '../../reducers/modal_redux';
import { Spinner } from '../shared/spinner';
import { createCheckin, fetchBeerCheckins, createPhotoCheckin } from '../../reducers/checkins_redux';
import Modal from '../modal/modal';
import AddBeerForm from './beer_form';

const mapStateToProps = (state) => {

  return {
    currentUser: state.currentUser,
    beers: Object.values(state.beers),
    modal: state.modal
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestBeers: (field, params) => dispatch(requestBeers(field, params)),
    addBeerToWishlist: (beerId) => dispatch(addBeerToWishlist(beerId)),
    removeBeerFromWishlist: (id) => dispatch(removeBeerFromWishlist(id)),
    addCurrentUserWishlist: (beer) => dispatch(addCurrentUserWishlist(beer)),
    removeCurrentUserWishlist: (beer) => dispatch(removeCurrentUserWishlist(beer)),
    receiveComponent: (component) => dispatch(receiveComponent(component)),
    activateModal: (bool) => dispatch(activateModal(bool)),
    createCheckin: (checkin) => dispatch(createCheckin(checkin)),
    createPhotoCheckin: (formData) => dispatch(createPhotoCheckin(formData)),
    createBeer: (beer, brewery_id) => dispatch(createBeer(beer, brewery_id)),
    createPhotoBeer: (beer, brewery_id) => dispatch(createPhotoBeer(beer, brewery_id)),

  }
};


export const WishlistBeerItem = (props) => {

  const brewery = props.beer.brewery.name || props.beer.brewery;
  const beerpic = props.beer.image_url || props.beer.beer_image_url


  const sliced = props.beer.name.length > 17 ? props.beer.name.slice(0, 17) + "..." : props.beer.name

  return(
    <div className="top-beers-item">
      <div>
        <img src={beerpic}/>
      </div>
      <div>
        <div className="wishlist-beer">
          <Link to={`/beers/${props.beer.id}`}>{sliced}</Link>
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

    this.state = {style: "", name: "", rating: "", id: "", beersCount: 5}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  componentWillMount() {
    this.props.requestBeers();
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
      this.props.requestBeers(field, e.target.value);
    }
  }

  handleClick(component) {
    return (e) => {
      this.props.receiveComponent(component);
      this.props.activateModal(true);
    };
  }

  showMore() {
    if (this.props.beers.length > 0) {
      if (this.state.beersCount < this.props.beers.length || this.props.beers.length === 0) {

        return (<div className="show-more" onClick={this.handleShow}>SHOW MORE</div>);
      }
      return "";
    }
  }

  handleShow() {
    this.setState({beersCount: this.state.beersCount + 5});
  }


  handleSubmit(e) {
    e.preventDefault();
  }

  render () {


    if (this.props.currentUser) {
      const sortedBeers = this.props.beers ? this.props.beers.sort((a, b) => {
        return (parseFloat(b.average) - (parseFloat(a.average)));
      }) : "";

      let spinner;
      let heading = "Top Rated Beers"
      if (sortedBeers.length === 0) {
        spinner = <Spinner />;
        heading = "No Beers!"
      }
      let items;
      if (sortedBeers.length - this.state.beersCount <= 0) {
        items = sortedBeers.map((beer) => <BeerIndexItem
          key={beer.id} beer={beer}
          addBeerToWishlist={this.props.addBeerToWishlist}
          removeBeerFromWishlist={this.props.removeBeerFromWishlist}
          addCurrentUserWishlist={this.props.addCurrentUserWishlist}
          removeCurrentUserWishlist={this.props.removeCurrentUserWishlist}
          receiveComponent={this.props.receiveComponent}
          activateModal={this.props.activateModal}
          createCheckin={this.props.createCheckin}
          createPhotoCheckin={this.props.createPhotoCheckin}/>);
      } else {
        items = sortedBeers.map((beer) => <BeerIndexItem
          key={beer.id} beer={beer}
          addBeerToWishlist={this.props.addBeerToWishlist}
          removeBeerFromWishlist={this.props.removeBeerFromWishlist}
          addCurrentUserWishlist={this.props.addCurrentUserWishlist}
          removeCurrentUserWishlist={this.props.removeCurrentUserWishlist}
          receiveComponent={this.props.receiveComponent}
          activateModal={this.props.activateModal}
          createCheckin={this.props.createCheckin}
          createPhotoCheckin={this.props.createPhotoCheckin}/>).slice(0, this.state.beersCount);
      }


      const beerItems = spinner || items

      let wishlistBeers;
      if (this.props.currentUser && this.props.currentUser.wishlistBeers) {
        wishlistBeers = Object.values(this.props.currentUser.wishlistBeers).sort((a, b) => {
          return (a.id - b.id);
        }).map((beer) => <WishlistBeerItem beer={beer} key={beer.id}/>);
      } else {
        wishlistBeers = ""
      }
      const selectStyles = this.props.beers.length > 0 ? this.props.beers[0].allStyles.map((style, i) => <option key={i}value={style}>{style}</option>) : "";
      const ratings = ["0", "1", "2", "3", "4", "5"];
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
      const selectRating = ratings.map((rating, i) => <option key={i} value={rating}>{rating}</option>);
      const selectName = alphabet.map((letter, i) => <option key={i} value={letter}>{letter}</option>);
      const breweryLikesSorted = this.props.currentUser.likedBreweries ? Object.values(this.props.currentUser.likedBreweries).sort((a, b) => {
        return (b.id - a.id);
      }) : null;
      const breweryLikes = breweryLikesSorted ? breweryLikesSorted.map((brewery) => <BreweryLikeItem brewery={brewery} key={brewery.id}/>) : "";


      document.title = "Top Beers"
      return (
        <div className="beers-wrapper">

          <div className="beers-index">
            <div className="beers-feed">
              <div className="beer-header">
                <h1>{heading}</h1>
                <button className="add-button" onClick={this.handleClick(<AddBeerForm beers={this.props.beers} activateModal={this.props.activateModal} createBeer={this.props.createBeer} createPhotoBeer={this.props.createPhotoBeer}/>)}>Add Beer</button>
              </div>
              <hr className="orange-line"/>
              <div className="beer-filter">
                <div>

                  <select className="dropdown-select" value={this.state.style} onChange={this.handleChange("style")}>
                    <option disabled={true} value="">Filter by style</option>
                    <option value="id">Show all beers</option>
                    {selectStyles}
                  </select>
                </div>
                <div>

                  <select className="dropdown-select" value={this.state.rating} onChange={this.handleChange("rating")}>
                    <option disabled={true} value="">Filter by rating</option>
                    <option value="id">Show all beers</option>
                    {selectRating}
                  </select>
                </div>
                <div>

                  <select className="dropdown-select" value={this.state.name} onChange={this.handleChange("name")}>
                    <option disabled={true} value="">Filter by name</option>
                    <option value="id">Show all beers</option>
                    {selectName}
                  </select>
                </div>
              </div>

              {beerItems}
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
      return(<div></div>);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Beers);
