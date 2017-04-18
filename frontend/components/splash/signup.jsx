import React from 'react';
import { connect } from 'react-redux';
import { logIn, signUp } from '../../reducers/session_redux';

const mapStateToProps = (state, ownProps) => {
  // let formType = ownProps.formType || 'signin';
  return {
    signUpErrors: state.errors.signUp,
    // formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signUp: (user) => dispatch(signUp(user))
  };
};

class SignUpForm extends React.Component {
  constructor(props) {
    // debugger
    super(props);
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
    // debugger
    e.preventDefault();
    this.props.signUp({user: this.state}).then(() => this.clearForm()).then(() => this.props.router.push('/'));
  }

  render () {
    return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username: <input type="text" onChange={this.handleChange('username')} value={this.state.username}/>

          </label>
          <label>
            Password: <input type="password" onChange={this.handleChange('password')} value={this.state.password}/>
          </label>

          <label>
            First Name: <input type="text" onChange={this.handleChange('f_name')} value={this.state.f_name}/>
          </label>

          <label>
            Last Name: <input type="text" onChange={this.handleChange('l_name')} value={this.state.l_name}/>
          </label>
          <input type="submit" value="Sign Up" />

        </form>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
