import React from 'react';

export const BreweryLikeItem = (props) => {
  // debugger
  const brewery = props.brewery || props.beer.brewery;
  const sliced = props.brewery.name.length > 17 ? props.brewery.name.slice(0, 17) + "..." : props.brewery.name
  return(
    <div className="top-beers-item">
      <div>
        <img src="/images/chocolate.png"/>
      </div>
      <div>
        <div className="wishlist-beer">
          {brewery.name}
        </div>
      </div>
    </div>
  );
};
