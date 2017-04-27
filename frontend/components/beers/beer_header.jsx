import React from 'react';
// import ReactStars from 'react-stars'
import { Link, hashHistory } from 'react-router';
import { Line } from 'rc-progress';
import WishlistAdd from '../wishlist/wishlist_add';
var Rating = require('react-rating');
import CheckinForm from '../checkin/checkin_form';

export const LineRating = ({ average }) => {
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
    //
    return(
      <span className="avg-text"><Rating
                     initialRate={averageInt}
                     readonly
                     start={0}
                     stop={5}
                     empty="fa fa-circle-thin fa-1x empty"
                     full="fa fa-circle fa-1x overall-full"
                     className="rating-stars"
                     fractions={2}
                     />&nbsp;({average})</span>
                 )
  }

  return(
    <span>
      "NO REVIEWS"
    </span>
  )
}

class BeerHeader extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    //
  }

  handleClick(e) {
    //
    this.props.receiveComponent(<CheckinForm
      beer={this.props.beer}
      createCheckin={this.props.createCheckin}
      activateModal={this.props.activateModal}
      createPhotoCheckin={this.props.createPhotoCheckin}/>);
    this.props.activateModal(true);

  };


  render() {
    //
    const ratingPercentage = (this.props.beer.average / 5 *  100).toString();


    return (
      <div className="beer-item-wrapper">

        <div className="beer-item-container">
          <div className="beer-item-main">
            <div className="col-1">
              <div className="img-container">
                <img src={this.props.beer.image_url}/>
              </div>

            </div>
            <div className="col-2 beer-show-color">
              <div className="beer-name beer-showpage-name">
                <Link to={`/beers/${this.props.beer.id}`}>{this.props.beer.name}</Link>
              </div>
              <div className="brewery-name beer-showpage-brewery">
                {this.props.beer.brewery.name}
              </div>
              <div className="beer-style beer-showpage-style">
                {this.props.beer.style}
              </div>
              <div className="beer-description beer-showpage-description">
                {this.props.beer.description}
              </div>
            </div>
            <div className="col-3">
              <div className="wish-add" onClick={this.handleClick}>
                ✔
                <div className="wishlist-dropdown">
                  Checkin Beer
                </div>
              </div>
              <WishlistAdd key={this.props.beer.id}
                addBeerToWishlist={this.props.addBeerToWishlist}
                removeBeerFromWishlist={this.props.removeBeerFromWishlist}
                beer={this.props.beer}
                removeCurrentUserWishlist={this.props.removeCurrentUserWishlist}
                addCurrentUserWishlist={this.props.addCurrentUserWishlist}/>
            </div>
          </div>
          <div className="beer-item-bottom beer-showpage-bottom">
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

export default BeerHeader;
