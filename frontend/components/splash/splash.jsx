import React from 'react';
import { connect } from 'react-redux';
// import { receiveComponent, activateModal } from 'modal_redux';
// import modal
import SignInForm from './signin';
import SignUpForm from './signup';

const mapStateToProps = (state) => {
  return {modal: state.modal};
};


const mapDispatchToProps = (dispatch) => {
  return {
    modalComponent: (component) => dispatch(receiveComponent(component)),
    activateModal: (bool) => dispatch(activateModal(bool))
  };
};

class Splash extends React.Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(field) {
  // }

  render() {
    return (
      <div>
        <h1>Welcome to OnTap</h1>
        <button>Sign In</button>
        <button>Sign Up</button>

        <div>
          <SignInForm />
        </div>
        <div>
          <SignUpForm />
        </div>
      </div>
    );
  }
}
// <SignInForm />

// <div class="auth-form"><Modal /></div>

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
