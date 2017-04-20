import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../reducers/session_redux';
import { hashHistory } from 'react-router';

const mapStateToProps = (state) => {

  return {
    currentUser: state.currentUser
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: (user) => dispatch(logOut(user))
  }
};

class CheckinIndex extends React.Component {
  constructor(props) {
    super(props);

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
