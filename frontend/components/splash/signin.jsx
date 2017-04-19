import React from 'react';
import { connect } from 'react-redux';
import { logIn, signUp } from '../../reducers/session_redux';

const mapStateToProps = (state, ownProps) => {
  // let formType = ownProps.formType || 'signin';
  return {
    signInErrors: state.errors.signIn,
    // formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logIn: (user) => dispatch(logIn(user))
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
  }

  handleChange(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

  clearForm() {
    this.setState({username: "", password: ""});
  }

  handleSubmit(e) {
    // debugger
    e.preventDefault();
    // debugger
    this.props.logIn({user: this.state}).then(() => this.clearForm());
    //.then(() => this.props.router.push('/'))
  }

  render () {
    return (
      <div className="auth-form-container">
        <h1>ONTAP <i className="fa fa-beer" aria-hidden="true"></i></h1>
        <form onSubmit={this.handleSubmit} className="auth-form">
          <input type="text" onChange={this.handleChange('username')} value={this.state.username}/>

          <input type="password" onChange={this.handleChange('password')} value={this.state.password}/>
      
          <input type="submit" value="Log In" />
          <button onClick={() => this.props.activateModal(false)}>close</button>

        </form>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
