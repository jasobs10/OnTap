import React from 'react';

class UpdateUserForm extends React.Component {
  constructor(props) {
    super(props);
    const about = this.props.currentUser.about || "";
    const city = this.props.currentUser.city || "";
    const country = this.props.currentUser.country || "";
    const state = this.props.currentUser.state || "";
    this.state = {
      username: this.props.currentUser.username,
      f_name: this.props.currentUser.f_name,
      l_name: this.props.currentUser.l_name,
      imageFile: null,
      // imageUrl: this.props.currentUser.image_url,
      imageUrl: this.props.currentUser.image_url,
      id: this.props.currentUser.id,
      about,
      city,
      country,
      state
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  handleChange(field) {
    return (e) => this.setState({[field]: e.target.value});
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

  handleSubmit(e) {
    // debugger
    e.preventDefault();
    const formData = new FormData();
    formData.append("user[username]", this.state.username);
    formData.append("user[f_name]", this.state.f_name);
    formData.append("user[l_name]", this.state.l_name);
    formData.append("user[avatar]", this.state.imageFile);
    formData.append("user[about]", this.state.about);
    formData.append("user[country]", this.state.country);
    formData.append("user[state]", this.state.state);
    formData.append("user[city]", this.state.city);

    if (this.state.imageFile) {
      this.props.editUser(formData, this.state.id).then(() => this.props.activateModal(false));
    } else {
      this.props.defaultEditUser(this.state).then(() => this.props.activateModal(false));
    }

  }

  render() {
    return (
      <div className="auth-form-container user-update-form">
        <h1 className="user-form-header">Edit Account</h1>
        <form className="auth-form user-update-form-container" onSubmit={this.handleSubmit}>
          <div className="errors">

          </div>
          <input className="auth-input" type="text" onChange={this.handleChange('username')} value={this.state.username} placeholder="Username"/>
          <div className="name-input-wrapper">
            <input className="auth-input" type="text" onChange={this.handleChange('f_name')} value={this.state.f_name} placeholder="First name"/>

            <input className="auth-input last-input" type="text" onChange={this.handleChange('l_name')} value={this.state.l_name} placeholder="Last name"/>
          </div>
            <textarea className="comment-input user-about" value={this.state.about} placeholder="About me" onChange={this.handleChange("about")}>

            </textarea>
          <input className="auth-input last-input" type="text" onChange={this.handleChange('city')} value={this.state.city} placeholder="City"/>
          <input className="auth-input last-input" type="text" onChange={this.handleChange('state')} value={this.state.state} placeholder="State"/>
          <input className="auth-input last-input" type="text" onChange={this.handleChange('country')} value={this.state.country} placeholder="Country"/>

          <label className="auth-submit upload">
            <input name="file" id="file" className="upload-button" type="file" onChange={this.updateFile}/>
            <span className='photo-text'><i className="fa fa-camera-retro" aria-hidden="true"></i>&nbsp;&nbsp;Upload your picture</span>
          </label>

          <div className="preview-image-wrapper">
            <img src={this.state.imageUrl} />
          </div>
          <input className="auth-submit" type="submit" value="Edit Account" />
          <button className="close"onClick={() => this.props.activateModal(false)}></button>

        </form>

      </div>
    );
  }
}

export default UpdateUserForm;
