import React from 'react';
// import ReactStars from 'react-stars'
import { Link, hashHistory } from 'react-router';
import { Line } from 'rc-progress';
import WishlistAdd from '../wishlist/wishlist_add';
var Rating = require('react-rating');
import EditCommentForm from '../checkin/comments_form'
import { Spinner } from '../shared/spinner';
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
    let averageInt = parseFloat(average) - 0.1;
    const rounded = parseFloat(average).toFixed(1);
    return(
      <span className="avg-text"><Rating
                     initialRate={averageInt}
                     readonly
                     empty="fa fa-circle-thin fa-1x empty"
                     full="fa fa-circle fa-1x overall-full"
                     className="rating-stars"
                     fractions={2}
                     />&nbsp;({rounded})</span>
                 )
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
    this.handleClick = this.handleClick.bind(this);
    this.handleCheckin = this.handleCheckin.bind(this);
  }

  handleClick(e) {

      this.props.receiveComponent(<EditCommentForm updateComment={props.updateComment} activateModal={props.activateModal} comment={props.comment}/>);
      this.props.activateModal(true);

  };

  handleCheckin(e) {
    // this.props.receiveComponent(<CheckinForm
    //   beer={this.props.beer}
    //   createCheckin={this.props.createCheckin}
    //   activateModal={this.props.activateModal}
    //   createPhotoCheckin={this.props.createPhotoCheckin}/>);
    //
    // this.props.activateModal(true);

      this.props.receiveComponent(<CheckinForm
        beer={this.props.beer}
        createCheckin={this.props.createCheckin}
        activateModal={this.props.activateModal}
        createPhotoCheckin={this.props.createPhotoCheckin}/>);

      this.props.activateModal(true);

      hashHistory.push('/home')


  }

  render() {
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
            <div className="col-2">
              <div className="beer-name">
                <Link to={`/beers/${this.props.beer.id}`}>{this.props.beer.name}</Link>
              </div>
              <div className="brewery-name">
                <Link to={`/breweries/${this.props.beer.brewery.id}`}>{this.props.beer.brewery.name}</Link>
              </div>
              <div className="beer-style">
                {this.props.beer.style}
              </div>
              <div className="beer-description">
                {this.props.beer.description}
              </div>
            </div>
            <div className="col-3">
              <div className="wish-add" onClick={this.handleCheckin}>
                ✔
                <div className="wishlist-dropdown">
                  Checkin Beer
                </div>
              </div>
              <WishlistAdd
                key={this.props.beer.id}
                addBeerToWishlist={this.props.addBeerToWishlist}
                removeBeerFromWishlist={this.props.removeBeerFromWishlist}
                beer={this.props.beer}
                removeCurrentUserWishlist={this.props.removeCurrentUserWishlist}
                addCurrentUserWishlist={this.props.addCurrentUserWishlist}/>

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

export default BeerIndexItem;
