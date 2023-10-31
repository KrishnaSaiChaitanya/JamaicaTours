import React from "react";

const Sidenav = () => {
  const sidenavStyle = {
    borderRadius: ".5rem .5rem 0 0",
    position: "relative",
    overflow: "hidden",
    minHeight: "400px",
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
  };

  const sidenavMenuStyle = {
    width: "240px",
    height: "100%",
    position: "absolute",
    transitionDuration: "0.3s",
    transitionProperty: "transform, width, padding, margin",
    transitionTimingFunction: "linear",
    transform: "translateX(0%)",
  };

  const sidenavBackdropStyle = {
    transition: "opacity 0.3s ease-out 0s",
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 1,
  };

  return (
    <section style={sidenavStyle} className="p-4 d-flex justify-content-center">
      {/* Sidenav */}
      <nav
        id="sidenav-1"
        data-mdb-close-on-esc="false"
        className="sidenav sidenav-primary ps"
        data-mdb-hidden="false"
        data-mdb-position="absolute"
        data-mdb-focus-trap="false"
        style={sidenavMenuStyle}
      >
        <ul className="sidenav-menu">
          <li className="sidenav-item">
            <a className="sidenav-link ripple-surface">
              <i className="far fa-smile fa-fw me-3"></i>
              <span>Link 1</span>
            </a>
          </li>
          {/* ... Other list items */}
        </ul>
        {/* Scrollbar elements */}
      </nav>

      {/* Sidenav Toggle Button */}
      <div style={{ padding: "20px" }} className="text-center">
        <button
          data-mdb-toggle="sidenav"
          data-mdb-target="#sidenav-1"
          className="btn btn-primary"
          aria-controls="#sidenav-1"
          aria-haspopup="true"
          aria-expanded="true"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="d-flex justify-content-center my-5"></div>
      </div>

      {/* Sidenav Backdrop */}
      <div className="sidenav-backdrop" style={sidenavBackdropStyle}></div>
    </section>
  );
};

export default Sidenav;
