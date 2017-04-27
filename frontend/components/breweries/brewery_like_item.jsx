import React from 'react';
import { Link } from 'react-router';

export const BreweryLikeItem = (props) => {
  // debugger
  const brewery = props.brewery || props.beer.brewery;
  const sliced = brewery.name.length > 21 ? brewery.name.slice(0, 21) + "..." : brewery.name
  return(
    <div className="top-beers-item">
      <div>
        <img src={props.brewery.image_url}/>
      </div>
      <div>
        <div className="brewery-like-items">
          <Link to={`/breweries/${props.brewery.id}`}>{sliced}</Link>
        </div>
      </div>
    </div>
  );
};
