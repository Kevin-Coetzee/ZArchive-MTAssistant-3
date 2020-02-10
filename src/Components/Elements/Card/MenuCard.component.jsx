import React from "react";
import { withRouter } from "react-router-dom";

import "./MenuCard.styles.scss";

const MenuCard = ({
  title,
  imageUrl,
  size,
  linkTitle,
  history,
  linkUrl,
  match,
}) => (
  <div
    className={`${size} property-menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">{linkTitle}</span>
    </div>
  </div>
);

export default withRouter(MenuCard);
