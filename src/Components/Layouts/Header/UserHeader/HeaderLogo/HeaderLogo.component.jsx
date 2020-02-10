import React from "react";

const HeaderLogo = () => (
  <div className="app-header__logo">
    <a
      className="sidebar-brand d-flex align-items-center justify-content-center"
      href="/"
    >
      <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-house-damage"></i>
      </div>
      <div className="sidebar-brand-text mx-3">
        MT Assist <sup>0.1</sup>
      </div>
    </a>
    <div className="header__pane ml-auto">
      <div>
        <button
          type="button"
          className="hamburger close-sidebar-btn hamburger--elastic"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </div>
  </div>
);

export default HeaderLogo;
