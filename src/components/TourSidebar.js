import React from "react";

function TourSidebar() {
  return (
    <div>
      {" "}
      <div class="row x-gap-10 y-gap-10 items-center">
        <div class="col-auto">
          <button
            class="button -h-50 px-20 -outline-dark-1 text-dark-1"
            data-x-click="tourPagesSidebar"
          >
            <i class="icon-sort-down text-18 mr-10"></i>
            All Filter
          </button>
        </div>

        <div class="col-auto">
          <div
            class="dropdown -base -date js-calendar js-form-dd js-dropdown js-dont-close"
            data-main-value=""
          >
            <div class="dropdown__button h-50 min-w-auto js-button">
              <div>
                <span class="js-first-date">Add dates</span>
                <span class="js-last-date"></span>
              </div>
              <i class="icon-chevron-down ml-10"></i>
            </div>
          </div>
        </div>

        <div class="col-auto">
          <div
            class="dropdown -base -price js-dropdown js-form-dd"
            data-main-value=""
          >
            <div class="dropdown__button h-50 min-w-auto js-button">
              <span class="js-title">Price</span>
              <i class="icon-chevron-down ml-10"></i>
            </div>

            <div class="dropdown__menu px-30 py-30 shadow-1 border-1 js-">
              <h5 class="text-18 fw-500">Filter Price</h5>
              <div class="pt-20">
                <div class="js-price-rangeSlider">
                  <div class="px-5">
                    <div class="js-slider"></div>
                  </div>

                  <div class="d-flex justify-between mt-20">
                    <div class="">
                      <span class="">Price:</span>
                      <span class="fw-500 js-lower">11,200</span>
                      <span> - </span>
                      <span class="fw-500 js-upper">15,000</span>
                    </div>

                    <div class="fw-500">Filter</div>
                  </div>
                </div>
              </div>
              <button class="button px-25 py-15 lh-12 -accent-1 text-accent-1 bg-accent-1-05 border-accent-1 mt-30">
                Apply
                <i class="icon-arrow-top-right text-16 ml-10"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourSidebar;
