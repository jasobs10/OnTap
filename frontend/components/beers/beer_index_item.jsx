import React from 'react';

class BeerIndexItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    // debugger
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
                Brewery name
              </div>
              <div className="beer-style">
                {this.props.beer.style}
              </div>
              <div className="beer-description">
                {this.props.beer.description}
              </div>
            </div>
            <div className="col-3">
              wish
            </div>
          </div>
          <div className="beer-item-bottom">
            <div className="bottom-left">
              ABV
            </div>
            <div className="bottom-left">
              IBU
            </div>
            <div className="beer-rating">
              RATING
            </div>
            <div className="bottom-right">
              RATINGS
            </div>
            <div className="bottom-right">
              DATE
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BeerIndexItem;
