import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { requestBreweries } from '../../reducers/breweries_redux'
import BreweryIndexItem from './breweries_index_item';

const mapStateToProps = (state) => {

  return {
    currentUser: state.currentUser,
    breweries: state.breweries
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestBreweries: () => dispatch(requestBreweries())

  }
};

class BreweriesIndex extends React.Component {
  constructor(props) {
    super(props)
    // debugger
    this.state = {breweries: this.props.breweries}
  }

  componentDidMount() {
    // debugger
    this.props.requestBreweries();
  }

  render() {
    const brewers = this.props.breweries.map((brewery) => {
      return <BreweryIndexItem key={brewery.id} brewery={brewery} />
    });

    return(
      <div className="beers-wrapper">
        <div className="beers-index">
          <div className="beers-feed">
            { brewers }

          </div>
          <div className="side-bars">

            <div className="top-beers">
              <div className="header-side">
                <h1 className="beers-index-title">Trending Beers</h1>
              </div>
              sd
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(BreweriesIndex);
