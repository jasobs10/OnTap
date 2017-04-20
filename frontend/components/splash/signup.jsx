import React from 'react';
import { connect } from 'react-redux';
import { logIn, signUp } from '../../reducers/session_redux';
import { activateModal, receiveComponent } from '../../reducers/modal_redux';
import SignInForm from './signin';
import { receiveSignUpErrors } from '../../reducers/session_redux';

const mapStateToProps = (state, ownProps) => {
  // let formType = ownProps.formType || 'signin';
  return {
    signUpErrors: state.errors.signUp,
    modal: state.modal
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signUp: (user) => dispatch(signUp(user)),
    closeModal: () => dispatch(activateModal(false)),
    receiveComponent: (component) => dispatch(receiveComponent(component)),
    clearErrors: () => dispatch(receiveSignUpErrors({}))
  };
};

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    this.state = {username: "", password: "", f_name: "", l_name: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  handleChange(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

  clearForm() {
    this.setState({username: "", password: "", f_name: "", l_name: ""});
  }

  // componentDidMount() {
  //   this.props.clearErrors();
  //   // debugger
  // }

  // componentWillReceiveProps(newProps) {
  //   // debugger
  //   if (newProps.signUpErrors === this.props.signUpErrors) {
  //     this.props.clearErrors();
  //   }
  //   // debugger
  // }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signUp({user: this.state}).then(() => this.clearForm()).then(() => this.props.activateModal(false));
    // .then(() => this.props.router.push('/'))
  }

  toggleForm() {
    this.props.activateModal(false);
    this.props.receiveComponent(<SignInForm receiveComponent={this.props.receiveComponent} activateModal={this.props.activateModal}/>);
    this.props.activateModal(true);
  }

  render () {
    // debugger
    let signErrors;
    if (this.props.signUpErrors === undefined) {
      signErrors = "";
    } else {
      signErrors = Object.values(this.props.signUpErrors).map((error) => {
        return <li className="list-error">{error}</li>
      });
    }
    // debugger
    return (
      <div className="auth-form-container">
        <h1>ONTAP <i className="fa fa-beer beer-color" aria-hidden="true"></i></h1>
        <h2>beer beer beer beer beer</h2>
        <form onSubmit={this.handleSubmit} className="auth-form">
          <div className="errors">
            {signErrors}
          </div>
          <input className="auth-input" type="text" onChange={this.handleChange('username')} value={this.state.username} placeholder="Username"/>

          <input className="auth-input" type="password" onChange={this.handleChange('password')} value={this.state.password} placeholder="Password"/>

          <input className="auth-input" type="text" onChange={this.handleChange('f_name')} value={this.state.f_name} placeholder="First name"/>

          <input className="auth-input" type="text" onChange={this.handleChange('l_name')} value={this.state.l_name} placeholder="Last name"/>

          <input className="auth-submit" type="submit" value="Sign Up" />
          <button className="close"onClick={() => this.props.activateModal(false)}></button>
          <hr className="auth-rule"/>
          <p className="auth-switch">Have an account? <span onClick={this.toggleForm}>Log in!</span></p>

        </form>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
