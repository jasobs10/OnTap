import React from 'react';
import { Line } from 'rc-progress';
var Rating = require('react-rating');
import AddLike from './add-like.jsx';
import { Link } from 'react-router';


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
    let averageInt = parseFloat(average) - 0.1;
    const rounded = parseFloat(average).toFixed(1);
    return(
      <span><Rating
                     initialRate={averageInt}
                     readonly
                     empty="fa fa-circle-thin fa-1x empty"
                     full="fa fa-circle fa-1x overall-full"
                     className="rating-stars"
                     fractions={4}
                     />&nbsp;({rounded})</span>
    );
  }
  return(
    <span>
      "NO REVIEWS"
    </span>
  )

}


class BreweryHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="brewery-index-item brewery-show-wrapper">


        <div className="brewery-text-container">
          <div className='brewery-pic brewery-show-pic'>
            <img src={this.props.brewery.image_url}/>
          </div>
          <div className="brewery-display">
            <li className="brewery-name brewery-show-name">
              <Link to={`/breweries/${this.props.brewery.id}`}>{this.props.brewery.name}</Link>
            </li>
            <li className="beer-style brewery-loc brewery-show-loc">
              {this.props.brewery.city},&nbsp;{this.props.brewery.state}<br />{this.props.brewery.country}
            </li>
            <li>
              <AddLike
                key={this.props.brewery.id}
                brewery={this.props.brewery}
                addBreweryLike={this.props.addBreweryLike}
                removeBreweryLike={this.props.removeBreweryLike}
                addUserLike={this.props.addUserLike}
                removeUserLike={this.props.removeUserLike}/>
            </li>
          </div>

        </div>
        <div className="brewery-info brewery-show-info">
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

export default BreweryHeader
