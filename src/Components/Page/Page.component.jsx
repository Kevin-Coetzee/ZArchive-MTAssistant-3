import React from "react";

import PageTitle from "../Page/PageTitle/PageTitle";
import PageFooter from "../Page/PageFooter/PageFooter.component";

const PageContent = ({ children }) => (
  <div className="app-main__outer">
    <div className="app-main__inner">
      <PageTitle
        icon="pe-7s-tools"
        title="MT Assistant Dashboard"
        desc="This is the Landing Page of the MT Assistant"
      ></PageTitle>
      {children}
    </div>
    <div className="app-wrapper-footer">
      <PageFooter />
    </div>
  </div>
);

export default PageContent;
