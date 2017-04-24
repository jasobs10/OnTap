import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../reducers/session_redux';
import { hashHistory } from 'react-router';
import { requestBeers } from '../../reducers/beers_redux'
import CheckinIndexItem from './checkin_index_item';
import { requestAllCheckins, requestCheckin } from '../../reducers/checkins_redux';

const mapStateToProps = (state) => {

  return {
    currentUser: state.currentUser,
    beers: state.beers,
    checkins: Object.values(state.checkins)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: (user) => dispatch(logOut(user)),
    requestBeers: () => dispatch(requestBeers()),
    requestAllCheckins: () => dispatch(requestAllCheckins()),
    requestCheckin: (id) => dispatch(requestCheckin())
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

  render() {
    const indexItems = this.props.checkins.map((checkin) => <CheckinIndexItem key={checkin.id} requestAllCheckins={this.props.requestAllCheckins} requestCheckin={this.props.requestCheckin} checkins={checkin} />);
    // debugger
    return(
      <div className="beers-wrapper">
        <div className="beers-index">
          <div className="beers-feed">
            <div className="beer-header">
              <h1>Recent Activity</h1>
            </div>
            <hr className="orange-line"/>

            {indexItems}

          </div>
          <div className="side-bars">

            <div className="top-beers">
              <div className="header-side">
                <h1 className="beers-index-title">My Wishlist</h1>
              </div>
              <hr className="orange-line"/>

            </div>
          </div>
        </div>
      </div>
    );
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
