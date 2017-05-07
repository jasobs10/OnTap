import React from 'react';
var Rating = require('react-rating');
import { hashHistory } from 'react-router';

class CheckinForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {counter: 0, rating: 0, address: "", review: "", container: "", imageFile: null, imageUrl: null}
    this.handleChange = this.handleChange.bind(this);
    this.backspace = this.backspace.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleSlide = this.handleSlide.bind(this);
    this.handleContainer = this.handleContainer.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  backspace(e) {
    if (e.keyCode === 8 && this.state.counter !== 0) {
      this.setState({counter: this.state.counter - 2});
    }
  }

  handleChange(e) {
    if (this.state.counter < 140) {
      this.setState({review: e.target.value, counter: this.state.counter + 1});
    }
  }

  clearForm() {
    this.setState({counter: 0, rating: 0, address: "", review: "", container: ""});
  }

  handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData();
    formData.append("checkin[rating]", this.state.rating);
    formData.append("checkin[beer_id]", this.props.beer.id);
    formData.append("checkin[address]", this.state.address);
    formData.append("checkin[container]", this.state.container);
    formData.append("checkin[review]", this.state.review);
    formData.append("checkin[image]", this.state.imageFile);

    if (this.state.imageFile) {
      this.props.createPhotoCheckin(formData).then(() => this.props.activateModal(false));
    } else {
      this.props.createCheckin({rating: this.state.rating, beer_id: this.props.beer.id, address: this.state.address, container: this.state.container, review: this.state.review})
      .then(() => this.clearForm())
      .then(() => this.props.activateModal(false))
      .then(() => {
        if (this.props.isModal) {
          hashHistory.push('/home');
        }
      });
    }
  }

  handleSlide(value) {
    this.setState({
      rating: value
    })
  }

  handleAddress(e) {
    this.setState({address: e.target.value})
  }

  handleContainer(e) {
    this.setState({container: e.target.value})
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

  render() {
    return (
      <div className="comment-wrapper">
        <div className="comment-header checkin-form-title">
          Check-in {this.props.beer.name}
        </div>
        <hr className="orange"/>
        <form>
          <div className="review-line">
            <textarea className="comment-input checkin-form-review" value={this.state.review} placeholder="What did you think?" onChange={this.handleChange} onKeyDown={this.backspace}>

            </textarea>

            <label className="checkin-upload">
              <input name="file" id="file" className="upload-button" type="file" onChange={this.updateFile}/>
              <i className="fa fa-camera-retro" aria-hidden="true"></i>
            </label>



          </div>
          <div className="preview-image-wrapper">
            <img src={this.state.imageUrl} />
          </div>
          <div className="comment-bottom checkin-form-middle">
            <div className="counter">
              {this.state.counter} / 140
            </div>
            <div className="checkin-slider">
              <span className="avg-text checkin-form-rating"><Rating
                             initialRate={this.state.rating}

                             empty="fa fa-circle-thin fa-1x empty"
                             full="fa fa-circle fa-1x overall-full"
                             className="rating-stars"
                             onChange={this.handleSlide}
                             />&nbsp;&nbsp; {this.state.rating}/5</span>
            </div>
            <div className="container-select">
              <select className="dropdown-select" value={this.state.container} onChange={this.handleContainer}>
                <option disabled={true}>Select Container</option>
                <option value="can">Can</option>
                <option value="bottle">Bottle</option>
                <option value="draft">Draft</option>

              </select>
            </div>

          </div>
          <div className="checkin-form-bottom">
            <div className="location-input-wrapper">
              <input className="location-input" type="text" value={this.state.address} placeholder="Location address" onChange={this.handleAddress}/>
            </div>
            <div className="comment-button" onClick={this.handleSubmit}>
              Check-in
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CheckinForm;
