import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../reducers/session_redux';
import { hashHistory } from 'react-router';
import { requestBeers } from '../../reducers/beers_redux'

const mapStateToProps = (state) => {

  return {
    currentUser: state.currentUser,
    beers: state.beers
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: (user) => dispatch(logOut(user)),
    requestBeers: () => dispatch(requestBeers())
  }
};

class CheckinIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {beers: this.props.beers}
  }

  render() {
    let name = this.props.currentUser === null ? "" : this.props.currentUser.f_name;
    return(
      <div className="checkin-wrapper">
        <div className="checkin-index" >
        </div>

        <div className="user-display">
          Welcome {name}
        </div>
        <button onClick={() => this.props.logOut(this.props.currentUser).then(() => hashHistory.push('/'))}>Log Out</button>

      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CheckinIndex);
