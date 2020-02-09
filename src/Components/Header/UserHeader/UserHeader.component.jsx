import React from "react";

import HeaderLogo from "../../Header/UserHeader/HeaderLogo/HeaderLogo.component";
import MobileMenu from "../../Header/UserHeader/HeaderMobileMenu/MobileMenu.component";
import HeaderMenu from "../../Header/UserHeader/HeaderMenu/HeaderMenu.component";
import HeaderContent from "../../Header/UserHeader/HeaderContent/HeaderContent.component";

const UserHeader = () => (
  <div className="app-header header-shadow">
    <HeaderLogo></HeaderLogo>
    <MobileMenu></MobileMenu>
    <HeaderMenu></HeaderMenu>
    <HeaderContent></HeaderContent>
  </div>
);

export default UserHeader;
