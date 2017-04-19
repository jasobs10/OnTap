import React from 'react';
import { connect } from 'react-redux';
import { receiveComponent, activateModal } from '../../reducers/modal_redux';
import Modal from '../modal/modal';
import SignInForm from './signin';
import SignUpForm from './signup';

const mapStateToProps = (state) => {

  return {
    modal: state.modal
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    receiveComponent: (component) => dispatch(receiveComponent(component)),
    activateModal: (bool) => dispatch(activateModal(bool))
  };
};

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.modal;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(component) {
    return (e) => {
      this.props.receiveComponent(component);
      this.props.activateModal(true);
    };
  }

  render() {
    // debugger

    return (

      <div className="splash-container">
        <div className="auth-button-container">
          <button className="auth" onClick={this.handleClick(<SignInForm modal={this.props.modal} activateModal={this.props.activateModal}/>)}>Sign In</button>
          <button className="auth" onClick={this.handleClick(<SignUpForm modal={this.props.modal} activateModal={this.props.activateModal}/>)}>Create an account</button>
        </div>
        <div className="splash-inner">
          <div>
            <article>What's ONTAP?</article>
            <article>Rate, Review, Discover Your Favorite Beers</article>
            <article className="demo"><button className="demo-button">Demo Log in</button></article>
          </div>
          <div>

          </div>
        </div>

        <div className="modal-container">
          <Modal modal={this.props.modal} activateModal={this.props.activateModal}/>
        </div>
      </div>
    );
  }
}
// <SignInForm />

// <div class="auth-form"><Modal /></div>

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
