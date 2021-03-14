import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Navbar = () => {
  //Access redux from store
  const bag = useSelector((state) => state.bag);
  const { bagItems } = bag;


  return (
    <header>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <h1>
                <span className="nav-logo">
                  <i className="fas fa-plane-departure"></i> G
                </span>
                -Traveler
              </h1>
            </Link>
          </div>
          <ul className="nav-links" id="nav-links">
            <Link to="/bag">
              <li>
                {bagItems.length > 0 && (
                  <span className="badge">{bagItems.length}</span>
                )}
                <i className="fas fa-suitcase-rolling"></i> Bag
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
