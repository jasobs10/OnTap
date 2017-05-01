import React from 'react';

class AddLike extends React.Component {
  constructor(props) {
    super(props);
    this.state = {brewery: this.props.brewery}
  }

  componentWillReceiveProps(newProps) {
    this.setState({brewery: newProps.brewery});
  }

  render() {
    if (this.props.brewery.currentUserLikes) {
      let id = this.props.brewery.id
      return (

        <div className="like-button-container like-remove" onClick={() => this.props.removeBreweryLike(this.props.brewery.currentUserLikes.id).then(() => this.props.removeUserLike(id))}>
          <i className="fa fa-times" aria-hidden="true"></i>
          <div className="like-dropdown">
            Unlike
          </div>
        </div>
      );
    } else {
      return (
        <div className="like-button-container" onClick={() => this.props.addBreweryLike(this.props.brewery.id).then(() => this.props.addUserLike(this.props.brewery))}>
          <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
          <div className="like-dropdown">
            Like
          </div>
        </div>
      );
    }
  }
}

export default AddLike;
