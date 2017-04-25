import React from 'react';
import { connect } from 'react-redux';
import { receiveComponent, activateModal } from '../../reducers/modal_redux';
import SignInForm from '../splash/signin';
import SignUpForm from '../splash/signup';

const mapStateToProps = (state, ownProps) => {
  return {
    component: state.modal.component,
    active: state.modal.active
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    receiveComponent: (component) => dispatch(receiveComponent(component)),
    activateModal: (bool) => dispatch(activateModal(bool))
  };
};

class Modal extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    // this.state = this.props.modal;
    this.state = this.props.modal;
    // debugger
  }

  componentWillReceiveProps(nextProps) {
    // debugger
    this.setState(nextProps.modal);
  }



  render() {
    // const comp = this.state.component === null ? "" : this.state.component;
    // const comp = this.state.active ? this.state.component : "";
    // debugger
    if (this.state.active) {
      return (
        <div>
          <div className="modal-background" onClick={() => this.props.activateModal(false)}>
          </div>

          <div className="modal">
            {this.state.component}
          </div>
        </div>
      );
    }

    return (
      <p className="hidden"></p>
    )
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(Modal)

// {this.props.component}
