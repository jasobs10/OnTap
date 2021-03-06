import React from 'react';
import { connect } from 'react-redux';
import { requestBeer } from '../../reducers/beers_redux';
import { addBeerToWishlist, removeBeerFromWishlist } from '../../reducers/beers_redux';
import { addCurrentUserWishlist, removeCurrentUserWishlist } from '../../reducers/session_redux';
var Rating = require('react-rating');
import { LineRating } from './beer_index_item';
import WishlistAdd from '../wishlist/wishlist_add';
import CheckinIndexItem from '../checkin/checkin_index_item';
import CheckinIndex from '../checkin/checkin_index';
import BeerIndexItem from './beer_index_item';
import BeerHeader from './beer_header';
import { receiveComponent, activateModal } from '../../reducers/modal_redux';
import { createCheckin, fetchBeerCheckins, createPhotoCheckin } from '../../reducers/checkins_redux';
import { Spinner } from '../shared/spinner';

const mapStateToProps = (state, ownProps) => {
  //
  return ({
    beer: state.beers[ownProps.params.beerId],
    currentUser: state.currentUser,
    checkins: state.checkins
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return ({
    fetchBeer: (id) => dispatch(requestBeer(id)),
    fetchBeerCheckins: (beer_id) => dispatch(fetchBeerCheckins(beer_id)),
    addBeerToWishlist: (beerId) => dispatch(addBeerToWishlist(beerId)),
    removeBeerFromWishlist: (id) => dispatch(removeBeerFromWishlist(id)),
    addCurrentUserWishlist: (beer) => dispatch(addCurrentUserWishlist(beer)),
    removeCurrentUserWishlist: (beer) => dispatch(removeCurrentUserWishlist(beer)),
    receiveComponent: (component) => dispatch(receiveComponent(component)),
    activateModal: (bool) => dispatch(activateModal(bool)),
    createCheckin: (checkin) => dispatch(createCheckin(checkin)),
    createPhotoCheckin: (formData) => dispatch(createPhotoCheckin(formData))

  });
};


class BeerShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.params.beerId !== this.props.params.beerId) {
      this.props.fetchBeer(newProps.params.beerId);
      this.props.fetchBeerCheckins(newProps.params.beerId);
    }
  }


  componentWillMount() {
    this.props.fetchBeer(this.props.params.beerId);
    this.props.fetchBeerCheckins(this.props.params.beerId);
  }

  render() {
    if (this.props.beer === undefined) {
      return (<Spinner />)
    }
    return (
      <div>
        <div className="beers-wrapper">
          <div className="beer-show-header">
            <BeerHeader
              beer={this.props.beer}
              addBeerToWishlist={this.props.addBeerToWishlist}
              removeBeerFromWishlist={this.props.removeBeerFromWishlist}
              addCurrentUserWishlist={this.props.addCurrentUserWishlist}
              removeCurrentUserWishlist={this.props.removeCurrentUserWishlist}
              receiveComponent={this.props.receiveComponent}
              activateModal={this.props.activateModal}
              createCheckin={this.props.createCheckin}
              createPhotoCheckin={this.props.createPhotoCheckin}/>
          </div>
        </div>

        <CheckinIndex beerCheckins={this.props.checkins}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerShow);
