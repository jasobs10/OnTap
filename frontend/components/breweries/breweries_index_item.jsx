import React from 'react';
import { Line } from 'rc-progress';
var Rating = require('react-rating');

const LineRating = ({ average }) => {
  if (average) {
    const rate = average;
    let color;
    if (rate >= 4) {
      color = "#48b20a";
    } else if (rate >= 2 && rate < 4) {
      color = "rgb(205, 183, 35)";
    } else {
      color = "rgb(244, 96, 96)";
    }
    const ratingPercentage = (average / 5 *  100).toString();
    return(
      <span className="line-flex"><Rating
                     initialRate={average}
                     readonly
                     empty="fa fa-circle-thin fa-1x empty"
                     full="fa fa-circle fa-1x overall-full"
                     className="overall-icon"
                     /></span>
    );
  }
  // <span className="line-flex"><Line percent={ratingPercentage} strokeWidth="10" strokeColor={`${color}`} trailColor="#8e8c8d" trailWidth="10" className="rating-bar"/> ({average})</span>
  // <span className="line-flex"><i className="fa fa-beer flip" aria-hidden="true"></i></span>

  return(
    <span>
      "NO REVIEWS"
    </span>
  )

}


class BreweriesIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const score = this.props.brewery.average ? this.props.brewery.average : "NO REVIEWS";
    return (
      <div className="brewery-index-item">
        <div className="brewery-text-container">
          <div className='brewery-pic'>
            <img src="/images/beers.jpg"/>
          </div>
          <div className="brewery-display">
            <li className="brewery-name">
              {this.props.brewery.name}
            </li>
            <li className="beer-style brewery-loc">
              {this.props.brewery.city},&nbsp;{this.props.brewery.state}<br />{this.props.brewery.country}
            </li>
          </div>

        </div>
        <div className="brewery-info">
          <div className="brewery-ratings">
            <section className="brew-border">
              {this.props.brewery.beers} Beers
            </section>
            <section className="brew-section">
              {this.props.brewery.ratings} ratings
            </section>
          </div>
          <div className="brewery-right-bottom">
            <LineRating average={this.props.brewery.average}/>
          </div>
        </div>

      </div>
    )
  }
}
// <LineRating average={this.props.brewery.average}/>

export default BreweriesIndexItem;
