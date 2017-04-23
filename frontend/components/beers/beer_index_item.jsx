import React from 'react';
// import ReactStars from 'react-stars'
import { Line } from 'rc-progress';
import WishlistAdd from '../wishlist/wishlist_add.jsx';

const LineRating = ({ average }) => {
  if (average) {
    const ratingPercentage = (average / 5 *  100).toString();
    return(
      <span><Line percent={ratingPercentage} strokeWidth="10" strokeColor="#ffad0d" trailColor="#8e8c8d" trailWidth="10" className="rating-bar"/> ({average})</span>
    );
  }

  return(
    <span>
      "NO REVIEWS"
    </span>
  )
}

class BeerIndexItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    // debugger
    const ratingPercentage = (this.props.beer.average / 5 *  100).toString();
    if (this.props.sideItem) {
      return (
        <div className="top-beers-item">
          <div>
            <img src="/images/chocolate.png"/>
          </div>
          <div>
            <div className="beer-name">
              {this.props.beer.name}
            </div>
            <div className="brewery-name">
              {this.props.beer.brewery.name}
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="beer-item-wrapper">

        <div className="beer-item-container">
          <div className="beer-item-main">
            <div className="col-1">
              <div className="img-container">
                <img src="/images/beers.jpg"/>
              </div>

            </div>
            <div className="col-2">
              <div className="beer-name">
                {this.props.beer.name}
              </div>
              <div className="brewery-name">
                {this.props.beer.brewery.name}
              </div>
              <div className="beer-style">
                {this.props.beer.style}
              </div>
              <div className="beer-description">
                {this.props.beer.description}
              </div>
            </div>
            <div className="col-3">
              <WishlistAdd key={this.props.beer.id} addBeerToWishlist={this.props.addBeerToWishlist} removeBeerFromWishlist={this.props.removeBeerFromWishlist} beer={this.props.beer}/>
            </div>
          </div>
          <div className="beer-item-bottom">
            <div className="bottom-left">
              {this.props.beer.abv}% ABV
            </div>
            <div className="bottom-left">
              {this.props.beer.ibu} IBU
            </div>
            <div className="beer-rating">
              <LineRating average={this.props.beer.average}/>
            </div>
            <div className="bottom-right-first">
              {this.props.beer.checkins} RATINGS
            </div>
            <div className="bottom-right">
              ADDED {this.props.beer.date_added}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// {score} AVERAGE
// <div className="top-star">
//   <div className="ratings-top"></div>
//   <div className="ratings-bottom"></div>
// </div>

export default BeerIndexItem;
