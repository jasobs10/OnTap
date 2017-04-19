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

  render () {
    return (
      <div className="auth-form-container">
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit} className="auth-form">
          <label>
            <input type="text" onChange={this.handleChange('username')} value={this.state.username}/>

          </label>
          <label>
            <input type="password" onChange={this.handleChange('password')} value={this.state.password}/>
          </label>

          <label>
            <input type="text" onChange={this.handleChange('f_name')} value={this.state.f_name}/>
          </label>

          <label>
            <input type="text" onChange={this.handleChange('l_name')} value={this.state.l_name}/>
          </label>
          <input type="submit" value="Sign Up" />
          <button onClick={() => this.props.activateModal(false)}>close</button>

        </form>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
