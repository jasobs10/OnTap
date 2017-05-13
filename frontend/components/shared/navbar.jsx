import React from 'react';
import { hashHistory, Link } from 'react-router';
import { logOut } from '../../reducers/session_redux';
import { connect } from 'react-redux';
import Modal from '../modal/modal';
import { receiveComponent, activateModal } from '../../reducers/modal_redux';
import { defaultEditUser, editUser } from '../../reducers/session_redux';
import UpdateUserForm from '../user/user_form';


const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    modal: state.modal
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: (user) => dispatch(logOut(user)),
    receiveComponent: (component) => dispatch(receiveComponent(component)),
    activateModal: (bool) => dispatch(activateModal(bool)),
    defaultEditUser: (user) => dispatch(defaultEditUser(user)),
    editUser: (user, id) => dispatch(editUser(user, id))

  }
};

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {user: this.props.currentUser}
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    this.props.receiveComponent(<UpdateUserForm
      currentUser={this.props.currentUser}
      editUser={this.props.editUser}
      defaultEditUser={this.props.defaultEditUser}
      activateModal={this.props.activateModal}
      />);
    this.props.activateModal(true);
  }

  render() {
    return (
      <div className="modal-wrapper">
          <Modal modal={this.props.modal} activateModal={this.props.activateModal}/>
      <div className="nav-container">
        <div className="nav-inside">

          <li className="titlelogo" onClick={() => hashHistory.push('/home')}>
            <i className="fa fa-beer" aria-hidden="true"></i> ONTAP
          </li>
          <li onClick={() => hashHistory.push('/beers')}>
            Top beers
          </li>
          <li onClick={() => hashHistory.push('/breweries')}>
            Breweries
          </li>
          <li className="account-button" onClick={() => hashHistory.push(`/users/${this.state.user.id}`)}>
            {this.state.user.username}
            <div className="dropdown">
              <div>
                <Link to={`/users/${this.state.user.id}`}>My profile</Link>
              </div>
              <div onClick={this.handleClick}>
                Edit Profile
              </div>
              <div>
                Add Beer
              </div>
              <div>
                Add Brewery
              </div>
              <div onClick={() => this.props.logOut(this.props.currentUser).then(() => hashHistory.push('/'))}>
                Log out
              </div>
            </div>
          </li>
          <li onClick={() => this.props.logOut(this.props.currentUser).then(() => hashHistory.push('/'))}>
            Log Out
          </li>
        </div>
      </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
