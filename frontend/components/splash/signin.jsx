import React from 'react';
import { connect } from 'react-redux';
import { logIn, signUp } from '../../reducers/session_redux';
import SignUpForm from './signup';
import { receiveSignInErrors } from '../../reducers/session_redux';

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
    closeModal: () => dispatch(activateModal(false)),
    guestLogIn: () => dispatch(logIn({user: {username: "test", password: "password"}})),
    clearErrors: () => dispatch(receiveSignInErrors({}))
  };
};

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    // debugger
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
            this.props.logIn({user: this.state}).then(() => this.clearForm()).then(() => this.props.activateModal(false));
          }

        }, 100);
      }

    }, 75);


  }

  handleChange(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

  // componentDidMount() {
  //
  // }
  componentWillMount() {
    // debugger
    if (this.props.guest) {
      this.clearForm();
      this.guest();

    }
    this.props.clearErrors();
  }

  // componentWillReceiveProps(newProps) {
  //   // debugger
  //   if (newProps.signInErrors === this.props.signInErrors) {
  //     this.props.clearErrors();
  //   }
  //   // debugger
  // }

  componentDidMount() {
    this.props.clearErrors();
    // debugger
  }

  // componentWillReceiveProps(newProps) {
  //
  //   if (newProps.errors !== this.props.errors) {
  //     this.props.clearErrors();
  //   }
  // }

  clearForm() {
    // debugger
    this.setState({username: "", password: ""});
  }

  renderErrors() {
    // debugger
    return (
      <div className="errors">
        <span className="error">{this.props.signInErrors.base}</span>
      </div>
    );
  }

  handleSubmit(e) {
    // debugger
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
    // debugger
    // let errors;
    // if (this.props.signInErrors) {
    //   errors = this.props.signInErrors.base;
    // } else {
    //   errors = "";
    // }
    // debugger
    return (
      <div className="auth-form-container">
        <h1>ONTAP <i className="fa fa-beer beer-color" aria-hidden="true"></i></h1>
        <h2>beer beer beer beer beer</h2>
        {this.props.signInErrors ? this.renderErrors() : ""}
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
