import React from 'react';

export const BreweryLikeItem = (props) => {
  // debugger
  const brewery = props.brewery || props.beer.brewery;
  const sliced = brewery.name.length > 21 ? brewery.name.slice(0, 21) + "..." : brewery.name
  return(
    <div className="top-beers-item">
      <div>
        <img src="/images/chocolate.png"/>
      </div>
      <div>
        <div className="brewery-like-items">
          {sliced}
        </div>
      </div>
    </div>
  );
};
