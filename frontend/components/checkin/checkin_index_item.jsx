import React from 'react';
import { Line } from 'rc-progress';
// import { WishlistBeerItem } from '../beers/beers';
var Rating = require('react-rating');
import CommentForm from './comments_form';
import Modal from '../modal/modal';
// import { receiveComponent, activateModal } from '../../reducers/modal_redux'

const ToastButton = (props) => {
  // debugger
  let toastId;
  if (props.checkin.currentUserToast) {
    // debugger
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


class CheckinIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(component) {
    return (e) => {
      this.props.receiveComponent(component);
      this.props.activateModal(true);
    };
  }

  render() {
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
    return(
      <div className="beer-item-wrapper checkin-border">
      
        <div className="beer-item-main">
          <div className="checkin-avatar">
            <div>
              <img src="/images/buscemi.jpg"/>
            </div>
          </div>
          <div className="checkin-content">
            <div className="checkin-header">
              {this.props.checkins.user.f_name} {lastName} is drinking a {this.props.checkins.beer} by {this.props.checkins.brewery}
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
            <div className="checkin-image">
              <img src="/images/tired-hands.jpg" alt="tired-hands-beer"/>
            </div>
            <div className="checkin-buttons">

                <button className="checkin-button" onClick={this.handleClick(<CommentForm />)}><i className="fa fa-comment-o" aria-hidden="true"></i>&nbsp;&nbsp;Comment</button>
                <ToastButton currentUser={this.props.currentUser} checkin={this.props.checkins} deleteToast={this.props.deleteToast} createToast={this.props.createToast}/>

            </div>

            <div className="checkin-footer">
              2 hours ago &nbsp;&nbsp;&nbsp;&nbsp; View detailed check-in
            </div>
          </div>
          <div className="checkin-beer-avatar">
            <div>
              <img src="/images/street-green.jpg"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckinIndexItem
