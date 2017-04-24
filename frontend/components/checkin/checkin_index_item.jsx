import React from 'react';
import { Line } from 'rc-progress';

class CheckinIndexItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    // debugger
    const lastName = this.props.checkins.user.l_name.slice(0,1) + ".";
    const ratingPercentage = (this.props.checkins.rating / 5 * 100).toString();
    return(
      <div className="beer-item-wrapper">

        <div className="beer-item-main">
          <div className="checkin-avatar">
            sdfsd
          </div>
          <div className="checkin-content">
            <div className="checkin-header">
              {this.props.checkins.user.f_name} {lastName} is drinking a {this.props.checkins.beer} by {this.props.checkins.brewery}
            </div>
            <div className="checkin-review">
              <div>
                <div className="ratings-container">
                  <div className="review">
                    {this.props.checkins.review}
                  </div>
                  <div className="bar">
                    <span className="line-style"><Line percent={ratingPercentage} strokeWidth="12" strokeColor="#ffad0d" trailColor="#8e8c8d" trailWidth="11" className="rating-bar"/> ({this.props.checkins.rating})</span>
                  
                  </div>

                </div>
              </div>
            </div>
            <div className="checkin-image">
              <img src="/images/tired-hands.jpg" alt="tired-hands-beer"/>
            </div>
            <div className="checkin-footer">
              2 hours ago &nbsp;&nbsp;&nbsp;&nbsp; View detailed check-in
            </div>
          </div>
          <div className="checkin-beer-avatar">
            sdfd
          </div>
        </div>
      </div>
    );
  }
}

export default CheckinIndexItem
