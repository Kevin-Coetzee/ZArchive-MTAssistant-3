import React, { useState } from "react";

import MenuItem from "../../Components/Elements/Card/MenuCard.component";
import PageTitle from "../../Components/Layouts/PageTitle/PageTitle.component";

import "./HomePage.styles.scss";

const HomePage = props => {
  const [sections, setSections] = useState([
    {
      title: "Document Templates",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnl-b9VLPgv0BMf_4rKyOE80uDsp9I1BZ3BfIGkKUOTEZ0F3yL",
      id: 1,
      linkUrl: "files/DocumentTemplates",
      linkTitle: "Go to Documents",
    },
    {
      title: "Task Planner",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUOu3dNTiiznxolB2X2Vqe1uOoFP1XjxJV03pTXzX_mLpiJg6W",
      id: 2,
      linkUrl: "tasks/planner",
      linkTitle: "View Plans",
    },
    {
      title: "Profile Admin",
      imageUrl:
        "data:image/jpeg;base64,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",
      id: 3,
      linkUrl: "admin/profile",
      linkTitle: "Edit",
    },
    {
      title: "Kingdom Halls",
      imageUrl:
        "https://assetsnffrgf-a.akamaihd.net/assets/m/502014315/univ/art/502014315_univ_lsr_lg.jpg",
      id: 4,
      size: "large",
      linkUrl: "property/KingdomHalls",
      linkTitle: "View All",
    },
    {
      title: "Meeting Places",
      imageUrl: "https://wol.jw.org/ng/wol/mp/r170/lp-od/mwb19/2019/90",
      id: 5,
      size: "large",
      linkUrl: "property/MeetingPlaces",
      linkTitle: "View All",
    },
  ]);
  return (
    <div className="app-main__inner">
      <PageTitle {...props}></PageTitle>
      <div className="directory-menu">
        {sections.map(({ title, imageUrl, id, size, linkTitle }) => (
          <MenuItem
            title={title}
            subtitle="-"
            imageUrl={imageUrl}
            size={size}
            linkTitle={linkTitle}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
