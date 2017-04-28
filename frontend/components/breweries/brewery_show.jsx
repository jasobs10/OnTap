import React from 'react';
import CheckinIndex from '../checkin/checkin_index';
import { connect } from 'react-redux';
import { fetchBreweryCheckins } from '../../reducers/checkins_redux';
import { requestBrewery, addBreweryLike, removeBreweryLike } from '../../reducers/breweries_redux';
import { removeUserLike, addUserLike } from '../../reducers/session_redux';
import BreweriesIndexItem from './breweries_index_item';
import BreweryHeader from './brewery_header';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    checkins: state.checkins,
    brewery: state.breweries[ownProps.params.breweryId],
    currentUser: state.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBreweryCheckins: (brewery_id) => dispatch(fetchBreweryCheckins(brewery_id)),
    addBreweryLike: (brewery_id) => dispatch(addBreweryLike(brewery_id)),
    removeBreweryLike: (id) => dispatch(removeBreweryLike(id)),
    addUserLike: (brewery) => dispatch(addUserLike(brewery)),
    removeUserLike: (id) => dispatch(removeUserLike(id)),
    fetchBrewery: (id) => dispatch(requestBrewery(id))

  }
}

class BreweryShow extends React.Component {
  constructor(props) {
    super(props);
    // debugger
  }
  componentWillMount() {
    // debugger
    this.props.fetchBrewery(this.props.params.breweryId)
    this.props.fetchBreweryCheckins(this.props.params.breweryId);
  }

  // componentWillReceiveProps(nextProps) {
  //   this.props.fetchBeer(nextProps.params.beerId);
  //   this.props.fetchBeerCheckins(nextProps.params.beerId);
  // }


  render() {
    if (this.props.brewery === undefined) {
      return (<div></div>)
    }
    // debugger
    return (
      <div>
        <div className="beers-wrapper">
          <div className="beer-show-header brewery-show-header">

            <BreweryHeader
              brewery={this.props.brewery}
              addBreweryLike={this.props.addBreweryLike}
              removeBreweryLike={this.props.removeBreweryLike}
              addUserLike={this.props.addUserLike}
              removeUserLike={this.props.removeUserLike}
              />
          </div>

        </div>

        <CheckinIndex breweryCheckins={this.props.checkins}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BreweryShow);

// <BeerHeader
//   beer={this.props.beer}
//   addBeerToWishlist={this.props.addBeerToWishlist}
//   removeBeerFromWishlist={this.props.removeBeerFromWishlist}
//   addCurrentUserWishlist={this.props.addCurrentUserWishlist}
//   removeCurrentUserWishlist={this.props.removeCurrentUserWishlist}
//   receiveComponent={this.props.receiveComponent}
//   activateModal={this.props.activateModal}
//   createCheckin={this.props.createCheckin}/>



// <BreweriesIndexItem
//   brewery={this.props.brewery}
//   addBreweryLike={this.props.addBreweryLike}
//   removeBreweryLike={this.props.removeBreweryLike}
//   addUserLike={this.props.addUserLike}
//   removeUserLike={this.props.removeUserLike}/>
