import React from 'react';
import CheckinIndex from '../checkin/checkin_index';
import { UserItem } from './user_item';
import { connect } from 'react-redux';
import { updateUser, fetchUser } from "../../reducers/user_redux";
import { fetchUserCheckins } from "../../reducers/checkins_redux";
import { Spinner } from '../shared/spinner';

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
    // debugger

      this.props.fetchUser(this.props.params.userId);
      this.props.fetchUserCheckins(this.props.params.userId)

  }

  checkins() {
    // debugger
    if (Object.values(this.props.checkins).length === 0) {
      return (<div className="beers-wrapper">df</div>);
    } else {
      return (
        <CheckinIndex userCheckins={this.props.checkins}/>
      );
    }
  }

  render() {
    // if (this.props.user === undefined) {
    //   return (<Spinner />);
    // }

    // debugger
    return (
      <div>
        <div className="beers-wrapper">
          <div className="beer-show-header user-show-header">
            <UserItem user={this.props.user} currentUser={this.props.currentUser} />
          </div>
        </div>

        <CheckinIndex userCheckins={this.props.checkins}/>
      </div>
    );
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
