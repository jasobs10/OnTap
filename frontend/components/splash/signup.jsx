import React from 'react';
import { connect } from 'react-redux';
import { logIn, signUp } from '../../reducers/session_redux';
import { activateModal, receiveComponent } from '../../reducers/modal_redux';
import SignInForm from './signin';
import { receiveSignUpErrors, defaultSignUp } from '../../reducers/session_redux';
import { hashHistory } from 'react-router';

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
    clearErrors: () => dispatch(receiveSignUpErrors({})),
    defaultSignUp: (user) => dispatch(defaultSignUp(user))
  };
};

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    this.state = {username: "", password: "", f_name: "", l_name: "", imageFile: null, imageUrl: null};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.updateFile = this.updateFile.bind(this);
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
    const formData = new FormData();
    formData.append("user[username]", this.state.username);
    formData.append("user[password]", this.state.password);
    formData.append("user[f_name]", this.state.f_name);
    formData.append("user[l_name]", this.state.l_name);
    formData.append("user[avatar]", this.state.imageFile);
    // debugger
    if (this.state.imageFile) {

      this.props.signUp(formData).then(() => this.clearForm()).then(() => this.props.activateModal(false)).then(() => hashHistory.push('/home'));
    } else {
      // debugger
      this.props.defaultSignUp({user: this.state}).then(() => this.clearForm()).then(() => this.props.activateModal(false)).then(() => hashHistory.push('/home'));
    }
    // .then(() => this.props.router.push('/'))
  }

  toggleForm() {
    this.props.activateModal(false);
    this.props.receiveComponent(<SignInForm receiveComponent={this.props.receiveComponent} activateModal={this.props.activateModal}/>);
    this.props.activateModal(true);
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({imageFile: file, imageUrl: fileReader.result});
    }.bind(this);
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render () {
    // debugger
    let signErrors;
    if (this.props.signUpErrors === undefined) {
      signErrors = "";
    } else {
      signErrors = Object.values(this.props.signUpErrors).map((error, i) => {
        return <li key={i} className="list-error"><i className="fa fa-exclamation-circle error-sym" aria-hidden="true"></i> {error}</li>
      });
    }
    // debugger
    return (
      <div className="auth-form-container">
        <h1>ONTA<i className="fa fa-beer beer-color" aria-hidden="true"></i></h1>
        <h2>beer beer beer beer beer</h2>
        <form onSubmit={this.handleSubmit} className="auth-form">
          <div className="errors">
            {signErrors}
          </div>
          <input className="auth-input" type="text" onChange={this.handleChange('username')} value={this.state.username} placeholder="Username"/>

          <input className="auth-input" type="password" onChange={this.handleChange('password')} value={this.state.password} placeholder="Password"/>

          <input className="auth-input" type="text" onChange={this.handleChange('f_name')} value={this.state.f_name} placeholder="First name"/>

          <input className="auth-input last-input" type="text" onChange={this.handleChange('l_name')} value={this.state.l_name} placeholder="Last name"/>

            <label className="auth-submit upload">
              <input name="file" id="file" className="upload-button" type="file" onChange={this.updateFile}/>
              <span className='photo-text'><i className="fa fa-camera-retro" aria-hidden="true"></i>&nbsp;&nbsp;Upload your picture</span>
            </label>

          <div className="preview-image-wrapper">
            <img src={this.state.imageUrl} />
          </div>

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
