import React from "react";

const MobileMenu = () => (
  <div className="app-header__mobile-menu">
    <div>
      <button
        type="button"
        className="hamburger hamburger--elastic mobile-toggle-nav"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </div>
  </div>
);

export default MobileMenu;
