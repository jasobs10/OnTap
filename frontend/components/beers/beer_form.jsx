import React from 'react';
import { browserHistory } from 'react-router';

class AddBeerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: "", ibu: "", abv: "", style: "", brewery_id: "", description: "",  imageFile: null, imageUrl: null}
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
    }.bind(this);``
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  clearForm() {
    this.setState({name: "", ibu: "", abv: "", style: "", brewery_id: "", description: "",  imageFile: null, imageUrl: null});
  }



  handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData();
    formData.append("beer[name]", this.state.name);
    formData.append("beer[abv]", this.state.abv);
    formData.append("beer[ibu]", this.state.ibu);
    formData.append("beer[style]", this.state.style);
    formData.append("beer[brewery_id]", this.state.brewery_id);
    formData.append("beer[description]", this.state.description);
    formData.append("beer[image]", this.state.imageFile);

    if (this.state.imageFile) {
      this.props.createPhotoBeer(formData, this.state.brewery_id)
      .then((r) => {
        browserHistory.push(`/beers/${Object.keys(r.beer)[0]}`)
      })
      .then(() => this.props.activateModal(false));

    } else {

      this.props.createBeer(this.state, this.state.brewery_id)
      .then((r) => {
        browserHistory.push(`/beers/${Object.keys(r.beer)[0]}`)
      })
      .then(() => this.props.activateModal(false));
    }
  }

  brewerySelect() {
    const sortedBreweries = Object.keys(this.props.breweryNames).sort((a, b) => {
      const nameA = a.toUpperCase();
      const nameB = b.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    return sortedBreweries.map((brewery, i) => <option key={i} value={this.props.breweryNames[brewery]}>{brewery}</option>);
  }

  render() {

    return (
      <div className="comment-wrapper">

        <div className="comment-header checkin-form-title">
          Add a Beer
        </div>
        <hr className="orange"/>
        <form className="brewery-form" onSubmit={this.handleSubmit}>
          <div className="beer-name-wrapper">
            <input required className="beer-name-input" type="text" value={this.state.name} placeholder="Name" onChange={this.handleChange("name")}/>
            <select required className="dropdown-select" value={this.state.brewery_id} onChange={this.handleChange("brewery_id")}>
              <option disabled={true} value="">Select Brewery</option>
              {this.brewerySelect()}
            </select>
          </div>
          <div className="review-line brewery-name-wrapper">
            <input required className="brewery-name-input" type="text" value={this.state.description} placeholder="Add a Description" onChange={this.handleChange("description")}/>

            <label className="checkin-upload brewery-upload">
              <input name="file" id="file" className="upload-button" type="file" onChange={this.updateFile}/>
              <i className="fa fa-camera-retro" aria-hidden="true"></i>
            </label>

          </div>
          <div className="preview-image-wrapper">
            <img src={this.state.imageUrl} />
          </div>
          <div className="comment-bottom address-inputs">
            <input required className="city-input" type="text" value={this.state.style} placeholder="Style" onChange={this.handleChange("style")}/>
            <input required className="state-input" type="text" value={this.state.abv} placeholder="ABV" onChange={this.handleChange("abv")}/>
            <input required className="country-input" type="text" value={this.state.ibu} placeholder="IBU" onChange={this.handleChange("ibu")}/>
          </div>
          <div className="checkin-form-bottom brewery-form-bottom">
          <input type="submit" className="comment-button" value="CREATE"/>
          </div>
        </form>
      </div>
    );
  }
}

export default AddBeerForm;
