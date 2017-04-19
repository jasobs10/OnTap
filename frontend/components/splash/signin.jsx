import React from 'react';
import { connect } from 'react-redux';
import { logIn, signUp } from '../../reducers/session_redux';
import SignUpForm from './signup';

const mapStateToProps = (state, ownProps) => {
  // let formType = ownProps.formType || 'signin';
  return {
    signInErrors: state.errors.signIn,
    // formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logIn: (user) => dispatch(logIn(user)),
    closeModal: () => dispatch(activateModal(false))
  };
};

class SignInForm extends React.Component {
  constructor(props) {
    // debugger
    super(props);
    this.state = {username: "", password: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  handleChange(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

  clearForm() {
    debugger
    this.setState({username: "", password: ""});
  }

  handleSubmit(e) {
    debugger
    e.preventDefault();
    // debugger
    this.props.logIn({user: this.state}).then(() => this.clearForm()).then(() => this.props.activateModal(false));
    //.then(() => this.props.router.push('/'))
    // change modal back to false
  }

  toggleForm() {
    // this.props.activateModal(false);
    this.props.receiveComponent(<SignUpForm receiveComponent={this.props.receiveComponent} activateModal={this.props.activateModal}/>);
    // this.props.activateModal(true);
  }

  render () {
    debugger
    return (
      <div className="auth-form-container">
        <h1>ONTAP <i className="fa fa-beer beer-color" aria-hidden="true"></i></h1>
        <h2>beer beer beer beer beer</h2>
        <form onSubmit={this.handleSubmit} className="auth-form">
          <input className="auth-input username" type="text" onChange={this.handleChange('username')} value={this.state.username} placeholder="Username"/>

          <input className="auth-input" type="password" onChange={this.handleChange('password')} value={this.state.password} placeholder="Password"/>

          <input className="auth-submit" type="submit" value="Log In" />
          <button className="close" onClick={() => this.props.activateModal(false)}></button>
          <hr className="auth-rule"/>
          <p className="auth-switch">New around here? <span onClick={this.toggleForm}>Sign up!</span></p>

        </form>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
