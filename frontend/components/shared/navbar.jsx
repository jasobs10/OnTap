import React from 'react';
import { hashHistory } from 'react-router';

export const Navbar = (props) => {
  return (
    <div className="nav-container">
      <div className="nav-inside">

        <li className="titlelogo">
          <i className="fa fa-beer" aria-hidden="true"></i> ONTAP
        </li>
        <li>
          Top beers
        </li>
        <li>
          Breweries
        </li>
        <li className="account-button">
          Account
          <div className="dropdown">
            <li>
              My profile
            </li>
            <li>
              Beer history
            </li>
            <li>
              settings
            </li>
            <li>
              Wish list
            </li>
            <li>
              Log out
            </li>
          </div>
        </li>
        <li>
          Log Out

        </li>
      </div>
    </div>
  );
};
