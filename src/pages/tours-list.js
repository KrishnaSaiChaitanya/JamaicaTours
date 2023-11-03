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
  function calendarSlider() {
    new Swiper(".js-calendar-slider", {
      speed: 600,
      autoHeight: true,
      spaceBetween: 50,

      slidesPerView: 1,
      breakpoints: {
        991: { slidesPerView: 2 },
      },

      navigation: {
        prevEl: ".js-calendar-prev",
        nextEl: ".js-calendar-next",
      },
    });

    new Swiper(".js-calendar-slider-2", {
      speed: 600,
      autoHeight: true,
      spaceBetween: 50,
      slidesPerView: 1,
      navigation: {
        prevEl: ".js-calendar-prev",
        nextEl: ".js-calendar-next",
      },
    });
  }
  function calendarInteraction() {
    const target = document.querySelectorAll(".js-calendar");
    if (!target) return;

    target.forEach((elTarget) => {
      const gridCells = elTarget.querySelectorAll(".table-calendar__grid > *");

      const firstDate = elTarget.querySelector(".js-first-date");
      const lastDate = elTarget.querySelector(".js-last-date");

      let completeState = false;
      let firstItem = false;
      let lastItem = false;

      gridCells.forEach((el, i) => {
        el.addEventListener("click", () => {
          el.classList.add("-is-active");

          if (firstItem && getIndex(firstItem) > getIndex(el)) {
            lastItem = firstItem;
            firstItem = el;
          }

          if (firstItem && !lastItem) {
            lastItem = el;
          }

          if (!firstItem) {
            firstItem = el;
          }

          if (completeState) {
            firstItem = false;
            lastItem = false;

            const array = elTarget.querySelectorAll(".-is-active");
            array.forEach((el2) => {
              el2.classList.remove("-is-active");
            });

            const array2 = elTarget.querySelectorAll(".-is-in-path");
            array2.forEach((el2) => {
              el2.classList.remove("-is-in-path");
            });

            completeState = false;
          } else if (firstItem && lastItem) {
            const iterationCount = Math.abs(
              getIndex(firstItem) - getIndex(lastItem)
            );

            for (let l = 1; l < iterationCount; l++) {
              const item = elTarget.querySelector(
                `[data-index="${getIndex(firstItem) + l}"]`
              );
              item.classList.add("-is-in-path");
            }

            if (firstDate) {
              firstDate.innerHTML = `${
                firstItem.querySelector(".js-date").innerHTML
              } ${firstItem.getAttribute("data-month")} -`;
            }

            if (lastDate) {
              lastDate.innerHTML = `${
                lastItem.querySelector(".js-date").innerHTML
              } ${lastItem.getAttribute("data-month")}`;
            }

            completeState = true;
            closeAllDropdowns();
          }
        });
      });
    });

    function getIndex(element) {
      return parseInt(element.getAttribute("data-index"));
    }
  }
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

                            {/* <div
                              class="searchFormItemDropdown -calendar"
                              data-x="calendar"
                              data-x-toggle="is-active"
                            >
                              <div class="searchFormItemDropdown__container">
                                <div class="searchMenu-date -searchForm js-form-dd">
                                  <div
                                    class="searchMenu-date__field"
                                    data-x-dd="searchMenu-date"
                                    data-x-dd-toggle="-is-active"
                                  >
                                    <div class="overflow-hidden js-calendar-slider-2">
                                      <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                          <div class="text-18 fw-500 text-center mb-20">
                                            January 2023
                                          </div>

                                          <div class="table-calendar js-calendar-single">
                                            <div class="table-calendar__header">
                                              <div>Mon</div>
                                              <div>Tue</div>
                                              <div>Wed</div>
                                              <div>Thu</div>
                                              <div>Fri</div>
                                              <div>Sat</div>
                                              <div>Sun</div>
                                            </div>

                                            <div class="table-calendar__grid overflow-hidden">
                                              <div
                                                data-index="1"
                                                data-week="Sun"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 text-light-7"
                                              >
                                                <span class="js-date">26</span>
                                              </div>

                                              <div
                                                data-index="2"
                                                data-week="Mon"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 text-light-7"
                                              >
                                                <span class="js-date">27</span>
                                              </div>

                                              <div
                                                data-index="3"
                                                data-week="Tue"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 text-light-7"
                                              >
                                                <span class="js-date">28</span>
                                              </div>

                                              <div
                                                data-index="4"
                                                data-week="Wed"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 text-light-7"
                                              >
                                                <span class="js-date">29</span>
                                              </div>

                                              <div
                                                data-index="5"
                                                data-week="Thu"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 text-light-7"
                                              >
                                                <span class="js-date">30</span>
                                              </div>

                                              <div
                                                data-index="6"
                                                data-week="Fri"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 text-light-7"
                                              >
                                                <span class="js-date">31</span>
                                              </div>

                                              <div
                                                data-index="7"
                                                data-week="Sat"
                                                data-month="Jan"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">1</span>
                                              </div>

                                              <div
                                                data-index="8"
                                                data-week="Sun"
                                                data-month="Jan"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">2</span>
                                              </div>

                                              <div
                                                data-index="9"
                                                data-week="Mon"
                                                data-month="Jan"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">3</span>
                                              </div>

                                              <div
                                                data-index="10"
                                                data-week="Tue"
                                                data-month="Jan"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">4</span>
                                              </div>

                                              <div
                                                data-index="11"
                                                data-week="Wed"
                                                data-month="Jan"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">5</span>
                                              </div>

                                              <div
                                                data-index="12"
                                                data-week="Thu"
                                                data-month="Jan"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">6</span>
                                              </div>

                                              <div
                                                data-index="13"
                                                data-week="Fri"
                                                data-month="Jan"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">7</span>
                                              </div>

                                              <div
                                                data-index="14"
                                                data-week="Sat"
                                                data-month="Jan"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">8</span>
                                              </div>

                                              <div
                                                data-index="15"
                                                data-week="Sun"
                                                data-month="Jan"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">9</span>
                                              </div>

                                              <div
                                                data-index="16"
                                                data-week="Mon"
                                                data-month="Jan"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">10</span>
                                              </div>

                                              <div
                                                data-index="17"
                                                data-week="Tue"
                                                data-month="Jan"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">11</span>
                                              </div>

                                              <div
                                                data-index="18"
                                                data-week="Wed"
                                                data-month="Jan"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">12</span>
                                              </div>

                                              <div
                                                data-index="19"
                                                data-week="Thu"
                                                data-month="Jan"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">13</span>
                                              </div>

                                              <div
                                                data-index="20"
                                                data-week="Fri"
                                                data-month="Jan"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">14</span>
                                              </div>

                                              <div
                                                data-index="21"
                                                data-week="Sat"
                                                data-month="Jan"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">15</span>
                                              </div>

                                              <div
                                                data-index="22"
                                                data-week="Sun"
                                                data-month="Jan"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">16</span>
                                              </div>

                                              <div
                                                data-index="23"
                                                data-week="Mon"
                                                data-month="Jan"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">17</span>
                                              </div>

                                              <div
                                                data-index="24"
                                                data-week="Tue"
                                                data-month="Jan"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">18</span>
                                              </div>

                                              <div
                                                data-index="25"
                                                data-week="Wed"
                                                data-month="Jan"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">19</span>
                                              </div>

                                              <div
                                                data-index="26"
                                                data-week="Thu"
                                                data-month="Jan"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">20</span>
                                              </div>

                                              <div
                                                data-index="27"
                                                data-week="Fri"
                                                data-month="Jan"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">21</span>
                                              </div>

                                              <div
                                                data-index="28"
                                                data-week="Sat"
                                                data-month="Jan"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">22</span>
                                              </div>

                                              <div
                                                data-index="29"
                                                data-week="Sun"
                                                data-month="Jan"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">23</span>
                                              </div>

                                              <div
                                                data-index="30"
                                                data-week="Mon"
                                                data-month="Jan"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">24</span>
                                              </div>

                                              <div
                                                data-index="31"
                                                data-week="Tue"
                                                data-month="Jan"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">25</span>
                                              </div>

                                              <div
                                                data-index="32"
                                                data-week="Wed"
                                                data-month="Jan"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">26</span>
                                              </div>

                                              <div
                                                data-index="33"
                                                data-week="Thu"
                                                data-month="Jan"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">27</span>
                                              </div>

                                              <div
                                                data-index="34"
                                                data-week="Fri"
                                                data-month="Jan"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">28</span>
                                              </div>

                                              <div
                                                data-index="35"
                                                data-week="Sat"
                                                data-month="Jan"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">29</span>
                                              </div>

                                              <div
                                                data-index="36"
                                                data-week="Sun"
                                                data-month="Jan"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">30</span>
                                              </div>

                                              <div
                                                data-index="37"
                                                data-week="Mon"
                                                data-month="Jan"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">31</span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div class="swiper-slide">
                                          <div class="text-18 fw-500 text-center mb-20">
                                            February 2023
                                          </div>

                                          <div class="table-calendar js-calendar-single">
                                            <div class="table-calendar__header">
                                              <div>Mon</div>
                                              <div>Tue</div>
                                              <div>Wed</div>
                                              <div>Thu</div>
                                              <div>Fri</div>
                                              <div>Sat</div>
                                              <div>Sun</div>
                                            </div>

                                            <div class="table-calendar__grid overflow-hidden">
                                              <div
                                                data-index="38"
                                                data-week="Sun"
                                                data-month="Jan"
                                                class="table-calendar__cell lh-1 text-light-7"
                                              >
                                                <span class="js-date">30</span>
                                              </div>

                                              <div
                                                data-index="39"
                                                data-week="Mon"
                                                data-month="Jan"
                                                class="table-calendar__cell lh-1 text-light-7"
                                              >
                                                <span class="js-date">31</span>
                                              </div>

                                              <div
                                                data-index="40"
                                                data-week="Tue"
                                                data-month="Feb"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">1</span>
                                              </div>

                                              <div
                                                data-index="41"
                                                data-week="Wed"
                                                data-month="Feb"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">2</span>
                                              </div>

                                              <div
                                                data-index="42"
                                                data-week="Thu"
                                                data-month="Feb"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">3</span>
                                              </div>

                                              <div
                                                data-index="43"
                                                data-week="Fri"
                                                data-month="Feb"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">4</span>
                                              </div>

                                              <div
                                                data-index="44"
                                                data-week="Sat"
                                                data-month="Feb"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">5</span>
                                              </div>

                                              <div
                                                data-index="45"
                                                data-week="Sun"
                                                data-month="Feb"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">6</span>
                                              </div>

                                              <div
                                                data-index="46"
                                                data-week="Mon"
                                                data-month="Feb"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">7</span>
                                              </div>

                                              <div
                                                data-index="47"
                                                data-week="Tue"
                                                data-month="Feb"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">8</span>
                                              </div>

                                              <div
                                                data-index="48"
                                                data-week="Wed"
                                                data-month="Feb"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">9</span>
                                              </div>

                                              <div
                                                data-index="49"
                                                data-week="Thu"
                                                data-month="Feb"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">10</span>
                                              </div>

                                              <div
                                                data-index="50"
                                                data-week="Fri"
                                                data-month="Feb"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">11</span>
                                              </div>

                                              <div
                                                data-index="51"
                                                data-week="Sat"
                                                data-month="Feb"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">12</span>
                                              </div>

                                              <div
                                                data-index="52"
                                                data-week="Sun"
                                                data-month="Feb"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">13</span>
                                              </div>

                                              <div
                                                data-index="53"
                                                data-week="Mon"
                                                data-month="Feb"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">14</span>
                                              </div>

                                              <div
                                                data-index="54"
                                                data-week="Tue"
                                                data-month="Feb"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">15</span>
                                              </div>

                                              <div
                                                data-index="55"
                                                data-week="Wed"
                                                data-month="Feb"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">16</span>
                                              </div>

                                              <div
                                                data-index="56"
                                                data-week="Thu"
                                                data-month="Feb"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">17</span>
                                              </div>

                                              <div
                                                data-index="57"
                                                data-week="Fri"
                                                data-month="Feb"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">18</span>
                                              </div>

                                              <div
                                                data-index="58"
                                                data-week="Sat"
                                                data-month="Feb"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">19</span>
                                              </div>

                                              <div
                                                data-index="59"
                                                data-week="Sun"
                                                data-month="Feb"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">20</span>
                                              </div>

                                              <div
                                                data-index="60"
                                                data-week="Mon"
                                                data-month="Feb"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">21</span>
                                              </div>

                                              <div
                                                data-index="61"
                                                data-week="Tue"
                                                data-month="Feb"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">22</span>
                                              </div>

                                              <div
                                                data-index="62"
                                                data-week="Wed"
                                                data-month="Feb"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">23</span>
                                              </div>

                                              <div
                                                data-index="63"
                                                data-week="Thu"
                                                data-month="Feb"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">24</span>
                                              </div>

                                              <div
                                                data-index="64"
                                                data-week="Fri"
                                                data-month="Feb"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">25</span>
                                              </div>

                                              <div
                                                data-index="65"
                                                data-week="Sat"
                                                data-month="Feb"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">26</span>
                                              </div>

                                              <div
                                                data-index="66"
                                                data-week="Sun"
                                                data-month="Feb"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">27</span>
                                              </div>

                                              <div
                                                data-index="67"
                                                data-week="Mon"
                                                data-month="Feb"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">28</span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div class="swiper-slide">
                                          <div class="text-18 fw-500 text-center mb-20">
                                            March 2023
                                          </div>

                                          <div class="table-calendar js-calendar-single">
                                            <div class="table-calendar__header">
                                              <div>Mon</div>
                                              <div>Tue</div>
                                              <div>Wed</div>
                                              <div>Thu</div>
                                              <div>Fri</div>
                                              <div>Sat</div>
                                              <div>Sun</div>
                                            </div>

                                            <div class="table-calendar__grid overflow-hidden">
                                              <div
                                                data-index="68"
                                                data-week="Sun"
                                                data-month="Feb"
                                                class="table-calendar__cell lh-1 text-light-7"
                                              >
                                                <span class="js-date">27</span>
                                              </div>

                                              <div
                                                data-index="69"
                                                data-week="Mon"
                                                data-month="Feb"
                                                class="table-calendar__cell lh-1 text-light-7"
                                              >
                                                <span class="js-date">28</span>
                                              </div>

                                              <div
                                                data-index="70"
                                                data-week="Tue"
                                                data-month="Mar"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">1</span>
                                              </div>

                                              <div
                                                data-index="71"
                                                data-week="Wed"
                                                data-month="Mar"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">2</span>
                                              </div>

                                              <div
                                                data-index="72"
                                                data-week="Thu"
                                                data-month="Mar"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">3</span>
                                              </div>

                                              <div
                                                data-index="73"
                                                data-week="Fri"
                                                data-month="Mar"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">4</span>
                                              </div>

                                              <div
                                                data-index="74"
                                                data-week="Sat"
                                                data-month="Mar"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">5</span>
                                              </div>

                                              <div
                                                data-index="75"
                                                data-week="Sun"
                                                data-month="Mar"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">6</span>
                                              </div>

                                              <div
                                                data-index="76"
                                                data-week="Mon"
                                                data-month="Mar"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">7</span>
                                              </div>

                                              <div
                                                data-index="77"
                                                data-week="Tue"
                                                data-month="Mar"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">8</span>
                                              </div>

                                              <div
                                                data-index="78"
                                                data-week="Wed"
                                                data-month="Mar"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">9</span>
                                              </div>

                                              <div
                                                data-index="79"
                                                data-week="Thu"
                                                data-month="Mar"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">10</span>
                                              </div>

                                              <div
                                                data-index="80"
                                                data-week="Fri"
                                                data-month="Mar"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">11</span>
                                              </div>

                                              <div
                                                data-index="81"
                                                data-week="Sat"
                                                data-month="Mar"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">12</span>
                                              </div>

                                              <div
                                                data-index="82"
                                                data-week="Sun"
                                                data-month="Mar"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">13</span>
                                              </div>

                                              <div
                                                data-index="83"
                                                data-week="Mon"
                                                data-month="Mar"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">14</span>
                                              </div>

                                              <div
                                                data-index="84"
                                                data-week="Tue"
                                                data-month="Mar"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">15</span>
                                              </div>

                                              <div
                                                data-index="85"
                                                data-week="Wed"
                                                data-month="Mar"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">16</span>
                                              </div>

                                              <div
                                                data-index="86"
                                                data-week="Thu"
                                                data-month="Mar"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">17</span>
                                              </div>

                                              <div
                                                data-index="87"
                                                data-week="Fri"
                                                data-month="Mar"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">18</span>
                                              </div>

                                              <div
                                                data-index="88"
                                                data-week="Sat"
                                                data-month="Mar"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">19</span>
                                              </div>

                                              <div
                                                data-index="89"
                                                data-week="Sun"
                                                data-month="Mar"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">20</span>
                                              </div>

                                              <div
                                                data-index="90"
                                                data-week="Mon"
                                                data-month="Mar"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">21</span>
                                              </div>

                                              <div
                                                data-index="91"
                                                data-week="Tue"
                                                data-month="Mar"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">22</span>
                                              </div>

                                              <div
                                                data-index="92"
                                                data-week="Wed"
                                                data-month="Mar"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">23</span>
                                              </div>

                                              <div
                                                data-index="93"
                                                data-week="Thu"
                                                data-month="Mar"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">24</span>
                                              </div>

                                              <div
                                                data-index="94"
                                                data-week="Fri"
                                                data-month="Mar"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">25</span>
                                              </div>

                                              <div
                                                data-index="95"
                                                data-week="Sat"
                                                data-month="Mar"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">26</span>
                                              </div>

                                              <div
                                                data-index="96"
                                                data-week="Sun"
                                                data-month="Mar"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">27</span>
                                              </div>

                                              <div
                                                data-index="97"
                                                data-week="Mon"
                                                data-month="Mar"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">28</span>
                                              </div>

                                              <div
                                                data-index="98"
                                                data-week="Tue"
                                                data-month="Mar"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">29</span>
                                              </div>

                                              <div
                                                data-index="99"
                                                data-week="Wed"
                                                data-month="Mar"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">30</span>
                                              </div>

                                              <div
                                                data-index="100"
                                                data-week="Thu"
                                                data-month="Mar"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">31</span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div class="swiper-slide">
                                          <div class="text-18 fw-500 text-center mb-20">
                                            April 2023
                                          </div>

                                          <div class="table-calendar js-calendar-single">
                                            <div class="table-calendar__header">
                                              <div>Mon</div>
                                              <div>Tue</div>
                                              <div>Wed</div>
                                              <div>Thu</div>
                                              <div>Fri</div>
                                              <div>Sat</div>
                                              <div>Sun</div>
                                            </div>

                                            <div class="table-calendar__grid overflow-hidden">
                                              <div
                                                data-index="101"
                                                data-week="Sun"
                                                data-month="Mar"
                                                class="table-calendar__cell lh-1 text-light-7"
                                              >
                                                <span class="js-date">27</span>
                                              </div>

                                              <div
                                                data-index="102"
                                                data-week="Mon"
                                                data-month="Mar"
                                                class="table-calendar__cell lh-1 text-light-7"
                                              >
                                                <span class="js-date">28</span>
                                              </div>

                                              <div
                                                data-index="103"
                                                data-week="Tue"
                                                data-month="Mar"
                                                class="table-calendar__cell lh-1 text-light-7"
                                              >
                                                <span class="js-date">29</span>
                                              </div>

                                              <div
                                                data-index="104"
                                                data-week="Wed"
                                                data-month="Mar"
                                                class="table-calendar__cell lh-1 text-light-7"
                                              >
                                                <span class="js-date">30</span>
                                              </div>

                                              <div
                                                data-index="105"
                                                data-week="Thu"
                                                data-month="Mar"
                                                class="table-calendar__cell lh-1 text-light-7"
                                              >
                                                <span class="js-date">31</span>
                                              </div>

                                              <div
                                                data-index="106"
                                                data-week="Fri"
                                                data-month="Apr"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">1</span>
                                              </div>

                                              <div
                                                data-index="107"
                                                data-week="Sat"
                                                data-month="Apr"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">2</span>
                                              </div>

                                              <div
                                                data-index="108"
                                                data-week="Sun"
                                                data-month="Apr"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">3</span>
                                              </div>

                                              <div
                                                data-index="109"
                                                data-week="Mon"
                                                data-month="Apr"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">4</span>
                                              </div>

                                              <div
                                                data-index="110"
                                                data-week="Tue"
                                                data-month="Apr"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">5</span>
                                              </div>

                                              <div
                                                data-index="111"
                                                data-week="Wed"
                                                data-month="Apr"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">6</span>
                                              </div>

                                              <div
                                                data-index="112"
                                                data-week="Thu"
                                                data-month="Apr"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">7</span>
                                              </div>

                                              <div
                                                data-index="113"
                                                data-week="Fri"
                                                data-month="Apr"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">8</span>
                                              </div>

                                              <div
                                                data-index="114"
                                                data-week="Sat"
                                                data-month="Apr"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">9</span>
                                              </div>

                                              <div
                                                data-index="115"
                                                data-week="Sun"
                                                data-month="Apr"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">10</span>
                                              </div>

                                              <div
                                                data-index="116"
                                                data-week="Mon"
                                                data-month="Apr"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">11</span>
                                              </div>

                                              <div
                                                data-index="117"
                                                data-week="Tue"
                                                data-month="Apr"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">12</span>
                                              </div>

                                              <div
                                                data-index="118"
                                                data-week="Wed"
                                                data-month="Apr"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">13</span>
                                              </div>

                                              <div
                                                data-index="119"
                                                data-week="Thu"
                                                data-month="Apr"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">14</span>
                                              </div>

                                              <div
                                                data-index="120"
                                                data-week="Fri"
                                                data-month="Apr"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">15</span>
                                              </div>

                                              <div
                                                data-index="121"
                                                data-week="Sat"
                                                data-month="Apr"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">16</span>
                                              </div>

                                              <div
                                                data-index="122"
                                                data-week="Sun"
                                                data-month="Apr"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">17</span>
                                              </div>

                                              <div
                                                data-index="123"
                                                data-week="Mon"
                                                data-month="Apr"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">18</span>
                                              </div>

                                              <div
                                                data-index="124"
                                                data-week="Tue"
                                                data-month="Apr"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">19</span>
                                              </div>

                                              <div
                                                data-index="125"
                                                data-week="Wed"
                                                data-month="Apr"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">20</span>
                                              </div>

                                              <div
                                                data-index="126"
                                                data-week="Thu"
                                                data-month="Apr"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">21</span>
                                              </div>

                                              <div
                                                data-index="127"
                                                data-week="Fri"
                                                data-month="Apr"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">22</span>
                                              </div>

                                              <div
                                                data-index="128"
                                                data-week="Sat"
                                                data-month="Apr"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">23</span>
                                              </div>

                                              <div
                                                data-index="129"
                                                data-week="Sun"
                                                data-month="Apr"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">24</span>
                                              </div>

                                              <div
                                                data-index="130"
                                                data-week="Mon"
                                                data-month="Apr"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">25</span>
                                              </div>

                                              <div
                                                data-index="131"
                                                data-week="Tue"
                                                data-month="Apr"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">26</span>
                                              </div>

                                              <div
                                                data-index="132"
                                                data-week="Wed"
                                                data-month="Apr"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">27</span>
                                              </div>

                                              <div
                                                data-index="133"
                                                data-week="Thu"
                                                data-month="Apr"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">28</span>
                                              </div>

                                              <div
                                                data-index="134"
                                                data-week="Fri"
                                                data-month="Apr"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">29</span>
                                              </div>

                                              <div
                                                data-index="135"
                                                data-week="Sat"
                                                data-month="Apr"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">30</span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div class="swiper-slide">
                                          <div class="text-18 fw-500 text-center mb-20">
                                            May 2023
                                          </div>

                                          <div class="table-calendar js-calendar-single">
                                            <div class="table-calendar__header">
                                              <div>Mon</div>
                                              <div>Tue</div>
                                              <div>Wed</div>
                                              <div>Thu</div>
                                              <div>Fri</div>
                                              <div>Sat</div>
                                              <div>Sun</div>
                                            </div>

                                            <div class="table-calendar__grid overflow-hidden">
                                              <div
                                                data-index="136"
                                                data-week="Sun"
                                                data-month="May"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">1</span>
                                              </div>

                                              <div
                                                data-index="137"
                                                data-week="Mon"
                                                data-month="May"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">2</span>
                                              </div>

                                              <div
                                                data-index="138"
                                                data-week="Tue"
                                                data-month="May"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">3</span>
                                              </div>

                                              <div
                                                data-index="139"
                                                data-week="Wed"
                                                data-month="May"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">4</span>
                                              </div>

                                              <div
                                                data-index="140"
                                                data-week="Thu"
                                                data-month="May"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">5</span>
                                              </div>

                                              <div
                                                data-index="141"
                                                data-week="Fri"
                                                data-month="May"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">6</span>
                                              </div>

                                              <div
                                                data-index="142"
                                                data-week="Sat"
                                                data-month="May"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">7</span>
                                              </div>

                                              <div
                                                data-index="143"
                                                data-week="Sun"
                                                data-month="May"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">8</span>
                                              </div>

                                              <div
                                                data-index="144"
                                                data-week="Mon"
                                                data-month="May"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">9</span>
                                              </div>

                                              <div
                                                data-index="145"
                                                data-week="Tue"
                                                data-month="May"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">10</span>
                                              </div>

                                              <div
                                                data-index="146"
                                                data-week="Wed"
                                                data-month="May"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">11</span>
                                              </div>

                                              <div
                                                data-index="147"
                                                data-week="Thu"
                                                data-month="May"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">12</span>
                                              </div>

                                              <div
                                                data-index="148"
                                                data-week="Fri"
                                                data-month="May"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">13</span>
                                              </div>

                                              <div
                                                data-index="149"
                                                data-week="Sat"
                                                data-month="May"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">14</span>
                                              </div>

                                              <div
                                                data-index="150"
                                                data-week="Sun"
                                                data-month="May"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">15</span>
                                              </div>

                                              <div
                                                data-index="151"
                                                data-week="Mon"
                                                data-month="May"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">16</span>
                                              </div>

                                              <div
                                                data-index="152"
                                                data-week="Tue"
                                                data-month="May"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">17</span>
                                              </div>

                                              <div
                                                data-index="153"
                                                data-week="Wed"
                                                data-month="May"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">18</span>
                                              </div>

                                              <div
                                                data-index="154"
                                                data-week="Thu"
                                                data-month="May"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">19</span>
                                              </div>

                                              <div
                                                data-index="155"
                                                data-week="Fri"
                                                data-month="May"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">20</span>
                                              </div>

                                              <div
                                                data-index="156"
                                                data-week="Sat"
                                                data-month="May"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">21</span>
                                              </div>

                                              <div
                                                data-index="157"
                                                data-week="Sun"
                                                data-month="May"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">22</span>
                                              </div>

                                              <div
                                                data-index="158"
                                                data-week="Mon"
                                                data-month="May"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">23</span>
                                              </div>

                                              <div
                                                data-index="159"
                                                data-week="Tue"
                                                data-month="May"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">24</span>
                                              </div>

                                              <div
                                                data-index="160"
                                                data-week="Wed"
                                                data-month="May"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">25</span>
                                              </div>

                                              <div
                                                data-index="161"
                                                data-week="Thu"
                                                data-month="May"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">26</span>
                                              </div>

                                              <div
                                                data-index="162"
                                                data-week="Fri"
                                                data-month="May"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">27</span>
                                              </div>

                                              <div
                                                data-index="163"
                                                data-week="Sat"
                                                data-month="May"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">28</span>
                                              </div>

                                              <div
                                                data-index="164"
                                                data-week="Sun"
                                                data-month="May"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">29</span>
                                              </div>

                                              <div
                                                data-index="165"
                                                data-week="Mon"
                                                data-month="May"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">30</span>
                                              </div>

                                              <div
                                                data-index="166"
                                                data-week="Tue"
                                                data-month="May"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">31</span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div class="swiper-slide">
                                          <div class="text-18 fw-500 text-center mb-20">
                                            June 2023
                                          </div>

                                          <div class="table-calendar js-calendar-single">
                                            <div class="table-calendar__header">
                                              <div>Mon</div>
                                              <div>Tue</div>
                                              <div>Wed</div>
                                              <div>Thu</div>
                                              <div>Fri</div>
                                              <div>Sat</div>
                                              <div>Sun</div>
                                            </div>

                                            <div class="table-calendar__grid overflow-hidden">
                                              <div
                                                data-index="167"
                                                data-week="Sun"
                                                data-month="May"
                                                class="table-calendar__cell lh-1 text-light-7"
                                              >
                                                <span class="js-date">29</span>
                                              </div>

                                              <div
                                                data-index="168"
                                                data-week="Mon"
                                                data-month="May"
                                                class="table-calendar__cell lh-1 text-light-7"
                                              >
                                                <span class="js-date">30</span>
                                              </div>

                                              <div
                                                data-index="169"
                                                data-week="Tue"
                                                data-month="May"
                                                class="table-calendar__cell lh-1 text-light-7"
                                              >
                                                <span class="js-date">31</span>
                                              </div>

                                              <div
                                                data-index="170"
                                                data-week="Wed"
                                                data-month="Jun"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">1</span>
                                              </div>

                                              <div
                                                data-index="171"
                                                data-week="Thu"
                                                data-month="Jun"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">2</span>
                                              </div>

                                              <div
                                                data-index="172"
                                                data-week="Fri"
                                                data-month="Jun"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">3</span>
                                              </div>

                                              <div
                                                data-index="173"
                                                data-week="Sat"
                                                data-month="Jun"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">4</span>
                                              </div>

                                              <div
                                                data-index="174"
                                                data-week="Sun"
                                                data-month="Jun"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">5</span>
                                              </div>

                                              <div
                                                data-index="175"
                                                data-week="Mon"
                                                data-month="Jun"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">6</span>
                                              </div>

                                              <div
                                                data-index="176"
                                                data-week="Tue"
                                                data-month="Jun"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">7</span>
                                              </div>

                                              <div
                                                data-index="177"
                                                data-week="Wed"
                                                data-month="Jun"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">8</span>
                                              </div>

                                              <div
                                                data-index="178"
                                                data-week="Thu"
                                                data-month="Jun"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">9</span>
                                              </div>

                                              <div
                                                data-index="179"
                                                data-week="Fri"
                                                data-month="Jun"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">10</span>
                                              </div>

                                              <div
                                                data-index="180"
                                                data-week="Sat"
                                                data-month="Jun"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">11</span>
                                              </div>

                                              <div
                                                data-index="181"
                                                data-week="Sun"
                                                data-month="Jun"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">12</span>
                                              </div>

                                              <div
                                                data-index="182"
                                                data-week="Mon"
                                                data-month="Jun"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">13</span>
                                              </div>

                                              <div
                                                data-index="183"
                                                data-week="Tue"
                                                data-month="Jun"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">14</span>
                                              </div>

                                              <div
                                                data-index="184"
                                                data-week="Wed"
                                                data-month="Jun"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">15</span>
                                              </div>

                                              <div
                                                data-index="185"
                                                data-week="Thu"
                                                data-month="Jun"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">16</span>
                                              </div>

                                              <div
                                                data-index="186"
                                                data-week="Fri"
                                                data-month="Jun"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">17</span>
                                              </div>

                                              <div
                                                data-index="187"
                                                data-week="Sat"
                                                data-month="Jun"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">18</span>
                                              </div>

                                              <div
                                                data-index="188"
                                                data-week="Sun"
                                                data-month="Jun"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">19</span>
                                              </div>

                                              <div
                                                data-index="189"
                                                data-week="Mon"
                                                data-month="Jun"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">20</span>
                                              </div>

                                              <div
                                                data-index="190"
                                                data-week="Tue"
                                                data-month="Jun"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">21</span>
                                              </div>

                                              <div
                                                data-index="191"
                                                data-week="Wed"
                                                data-month="Jun"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">22</span>
                                              </div>

                                              <div
                                                data-index="192"
                                                data-week="Thu"
                                                data-month="Jun"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">23</span>
                                              </div>

                                              <div
                                                data-index="193"
                                                data-week="Fri"
                                                data-month="Jun"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">24</span>
                                              </div>

                                              <div
                                                data-index="194"
                                                data-week="Sat"
                                                data-month="Jun"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">25</span>
                                              </div>

                                              <div
                                                data-index="195"
                                                data-week="Sun"
                                                data-month="Jun"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">26</span>
                                              </div>

                                              <div
                                                data-index="196"
                                                data-week="Mon"
                                                data-month="Jun"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">27</span>
                                              </div>

                                              <div
                                                data-index="197"
                                                data-week="Tue"
                                                data-month="Jun"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">28</span>
                                              </div>

                                              <div
                                                data-index="198"
                                                data-week="Wed"
                                                data-month="Jun"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">29</span>
                                              </div>

                                              <div
                                                data-index="199"
                                                data-week="Thu"
                                                data-month="Jun"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">30</span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div class="swiper-slide">
                                          <div class="text-18 fw-500 text-center mb-20">
                                            July 2023
                                          </div>

                                          <div class="table-calendar js-calendar-single">
                                            <div class="table-calendar__header">
                                              <div>Mon</div>
                                              <div>Tue</div>
                                              <div>Wed</div>
                                              <div>Thu</div>
                                              <div>Fri</div>
                                              <div>Sat</div>
                                              <div>Sun</div>
                                            </div>

                                            <div class="table-calendar__grid overflow-hidden">
                                              <div
                                                data-index="200"
                                                data-week="Sun"
                                                data-month="Jun"
                                                class="table-calendar__cell lh-1 text-light-7"
                                              >
                                                <span class="js-date">26</span>
                                              </div>

                                              <div
                                                data-index="201"
                                                data-week="Mon"
                                                data-month="Jun"
                                                class="table-calendar__cell lh-1 text-light-7"
                                              >
                                                <span class="js-date">27</span>
                                              </div>

                                              <div
                                                data-index="202"
                                                data-week="Tue"
                                                data-month="Jun"
                                                class="table-calendar__cell lh-1 text-light-7"
                                              >
                                                <span class="js-date">28</span>
                                              </div>

                                              <div
                                                data-index="203"
                                                data-week="Wed"
                                                data-month="Jun"
                                                class="table-calendar__cell lh-1 text-light-7"
                                              >
                                                <span class="js-date">29</span>
                                              </div>

                                              <div
                                                data-index="204"
                                                data-week="Thu"
                                                data-month="Jun"
                                                class="table-calendar__cell lh-1 text-light-7"
                                              >
                                                <span class="js-date">30</span>
                                              </div>

                                              <div
                                                data-index="205"
                                                data-week="Fri"
                                                data-month="Jul"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">1</span>
                                              </div>

                                              <div
                                                data-index="206"
                                                data-week="Sat"
                                                data-month="Jul"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">2</span>
                                              </div>

                                              <div
                                                data-index="207"
                                                data-week="Sun"
                                                data-month="Jul"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">3</span>
                                              </div>

                                              <div
                                                data-index="208"
                                                data-week="Mon"
                                                data-month="Jul"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">4</span>
                                              </div>

                                              <div
                                                data-index="209"
                                                data-week="Tue"
                                                data-month="Jul"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">5</span>
                                              </div>

                                              <div
                                                data-index="210"
                                                data-week="Wed"
                                                data-month="Jul"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">6</span>
                                              </div>

                                              <div
                                                data-index="211"
                                                data-week="Thu"
                                                data-month="Jul"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">7</span>
                                              </div>

                                              <div
                                                data-index="212"
                                                data-week="Fri"
                                                data-month="Jul"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">8</span>
                                              </div>

                                              <div
                                                data-index="213"
                                                data-week="Sat"
                                                data-month="Jul"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">9</span>
                                              </div>

                                              <div
                                                data-index="214"
                                                data-week="Sun"
                                                data-month="Jul"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">10</span>
                                              </div>

                                              <div
                                                data-index="215"
                                                data-week="Mon"
                                                data-month="Jul"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">11</span>
                                              </div>

                                              <div
                                                data-index="216"
                                                data-week="Tue"
                                                data-month="Jul"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">12</span>
                                              </div>

                                              <div
                                                data-index="217"
                                                data-week="Wed"
                                                data-month="Jul"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">13</span>
                                              </div>

                                              <div
                                                data-index="218"
                                                data-week="Thu"
                                                data-month="Jul"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">14</span>
                                              </div>

                                              <div
                                                data-index="219"
                                                data-week="Fri"
                                                data-month="Jul"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">15</span>
                                              </div>

                                              <div
                                                data-index="220"
                                                data-week="Sat"
                                                data-month="Jul"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">16</span>
                                              </div>

                                              <div
                                                data-index="221"
                                                data-week="Sun"
                                                data-month="Jul"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">17</span>
                                              </div>

                                              <div
                                                data-index="222"
                                                data-week="Mon"
                                                data-month="Jul"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">18</span>
                                              </div>

                                              <div
                                                data-index="223"
                                                data-week="Tue"
                                                data-month="Jul"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">19</span>
                                              </div>

                                              <div
                                                data-index="224"
                                                data-week="Wed"
                                                data-month="Jul"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">20</span>
                                              </div>

                                              <div
                                                data-index="225"
                                                data-week="Thu"
                                                data-month="Jul"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">21</span>
                                              </div>

                                              <div
                                                data-index="226"
                                                data-week="Fri"
                                                data-month="Jul"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">22</span>
                                              </div>

                                              <div
                                                data-index="227"
                                                data-week="Sat"
                                                data-month="Jul"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">23</span>
                                              </div>

                                              <div
                                                data-index="228"
                                                data-week="Sun"
                                                data-month="Jul"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">24</span>
                                              </div>

                                              <div
                                                data-index="229"
                                                data-week="Mon"
                                                data-month="Jul"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">25</span>
                                              </div>

                                              <div
                                                data-index="230"
                                                data-week="Tue"
                                                data-month="Jul"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">26</span>
                                              </div>

                                              <div
                                                data-index="231"
                                                data-week="Wed"
                                                data-month="Jul"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">27</span>
                                              </div>

                                              <div
                                                data-index="232"
                                                data-week="Thu"
                                                data-month="Jul"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">28</span>
                                              </div>

                                              <div
                                                data-index="233"
                                                data-week="Fri"
                                                data-month="Jul"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">29</span>
                                              </div>

                                              <div
                                                data-index="234"
                                                data-week="Sat"
                                                data-month="Jul"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">30</span>
                                              </div>

                                              <div
                                                data-index="235"
                                                data-week="Sun"
                                                data-month="Jul"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">31</span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div class="swiper-slide">
                                          <div class="text-18 fw-500 text-center mb-20">
                                            August 2023
                                          </div>

                                          <div class="table-calendar js-calendar-single">
                                            <div class="table-calendar__header">
                                              <div>Mon</div>
                                              <div>Tue</div>
                                              <div>Wed</div>
                                              <div>Thu</div>
                                              <div>Fri</div>
                                              <div>Sat</div>
                                              <div>Sun</div>
                                            </div>

                                            <div class="table-calendar__grid overflow-hidden">
                                              <div
                                                data-index="236"
                                                data-week="Sun"
                                                data-month="Jul"
                                                class="table-calendar__cell lh-1 text-light-7"
                                              >
                                                <span class="js-date">31</span>
                                              </div>

                                              <div
                                                data-index="237"
                                                data-week="Mon"
                                                data-month="Aug"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">1</span>
                                              </div>

                                              <div
                                                data-index="238"
                                                data-week="Tue"
                                                data-month="Aug"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">2</span>
                                              </div>

                                              <div
                                                data-index="239"
                                                data-week="Wed"
                                                data-month="Aug"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">3</span>
                                              </div>

                                              <div
                                                data-index="240"
                                                data-week="Thu"
                                                data-month="Aug"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">4</span>
                                              </div>

                                              <div
                                                data-index="241"
                                                data-week="Fri"
                                                data-month="Aug"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">5</span>
                                              </div>

                                              <div
                                                data-index="242"
                                                data-week="Sat"
                                                data-month="Aug"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">6</span>
                                              </div>

                                              <div
                                                data-index="243"
                                                data-week="Sun"
                                                data-month="Aug"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">7</span>
                                              </div>

                                              <div
                                                data-index="244"
                                                data-week="Mon"
                                                data-month="Aug"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">8</span>
                                              </div>

                                              <div
                                                data-index="245"
                                                data-week="Tue"
                                                data-month="Aug"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">9</span>
                                              </div>

                                              <div
                                                data-index="246"
                                                data-week="Wed"
                                                data-month="Aug"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">10</span>
                                              </div>

                                              <div
                                                data-index="247"
                                                data-week="Thu"
                                                data-month="Aug"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">11</span>
                                              </div>

                                              <div
                                                data-index="248"
                                                data-week="Fri"
                                                data-month="Aug"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">12</span>
                                              </div>

                                              <div
                                                data-index="249"
                                                data-week="Sat"
                                                data-month="Aug"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">13</span>
                                              </div>

                                              <div
                                                data-index="250"
                                                data-week="Sun"
                                                data-month="Aug"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">14</span>
                                              </div>

                                              <div
                                                data-index="251"
                                                data-week="Mon"
                                                data-month="Aug"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">15</span>
                                              </div>

                                              <div
                                                data-index="252"
                                                data-week="Tue"
                                                data-month="Aug"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">16</span>
                                              </div>

                                              <div
                                                data-index="253"
                                                data-week="Wed"
                                                data-month="Aug"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">17</span>
                                              </div>

                                              <div
                                                data-index="254"
                                                data-week="Thu"
                                                data-month="Aug"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">18</span>
                                              </div>

                                              <div
                                                data-index="255"
                                                data-week="Fri"
                                                data-month="Aug"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">19</span>
                                              </div>

                                              <div
                                                data-index="256"
                                                data-week="Sat"
                                                data-month="Aug"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">20</span>
                                              </div>

                                              <div
                                                data-index="257"
                                                data-week="Sun"
                                                data-month="Aug"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">21</span>
                                              </div>

                                              <div
                                                data-index="258"
                                                data-week="Mon"
                                                data-month="Aug"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">22</span>
                                              </div>

                                              <div
                                                data-index="259"
                                                data-week="Tue"
                                                data-month="Aug"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">23</span>
                                              </div>

                                              <div
                                                data-index="260"
                                                data-week="Wed"
                                                data-month="Aug"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">24</span>
                                              </div>

                                              <div
                                                data-index="261"
                                                data-week="Thu"
                                                data-month="Aug"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">25</span>
                                              </div>

                                              <div
                                                data-index="262"
                                                data-week="Fri"
                                                data-month="Aug"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">26</span>
                                              </div>

                                              <div
                                                data-index="263"
                                                data-week="Sat"
                                                data-month="Aug"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">27</span>
                                              </div>

                                              <div
                                                data-index="264"
                                                data-week="Sun"
                                                data-month="Aug"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">28</span>
                                              </div>

                                              <div
                                                data-index="265"
                                                data-week="Mon"
                                                data-month="Aug"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">29</span>
                                              </div>

                                              <div
                                                data-index="266"
                                                data-week="Tue"
                                                data-month="Aug"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">30</span>
                                              </div>

                                              <div
                                                data-index="267"
                                                data-week="Wed"
                                                data-month="Aug"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">31</span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div class="swiper-slide">
                                          <div class="text-18 fw-500 text-center mb-20">
                                            September 2023
                                          </div>

                                          <div class="table-calendar js-calendar-single">
                                            <div class="table-calendar__header">
                                              <div>Mon</div>
                                              <div>Tue</div>
                                              <div>Wed</div>
                                              <div>Thu</div>
                                              <div>Fri</div>
                                              <div>Sat</div>
                                              <div>Sun</div>
                                            </div>

                                            <div class="table-calendar__grid overflow-hidden">
                                              <div
                                                data-index="268"
                                                data-week="Sun"
                                                data-month="Aug"
                                                class="table-calendar__cell lh-1 text-light-7"
                                              >
                                                <span class="js-date">28</span>
                                              </div>

                                              <div
                                                data-index="269"
                                                data-week="Mon"
                                                data-month="Aug"
                                                class="table-calendar__cell lh-1 text-light-7"
                                              >
                                                <span class="js-date">29</span>
                                              </div>

                                              <div
                                                data-index="270"
                                                data-week="Tue"
                                                data-month="Aug"
                                                class="table-calendar__cell lh-1 text-light-7"
                                              >
                                                <span class="js-date">30</span>
                                              </div>

                                              <div
                                                data-index="271"
                                                data-week="Wed"
                                                data-month="Aug"
                                                class="table-calendar__cell lh-1 text-light-7"
                                              >
                                                <span class="js-date">31</span>
                                              </div>

                                              <div
                                                data-index="272"
                                                data-week="Thu"
                                                data-month="Sep"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">1</span>
                                              </div>

                                              <div
                                                data-index="273"
                                                data-week="Fri"
                                                data-month="Sep"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">2</span>
                                              </div>

                                              <div
                                                data-index="274"
                                                data-week="Sat"
                                                data-month="Sep"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">3</span>
                                              </div>

                                              <div
                                                data-index="275"
                                                data-week="Sun"
                                                data-month="Sep"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">4</span>
                                              </div>

                                              <div
                                                data-index="276"
                                                data-week="Mon"
                                                data-month="Sep"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">5</span>
                                              </div>

                                              <div
                                                data-index="277"
                                                data-week="Tue"
                                                data-month="Sep"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">6</span>
                                              </div>

                                              <div
                                                data-index="278"
                                                data-week="Wed"
                                                data-month="Sep"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">7</span>
                                              </div>

                                              <div
                                                data-index="279"
                                                data-week="Thu"
                                                data-month="Sep"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">8</span>
                                              </div>

                                              <div
                                                data-index="280"
                                                data-week="Fri"
                                                data-month="Sep"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">9</span>
                                              </div>

                                              <div
                                                data-index="281"
                                                data-week="Sat"
                                                data-month="Sep"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">10</span>
                                              </div>

                                              <div
                                                data-index="282"
                                                data-week="Sun"
                                                data-month="Sep"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">11</span>
                                              </div>

                                              <div
                                                data-index="283"
                                                data-week="Mon"
                                                data-month="Sep"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">12</span>
                                              </div>

                                              <div
                                                data-index="284"
                                                data-week="Tue"
                                                data-month="Sep"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">13</span>
                                              </div>

                                              <div
                                                data-index="285"
                                                data-week="Wed"
                                                data-month="Sep"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">14</span>
                                              </div>

                                              <div
                                                data-index="286"
                                                data-week="Thu"
                                                data-month="Sep"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">15</span>
                                              </div>

                                              <div
                                                data-index="287"
                                                data-week="Fri"
                                                data-month="Sep"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">16</span>
                                              </div>

                                              <div
                                                data-index="288"
                                                data-week="Sat"
                                                data-month="Sep"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">17</span>
                                              </div>

                                              <div
                                                data-index="289"
                                                data-week="Sun"
                                                data-month="Sep"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">18</span>
                                              </div>

                                              <div
                                                data-index="290"
                                                data-week="Mon"
                                                data-month="Sep"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">19</span>
                                              </div>

                                              <div
                                                data-index="291"
                                                data-week="Tue"
                                                data-month="Sep"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">20</span>
                                              </div>

                                              <div
                                                data-index="292"
                                                data-week="Wed"
                                                data-month="Sep"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">21</span>
                                              </div>

                                              <div
                                                data-index="293"
                                                data-week="Thu"
                                                data-month="Sep"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">22</span>
                                              </div>

                                              <div
                                                data-index="294"
                                                data-week="Fri"
                                                data-month="Sep"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">23</span>
                                              </div>

                                              <div
                                                data-index="295"
                                                data-week="Sat"
                                                data-month="Sep"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">24</span>
                                              </div>

                                              <div
                                                data-index="296"
                                                data-week="Sun"
                                                data-month="Sep"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">25</span>
                                              </div>

                                              <div
                                                data-index="297"
                                                data-week="Mon"
                                                data-month="Sep"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">26</span>
                                              </div>

                                              <div
                                                data-index="298"
                                                data-week="Tue"
                                                data-month="Sep"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">27</span>
                                              </div>

                                              <div
                                                data-index="299"
                                                data-week="Wed"
                                                data-month="Sep"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">28</span>
                                              </div>

                                              <div
                                                data-index="300"
                                                data-week="Thu"
                                                data-month="Sep"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">29</span>
                                              </div>

                                              <div
                                                data-index="301"
                                                data-week="Fri"
                                                data-month="Sep"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">30</span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div class="swiper-slide">
                                          <div class="text-18 fw-500 text-center mb-20">
                                            October 2023
                                          </div>

                                          <div class="table-calendar js-calendar-single">
                                            <div class="table-calendar__header">
                                              <div>Mon</div>
                                              <div>Tue</div>
                                              <div>Wed</div>
                                              <div>Thu</div>
                                              <div>Fri</div>
                                              <div>Sat</div>
                                              <div>Sun</div>
                                            </div>

                                            <div class="table-calendar__grid overflow-hidden">
                                              <div
                                                data-index="302"
                                                data-week="Sun"
                                                data-month="Sep"
                                                class="table-calendar__cell lh-1 text-light-7"
                                              >
                                                <span class="js-date">25</span>
                                              </div>

                                              <div
                                                data-index="303"
                                                data-week="Mon"
                                                data-month="Sep"
                                                class="table-calendar__cell lh-1 text-light-7"
                                              >
                                                <span class="js-date">26</span>
                                              </div>

                                              <div
                                                data-index="304"
                                                data-week="Tue"
                                                data-month="Sep"
                                                class="table-calendar__cell lh-1 text-light-7"
                                              >
                                                <span class="js-date">27</span>
                                              </div>

                                              <div
                                                data-index="305"
                                                data-week="Wed"
                                                data-month="Sep"
                                                class="table-calendar__cell lh-1 text-light-7"
                                              >
                                                <span class="js-date">28</span>
                                              </div>

                                              <div
                                                data-index="306"
                                                data-week="Thu"
                                                data-month="Sep"
                                                class="table-calendar__cell lh-1 text-light-7"
                                              >
                                                <span class="js-date">29</span>
                                              </div>

                                              <div
                                                data-index="307"
                                                data-week="Fri"
                                                data-month="Sep"
                                                class="table-calendar__cell lh-1 text-light-7"
                                              >
                                                <span class="js-date">30</span>
                                              </div>

                                              <div
                                                data-index="308"
                                                data-week="Sat"
                                                data-month="Oct"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">1</span>
                                              </div>

                                              <div
                                                data-index="309"
                                                data-week="Sun"
                                                data-month="Oct"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">2</span>
                                              </div>

                                              <div
                                                data-index="310"
                                                data-week="Mon"
                                                data-month="Oct"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">3</span>
                                              </div>

                                              <div
                                                data-index="311"
                                                data-week="Tue"
                                                data-month="Oct"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">4</span>
                                              </div>

                                              <div
                                                data-index="312"
                                                data-week="Wed"
                                                data-month="Oct"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">5</span>
                                              </div>

                                              <div
                                                data-index="313"
                                                data-week="Thu"
                                                data-month="Oct"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">6</span>
                                              </div>

                                              <div
                                                data-index="314"
                                                data-week="Fri"
                                                data-month="Oct"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">7</span>
                                              </div>

                                              <div
                                                data-index="315"
                                                data-week="Sat"
                                                data-month="Oct"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">8</span>
                                              </div>

                                              <div
                                                data-index="316"
                                                data-week="Sun"
                                                data-month="Oct"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">2</span>
                                              </div>

                                              <div
                                                data-index="317"
                                                data-week="Mon"
                                                data-month="Oct"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">3</span>
                                              </div>

                                              <div
                                                data-index="318"
                                                data-week="Tue"
                                                data-month="Oct"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">4</span>
                                              </div>

                                              <div
                                                data-index="319"
                                                data-week="Wed"
                                                data-month="Oct"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">5</span>
                                              </div>

                                              <div
                                                data-index="320"
                                                data-week="Thu"
                                                data-month="Oct"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">6</span>
                                              </div>

                                              <div
                                                data-index="321"
                                                data-week="Fri"
                                                data-month="Oct"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">7</span>
                                              </div>

                                              <div
                                                data-index="322"
                                                data-week="Sat"
                                                data-month="Oct"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">8</span>
                                              </div>

                                              <div
                                                data-index="323"
                                                data-week="Sun"
                                                data-month="Oct"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">9</span>
                                              </div>

                                              <div
                                                data-index="324"
                                                data-week="Mon"
                                                data-month="Oct"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">10</span>
                                              </div>

                                              <div
                                                data-index="325"
                                                data-week="Tue"
                                                data-month="Oct"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">11</span>
                                              </div>

                                              <div
                                                data-index="326"
                                                data-week="Wed"
                                                data-month="Oct"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">12</span>
                                              </div>

                                              <div
                                                data-index="327"
                                                data-week="Thu"
                                                data-month="Oct"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">13</span>
                                              </div>

                                              <div
                                                data-index="328"
                                                data-week="Fri"
                                                data-month="Oct"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">14</span>
                                              </div>

                                              <div
                                                data-index="329"
                                                data-week="Sat"
                                                data-month="Oct"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">15</span>
                                              </div>

                                              <div
                                                data-index="330"
                                                data-week="Sun"
                                                data-month="Oct"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">16</span>
                                              </div>

                                              <div
                                                data-index="331"
                                                data-week="Mon"
                                                data-month="Oct"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">17</span>
                                              </div>

                                              <div
                                                data-index="332"
                                                data-week="Tue"
                                                data-month="Oct"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">18</span>
                                              </div>

                                              <div
                                                data-index="333"
                                                data-week="Wed"
                                                data-month="Oct"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">19</span>
                                              </div>

                                              <div
                                                data-index="334"
                                                data-week="Thu"
                                                data-month="Oct"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">20</span>
                                              </div>

                                              <div
                                                data-index="335"
                                                data-week="Fri"
                                                data-month="Oct"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">21</span>
                                              </div>

                                              <div
                                                data-index="336"
                                                data-week="Sat"
                                                data-month="Oct"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">22</span>
                                              </div>

                                              <div
                                                data-index="337"
                                                data-week="Sun"
                                                data-month="Oct"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">23</span>
                                              </div>

                                              <div
                                                data-index="338"
                                                data-week="Mon"
                                                data-month="Oct"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">24</span>
                                              </div>

                                              <div
                                                data-index="339"
                                                data-week="Tue"
                                                data-month="Oct"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">25</span>
                                              </div>

                                              <div
                                                data-index="340"
                                                data-week="Wed"
                                                data-month="Oct"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">26</span>
                                              </div>

                                              <div
                                                data-index="341"
                                                data-week="Thu"
                                                data-month="Oct"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">27</span>
                                              </div>

                                              <div
                                                data-index="342"
                                                data-week="Fri"
                                                data-month="Oct"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">28</span>
                                              </div>

                                              <div
                                                data-index="343"
                                                data-week="Sat"
                                                data-month="Oct"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">29</span>
                                              </div>

                                              <div
                                                data-index="344"
                                                data-week="Sun"
                                                data-month="Oct"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">30</span>
                                              </div>

                                              <div
                                                data-index="345"
                                                data-week="Mon"
                                                data-month="Oct"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">31</span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div class="swiper-slide">
                                          <div class="text-18 fw-500 text-center mb-20">
                                            November 2023
                                          </div>

                                          <div class="table-calendar js-calendar-single">
                                            <div class="table-calendar__header">
                                              <div>Mon</div>
                                              <div>Tue</div>
                                              <div>Wed</div>
                                              <div>Thu</div>
                                              <div>Fri</div>
                                              <div>Sat</div>
                                              <div>Sun</div>
                                            </div>

                                            <div class="table-calendar__grid overflow-hidden">
                                              <div
                                                data-index="346"
                                                data-week="Sun"
                                                data-month="Oct"
                                                class="table-calendar__cell lh-1 text-light-7"
                                              >
                                                <span class="js-date">30</span>
                                              </div>

                                              <div
                                                data-index="347"
                                                data-week="Mon"
                                                data-month="Oct"
                                                class="table-calendar__cell lh-1 text-light-7"
                                              >
                                                <span class="js-date">31</span>
                                              </div>

                                              <div
                                                data-index="348"
                                                data-week="Tue"
                                                data-month="Nov"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">1</span>
                                              </div>

                                              <div
                                                data-index="349"
                                                data-week="Wed"
                                                data-month="Nov"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">2</span>
                                              </div>

                                              <div
                                                data-index="350"
                                                data-week="Thu"
                                                data-month="Nov"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">3</span>
                                              </div>

                                              <div
                                                data-index="351"
                                                data-week="Fri"
                                                data-month="Nov"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">4</span>
                                              </div>

                                              <div
                                                data-index="352"
                                                data-week="Sat"
                                                data-month="Nov"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">5</span>
                                              </div>

                                              <div
                                                data-index="353"
                                                data-week="Sun"
                                                data-month="Nov"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">6</span>
                                              </div>

                                              <div
                                                data-index="354"
                                                data-week="Mon"
                                                data-month="Nov"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">7</span>
                                              </div>

                                              <div
                                                data-index="355"
                                                data-week="Tue"
                                                data-month="Nov"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">8</span>
                                              </div>

                                              <div
                                                data-index="356"
                                                data-week="Wed"
                                                data-month="Nov"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">2</span>
                                              </div>

                                              <div
                                                data-index="357"
                                                data-week="Thu"
                                                data-month="Nov"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">3</span>
                                              </div>

                                              <div
                                                data-index="358"
                                                data-week="Fri"
                                                data-month="Nov"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">4</span>
                                              </div>

                                              <div
                                                data-index="359"
                                                data-week="Sat"
                                                data-month="Nov"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">5</span>
                                              </div>

                                              <div
                                                data-index="360"
                                                data-week="Sun"
                                                data-month="Nov"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">6</span>
                                              </div>

                                              <div
                                                data-index="361"
                                                data-week="Mon"
                                                data-month="Nov"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">7</span>
                                              </div>

                                              <div
                                                data-index="362"
                                                data-week="Tue"
                                                data-month="Nov"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">8</span>
                                              </div>

                                              <div
                                                data-index="363"
                                                data-week="Wed"
                                                data-month="Nov"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">9</span>
                                              </div>

                                              <div
                                                data-index="364"
                                                data-week="Thu"
                                                data-month="Nov"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">10</span>
                                              </div>

                                              <div
                                                data-index="365"
                                                data-week="Fri"
                                                data-month="Nov"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">11</span>
                                              </div>

                                              <div
                                                data-index="366"
                                                data-week="Sat"
                                                data-month="Nov"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">12</span>
                                              </div>

                                              <div
                                                data-index="367"
                                                data-week="Sun"
                                                data-month="Nov"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">13</span>
                                              </div>

                                              <div
                                                data-index="368"
                                                data-week="Mon"
                                                data-month="Nov"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">14</span>
                                              </div>

                                              <div
                                                data-index="369"
                                                data-week="Tue"
                                                data-month="Nov"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">15</span>
                                              </div>

                                              <div
                                                data-index="370"
                                                data-week="Wed"
                                                data-month="Nov"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">16</span>
                                              </div>

                                              <div
                                                data-index="371"
                                                data-week="Thu"
                                                data-month="Nov"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">17</span>
                                              </div>

                                              <div
                                                data-index="372"
                                                data-week="Fri"
                                                data-month="Nov"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">18</span>
                                              </div>

                                              <div
                                                data-index="373"
                                                data-week="Sat"
                                                data-month="Nov"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">19</span>
                                              </div>

                                              <div
                                                data-index="374"
                                                data-week="Sun"
                                                data-month="Nov"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">20</span>
                                              </div>

                                              <div
                                                data-index="375"
                                                data-week="Mon"
                                                data-month="Nov"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">21</span>
                                              </div>

                                              <div
                                                data-index="376"
                                                data-week="Tue"
                                                data-month="Nov"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">22</span>
                                              </div>

                                              <div
                                                data-index="377"
                                                data-week="Wed"
                                                data-month="Nov"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">23</span>
                                              </div>

                                              <div
                                                data-index="378"
                                                data-week="Thu"
                                                data-month="Nov"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">24</span>
                                              </div>

                                              <div
                                                data-index="379"
                                                data-week="Fri"
                                                data-month="Nov"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">25</span>
                                              </div>

                                              <div
                                                data-index="380"
                                                data-week="Sat"
                                                data-month="Nov"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">26</span>
                                              </div>

                                              <div
                                                data-index="381"
                                                data-week="Sun"
                                                data-month="Nov"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">27</span>
                                              </div>

                                              <div
                                                data-index="382"
                                                data-week="Mon"
                                                data-month="Nov"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">28</span>
                                              </div>

                                              <div
                                                data-index="383"
                                                data-week="Tue"
                                                data-month="Nov"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">29</span>
                                              </div>

                                              <div
                                                data-index="384"
                                                data-week="Wed"
                                                data-month="Nov"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">30</span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div class="swiper-slide">
                                          <div class="text-18 fw-500 text-center mb-20">
                                            December 2023
                                          </div>

                                          <div class="table-calendar js-calendar-single">
                                            <div class="table-calendar__header">
                                              <div>Mon</div>
                                              <div>Tue</div>
                                              <div>Wed</div>
                                              <div>Thu</div>
                                              <div>Fri</div>
                                              <div>Sat</div>
                                              <div>Sun</div>
                                            </div>

                                            <div class="table-calendar__grid overflow-hidden">
                                              <div
                                                data-index="385"
                                                data-week="Sun"
                                                data-month="Nov"
                                                class="table-calendar__cell lh-1 text-light-7"
                                              >
                                                <span class="js-date">27</span>
                                              </div>

                                              <div
                                                data-index="386"
                                                data-week="Mon"
                                                data-month="Nov"
                                                class="table-calendar__cell lh-1 text-light-7"
                                              >
                                                <span class="js-date">28</span>
                                              </div>

                                              <div
                                                data-index="387"
                                                data-week="Tue"
                                                data-month="Nov"
                                                class="table-calendar__cell lh-1 text-light-7"
                                              >
                                                <span class="js-date">29</span>
                                              </div>

                                              <div
                                                data-index="388"
                                                data-week="Wed"
                                                data-month="Nov"
                                                class="table-calendar__cell lh-1 text-light-7"
                                              >
                                                <span class="js-date">30</span>
                                              </div>

                                              <div
                                                data-index="389"
                                                data-week="Thu"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">1</span>
                                              </div>

                                              <div
                                                data-index="390"
                                                data-week="Fri"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">2</span>
                                              </div>

                                              <div
                                                data-index="391"
                                                data-week="Sat"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">3</span>
                                              </div>

                                              <div
                                                data-index="392"
                                                data-week="Sun"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">4</span>
                                              </div>

                                              <div
                                                data-index="393"
                                                data-week="Mon"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">5</span>
                                              </div>

                                              <div
                                                data-index="394"
                                                data-week="Tue"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">6</span>
                                              </div>

                                              <div
                                                data-index="395"
                                                data-week="Wed"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">7</span>
                                              </div>

                                              <div
                                                data-index="396"
                                                data-week="Thu"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">8</span>
                                              </div>

                                              <div
                                                data-index="397"
                                                data-week="Fri"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">2</span>
                                              </div>

                                              <div
                                                data-index="398"
                                                data-week="Sat"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">3</span>
                                              </div>

                                              <div
                                                data-index="399"
                                                data-week="Sun"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">4</span>
                                              </div>

                                              <div
                                                data-index="400"
                                                data-week="Mon"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">5</span>
                                              </div>

                                              <div
                                                data-index="401"
                                                data-week="Tue"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">6</span>
                                              </div>

                                              <div
                                                data-index="402"
                                                data-week="Wed"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">7</span>
                                              </div>

                                              <div
                                                data-index="403"
                                                data-week="Thu"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">8</span>
                                              </div>

                                              <div
                                                data-index="404"
                                                data-week="Fri"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">9</span>
                                              </div>

                                              <div
                                                data-index="405"
                                                data-week="Sat"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">10</span>
                                              </div>

                                              <div
                                                data-index="406"
                                                data-week="Sun"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">11</span>
                                              </div>

                                              <div
                                                data-index="407"
                                                data-week="Mon"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">12</span>
                                              </div>

                                              <div
                                                data-index="408"
                                                data-week="Tue"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">13</span>
                                              </div>

                                              <div
                                                data-index="409"
                                                data-week="Wed"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">14</span>
                                              </div>

                                              <div
                                                data-index="410"
                                                data-week="Thu"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">15</span>
                                              </div>

                                              <div
                                                data-index="411"
                                                data-week="Fri"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">16</span>
                                              </div>

                                              <div
                                                data-index="412"
                                                data-week="Sat"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">17</span>
                                              </div>

                                              <div
                                                data-index="413"
                                                data-week="Sun"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">18</span>
                                              </div>

                                              <div
                                                data-index="414"
                                                data-week="Mon"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">19</span>
                                              </div>

                                              <div
                                                data-index="415"
                                                data-week="Tue"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">20</span>
                                              </div>

                                              <div
                                                data-index="416"
                                                data-week="Wed"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">21</span>
                                              </div>

                                              <div
                                                data-index="417"
                                                data-week="Thu"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">22</span>
                                              </div>

                                              <div
                                                data-index="418"
                                                data-week="Fri"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">23</span>
                                              </div>

                                              <div
                                                data-index="419"
                                                data-week="Sat"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">24</span>
                                              </div>

                                              <div
                                                data-index="420"
                                                data-week="Sun"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">25</span>
                                              </div>

                                              <div
                                                data-index="421"
                                                data-week="Mon"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">26</span>
                                              </div>

                                              <div
                                                data-index="422"
                                                data-week="Tue"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">27</span>
                                              </div>

                                              <div
                                                data-index="423"
                                                data-week="Wed"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">28</span>
                                              </div>

                                              <div
                                                data-index="424"
                                                data-week="Thu"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">29</span>
                                              </div>

                                              <div
                                                data-index="425"
                                                data-week="Fri"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">30</span>
                                              </div>

                                              <div
                                                data-index="426"
                                                data-week="Sat"
                                                data-month="Dec"
                                                class="table-calendar__cell lh-1 "
                                              >
                                                <span class="js-date">31</span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <button class="calendar-icon -left js-calendar-prev z-2">
                                        <i class="icon-arrow-left text-20"></i>
                                      </button>

                                      <button class="calendar-icon -right js-calendar-next z-2">
                                        <i class="icon-arrow-right text-20"></i>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div> */}
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
                  <TourCard key={index} {...tour} />
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
