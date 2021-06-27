import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  // we don't need to use dispatch here as we are not pushing anything to the data layer
  const [{basket, user}, dispatch] = useStateValue(); // modified

  const handleAuthentication = () => {
    // logging out user
    if (user) {
      // this will redirect back to the login page !user is not added in while linking to /login page
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        {/* if there is no user, only then do we push to login page ie you won't immdiately go to the login page on signing out*/}
        <Link to={!user && '/login' }>
        <div onClick={handleAuthentication} className="header__option">
  <span className="header__optionLineOne">Hello, {user ? user?.email.split('@')[0] : 'Guest'}</span>
          <span className="header__optionLineTwo">{user ? 'Sign Out': 'Sign In'}</span>
        </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">& Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
    {/* question mark indicates that if there is any reason for error like basket is undefined or anything, it will handle the error*/}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
