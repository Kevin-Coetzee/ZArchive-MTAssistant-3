import React, { useState } from "react";

import PROPERTY_DATA from "../Data/Property.data";

import "./KingdomHalls.styles.scss";

import PageWrapper from "../../Components/Layouts/PageWrapper/PageWrapper.component";
import PropertyCollection from "../../Components/Property/property-collection/property-collection.component";
import PropertyCard from "../../Components/Elements/Card/PropertyCard.component";

const propertyImage = require.context("../../assets/properties/img", true);

const KingdomHalls = props => {
  const [properties, setProperties] = useState(PROPERTY_DATA);

  return (
    <PageWrapper {...props}>
      <PropertyCollection>
        {properties.map(property => {
          let img_src = propertyImage(`./${property.id}.jpg`);

          return <PropertyCard img_src={img_src} {...property}></PropertyCard>;
        })}
      </PropertyCollection>{" "}
    </PageWrapper>
  );
};

export default KingdomHalls;
