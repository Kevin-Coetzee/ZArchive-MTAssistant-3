import React from "react";

const HeaderLogo = () => (
  <div className="app-header__logo">
    <a
      class="sidebar-brand d-flex align-items-center justify-content-center"
      href="/"
    >
      <div class="sidebar-brand-icon rotate-n-15">
        <i class="fas fa-house-damage"></i>
      </div>
      <div class="sidebar-brand-text mx-3">
        MT Assist <sup>0.1</sup>
      </div>
    </a>
    <div className="header__pane ml-auto">
      <div>
        <button
          type="button"
          className="hamburger close-sidebar-btn hamburger--elastic"
          data-className="closed-sidebar"
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
