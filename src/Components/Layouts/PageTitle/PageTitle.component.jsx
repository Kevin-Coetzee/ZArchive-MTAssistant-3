import React from "react";

const PageTitle = ({ icon, title, desc, visible }) => (
  <div className="app-page-title">
    <div className="page-title-wrapper">
      <div className="page-title-heading">
        <div className="page-title-icon">
          <i className={`${icon} icon-gradient bg-mean-fruit`}></i>
        </div>
        <div>
          {title}
          <div className="page-title-subheading">{desc}</div>
        </div>
      </div>
      <div className="page-title-actions">
        <button
          type="button"
          data-toggle="tooltip"
          title="Example Tooltip"
          data-placement="bottom"
          className="btn-shadow mr-3 btn btn-dark"
        >
          <i className="fa fa-star"></i>
        </button>
        <div className="d-inline-block dropdown">
          <button
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            className="btn-shadow dropdown-toggle btn btn-info"
          >
            <span className="btn-icon-wrapper pr-2 opacity-7">
              <i className="fa fa-business-time fa-w-20"></i>
            </span>
            Buttons
          </button>
          <div
            role="menu"
            aria-hidden="true"
            className="dropdown-menu dropdown-menu-right"
          >
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link">
                  <i className="nav-link-icon lnr-inbox"></i>
                  <span>Inbox</span>
                  <div className="ml-auto badge badge-pill badge-secondary">
                    86
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <i className="nav-link-icon lnr-book"></i>
                  <span>Book</span>
                  <div className="ml-auto badge badge-pill badge-danger">5</div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <i className="nav-link-icon lnr-picture"></i>
                  <span>Picture</span>
                </a>
              </li>
              <li className="nav-item">
                <a disabled className="nav-link disabled">
                  <i className="nav-link-icon lnr-file-empty"></i>
                  <span>File Disabled</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>{" "}
    </div>
  </div>
);

export default PageTitle;
