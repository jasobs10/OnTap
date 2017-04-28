import React from 'react';
import { Line } from 'rc-progress';
var Rating = require('react-rating');
import AddLike from './add-like.jsx';
import { Link } from 'react-router';


const LineRating = ({ average }) => {
  // debugger
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
    let averageInt = parseFloat(average) - 0.3;
    return(
      <span><Rating
                     initialRate={averageInt}
                     readonly
                     empty="fa fa-circle-thin fa-1x empty"
                     full="fa fa-circle fa-1x overall-full"
                     className="rating-stars"
                     fractions={4}
                     />&nbsp;({average})</span>
    );
  }
  // <span className="line-flex"><Line percent={ratingPercentage} strokeWidth="10" strokeColor={`${color}`} trailColor="#8e8c8d" trailWidth="10" className="rating-bar"/> ({average})</span>
  // <span className="line-flex"><i className="fa fa-beer flip" aria-hidden="true"></i></span>

  return(
    <span>
      NO REVIEWS
    </span>
  )

}


class BreweriesIndexItem extends React.Component {
  constructor(props) {
    super(props);
    // debugger
  }

  render() {
    // const score = this.props.brewery.average ? this.props.brewery.average : "NO REVIEWS";
    // debugger
    return (
      <div className="brewery-index-item">

        <AddLike key={this.props.brewery.id} brewery={this.props.brewery} addBreweryLike={this.props.addBreweryLike} removeBreweryLike={this.props.removeBreweryLike} addUserLike={this.props.addUserLike} removeUserLike={this.props.removeUserLike}/>

        <div className="brewery-text-container">
          <div className='brewery-pic'>
            <img src={this.props.brewery.image_url}/>
          </div>
          <div className="brewery-display">
            <li className="brewery-name">
              <Link to={`/breweries/${this.props.brewery.id}`}>{this.props.brewery.name}</Link>
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
