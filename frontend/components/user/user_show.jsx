import React from 'react';
import CheckinIndex from '../checkin/checkin_index';
import { UserItem } from './user_item';
import { connect } from 'react-redux';
import { updateUser, fetchUser } from "../../reducers/user_redux";
import { fetchUserCheckins } from "../../reducers/checkins_redux";
import { Spinner } from '../shared/spinner';
import { WishlistBeerItem } from '../beers/beers';
import { BreweryLikeItem } from '../breweries/brewery_like_item';

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    user: state.user,
    checkins: state.checkins
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    updateUser: (user) => dispatch(updateUser(user)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchUserCheckins: (user_id) => dispatch(fetchUserCheckins(user_id))
  }
};

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

      this.props.fetchUser(this.props.params.userId);
      this.props.fetchUserCheckins(this.props.params.userId)

  }

  checkins() {
    let wishlistBeers;
    if (this.props.user.wishlistBeers) {
      wishlistBeers = Object.values(this.props.user.wishlistBeers).map((beer) => <WishlistBeerItem beer={beer} key={beer.id}/>);
    } else {
      wishlistBeers = "";
    }
    let breweryLikes = this.props.user.likedBreweries ? Object.values(this.props.user.likedBreweries).map((brewery) => <BreweryLikeItem brewery={brewery} key={brewery.id}/>) : "";
    if (this.props.user.checkinCount === 0) {
      return (
        <div className="beers-wrapper">


          <div className="beers-index">
            <div className="beers-feed">
              <div className="beer-header">
                <h1>No Checkins Yet!</h1>
              </div>
              <hr className="orange-line checkin-line"/>

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
        <CheckinIndex userCheckins={this.props.checkins}/>
      );
    }
  }

  render() {
    return (
      <div>
        <div className="beers-wrapper">
          <div className="beer-show-header user-show-header">
            <UserItem user={this.props.user} currentUser={this.props.currentUser} />
          </div>
        </div>

        {this.checkins()}
      </div>
    );
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
