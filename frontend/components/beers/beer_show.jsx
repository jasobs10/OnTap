import React from 'react';
import { connect } from 'react-redux';
import { requestBeer } from '../../reducers/beers_redux';
import { fetchBeerCheckins } from '../../reducers/beer_redux';

const mapStateToProps = (state, ownProps) => {
  return ({
    beer: state.beers[ownProps.params.beerId]
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    fetchBeer: (id) => dispatch(requestBeer(id)),
    fetchBeerCheckins: (beer_id) => dispatch(fetchBeerCheckins(beer_id))
  });
};


class BeerShow extends React.Component {
  constructor(props) {
    super(props);
    // debugger
  }
  componentDidMount() {
    // debugger
    this.props.fetchBeer(this.props.params.beerId)
    this.props.fetchBeerCheckins(this.props.params.beerId);
  }

  // componentWillReceiveProps(nextProps) {
  //   this.props.fetchBeer(nextProps.params.beerId);
  //   this.props.fetchBeerCheckins(nextProps.params.beerId);
  // }


  render() {
    return (
      <div className="beers-wrapper">
        <div className="beers-index">
          <div className="beers-feed">
            <div className="beer-header">
              <div className="beer-item-wrapper">

                <div className="beer-item-container">
                  <div className="beer-item-main beer-show-main">
                    <div className="col-1 col-1-beer-show">
                      <div className="img-container beers-show-img">
                        <img src="/images/beers.jpg"/>
                      </div>

                    </div>
                    <div className="col-2 col-2-beer-show">
                      <div className="beer-name beer-show-name">
                        beer name
                      </div>
                      <div className="brewery-name beer-show-brewery">
                        bsdsfsf
                      </div>
                      <div className="beer-style beer-show-style">
                        sfdsf
                      </div>

                    </div>
                    <div className="col-3 stats-container">
                      <div className="stats-col-1">
                        <div>
                          <div>sd</div>
                        </div>
                        <div>
                          <div>sdf</div>
                        </div>
                      </div>
                      <div className="stats-col-2">
                        <div>
                          <div>sdf</div>
                        </div>
                        <div>
                          <div>sdf</div>
                        </div>
                      </div>
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
                      sfsdf
                    </div>
                    <div className="bottom-right-first">
                     RATINGS
                    </div>
                    <div className="bottom-right">
                      ADDED
                    </div>
                  </div>
                  <div className="beer-description beer-show-end">
                    <div>
                      sdfsdff
                    </div>
                    <div>
                      like buttons
                    </div>
                  </div>
                  <div className="beer-show-pictures">
                    dgfdfg
                  </div>
                </div>
              </div>
            </div>
            <hr className="orange-line"/>


            itemsstyling

          </div>
          <div className="side-bars">

            <div className="top-beers">
              <div className="header-side">
                <h1 className="beers-index-title">My Wishlist</h1>
              </div>
              <hr className="orange-line"/>
              wishliststyling
            </div>
            <div className="top-beers">
              <div className="header-side">
                <h1 className="beers-index-title">My Likes</h1>
              </div>
              <hr className="orange-line"/>
              likes styling
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerShow);
