import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {counter: 140}
  }

  render() {
    return (
      <div className="comment-wrapper">
        <div className="comment-header">
          Leave a Comment
        </div>
        <form>
          <textarea className="comment-input">

          </textarea>
          <div className="comment-bottom">
            <div>
              140 left
            </div>
            <div className="comment-button">
              Post
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CommentForm;
