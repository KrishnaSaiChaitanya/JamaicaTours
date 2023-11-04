import React from "react";

function Filters() {
  return (
    <div>
      <div
        class="tourPagesSidebar"
        data-x="tourPagesSidebar"
        data-x-toggle="-is-active"
      >
        <div class="tourPagesSidebar__overlay"></div>
        <div class="tourPagesSidebar__content">
          <div class="tourPagesSidebar__header d-flex items-center justify-between">
            <div class="text-20 fw-500">All filters</div>

            <button
              class="button -dark-1 size-40 rounded-full bg-light-1"
              data-x-click="tourPagesSidebar"
            >
              <i class="icon-cross text-10"></i>
            </button>
          </div>

          <div class="sidebar -type-1 rounded-12">
            <div class="sidebar__header bg-accent-1">
              <div class="text-15 text-white fw-500">
                When are you traveling?
              </div>

              <div class="mt-10">
                <div class="searchForm -type-1 -col-1 -narrow">
                  <div class="searchForm__form">
                    <div class="searchFormItem js-select-control js-form-dd js-calendar">
                      <div
                        class="searchFormItem__button"
                        data-x-click="calendar"
                      >
                        <div class="pl-calendar d-flex items-center">
                          <i class="icon-calendar text-20 mr-15"></i>
                          <div>
                            <span class="js-first-date">Add dates</span>
                            <span class="js-last-date"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="sidebar__content">
              <div class="sidebar__item">
                <div class="accordion -simple-2 js-accordion">
                  <div class="accordion__item js-accordion-item-active">
                    <div class="accordion__button d-flex items-center justify-between">
                      <h5 class="text-18 fw-500">Tour Type</h5>

                      <div class="accordion__icon flex-center">
                        <i class="icon-chevron-down"></i>
                        <i class="icon-chevron-down"></i>
                      </div>
                    </div>

                    <div class="accordion__content">
                      <div class="pt-15">
                        <div class="d-flex flex-column y-gap-15">
                          <div>
                            <div class="d-flex items-center">
                              <div class="form-checkbox ">
                                <input type="checkbox" name="name" />
                                <div class="form-checkbox__mark">
                                  <div class="form-checkbox__icon">
                                    <svg
                                      width="10"
                                      height="8"
                                      viewBox="0 0 10 8"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>

                              <div class="lh-11 ml-10">Nature Tours</div>
                            </div>
                          </div>

                          <div>
                            <div class="d-flex items-center">
                              <div class="form-checkbox ">
                                <input type="checkbox" name="name" />
                                <div class="form-checkbox__mark">
                                  <div class="form-checkbox__icon">
                                    <svg
                                      width="10"
                                      height="8"
                                      viewBox="0 0 10 8"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>

                              <div class="lh-11 ml-10">Adventure Tours</div>
                            </div>
                          </div>

                          <div>
                            <div class="d-flex items-center">
                              <div class="form-checkbox ">
                                <input type="checkbox" name="name" />
                                <div class="form-checkbox__mark">
                                  <div class="form-checkbox__icon">
                                    <svg
                                      width="10"
                                      height="8"
                                      viewBox="0 0 10 8"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>

                              <div class="lh-11 ml-10">Cultural Tours</div>
                            </div>
                          </div>

                          <div>
                            <div class="d-flex items-center">
                              <div class="form-checkbox ">
                                <input type="checkbox" name="name" />
                                <div class="form-checkbox__mark">
                                  <div class="form-checkbox__icon">
                                    <svg
                                      width="10"
                                      height="8"
                                      viewBox="0 0 10 8"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>

                              <div class="lh-11 ml-10">Food Tours</div>
                            </div>
                          </div>

                          <div>
                            <div class="d-flex items-center">
                              <div class="form-checkbox ">
                                <input type="checkbox" name="name" />
                                <div class="form-checkbox__mark">
                                  <div class="form-checkbox__icon">
                                    <svg
                                      width="10"
                                      height="8"
                                      viewBox="0 0 10 8"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>

                              <div class="lh-11 ml-10">City Tours</div>
                            </div>
                          </div>

                          <div>
                            <div class="d-flex items-center">
                              <div class="form-checkbox ">
                                <input type="checkbox" name="name" />
                                <div class="form-checkbox__mark">
                                  <div class="form-checkbox__icon">
                                    <svg
                                      width="10"
                                      height="8"
                                      viewBox="0 0 10 8"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>

                              <div class="lh-11 ml-10">Cruises Tours</div>
                            </div>
                          </div>
                        </div>

                        <a
                          href="#"
                          class="d-flex text-15 fw-500 text-accent-2 mt-15"
                        >
                          See More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="sidebar__item">
                <div class="accordion -simple-2 js-accordion">
                  <div class="accordion__item js-accordion-item-active">
                    <div class="accordion__button mb-10 d-flex items-center justify-between">
                      <h5 class="text-18 fw-500">Filter Price</h5>

                      <div class="accordion__icon flex-center">
                        <i class="icon-chevron-down"></i>
                        <i class="icon-chevron-down"></i>
                      </div>
                    </div>

                    <div class="accordion__content">
                      <div class="pt-15">
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
                    </div>
                  </div>
                </div>
              </div>

              <div class="sidebar__item">
                <div class="accordion -simple-2 js-accordion">
                  <div class="accordion__item js-accordion-item-active">
                    <div class="accordion__button d-flex items-center justify-between">
                      <h5 class="text-18 fw-500">Duration</h5>

                      <div class="accordion__icon flex-center">
                        <i class="icon-chevron-down"></i>
                        <i class="icon-chevron-down"></i>
                      </div>
                    </div>

                    <div class="accordion__content">
                      <div class="pt-15">
                        <div class="d-flex flex-column y-gap-15">
                          <div>
                            <div class="d-flex items-center">
                              <div class="form-checkbox ">
                                <input type="checkbox" name="name" />
                                <div class="form-checkbox__mark">
                                  <div class="form-checkbox__icon">
                                    <svg
                                      width="10"
                                      height="8"
                                      viewBox="0 0 10 8"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>

                              <div class="lh-11 ml-10">0-3 hours</div>
                            </div>
                          </div>

                          <div>
                            <div class="d-flex items-center">
                              <div class="form-checkbox ">
                                <input type="checkbox" name="name" />
                                <div class="form-checkbox__mark">
                                  <div class="form-checkbox__icon">
                                    <svg
                                      width="10"
                                      height="8"
                                      viewBox="0 0 10 8"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>

                              <div class="lh-11 ml-10">3-5 hours</div>
                            </div>
                          </div>

                          <div>
                            <div class="d-flex items-center">
                              <div class="form-checkbox ">
                                <input type="checkbox" name="name" />
                                <div class="form-checkbox__mark">
                                  <div class="form-checkbox__icon">
                                    <svg
                                      width="10"
                                      height="8"
                                      viewBox="0 0 10 8"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>

                              <div class="lh-11 ml-10">5-7 hours</div>
                            </div>
                          </div>

                          <div>
                            <div class="d-flex items-center">
                              <div class="form-checkbox ">
                                <input type="checkbox" name="name" />
                                <div class="form-checkbox__mark">
                                  <div class="form-checkbox__icon">
                                    <svg
                                      width="10"
                                      height="8"
                                      viewBox="0 0 10 8"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>

                              <div class="lh-11 ml-10">Full day (7+ hours)</div>
                            </div>
                          </div>

                          <div>
                            <div class="d-flex items-center">
                              <div class="form-checkbox ">
                                <input type="checkbox" name="name" />
                                <div class="form-checkbox__mark">
                                  <div class="form-checkbox__icon">
                                    <svg
                                      width="10"
                                      height="8"
                                      viewBox="0 0 10 8"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>

                              <div class="lh-11 ml-10">Multi-day</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="sidebar__item">
                <div class="accordion -simple-2 js-accordion">
                  <div class="accordion__item js-accordion-item-active">
                    <div class="accordion__button d-flex items-center justify-between">
                      <h5 class="text-18 fw-500">Language</h5>

                      <div class="accordion__icon flex-center">
                        <i class="icon-chevron-down"></i>
                        <i class="icon-chevron-down"></i>
                      </div>
                    </div>

                    <div class="accordion__content">
                      <div class="pt-15">
                        <div class="d-flex flex-column y-gap-15">
                          <div>
                            <div class="d-flex items-center">
                              <div class="form-checkbox ">
                                <input type="checkbox" name="name" />
                                <div class="form-checkbox__mark">
                                  <div class="form-checkbox__icon">
                                    <svg
                                      width="10"
                                      height="8"
                                      viewBox="0 0 10 8"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>

                              <div class="lh-11 ml-10">English</div>
                            </div>
                          </div>

                          <div>
                            <div class="d-flex items-center">
                              <div class="form-checkbox ">
                                <input type="checkbox" name="name" />
                                <div class="form-checkbox__mark">
                                  <div class="form-checkbox__icon">
                                    <svg
                                      width="10"
                                      height="8"
                                      viewBox="0 0 10 8"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>

                              <div class="lh-11 ml-10">Dutch</div>
                            </div>
                          </div>

                          <div>
                            <div class="d-flex items-center">
                              <div class="form-checkbox ">
                                <input type="checkbox" name="name" />
                                <div class="form-checkbox__mark">
                                  <div class="form-checkbox__icon">
                                    <svg
                                      width="10"
                                      height="8"
                                      viewBox="0 0 10 8"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>

                              <div class="lh-11 ml-10">German</div>
                            </div>
                          </div>

                          <div>
                            <div class="d-flex items-center">
                              <div class="form-checkbox ">
                                <input type="checkbox" name="name" />
                                <div class="form-checkbox__mark">
                                  <div class="form-checkbox__icon">
                                    <svg
                                      width="10"
                                      height="8"
                                      viewBox="0 0 10 8"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>

                              <div class="lh-11 ml-10">French</div>
                            </div>
                          </div>

                          <div>
                            <div class="d-flex items-center">
                              <div class="form-checkbox ">
                                <input type="checkbox" name="name" />
                                <div class="form-checkbox__mark">
                                  <div class="form-checkbox__icon">
                                    <svg
                                      width="10"
                                      height="8"
                                      viewBox="0 0 10 8"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>

                              <div class="lh-11 ml-10">Italian</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="sidebar__item">
                <div class="accordion -simple-2 js-accordion">
                  <div class="accordion__item js-accordion-item-active">
                    <div class="accordion__button d-flex items-center justify-between">
                      <h5 class="text-18 fw-500">Rating</h5>

                      <div class="accordion__icon flex-center">
                        <i class="icon-chevron-down"></i>
                        <i class="icon-chevron-down"></i>
                      </div>
                    </div>

                    <div class="accordion__content">
                      <div class="pt-15">
                        <div class="d-flex flex-column y-gap-15">
                          <div class="d-flex">
                            <div class="form-checkbox">
                              <input type="checkbox" name="rating" />
                              <div class="form-checkbox__mark">
                                <div class="form-checkbox__icon">
                                  <svg
                                    width="10"
                                    height="8"
                                    viewBox="0 0 10 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                                      fill="white"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div class="d-flex x-gap-5 ml-10">
                              <i class="flex-center icon-star text-yellow-2 text-13"></i>

                              <i class="flex-center icon-star text-yellow-2 text-13"></i>

                              <i class="flex-center icon-star text-yellow-2 text-13"></i>

                              <i class="flex-center icon-star text-yellow-2 text-13"></i>

                              <i class="flex-center icon-star text-yellow-2 text-13"></i>
                            </div>
                          </div>

                          <div class="d-flex">
                            <div class="form-checkbox">
                              <input type="checkbox" name="rating" />
                              <div class="form-checkbox__mark">
                                <div class="form-checkbox__icon">
                                  <svg
                                    width="10"
                                    height="8"
                                    viewBox="0 0 10 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                                      fill="white"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div class="d-flex x-gap-5 ml-10">
                              <i class="flex-center icon-star text-yellow-2 text-13"></i>

                              <i class="flex-center icon-star text-yellow-2 text-13"></i>

                              <i class="flex-center icon-star text-yellow-2 text-13"></i>

                              <i class="flex-center icon-star text-yellow-2 text-13"></i>

                              <i class="flex-center icon-star text-light-6 text-13"></i>
                            </div>
                          </div>

                          <div class="d-flex">
                            <div class="form-checkbox">
                              <input type="checkbox" name="rating" />
                              <div class="form-checkbox__mark">
                                <div class="form-checkbox__icon">
                                  <svg
                                    width="10"
                                    height="8"
                                    viewBox="0 0 10 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                                      fill="white"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div class="d-flex x-gap-5 ml-10">
                              <i class="flex-center icon-star text-yellow-2 text-13"></i>

                              <i class="flex-center icon-star text-yellow-2 text-13"></i>

                              <i class="flex-center icon-star text-yellow-2 text-13"></i>

                              <i class="flex-center icon-star text-light-6 text-13"></i>

                              <i class="flex-center icon-star text-light-6 text-13"></i>
                            </div>
                          </div>

                          <div class="d-flex">
                            <div class="form-checkbox">
                              <input type="checkbox" name="rating" />
                              <div class="form-checkbox__mark">
                                <div class="form-checkbox__icon">
                                  <svg
                                    width="10"
                                    height="8"
                                    viewBox="0 0 10 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                                      fill="white"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div class="d-flex x-gap-5 ml-10">
                              <i class="flex-center icon-star text-yellow-2 text-13"></i>

                              <i class="flex-center icon-star text-yellow-2 text-13"></i>

                              <i class="flex-center icon-star text-light-6 text-13"></i>

                              <i class="flex-center icon-star text-light-6 text-13"></i>

                              <i class="flex-center icon-star text-light-6 text-13"></i>
                            </div>
                          </div>

                          <div class="d-flex">
                            <div class="form-checkbox">
                              <input type="checkbox" name="rating" />
                              <div class="form-checkbox__mark">
                                <div class="form-checkbox__icon">
                                  <svg
                                    width="10"
                                    height="8"
                                    viewBox="0 0 10 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                                      fill="white"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div class="d-flex x-gap-5 ml-10">
                              <i class="flex-center icon-star text-yellow-2 text-13"></i>

                              <i class="flex-center icon-star text-light-6 text-13"></i>

                              <i class="flex-center icon-star text-light-6 text-13"></i>

                              <i class="flex-center icon-star text-light-6 text-13"></i>

                              <i class="flex-center icon-star text-light-6 text-13"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="sidebar__item">
                <div class="accordion -simple-2 js-accordion">
                  <div class="accordion__item js-accordion-item-active">
                    <div class="accordion__button d-flex items-center justify-between">
                      <h5 class="text-18 fw-500">Specials</h5>

                      <div class="accordion__icon flex-center">
                        <i class="icon-chevron-down"></i>
                        <i class="icon-chevron-down"></i>
                      </div>
                    </div>

                    <div class="accordion__content">
                      <div class="pt-15">
                        <div class="d-flex flex-column y-gap-15">
                          <div>
                            <div class="d-flex items-center">
                              <div class="form-checkbox ">
                                <input type="checkbox" name="name" />
                                <div class="form-checkbox__mark">
                                  <div class="form-checkbox__icon">
                                    <svg
                                      width="10"
                                      height="8"
                                      viewBox="0 0 10 8"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>

                              <div class="lh-11 ml-10">
                                Deals &amp; Discounts
                              </div>
                            </div>
                          </div>

                          <div>
                            <div class="d-flex items-center">
                              <div class="form-checkbox ">
                                <input type="checkbox" name="name" />
                                <div class="form-checkbox__mark">
                                  <div class="form-checkbox__icon">
                                    <svg
                                      width="10"
                                      height="8"
                                      viewBox="0 0 10 8"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>

                              <div class="lh-11 ml-10">Free Cancellation</div>
                            </div>
                          </div>

                          <div>
                            <div class="d-flex items-center">
                              <div class="form-checkbox ">
                                <input type="checkbox" name="name" />
                                <div class="form-checkbox__mark">
                                  <div class="form-checkbox__icon">
                                    <svg
                                      width="10"
                                      height="8"
                                      viewBox="0 0 10 8"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>

                              <div class="lh-11 ml-10">Likely to Sell Out</div>
                            </div>
                          </div>

                          <div>
                            <div class="d-flex items-center">
                              <div class="form-checkbox ">
                                <input type="checkbox" name="name" />
                                <div class="form-checkbox__mark">
                                  <div class="form-checkbox__icon">
                                    <svg
                                      width="10"
                                      height="8"
                                      viewBox="0 0 10 8"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>

                              <div class="lh-11 ml-10">Skip-The-Line</div>
                            </div>
                          </div>

                          <div>
                            <div class="d-flex items-center">
                              <div class="form-checkbox ">
                                <input type="checkbox" name="name" />
                                <div class="form-checkbox__mark">
                                  <div class="form-checkbox__icon">
                                    <svg
                                      width="10"
                                      height="8"
                                      viewBox="0 0 10 8"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>

                              <div class="lh-11 ml-10">Private Tour</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;
