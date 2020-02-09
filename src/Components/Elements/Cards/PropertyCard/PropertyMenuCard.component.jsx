import React from "react";

import "../PropertyCard/PropertyMenuCard.styles.scss";

const PropertyMenuCard = ({ title, imageUrl, size, linkTitle }) => (
  <div className={`${size} property-menu-item`}>
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

export default PropertyMenuCard;
