import React from "react";
import PageTitle from "../PageTitle/PageTitle.component";

const PageWrapper = ({ children, ...props }) => (
  <div className="app-main__inner">
    <PageTitle {...props}></PageTitle>
    {children}
  </div>
);

export default PageWrapper;
