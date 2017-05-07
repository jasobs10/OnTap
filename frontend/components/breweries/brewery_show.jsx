import React from 'react';
import CheckinIndex from '../checkin/checkin_index';
import { connect } from 'react-redux';
import { fetchBreweryCheckins } from '../../reducers/checkins_redux';
import { requestBrewery, addBreweryLike, removeBreweryLike } from '../../reducers/breweries_redux';
import { removeUserLike, addUserLike } from '../../reducers/session_redux';
import BreweriesIndexItem from './breweries_index_item';
import BreweryHeader from './brewery_header';
import { Spinner } from '../shared/spinner';

const mapStateToProps = (state, ownProps) => {
  return {
    checkins: state.checkins,
    brewery: state.breweries[ownProps.params.breweryId],
    currentUser: state.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBreweryCheckins: (brewery_id) => dispatch(fetchBreweryCheckins(brewery_id)),
    addBreweryLike: (brewery_id) => dispatch(addBreweryLike(brewery_id)),
    removeBreweryLike: (id) => dispatch(removeBreweryLike(id)),
    addUserLike: (brewery) => dispatch(addUserLike(brewery)),
    removeUserLike: (id) => dispatch(removeUserLike(id)),
    fetchBrewery: (id) => dispatch(requestBrewery(id))

  }
}

class BreweryShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.params.breweryId !== this.props.params.breweryId) {
      this.props.fetchBrewery(newProps.params.breweryId);
      this.props.fetchBreweryCheckins(newProps.params.breweryId);
    }
  }

  componentWillMount() {
    this.props.fetchBrewery(this.props.params.breweryId)
    this.props.fetchBreweryCheckins(this.props.params.breweryId);
  }


  render() {
    if (this.props.brewery === undefined) {
      return (<Spinner />)
    }
    return (
      <div>
        <div className="beers-wrapper">
          <div className="beer-show-header brewery-show-header">

            <BreweryHeader
              brewery={this.props.brewery}
              addBreweryLike={this.props.addBreweryLike}
              removeBreweryLike={this.props.removeBreweryLike}
              addUserLike={this.props.addUserLike}
              removeUserLike={this.props.removeUserLike}
              />
          </div>

        </div>

        <CheckinIndex breweryCheckins={this.props.checkins}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BreweryShow);
