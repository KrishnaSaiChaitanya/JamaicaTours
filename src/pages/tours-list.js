import TourCard from "@/components/TourCard";
import Accordion from "@/utils/functions";
import React, { useEffect } from "react";

const Tours = () => {
  const tourData = [
    {
      location: "Paris, France",
      title: "Centipede Tour - Guided Arizona Desert Tour by ATV",
      rating: "4.8 (269)",
      duration: "4 days",
      price: "$189,25",
      imageSrc: "../img/tourCards/1/1.png",
    },
    {
      location: "New York, USA",
      title: "Molokini and Turtle Town Snorkeling Adventure Aboard",
      rating: "4.8 (269)",
      duration: "4 days",
      price: "$225,00",
      imageSrc: "img/tourCards/1/2.png",
    },
    {
      location: "London, UK",
      title: "Westminster Walking Tour & Westminster Abbey Entry",
      rating: "4.8 (269)",
      duration: "4 days",
      price: "$943,00",
      imageSrc: "img/tourCards/1/3.png",
    },
    {
      location: "Paris, France",
      title: "Space Center Houston Admission Ticket",
      rating: "4.8 (269)",
      duration: "4 days",
      price: "$189,25",
      imageSrc: "img/tourCards/1/4.png",
    },
    {
      location: "New York, USA",
      title: "Clear Kayak Tour of Shell Key Preserve and Tampa Bay Area",
      rating: "4.8 (269)",
      duration: "4 days",
      price: "$225,00",
      imageSrc: "img/tourCards/1/5.png",
    },
    {
      location: "London, UK",
      title: "History and Hauntings of Salem Guided Walking Tour",
      rating: "4.8 (269)",
      duration: "4 days",
      price: "$943,00",
      imageSrc: "img/tourCards/1/6.png",
    },
    {
      location: "Paris, France",
      title: "All Inclusive Ultimate Circle Island Day Tour with Lunch",
      rating: "4.8 (269)",
      duration: "4 days",
      price: "$189,25",
      imageSrc: "img/tourCards/1/7.png",
    },
    {
      location: "New York, USA",
      title:
        "Mauna Kea Summit Sunset and Stars Free Astro Photos Hilo Kona Waikoloa Pick Up",
      rating: "4.8 (269)",
      duration: "4 days",
      price: "$225,00",
      imageSrc: "img/tourCards/1/8.png",
    },
    {
      location: "London, UK",
      title: "Starlight with Sea Cave Kayaking and Loy Krathong Floating",
      rating: "4.8 (269)",
      duration: "4 days",
      price: "$943,00",
      imageSrc: "img/tourCards/1/9.png",
    },
    {
      location: "Paris, France",
      title: "Full-Day Phi Phi Islands, Maiton island Trip by Speed Catamaran",
      rating: "4.8 (269)",
      duration: "4 days",
      price: "$189,25",
      imageSrc: "img/tourCards/1/10.png",
    },
    {
      location: "New York, USA",
      title: "Phi Phi Islands Day Tour from Phuket",
      rating: "4.8 (269)",
      duration: "4 days",
      price: "$225,00",
      imageSrc: "img/tourCards/1/11.png",
    },
    {
      location: "London, UK",
      title: "Karon View Point, Big Buddha & Wat Chalong",
      rating: "4.8 (269)",
      duration: "4 days",
      price: "$943,00",
      imageSrc: "img/tourCards/1/12.png",
    },
  ];

  const Accordion = (function () {
    function init() {
      const targets = document.querySelectorAll(".js-accordion");
      if (!targets) return;

      for (let i = 0; i < targets.length; i++) {
        const items = targets[i].querySelectorAll(".accordion__item");

        for (let l = 0; l < items.length; l++) {
          const button = items[l].querySelector(".accordion__button");
          const content = items[l].querySelector(".accordion__content");
          const titleChange = items[l].querySelector(
            "[data-open-change-title]"
          );
          let buttonOrigTitle;
          let buttonNewTitle;

          if (items[l].classList.contains("js-accordion-item-active")) {
            items[l].classList.toggle("is-active");
            content.style.maxHeight = content.scrollHeight + "px";
          }

          if (titleChange) {
            buttonOrigTitle = titleChange.innerHTML;
            buttonNewTitle = titleChange.getAttribute("data-open-change-title");
          }

          button.addEventListener("click", (e) => {
            items[l].classList.toggle("is-active");

            if (titleChange) {
              if (items[l].classList.contains("is-active")) {
                titleChange.innerHTML = buttonNewTitle;
              } else {
                titleChange.innerHTML = buttonOrigTitle;
              }
            }

            if (content.style.maxHeight) {
              content.style.maxHeight = null;
            } else {
              content.style.maxHeight = content.scrollHeight + "px";
            }
          });
        }
      }
    }

    return {
      init: init,
    };
  })();
  useEffect(() => {
    // Call the init function from the Accordion object
    Accordion.init();
    // calendarSlider();
    // calendarInteraction();
  }, []);

  return (
    <div>
      <section className="pageHeader -type-3">
        <div className="container">
          <div className="row justify-between">
            <div className="col-auto"></div>
            <div className="col-auto">
              <div className="pageHeader__subtitle">
                THE 10 BEST Phuket Tours & Excursions
              </div>
            </div>
          </div>

          <div className="row pt-30">
            <div className="col-auto">
              <h1 className="pageHeader__title">
                Explore all things to do in Phuket
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section class="layout-pb-xl">
        <div class="container">
          <div class="pl-tag__grid mobile-css-slider-2">
            <div class="">
              <a href="#" class="pl-tag">
                <div class="pl-tag__icon">
                  <i class="icon-office text-24 text-accent-1"></i>
                </div>

                <div class="pl-tag__title text-dark-1">City Tours</div>
              </a>
            </div>

            <div class="">
              <a href="#" class="pl-tag">
                <div class="pl-tag__icon">
                  <i class="icon-bank text-24 text-accent-1"></i>
                </div>

                <div class="pl-tag__title text-dark-1">Cultural Tours</div>
              </a>
            </div>

            <div class="">
              <a href="#" class="pl-tag">
                <div class="pl-tag__icon">
                  <i class="icon-boat text-24 text-accent-1"></i>
                </div>

                <div class="pl-tag__title text-dark-1">Day Cruises</div>
              </a>
            </div>

            <div class="">
              <a href="#" class="pl-tag">
                <div class="pl-tag__icon">
                  <i class="icon-bus text-24 text-accent-1"></i>
                </div>

                <div class="pl-tag__title text-dark-1">Bus Tours</div>
              </a>
            </div>

            <div class="">
              <a href="#" class="pl-tag">
                <div class="pl-tag__icon">
                  <i class="icon-beach text-24 text-accent-1"></i>
                </div>

                <div class="pl-tag__title text-dark-1">Beach Tours</div>
              </a>
            </div>

            <div class="">
              <a href="#" class="pl-tag">
                <div class="pl-tag__icon">
                  <i class="icon-menu-1 text-24 text-accent-1"></i>
                </div>

                <div class="pl-tag__title text-dark-1">Food Tours</div>
              </a>
            </div>
          </div>
          <div class="row pt-30">
            <div class="col-xl-3 col-lg-4">
              <div class="lg:d-none">
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

                                    <div class="lh-11 ml-10">
                                      Adventure Tours
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

                                    <div class="lh-11 ml-10">
                                      Cultural Tours
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

                                    <div class="lh-11 ml-10">
                                      Full day (7+ hours)
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

                    {/* <!-- Rating --> */}
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

                    {/* <!-- Specials --> */}
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

                                    <div class="lh-11 ml-10">
                                      Free Cancellation
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

                                    <div class="lh-11 ml-10">
                                      Likely to Sell Out
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
            <div class="col-xl-9 col-lg-8">
              <div class="row y-gap-5 justify-between">
                <div class="col-auto">
                  <div>1362 results</div>
                </div>

                <div class="col-auto">
                  <div
                    class="dropdown -type-2 js-dropdown js-form-dd"
                    data-main-value=""
                  >
                    <div class="dropdown__button js-button">
                      <span>Sort by: </span>
                      <span class="js-title">Featured</span>
                      <i class="icon-chevron-down"></i>
                    </div>

                    <div class="dropdown__menu js-menu-items">
                      <div class="dropdown__item" data-value="fast">
                        Fast
                      </div>

                      <div class="dropdown__item" data-value="steady">
                        Steady
                      </div>

                      <div class="dropdown__item" data-value="speedy">
                        Speedy
                      </div>

                      <div class="dropdown__item" data-value="furious">
                        Furious
                      </div>

                      <div class="dropdown__item" data-value="grind">
                        Grind
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row y-gap-30 pt-30">
                {tourData.map((tour, index) => (
                  <div className="col-lg-4 col-sm-6">
                    <a
                      href="#"
                      className="tourCard -type-1 py-10 px-10 border-1 rounded-12 -hover-shadow"
                    >
                      <TourCard key={index} {...tour} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tours;
