import React from "react";

import "./PropertyCard.styles.scss";

const PropertyCard = ({ ...props }) => (
  <div class="col">
    <div className="card" style={{ width: "18rem" }} key={props.id}>
      <img src={props.img_src} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.address}</p>
        <a href="..." className="btn btn-primary">
          Go to Property
        </a>
      </div>
    </div>
  </div>
);

export default PropertyCard;
