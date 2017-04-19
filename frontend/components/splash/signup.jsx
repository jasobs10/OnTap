import React from 'react';
import { connect } from 'react-redux';
import { logIn, signUp } from '../../reducers/session_redux';
import { activateModal, receiveComponent } from '../../reducers/modal_redux';

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
    receiveComponent: (component) => dispatch(receiveComponent(component))
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
  }

  handleChange(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

  clearForm() {
    this.setState({username: "", password: "", f_name: "", l_name: ""});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signUp({user: this.state}).then(() => this.clearForm());
    // .then(() => this.props.router.push('/'))
  }

  toggleForm(e) {
    this.props.
  }

  render () {
    return (
      <div className="auth-form-container">
        <h1>ONTAP <i className="fa fa-beer beer-color" aria-hidden="true"></i></h1>
        <h2>beer beer beer beer beer</h2>
        <form onSubmit={this.handleSubmit} className="auth-form">

          <input className="auth-input" type="text" onChange={this.handleChange('username')} value={this.state.username}/>

          <input className="auth-input" type="password" onChange={this.handleChange('password')} value={this.state.password}/>

          <input className="auth-input" type="text" onChange={this.handleChange('f_name')} value={this.state.f_name}/>

          <input className="auth-input" type="text" onChange={this.handleChange('l_name')} value={this.state.l_name}/>

          <input className="auth-submit" type="submit" value="Sign Up" />
          <button className="close"onClick={() => this.props.activateModal(false)}></button>
          <hr className="auth-rule"/>
          <p className="auth-switch">Have an account? <span>Log in!</span></p>

        </form>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
