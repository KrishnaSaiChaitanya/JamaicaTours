import React from "react";

function TourSidebar() {
  return (
    <div>
      {" "}
      <div className="row x-gap-10 y-gap-10 items-center">
        <div className="col-auto">
          <button
            className="button -h-50 px-20 -outline-dark-1 text-dark-1"
            data-x-click="tourPagesSidebar"
          >
            <i className="icon-sort-down text-18 mr-10"></i>
            All Filter
          </button>
        </div>

        <div className="col-auto">
          <div
            className="dropdown -base -date js-calendar js-form-dd js-dropdown js-dont-close"
            data-main-value=""
          >
            <div className="dropdown__button h-50 min-w-auto js-button">
              <div>
                <span className="js-first-date">Add dates</span>
                <span className="js-last-date"></span>
              </div>
              <i className="icon-chevron-down ml-10"></i>
            </div>
          </div>
        </div>

        <div className="col-auto">
          <div
            className="dropdown -base -price js-dropdown js-form-dd"
            data-main-value=""
          >
            <div className="dropdown__button h-50 min-w-auto js-button">
              <span className="js-title">Price</span>
              <i className="icon-chevron-down ml-10"></i>
            </div>

            <div className="dropdown__menu px-30 py-30 shadow-1 border-1 js-">
              <h5 className="text-18 fw-500">Filter Price</h5>
              <div className="pt-20">
                <div className="js-price-rangeSlider">
                  <div className="px-5">
                    <div className="js-slider"></div>
                  </div>

                  <div className="d-flex justify-between mt-20">
                    <div className="">
                      <span className="">Price:</span>
                      <span className="fw-500 js-lower">11,200</span>
                      <span> - </span>
                      <span className="fw-500 js-upper">15,000</span>
                    </div>

                    <div className="fw-500">Filter</div>
                  </div>
                </div>
              </div>
              <button className="button px-25 py-15 lh-12 -accent-1 text-accent-1 bg-accent-1-05 border-accent-1 mt-30">
                Apply
                <i className="icon-arrow-top-right text-16 ml-10"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourSidebar;
