import React from 'react';


const CommentsIndexItem = (props) => {
  return (
    <div className="comment-item-wrapper">
      <div className="comment-avatar">
        pic
      </div>
      <div className="comments-right">
        <div className="comments-body">
          jason: whofldshf
        </div>
        <div className='comments-footer'>
          <span>hour ago</span>
          <span>edit</span>
          <span>delete</span>
        </div>
      </div>
    </div>
  );
};

class CommentsIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="comments-index-wrapper">
        <CommentsIndexItem />
      </div>
    );
  }
};

export default CommentsIndex
