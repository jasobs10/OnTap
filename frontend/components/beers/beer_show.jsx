import React from 'react';
import { connect } from 'react-redux';
import { requestBeer } from '../../reducers/beers_redux';
import { fetchBeerCheckins, addBeerToWishlist, removeBeerFromWishlist } from '../../reducers/beer_redux';
import { addCurrentUserWishlist, removeCurrentUserWishlist } from '../../reducers/session_redux';
var Rating = require('react-rating');
import { LineRating } from './beer_index_item';
import WishlistAdd from '../wishlist/wishlist_add';
import CheckinIndexItem from '../checkin/checkin_index_item';
import CheckinIndex from '../checkin/checkin_index';
import BeerIndexItem from './beer_index_item';
import BeerHeader from './beer_header';
import { receiveComponent, activateModal } from '../../reducers/modal_redux';
import { createCheckin } from '../../reducers/checkins_redux'

const mapStateToProps = (state, ownProps) => {
  // debugger
  return ({
    beer: state.beers[ownProps.params.beerId],
    currentUser: state.currentUser,
    beerCheckins: state.beerCheckins
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    fetchBeer: (id) => dispatch(requestBeer(id)),
    fetchBeerCheckins: (beer_id) => dispatch(fetchBeerCheckins(beer_id)),
    addBeerToWishlist: (beerId) => dispatch(addBeerToWishlist(beerId)),
    removeBeerFromWishlist: (id) => dispatch(removeBeerFromWishlist(id)),
    addCurrentUserWishlist: (beer) => dispatch(addCurrentUserWishlist(beer)),
    removeCurrentUserWishlist: (beer) => dispatch(removeCurrentUserWishlist(beer)),
    receiveComponent: (component) => dispatch(receiveComponent(component)),
    activateModal: (bool) => dispatch(activateModal(bool)),
    createCheckin: (checkin) => dispatch(createCheckin(checkin))

  });
};


class BeerShow extends React.Component {
  constructor(props) {
    super(props);
    // debugger
  }
  componentWillMount() {
    // debugger
    this.props.fetchBeer(this.props.params.beerId)
    this.props.fetchBeerCheckins(this.props.params.beerId);
  }

  // componentWillReceiveProps(nextProps) {
  //   this.props.fetchBeer(nextProps.params.beerId);
  //   this.props.fetchBeerCheckins(nextProps.params.beerId);
  // }


  render() {
    if (this.props.beer === undefined) {
      return (<div></div>)
    }
    // debugger
    return (
      <div>
        <div className="beers-wrapper">
          <div className="beer-show-header">
            <BeerHeader
              beer={this.props.beer}
              addBeerToWishlist={this.props.addBeerToWishlist}
              removeBeerFromWishlist={this.props.removeBeerFromWishlist}
              addCurrentUserWishlist={this.props.addCurrentUserWishlist}
              removeCurrentUserWishlist={this.props.removeCurrentUserWishlist}
              receiveComponent={this.props.receiveComponent}
              activateModal={this.props.activateModal}
              createCheckin={this.props.createCheckin}/>
          </div>
        </div>

        <CheckinIndex beerCheckins={this.props.beerCheckins}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerShow);
// <div className="beers-wrapper">
  // <div className="beers-index">
  //   <div className="beers-feed">
  //     <div className="beer-header">
  //       <div className="beer-item-wrapper">
  //
  //         <div className="beer-item-container">
  //           <div className="beer-item-main beer-show-main">
  //             <div className="col-1 col-1-beer-show">
  //               <div className="img-container beers-show-img">
  //                 <img src="/images/beers.jpg"/>
  //               </div>
  //
  //             </div>
  //             <div className="col-2 col-2-beer-show">
  //               <div className="beer-name beer-show-name">
  //                 {this.props.beer.name}
  //               </div>
  //               <div className="brewery-name beer-show-brewery">
  //                 {this.props.beer.brewery.name}
  //               </div>
  //               <div className="beer-style beer-show-style">
  //                 {this.props.beer.style}
  //               </div>
  //
  //             </div>
  //             <div className="col-3 stats-container">
  //               <div className="stats-col-1">
  //                 <div>
  //                   <div>sd</div>
  //                 </div>
  //                 <div>
  //                   <div>sdfd</div>
  //                 </div>
  //               </div>
  //               <div className="stats-col-2">
  //                 <div>
  //                   <div>sdf</div>
  //                 </div>
  //                 <div>
  //                   <div>sdf</div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="beer-item-bottom">
  //             <div className="bottom-left">
  //               {this.props.beer.abv}
  //             </div>
  //             <div className="bottom-left">
  //               {this.props.beer.ibu}
  //             </div>
  //             <div className="beer-rating">
  //               <LineRating average={this.props.beer.average}/>
  //             </div>
  //             <div className="bottom-right-first">
  //               {this.props.beer.checkins} RATINGS
  //             </div>
  //             <div className="bottom-right">
  //               ADDED {this.props.beer.date_added}
  //             </div>
  //           </div>
  //           <div className="beer-description beer-show-end">
  //             <div>
  //               sdfsdff
  //             </div>
  //             <div className="beer-show-buttons">
  //               <div>
  //                 <WishlistAdd key={this.props.beer.id}
  //                   addBeerToWishlist={this.props.addBeerToWishlist}
  //                   removeBeerFromWishlist={this.props.removeBeerFromWishlist} beer={this.props.beer}
  //                   removeCurrentUserWishlist={this.props.removeCurrentUserWishlist}
  //                   addCurrentUserWishlist={this.props.addCurrentUserWishlist}/>
  //               </div>
  //               <div>
  //
  //               </div>
  //             </div>
  //           </div>
  //           <div className="beer-show-pictures">
  //             dgfdfg
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <hr className="orange-line"/>
  //
  //
  //     <CheckinIndex beerCheckins={this.props.beerCheckins}/>
  //
  //   </div>
  // </div>
// </div>





// <div className="side-bars">
//
//   <div className="top-beers">
//     <div className="header-side">
//       <h1 className="beers-index-title">My Wishlist</h1>
//     </div>
//     <hr className="orange-line"/>
//     wishliststyling
//   </div>
//   <div className="top-beers">
//     <div className="header-side">
//       <h1 className="beers-index-title">My Likes</h1>
//     </div>
//     <hr className="orange-line"/>
//     likes styling
//   </div>
// </div>
