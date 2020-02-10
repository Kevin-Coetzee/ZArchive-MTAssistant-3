import React from "react";
import { Route, Switch } from "react-router-dom";

import UserHeader from "../Components/Layouts/Header/UserHeader/UserHeader.component";
import MainSideBar from "../Components/Layouts/SideBar/MainSideBar/MainSideBar.component";
import PageFooter from "../Components/Layouts/PageFooter/PageFooter.component";

import HomePage from "./HomePage/HomePage.component";

const MainPage = () => {
  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
      <UserHeader />
      <div className="app-main">
        <div className="app-sidebar sidebar-shadow">
          <UserHeader />
          <MainSideBar></MainSideBar>
        </div>

        <div className="app-main__outer">
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <HomePage
                  icon="pe-7s-tools"
                  title="MT Assistant Dashboard"
                  desc="This is the Landing Page of the MT Assistant"
                />
              )}
            />
          </Switch>

          <div className="app-wrapper-footer">
            <PageFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
