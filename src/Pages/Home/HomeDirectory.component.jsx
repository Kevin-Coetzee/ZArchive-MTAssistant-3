import React from "react";

import MainSideBar from "../../Components/SideBar/MainSideBar/MainSideBar.component";
import Page from "../../Components/Page/Page.component";
import HomePageContent from "./HomeContent.component";
import UserHeader from "../../Components/Header/UserHeader/UserHeader.component";

const HomePage = () => {
  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
      <UserHeader />
      <div className="app-main">
        <div className="app-sidebar sidebar-shadow">
          <UserHeader />
          <MainSideBar></MainSideBar>
        </div>
        <Page>
          <HomePageContent></HomePageContent>
        </Page>
      </div>
    </div>
  );
};

export default HomePage;
