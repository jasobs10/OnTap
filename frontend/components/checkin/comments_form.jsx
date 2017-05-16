import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {counter: 0, comment: ""}
    this.handleChange = this.handleChange.bind(this);
    this.backspace = this.backspace.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  backspace(e) {
    if (e.keyCode === 8 && this.state.counter !== 0) {
      this.setState({counter: this.state.counter - 2});
    }
  }

  handleChange(e) {
    if (this.state.counter < 140) {
      this.setState({comment: e.target.value, counter: this.state.counter + 1});
    }
  }

  clearForm() {
    this.setState({counter: 0, comment: ""});
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.addComment({comment: this.state.comment, checkin_id: this.props.checkins.id}).then(() => this.clearForm()).then(() => this.props.activateModal(false));
  }

  render() {
    return (
      <div className="comment-wrapper">
        <div className="comment-header">
          Leave a Comment
        </div>
        <form onSubmit={this.handleSubmit}>
          <textarea required className="comment-input" value={this.state.comment} placeholder="Enter comment..." onChange={this.handleChange} onKeyDown={this.backspace}>

          </textarea>
          <div className="comment-bottom">
            <div className="counter">
              {this.state.counter} / 140
            </div>
            <input type="submit" className="comment-button" value="post"/>
          </div>
        </form>
      </div>
    );
  }
}

export default CommentForm;
