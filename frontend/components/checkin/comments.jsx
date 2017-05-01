import React from 'react';
import { connect } from 'react-redux';
import EditCommentForm from './edit_comments_form';
import TimeAgo from 'timeago-react';


const CommentsIndexItem = (props) => {
  let del;
  let ed;
  if (props.currentUser.id == props.comment.user_id || props.currentUser.id == props.comment.checkin_creator) {
    del = <span className="orange delete-comment" onClick={() => props.deleteComment(props.comment.id)}>delete</span>;
    ed = <span onClick={() => {
      props.receiveComponent(<EditCommentForm updateComment={props.updateComment} activateModal={props.activateModal} comment={props.comment}/>);
      props.activateModal(true);
      }} className="orange delete-comment">edit</span>;
  } else {
    del= "";
    ed = "";
  }
  return (
    <div className="comment-item-wrapper">
      <div className="comment-avatar">
        <img src={props.comment.user_image_url}/>
      </div>
      <div className="comments-right">
        <div className="comments-body">
          <span className="orange">{props.comment.author_f_name} {props.comment.author_l_name}</span>: {props.comment.comment}
        </div>
        <div className='comments-footer'>
          <span><TimeAgo datetime={props.comment.created_at}/></span>
          { ed }
          { del }
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
    const comments = this.props.checkin.comments ? Object.values(this.props.checkin.comments).map((comment) => <CommentsIndexItem receiveComponent={this.props.receiveComponent} activateModal={this.props.activateModal} updateComment={this.props.updateComment} currentUser={this.props.currentUser} key={comment.id} comment={comment} deleteComment={this.props.deleteComment}/>).reverse() : "";
    return (
      <div className="comments-index-wrapper">
        {comments}
      </div>
    );
  }
};

export default CommentsIndex
