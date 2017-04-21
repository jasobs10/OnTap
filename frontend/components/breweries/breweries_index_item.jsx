import React from 'react';

class BreweriesIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
            <li className="beer-style">
              {this.props.brewery.country}
            </li>
          </div>

        </div>
        <div className="brewery-info">
          <div className="brewery-ratings">
            <section className="brew-border">
              25 Beers
            </section>
            <section className="brew-section">
              278 ratings
            </section>
          </div>
          <div className="brewery-right-bottom">
            RATING
          </div>
        </div>

      </div>
    )
  }
}

export default BreweriesIndexItem;
