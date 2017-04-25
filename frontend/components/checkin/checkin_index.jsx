import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../reducers/session_redux';
import { hashHistory } from 'react-router';
import { requestBeers } from '../../reducers/beers_redux'
import CheckinIndexItem from './checkin_index_item';
import { requestAllCheckins, requestCheckin, createToast, deleteToast, addComment, deleteComment, updateComment } from '../../reducers/checkins_redux';
import { WishlistBeerItem } from '../beers/beers';
import { BreweryLikeItem } from '../breweries/brewery_like_item';
import { receiveComponent, activateModal } from '../../reducers/modal_redux';
import Modal from '../modal/modal';


// <CheckinIndexItem modal={this.props.modal} receiveComponent={this.props.receiveComponent} activateModal={this.props.activateModal} deleteToast={this.props.deleteToast} createToast={this.props.createToast} currentUser={this.props.currentUser} key={checkin.id} requestAllCheckins={this.props.requestAllCheckins} requestCheckin={this.props.requestCheckin} checkins={checkin} />);
const mapStateToProps = (state) => {

  return {
    currentUser: state.currentUser,
    beers: state.beers,
    checkins: Object.values(state.checkins),
    modal: state.modal
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: (user) => dispatch(logOut(user)),
    requestBeers: () => dispatch(requestBeers()),
    requestAllCheckins: () => dispatch(requestAllCheckins()),
    requestCheckin: (id) => dispatch(requestCheckin()),
    createToast: (checkin_id) => dispatch(createToast(checkin_id)),
    deleteToast: (id) => dispatch(deleteToast(id)),
    receiveComponent: (component) => dispatch(receiveComponent(component)),
    activateModal: (bool) => dispatch(activateModal(bool)),
    addComment: (comment) => dispatch(addComment(comment)),
    deleteComment: (id) => dispatch(deleteComment(id)),
    updateComment: (comment) => dispatch(updateComment(comment))
  }
};

class CheckinIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {beers: this.props.beers}
  }

  componentDidMount() {
    this.props.requestAllCheckins();
  }
  // const breweryLikes = this.props.currentUser.likedBreweries ? Object.values(this.props.currentUser.likedBreweries).map((brewery) => <BreweryLikeItem brewery={brewery} key={brewery.id}/>) : "";
  // const wishlistBeers = this.props.currentUser.wishlistBeers ? Object.values(this.props.currentUser.wishlistBeers).map((beer) => <WishlistBeerItem beer={beer} key={beer.id}/>) : "";
  render() {
    if (this.props.currentUser) {
      let wishlistBeers;
      if (this.props.currentUser && this.props.currentUser.wishlistBeers) {
        wishlistBeers = Object.values(this.props.currentUser.wishlistBeers).map((beer) => <WishlistBeerItem beer={beer} key={beer.id}/>);
      } else {
        wishlistBeers = ""
      }
      let breweryLikes;
      // debugger
      if (this.props.currentUser && this.props.currentUser.likedBreweries) {
        breweryLikes = Object.values(this.props.currentUser.likedBreweries).map((brewery) => <BreweryLikeItem brewery={brewery} key={brewery.id}/>);
      } else {
        breweryLikes = ""
      }
      const indexItems = this.props.checkins.map((checkin) => <CheckinIndexItem {...this.props}  key={checkin.id} checkins={checkin} />);

      // debugger
      return(
        <div className="beers-wrapper">
          <Modal modal={this.props.modal} activateModal={this.props.activateModal}/>

          <div className="beers-index">
            <div className="beers-feed">
              <div className="beer-header">
                <h1>Recent Activity</h1>
              </div>
              <hr className="orange-line checkin-line"/>

              {indexItems}

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
      return (
        <div></div>
      )
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CheckinIndex);

// let name = this.props.currentUser === null ? "" : this.props.currentUser.f_name;
// return(
//   <div className="checkin-wrapper">
//     <div className="checkin-index" >
//     </div>
//
//     <div className="user-display">
//       Welcome {name}
//     </div>
//     <button onClick={() => this.props.logOut(this.props.currentUser).then(() => hashHistory.push('/'))}>Log Out</button>
//
//   </div>
// );
