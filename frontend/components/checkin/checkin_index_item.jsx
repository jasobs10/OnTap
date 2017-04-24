import React from 'react';
import { Line } from 'rc-progress';
// import { WishlistBeerItem } from '../beers/beers';


class CheckinIndexItem extends React.Component {
  constructor(props) {
    super(props);

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
                    <span className="line-style"><Line percent={ratingPercentage} strokeWidth="12" strokeColor={`${color}`} trailColor="#8e8c8d" trailWidth="12" className="rating-bar"/> ({this.props.checkins.rating})</span>

                  </div>

                </div>
              </div>
            </div>
            <div className="checkin-image">
              <img src="/images/tired-hands.jpg" alt="tired-hands-beer"/>
            </div>
            <div className="checkin-buttons">

                <button className="checkin-button"><i className="fa fa-comment-o" aria-hidden="true"></i>&nbsp;&nbsp;Comment</button>


                <button className="checkin-button"><i className="fa fa-beer" aria-hidden="true"></i>&nbsp;&nbsp;Toast</button>

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
