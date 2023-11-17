import React from "react";

function TaxiHome() {
  return (
    <div className="mt-header3 px-30">
      <div
        className="mt-60 row contactForm "
        style={{ width: "90%", margin: "auto" }}
      >
        <div className="col-md-6 ">
          <div className="form-input">
            <input type="text" required />
            <label className="lh-1 text-16 text-light-1">
              Enter Your Pickup Location
            </label>
          </div>
        </div>

        <div className="col-md-6 ">
          <div className="form-input ">
            <input type="text" required />
            <label className="lh-1 text-16 text-light-1">
              Enter Your drop-off loction
            </label>
          </div>
        </div>
      </div>
      <div className="map relative mt-header  pageHeader m-3">
        <div className="map__content rounded-12 md:rounded-0 js-map-single">
          <iframe
            style={{ height: "100%", width: "100%" }}
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>
      </div>
      <div
        className="mt-60 row contactForm mb-60"
        style={{ width: "90%", margin: "auto" }}
      >
        <div className="col-md-6 ">
          <div className="form-input">
            <button className="button -md -dark-1 bg-accent-1 text-white col-12 mt-30">
              O Kms | 0 Mins
            </button>
          </div>
        </div>

        <div className="col-md-6 ">
          <div className="form-input ">
            <button className="button -md -dark-1 bg-accent-1 text-white col-12 mt-30">
              O Kms | 0 Mins
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaxiHome;
