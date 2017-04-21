import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { requestBeers } from '../../reducers/beers_redux'
import BeerIndexItem from './beer_index_item';

const mapStateToProps = (state) => {

  return {
    currentUser: state.currentUser,
    beers: state.beers
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestBeers: () => dispatch(requestBeers())

  }
};

class Beers extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    this.state = {beers: this.props.beers}
  }

  componentDidMount() {
    this.props.requestBeers();
  }

  render () {
    // debugger
    const items = this.props.beers.map((beer) => <BeerIndexItem key={beer.id} beer={beer}/>)
    // debugger
    return (
      <div className="beers-wrapper">
        <div className="beers-index">
          <div className="beers-feed">
            {items}

          </div>
          <div className="side-bars">

            <div className="top-beers">

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Beers);
