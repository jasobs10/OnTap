import React from 'react';
import { connect } from 'react-redux';
import { receiveComponent, activateModal } from '../../reducers/modal_redux';
import Modal from '../modal/modal';
import SignInForm from './signin';
import SignUpForm from './signup';
import { logIn, signUp } from '../../reducers/session_redux';

const mapStateToProps = (state) => {

  return {
    modal: state.modal,
    errors: state.errors
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    receiveComponent: (component) => dispatch(receiveComponent(component)),
    activateModal: (bool) => dispatch(activateModal(bool)),
    guestLogIn: () => dispatch(logIn({user: {username: "test", password: "password"}}))
  };
};

class Splash extends React.Component {
  constructor(props) {
    super(props);
    // this.state = this.props.modal;
    this.state = {username: "", password: ""};
    this.handleClick = this.handleClick.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  handleClick(component) {
    return (e) => {
      this.props.receiveComponent(component);
      this.props.activateModal(true);
    };
  }

  handleModal() {
    if (this.props.modal.active) {
      this.props.activateModal(false);
    }
  }

  guest() {
    const testUser = ["t", "e", "s", "t"];
    const testPass = ["p", "a", "s", "s", "w", "o", "r", "d"];

  }

  render() {
    // debugger

    return (
      <div className="splash-wrapper">

        <Modal modal={this.props.modal} activateModal={this.props.activateModal}/>


        <div className="splash-container">
          <div className="auth-button-container">
            <button className="auth" onClick={this.handleClick(<SignInForm receiveComponent={this.props.receiveComponent} activateModal={this.props.activateModal}/>)}>Sign In</button>
            <button className="auth" onClick={this.handleClick(<SignUpForm receiveComponent={this.props.receiveComponent} activateModal={this.props.activateModal}/>)}>Create an account</button>
          </div>

          <div className="splash-inner">
            <div>
              <article><h1>What's ONTAP <i className="fa fa-beer" aria-hidden="true"></i></h1></article>
              <article className="two"><img className="hops" src={window.images.hops} alt="hops"/></article>
              <article className="splash-tag">Rate, Review, Discover Your Favorite Beers</article>
              <article className="demo" onClick={this.handleClick(<SignInForm receiveComponent={this.props.receiveComponent} activateModal={this.props.activateModal} guest={true}/>)}><button className="demo-button">Demo Log in</button></article>
            </div>
            <div className="splash-img">
              <img src={window.images.craftBeer} alt="craft beer"/>
            </div>
          </div>

        </div>

        <div className="bottom-wrapper">
          <div className="bottom-inner">
            <img src={window.images.ratings} alt="beer ratings"/>
            <div>
              <h2>Check in and Rate Beer </h2>
              <p>Keep track of beers you drink</p>
              <p>Show off your whales</p>
            </div>
          </div>
          <div className="bottom-inner">
            <img src={window.images.badges} alt="beer badges"/>
            <div>
              <h2>Drink More Beer, Collect More Badges</h2>
              <p>Show off your drinking skills</p>
            </div>
          </div>
        </div>

        <footer className="splash-footer">
          © ONTAP, 2017
        </footer>
      </div>
    );
  }
}
// <SignInForm />

// <div class="auth-form"><Modal /></div>

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
