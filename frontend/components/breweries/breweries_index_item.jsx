// import React from 'react';
//
// class BreweriesIndexItem extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     return (
//       <div className="brewery-index-item">
//         <div className="brewery-text-container">
//           <div className='brewery-pic'>
//             <img src="/images/beers.jpg"/>
//           </div>
//           <div className="brewery-display">
//             <li className="brewery-name">
//               {this.props.brewery.name}
//             </li>
//             <li className="beer-style">
//               {this.props.brewery.country}
//             </li>
//           </div>
//
//         </div>
//         <div className="brewery-info">
//           <div className="brewery-ratings">
//             <section className="brew-border">
//               {this.props.brewery.beers.length} Beers
//             </section>
//             <section className="brew-section">
//               278 ratings
//             </section>
//           </div>
//           <div className="brewery-right-bottom">
//             RATING
//           </div>
//         </div>
//
//       </div>
//     )
//   }
// }
//
// export default BreweriesIndexItem;

import React from 'react';

class BreweriesIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const score = this.props.brewery.average ? this.props.brewery.average : "NO REVIEWS";
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
              {this.props.brewery.beers} Beers
            </section>
            <section className="brew-section">
              {this.props.brewery.ratings} ratings
            </section>
          </div>
          <div className="brewery-right-bottom">
            {score}
          </div>
        </div>

      </div>
    )
  }
}

export default BreweriesIndexItem;
