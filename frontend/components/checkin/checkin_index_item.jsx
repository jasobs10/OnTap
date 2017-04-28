import React from 'react';
import { Line } from 'rc-progress';
import { Link } from 'react-router';
// import { WishlistBeerItem } from '../beers/beers';
var Rating = require('react-rating');
import CommentForm from './comments_form';
import Modal from '../modal/modal';
import CommentsIndex from './comments';
import EditCommentForm from './edit_comments_form';
import TimeAgo from 'timeago-react';
import { CheckinImage } from './checkin_img';
// import ReactTimeAgo from 'react-time-ago';
// import { receiveComponent, activateModal } from '../../reducers/modal_redux'

const ToastButton = (props) => {
  //
  let toastId;
  if (props.checkin.currentUserToast) {
    //
    toastId = props.checkin.currentUserToast.id
  }

  const userId = props.currentUser ? props.currentUser.id : ""

    if (toastId) {
      return (
        <button onClick={() => props.deleteToast(toastId)} className="checkin-button unlike-button"><i className="fa fa-beer" aria-hidden="true"></i>&nbsp;&nbsp;Untoast</button>
      );
    }
    return (
        <button className="checkin-button" onClick={() => props.createToast(props.checkin.id)}><i className="fa fa-beer" aria-hidden="true"></i>&nbsp;&nbsp;Toast</button>
    );

};

const ToastLikes = (props) => {
  //
  if ((Object.keys(props.checkins.toastUsers).length) > 0) {
    return (
      <div className="like-count">
        {Object.keys(props.checkins.toastUsers).length}&nbsp;<i className="fa fa-beer beer-icon-footer" aria-hidden="true"></i>
      </div>
    );
  } else {
    return <div></div>
  }
}


class CheckinIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    //
    this.state = {likes: this.props.checkins.toastCount}
  }

  handleClick(component) {
    //
    return (e) => {
      this.props.receiveComponent(component);
      this.props.activateModal(true);
    };
  }

  handleImage() {
    if (this.props.checkins.image_url === "/assets/default.jpg") {
      return "";
    }
    return(
      <div className="checkin-image" onClick={this.handleClick(<CheckinImage image_url={this.props.checkins.image_url}/>)}>
        <img src={this.props.checkins.image_url} alt=""/>
      </div>
    );
  }

  render() {
    //
    const toastCount = this.props.checkins.toastUsers ? <ToastLikes checkins={this.props.checkins}/> : "";
    // debugger
    const lastName = this.props.checkins.user.l_name.slice(0,1) + ".";
    const rate = this.props.checkins.rating;
    let color;
    if (rate >= 4) {
      color = "#48b20a";
    } else if (rate >= 2 && rate < 4) {
      color = "rgb(205, 183, 35)";
    } else {
      color = "rgb(244, 96, 96)";
    }
    const ratingPercentage = (this.props.checkins.rating / 5 * 100).toString();
    // debugger
    return(
      <div className="beer-item-wrapper checkin-border">

        <div className="beer-item-main">
          <div className="checkin-avatar">
            <div>
              <img className="round-avatar" src={this.props.checkins.user_image_url}/>
            </div>
          </div>
          <div className="checkin-content">
            <div className="checkin-header">
              <span><Link to={`/users/${this.props.checkins.user.id}`}>{this.props.checkins.user.f_name} {lastName}</Link></span>is drinking a <span><Link to={`/beers/${this.props.checkins.beer_id}`}>{this.props.checkins.beer}</Link></span> by <span><Link to={`/breweries/${this.props.checkins.brewery_id}`}>{this.props.checkins.brewery}</Link></span>
            </div>
            <div className="checkin-review">
              <div className="arrow">

              </div>
              <div>
                <div className="ratings-container">
                  <div className="review">
                    {this.props.checkins.review}
                  </div>
                  <div className="bar">
                    <span className="avg-text"><Rating
                                   initialRate={this.props.checkins.rating}
                                   readonly
                                   empty="fa fa-circle-thin fa-1x empty"
                                   full="fa fa-circle fa-1x overall-full"
                                   className="rating-stars"
                                   />&nbsp;({this.props.checkins.rating})</span>

                  </div>

                </div>
              </div>
            </div>
            {this.handleImage()}
            <div className="checkin-buttons">

                <button className="checkin-button" onClick={this.handleClick(<CommentForm updateComment={this.props.updateComment} currentUser={this.props.currentUser} activateModal={this.props.activateModal} addComment={this.props.addComment} deleteComment={this.props.deleteComment} checkins={this.props.checkins}/>)}><i className="fa fa-comment-o" aria-hidden="true"></i>&nbsp;&nbsp;Comment</button>
                <ToastButton currentUser={this.props.currentUser} checkin={this.props.checkins} deleteToast={this.props.deleteToast} createToast={this.props.createToast}/>

            </div>

            <div className="checkin-footer-wrapper">
              <span className="checkin-footer"><TimeAgo datetime={this.props.checkins.created_at}/></span>
              {toastCount}
            </div>

            <CommentsIndex updateComment={this.props.updateComment} activateModal={this.props.activateModal} receiveComponent={this.props.receiveComponent} checkin={this.props.checkins} deleteComment={this.props.deleteComment} currentUser={this.props.currentUser}/>
          </div>
          <div className="checkin-beer-avatar">
            <div>
              <img src={this.props.checkins.beer_image_url}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckinIndexItem
