import React from 'react';
import { browserHistory, Link } from 'react-router';
import { logOut } from '../../reducers/session_redux';
import { connect } from 'react-redux';
import Modal from '../modal/modal';
import { receiveComponent, activateModal } from '../../reducers/modal_redux';
import { defaultEditUser, editUser } from '../../reducers/session_redux';
import UpdateUserForm from '../user/user_form';
import { createBrewery, createPhotoBrewery, fetchBreweryNames } from '../../reducers/breweries_redux';
import AddBreweryForm from '../breweries/brewery_form';
import AddBeerForm from '../beers/beer_form';
import { createBeer, createPhotoBeer } from '../../reducers/beers_redux';
import { requestBeers } from '../../reducers/beers_redux';

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    modal: state.modal,
    breweryNames: state.breweryNames
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: (user) => dispatch(logOut(user)),
    receiveComponent: (component) => dispatch(receiveComponent(component)),
    activateModal: (bool) => dispatch(activateModal(bool)),
    defaultEditUser: (user) => dispatch(defaultEditUser(user)),
    editUser: (user, id) => dispatch(editUser(user, id)),
    createBrewery: (brewery) => dispatch(createBrewery(brewery)),
    createPhotoBrewery: (brewery) => dispatch(createPhotoBrewery(brewery)),
    createBeer: (beer, breweryId) => dispatch(createBeer(beer, breweryId)),
    createPhotoBeer: (beer, breweryId) => dispatch(createPhotoBeer(beer, breweryId)),
    requestBeers: (field, params) => dispatch(requestBeers(field, params)),
    fetchBreweryNames: () => dispatch(fetchBreweryNames())
  }
};

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {user: this.props.currentUser}
    this.handleClick = this.handleClick.bind(this);
    this.handleBreweryClick = this.handleBreweryClick.bind(this);
    this.handleBeerClick = this.handleBeerClick.bind(this);

  }

  componentDidMount() {
    this.props.fetchBreweryNames();
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

  handleBreweryClick() {
    this.props.receiveComponent(
      <AddBreweryForm currentUser={this.props.currentUser}
        activateModal={this.props.activateModal}
        createBrewery={this.props.createBrewery}
        createPhotoBrewery={this.props.createPhotoBrewery}
        isModal={true}/>
    );
    this.props.activateModal(true);
  }

  handleBeerClick() {
    this.props.requestBeers().then((r) => {
      const beers = Object.values(r.beers);
      this.props.receiveComponent(
        <AddBeerForm
          breweryNames={this.props.breweryNames}
          currentUser={this.props.currentUser}
          beers={beers}
          activateModal={this.props.activateModal}
          createBeer={this.props.createBeer}
          createPhotoBeer={this.props.createPhotoBeer}
          isModal={true}/>
      );
      this.props.activateModal(true);
    });
  }

  render() {
    return (
      <div className="modal-wrapper">
          <Modal modal={this.props.modal} activateModal={this.props.activateModal}/>
      <div className="nav-container">
        <div className="nav-inside">

          <li className="titlelogo" onClick={() => browserHistory.push('/home')}>
            <i className="fa fa-beer" aria-hidden="true"></i> ONTAP
          </li>
          <li onClick={() => browserHistory.push('/beers')}>
            Top beers
          </li>
          <li onClick={() => browserHistory.push('/breweries')}>
            Breweries
          </li>
          <li className="account-button">
            <Link to={`/users/${this.state.user.id}`}>{this.state.user.username}</Link>
            <div className="dropdown">
              <div>
                <Link to={`/users/${this.state.user.id}`}>My profile</Link>
              </div>
              <div onClick={this.handleClick}>
                Edit Profile
              </div>
              <div onClick={this.handleBeerClick}>
                Add Beer
              </div>
              <div onClick={this.handleBreweryClick}>
                Add Brewery
              </div>
              <div onClick={() => this.props.logOut(this.props.currentUser).then(() => browserHistory.push('/'))}>
                Log out
              </div>
            </div>
          </li>
          <li onClick={() => this.props.logOut(this.props.currentUser).then(() => browserHistory.push('/'))}>
            Log Out
          </li>
        </div>
      </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
