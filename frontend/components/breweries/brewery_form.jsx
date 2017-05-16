import React from 'react';
import { hashHistory } from 'react-router';

class AddBreweryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: "", city: "", country: "", state: "", imageFile: null, imageUrl: null}
    this.handleChange = this.handleChange.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  clearForm() {
    this.setState({name: "", city: "", country: "", state: "", imageFile: null, imageUrl: null});
  }


  handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData();
    formData.append("brewery[name]", this.state.name);
    formData.append("brewery[city]", this.state.city);
    formData.append("brewery[state]", this.state.state);
    formData.append("brewery[country]", this.state.country);
    formData.append("brewery[image]", this.state.imageFile);

    if (this.state.imageFile) {
      this.props.createPhotoBrewery(formData)
      .then((r) => {
        hashHistory.push(`/breweries/${Object.keys(r.brewery)[0]}`)
      })
      .then(() => this.props.activateModal(false));
    } else {
      this.props.createBrewery(this.state)
      .then((r) => {
        hashHistory.push(`/breweries/${Object.keys(r.brewery)[0]}`)
      })
      .then(() => this.clearForm())
      .then(() => this.props.activateModal(false));

    }
  }


  render() {
    return (
      <div className="comment-wrapper">
        <div className="comment-header checkin-form-title">
          Add a Brewery
        </div>
        <hr className="orange"/>
        <form className="brewery-form" onSubmit={this.handleSubmit}>
          <div className="review-line brewery-name-wrapper">
            <input required className="brewery-name-input" type="text" value={this.state.name} placeholder="Brewery Name" onChange={this.handleChange("name")}/>

            <label className="checkin-upload brewery-upload">
              <input required name="file" id="file" className="upload-button" type="file" onChange={this.updateFile}/>
              <i className="fa fa-camera-retro" aria-hidden="true"></i>
            </label>

          </div>
          <div className="preview-image-wrapper">
            <img src={this.state.imageUrl} />
          </div>
          <div className="comment-bottom address-inputs">
            <input required className="city-input" type="text" value={this.state.city} placeholder="City" onChange={this.handleChange("city")}/>
            <input required className="state-input" type="text" value={this.state.state} placeholder="State" onChange={this.handleChange("state")}/>
            <input required className="country-input" type="text" value={this.state.country} placeholder="Country" onChange={this.handleChange("country")}/>
          </div>
          <div className="checkin-form-bottom brewery-form-bottom">
            <input type="submit" className="comment-button" value="CREATE"/>
          </div>
        </form>
      </div>
    );
  }
}

export default AddBreweryForm;
