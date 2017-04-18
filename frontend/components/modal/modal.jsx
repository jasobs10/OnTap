import React from 'react';
import { connect } from 'react-redux';
import { receiveComponent, activateModal } from '../../reducers/modal_redux';
import SignInForm from '../splash/signin';
import SignUpForm from '../splash/signup';

// const mapStateToProps = (state, ownProps) => {
//   return {
//     component: state.modal.component,
//     active: state.modal.active
//   };
// };
//
// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     receiveComponent: (component) => dispatch(receiveComponent(component)),
//     activateModal: (bool) => dispatch(activateModal(bool))
//   };
// };

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.modal;
    // debugger
  }

  render() {
    const comp = this.state.component === null ? "" : this.state.component;
    return (
      <div>
        {comp}
      </div>
    );
  }

}
export default Modal;

// {this.props.component}
