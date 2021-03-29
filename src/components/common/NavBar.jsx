import React from "react";

const NavBar = () => {
  return (
    <div className="mb-5">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-brand" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#00BFFF"
              className="bi bi-graph-up mr-1"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M0 0h1v15h15v1H0V0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5z"
              />
            </svg>
            Focus Trader
          </div>
          <div
            className="navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav nav-tabs me-auto mb-2 mb-lg-0 ml-2 ">
              <a className="nav-item nav-link" href="/">
                Home
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
