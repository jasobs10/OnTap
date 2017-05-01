import React from 'react';

export const CheckinImage = (props) => {
  return (
    <div className="img-popout">
      <img src={props.image_url} alt="beer"/>
    </div>
  )
};
