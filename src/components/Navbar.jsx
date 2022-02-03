import React from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import {ReactComponent as OfferIcon} from "../assets/svg/localOfferIcon.svg";
import {ReactComponent as ExploreIcon} from "../assets/svg/exploreIcon.svg";
import {ReactComponent as PersonOutlineIcon} from "../assets/svg/personOutlineIcon.svg";


function Navbar(props) {
  const iconStyle = {fill: "#2c2c2c", height: "36px", width: "36px"};
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) return true;
  };

  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className={"navbarListItem"} onClick={() => navigate("/")}>
            <ExploreIcon className={`navIcon ${pathMatchRoute('/') && "activeNavIcon"}`}/>
            <p className={pathMatchRoute('/') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Explore</p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/offers")}>
            <OfferIcon
              className={`navIcon ${pathMatchRoute('/offers') && "activeNavIcon"}`}/>
            <p className={pathMatchRoute('/offers') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Offer</p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/profile")}>
            <PersonOutlineIcon
              className={`navIcon ${pathMatchRoute('/profile') && "activeNavIcon"}`}/>
            <p className={pathMatchRoute('/profile') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Profile</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Navbar;