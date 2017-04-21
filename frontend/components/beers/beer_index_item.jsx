import React from 'react';

class BeerIndexItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    // debugger
    const score = this.props.beer.average ? this.props.beer.average : "NO REVIEWS";
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
              <div className="wish-add">
                +
                <div className="wishlist-dropdown">
                  Add to Wishlist
                </div>
              </div>
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
              {score}
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
