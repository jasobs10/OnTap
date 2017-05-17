import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../reducers/session_redux';
import { browserHistory } from 'react-router';
import { requestBeers } from '../../reducers/beers_redux'
import CheckinIndexItem from './checkin_index_item';
import { requestAllCheckins, requestCheckin, createToast, deleteToast, addComment, deleteComment, updateComment } from '../../reducers/checkins_redux';
import { WishlistBeerItem } from '../beers/beers';
import { BreweryLikeItem } from '../breweries/brewery_like_item';
import { receiveComponent, activateModal } from '../../reducers/modal_redux';
import Modal from '../modal/modal';
import { Spinner } from '../shared/spinner';


const mapStateToProps = (state, ownProps) => {
  const beerCheckins = ownProps.beerCheckins ? Object.values(ownProps.beerCheckins) : Object.values(state.checkins);
  let altCheckins;
  if (ownProps.beerCheckins) {
    altCheckins = Object.values(ownProps.beerCheckins);
  } else if (ownProps.breweryCheckins) {
    altCheckins = Object.values(ownProps.breweryCheckins);
  } else if (ownProps.userCheckins) {
    altCheckins = Object.values(ownProps.userCheckins);
  } else {
    altCheckins = Object.values(state.checkins)
  }

  return {
    currentUser: state.currentUser,
    beers: state.beers,
    checkins: altCheckins,
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
    this.state = {beers: this.props.beers, checkinCount: 4}
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {

    if (this.props.beerCheckins || this.props.breweryCheckins || this.props.userCheckins) {
      return null;
    }
    this.props.requestAllCheckins();
  }

  showMore() {
    if (this.state.checkinCount < this.props.checkins.length) {
      return (<div className="show-more" onClick={this.handleClick}>SHOW MORE</div>);
    }

  }
  checkins() {
    if (this.props.currentUser) {
      if (this.props.currentUser.checkinCount === 0) {
        return (
          <div><Spinner/></div>
        );
      }
    }
  }

  handleClick(e) {
    this.setState({checkinCount: this.state.checkinCount + 4});
  }
  render() {

    if (this.props.checkins.length === 0) {
      {this.checkins()};
    }
    if (this.props.currentUser) {
      document.title = `${this.props.currentUser.f_name} is OnTap`;
      let wishlistBeers;
      if (this.props.currentUser && this.props.currentUser.wishlistBeers) {
        wishlistBeers = Object.values(this.props.currentUser.wishlistBeers).map((beer) => <WishlistBeerItem beer={beer} key={beer.id}/>);
      } else {
        wishlistBeers = ""
      }
      let breweryLikes;
      if (this.props.currentUser && this.props.currentUser.likedBreweries) {
        breweryLikes = Object.values(this.props.currentUser.likedBreweries).map((brewery) => <BreweryLikeItem brewery={brewery} key={brewery.id}/>);
      } else {
        breweryLikes = ""
      }
      const sortedCheckins = this.props.checkins ? this.props.checkins.sort((a, b) => {
        return (b.id - a.id);
      }) : "";
      let indexItems;
      if (sortedCheckins.length - this.state.checkinCount <= 0) {
        indexItems = sortedCheckins.map((checkin) => <CheckinIndexItem {...this.props}  key={checkin.id} checkins={checkin} />);
      } else {
        indexItems = sortedCheckins.map((checkin) => <CheckinIndexItem {...this.props}  key={checkin.id} checkins={checkin} />).slice(0, this.state.checkinCount);

      }

      let heading = "Recent Activity";

      if (indexItems.length === 0) {
        indexItems = <Spinner />;
        heading = "No Checkins Yet!"
      }

      let showMore;
      if (this.state.checkinCount < this.props.checkins.length) {
        showMore = this.showMore();
      }
      return(
        <div className="beers-wrapper">

          <div className="beers-index">
            <div className="beers-feed">
              <div className="beer-header">
                <h1>{heading}</h1>
              </div>
              <hr className="orange-line checkin-line"/>

              {indexItems}
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
      return (
        <div></div>
      )
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CheckinIndex);
