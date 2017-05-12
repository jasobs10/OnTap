import React from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { logIn, signUp } from '../../reducers/session_redux';
import SignUpForm from './signup';
import { receiveSignInErrors } from '../../reducers/session_redux';

const mapStateToProps = (state, ownProps) => {
  return {
    signInErrors: state.errors.signIn,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logIn: (user) => dispatch(logIn(user)),
    closeModal: () => dispatch(activateModal(false)),
    guestLogIn: () => dispatch(logIn({user: {username: "test", password: "password"}})),
    clearErrors: () => dispatch(receiveSignInErrors({}))
  };
};

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.guest = this.guest.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  guest() {
    const testUser = ["t", "e", "s", "t", "a", "c", "c", "o", "u", "n", "t"];
    const testPass = ["p", "a", "s", "s", "w", "o", "r", "d"];
    let interval = setInterval(() => {
      let current = this.state.username.length;
      if (current < testUser.length) {
        this.setState({username: this.state.username + testUser[current]})
      } else {
        clearInterval(interval);
          let interval2 = setInterval(() => {
          current = this.state.password.length;
          if (current < testPass.length) {
            this.setState({password: this.state.password + testPass[current]})
          } else {
            clearInterval(interval2);
            this.props.logIn({user: this.state}).then(() => this.clearForm()).then(() => this.props.activateModal(false)).then(() => hashHistory.push('/home'));
          }

        }, 100);
      }

    }, 75);


  }

  handleChange(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

  componentWillMount() {
    if (this.props.guest) {
      this.clearForm();
      this.guest();

    }
    this.props.clearErrors();
  }

  componentDidMount() {
    this.props.clearErrors();
    // debugger
  }

  clearForm() {
    this.setState({username: "", password: ""});
  }

  renderErrors() {
    let errs = Object.values(this.props.signInErrors).map((error, i) => {
      return (<li key={i} className="list-error"><i className="fa fa-exclamation-circle error-sym" aria-hidden="true"></i> {error}</li>);
    });
    return (
      <div className="errors">
        {errs}
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logIn({user: this.state}).then(() => this.clearForm()).then(() => this.props.activateModal(false)).then(() => hashHistory.push('/home'));
  }

  toggleForm() {
    this.props.receiveComponent(<SignUpForm receiveComponent={this.props.receiveComponent} activateModal={this.props.activateModal}/>);
  }

  render () {
    return (
      <div className="auth-form-container">
        <h1>ONTA<i className="fa fa-beer beer-color" aria-hidden="true"></i></h1>
        <h2>beer beer beer beer beer</h2>
        <form onSubmit={this.handleSubmit} className="auth-form">
          {this.props.signInErrors ? this.renderErrors() : ""}
          <input className="auth-input" type="text" onChange={this.handleChange('username')} value={this.state.username} placeholder="Username"/>

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
