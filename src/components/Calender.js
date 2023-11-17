import React, { useEffect } from "react";

function Calender() {
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
  function closeAllDropdowns() {
    const targets = document.querySelectorAll(".js-form-dd");
    if (!targets) return;

    targets.forEach((el) => {
      if (el.querySelector(".is-active")) {
        el.querySelector(".is-active").classList.remove("is-active");
      }
    });

    const alldds = document.querySelectorAll(".js-dropdown.is-active");

    alldds.forEach((el) => {
      el.classList.remove("is-active");
    });
  }
  useEffect(() => {
    // Call the init function from the Accordion object
    //   Accordion.init();
    calendarSlider();
    calendarInteraction();
  }, []);
  return (
    <div>
      <div className="searchMenu-date mt-30 js-form-dd js-calendar">
        <div
          className="searchMenu-date__field"
          data-x-dd="searchMenu-date"
          data-x-dd-toggle="-is-active"
        >
          <div className="overflow-hidden js-calendar-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="text-18 fw-500 text-center mb-20">
                  January 2023
                </div>

                <div className="table-calendar js-calendar-single">
                  <div className="table-calendar__header">
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                    <div>Sun</div>
                  </div>

                  <div className="table-calendar__grid overflow-hidden">
                    <div
                      data-index="1"
                      data-week="Sun"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 text-light-7"
                    >
                      <span className="js-date">26</span>
                    </div>

                    <div
                      data-index="2"
                      data-week="Mon"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 text-light-7"
                    >
                      <span className="js-date">27</span>
                    </div>

                    <div
                      data-index="3"
                      data-week="Tue"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 text-light-7"
                    >
                      <span className="js-date">28</span>
                    </div>

                    <div
                      data-index="4"
                      data-week="Wed"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 text-light-7"
                    >
                      <span className="js-date">29</span>
                    </div>

                    <div
                      data-index="5"
                      data-week="Thu"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 text-light-7"
                    >
                      <span className="js-date">30</span>
                    </div>

                    <div
                      data-index="6"
                      data-week="Fri"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 text-light-7"
                    >
                      <span className="js-date">31</span>
                    </div>

                    <div
                      data-index="7"
                      data-week="Sat"
                      data-month="Jan"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">1</span>
                    </div>

                    <div
                      data-index="8"
                      data-week="Sun"
                      data-month="Jan"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">2</span>
                    </div>

                    <div
                      data-index="9"
                      data-week="Mon"
                      data-month="Jan"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">3</span>
                    </div>

                    <div
                      data-index="10"
                      data-week="Tue"
                      data-month="Jan"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">4</span>
                    </div>

                    <div
                      data-index="11"
                      data-week="Wed"
                      data-month="Jan"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">5</span>
                    </div>

                    <div
                      data-index="12"
                      data-week="Thu"
                      data-month="Jan"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">6</span>
                    </div>

                    <div
                      data-index="13"
                      data-week="Fri"
                      data-month="Jan"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">7</span>
                    </div>

                    <div
                      data-index="14"
                      data-week="Sat"
                      data-month="Jan"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">8</span>
                    </div>

                    <div
                      data-index="15"
                      data-week="Sun"
                      data-month="Jan"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">9</span>
                    </div>

                    <div
                      data-index="16"
                      data-week="Mon"
                      data-month="Jan"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">10</span>
                    </div>

                    <div
                      data-index="17"
                      data-week="Tue"
                      data-month="Jan"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">11</span>
                    </div>

                    <div
                      data-index="18"
                      data-week="Wed"
                      data-month="Jan"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">12</span>
                    </div>

                    <div
                      data-index="19"
                      data-week="Thu"
                      data-month="Jan"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">13</span>
                    </div>

                    <div
                      data-index="20"
                      data-week="Fri"
                      data-month="Jan"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">14</span>
                    </div>

                    <div
                      data-index="21"
                      data-week="Sat"
                      data-month="Jan"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">15</span>
                    </div>

                    <div
                      data-index="22"
                      data-week="Sun"
                      data-month="Jan"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">16</span>
                    </div>

                    <div
                      data-index="23"
                      data-week="Mon"
                      data-month="Jan"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">17</span>
                    </div>

                    <div
                      data-index="24"
                      data-week="Tue"
                      data-month="Jan"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">18</span>
                    </div>

                    <div
                      data-index="25"
                      data-week="Wed"
                      data-month="Jan"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">19</span>
                    </div>

                    <div
                      data-index="26"
                      data-week="Thu"
                      data-month="Jan"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">20</span>
                    </div>

                    <div
                      data-index="27"
                      data-week="Fri"
                      data-month="Jan"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">21</span>
                    </div>

                    <div
                      data-index="28"
                      data-week="Sat"
                      data-month="Jan"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">22</span>
                    </div>

                    <div
                      data-index="29"
                      data-week="Sun"
                      data-month="Jan"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">23</span>
                    </div>

                    <div
                      data-index="30"
                      data-week="Mon"
                      data-month="Jan"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">24</span>
                    </div>

                    <div
                      data-index="31"
                      data-week="Tue"
                      data-month="Jan"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">25</span>
                    </div>

                    <div
                      data-index="32"
                      data-week="Wed"
                      data-month="Jan"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">26</span>
                    </div>

                    <div
                      data-index="33"
                      data-week="Thu"
                      data-month="Jan"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">27</span>
                    </div>

                    <div
                      data-index="34"
                      data-week="Fri"
                      data-month="Jan"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">28</span>
                    </div>

                    <div
                      data-index="35"
                      data-week="Sat"
                      data-month="Jan"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">29</span>
                    </div>

                    <div
                      data-index="36"
                      data-week="Sun"
                      data-month="Jan"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">30</span>
                    </div>

                    <div
                      data-index="37"
                      data-week="Mon"
                      data-month="Jan"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">31</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="text-18 fw-500 text-center mb-20">
                  February 2023
                </div>

                <div className="table-calendar js-calendar-single">
                  <div className="table-calendar__header">
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                    <div>Sun</div>
                  </div>

                  <div className="table-calendar__grid overflow-hidden">
                    <div
                      data-index="38"
                      data-week="Sun"
                      data-month="Jan"
                      className="table-calendar__cell lh-1 text-light-7"
                    >
                      <span className="js-date">30</span>
                    </div>

                    <div
                      data-index="39"
                      data-week="Mon"
                      data-month="Jan"
                      className="table-calendar__cell lh-1 text-light-7"
                    >
                      <span className="js-date">31</span>
                    </div>

                    <div
                      data-index="40"
                      data-week="Tue"
                      data-month="Feb"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">1</span>
                    </div>

                    <div
                      data-index="41"
                      data-week="Wed"
                      data-month="Feb"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">2</span>
                    </div>

                    <div
                      data-index="42"
                      data-week="Thu"
                      data-month="Feb"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">3</span>
                    </div>

                    <div
                      data-index="43"
                      data-week="Fri"
                      data-month="Feb"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">4</span>
                    </div>

                    <div
                      data-index="44"
                      data-week="Sat"
                      data-month="Feb"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">5</span>
                    </div>

                    <div
                      data-index="45"
                      data-week="Sun"
                      data-month="Feb"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">6</span>
                    </div>

                    <div
                      data-index="46"
                      data-week="Mon"
                      data-month="Feb"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">7</span>
                    </div>

                    <div
                      data-index="47"
                      data-week="Tue"
                      data-month="Feb"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">8</span>
                    </div>

                    <div
                      data-index="48"
                      data-week="Wed"
                      data-month="Feb"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">9</span>
                    </div>

                    <div
                      data-index="49"
                      data-week="Thu"
                      data-month="Feb"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">10</span>
                    </div>

                    <div
                      data-index="50"
                      data-week="Fri"
                      data-month="Feb"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">11</span>
                    </div>

                    <div
                      data-index="51"
                      data-week="Sat"
                      data-month="Feb"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">12</span>
                    </div>

                    <div
                      data-index="52"
                      data-week="Sun"
                      data-month="Feb"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">13</span>
                    </div>

                    <div
                      data-index="53"
                      data-week="Mon"
                      data-month="Feb"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">14</span>
                    </div>

                    <div
                      data-index="54"
                      data-week="Tue"
                      data-month="Feb"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">15</span>
                    </div>

                    <div
                      data-index="55"
                      data-week="Wed"
                      data-month="Feb"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">16</span>
                    </div>

                    <div
                      data-index="56"
                      data-week="Thu"
                      data-month="Feb"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">17</span>
                    </div>

                    <div
                      data-index="57"
                      data-week="Fri"
                      data-month="Feb"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">18</span>
                    </div>

                    <div
                      data-index="58"
                      data-week="Sat"
                      data-month="Feb"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">19</span>
                    </div>

                    <div
                      data-index="59"
                      data-week="Sun"
                      data-month="Feb"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">20</span>
                    </div>

                    <div
                      data-index="60"
                      data-week="Mon"
                      data-month="Feb"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">21</span>
                    </div>

                    <div
                      data-index="61"
                      data-week="Tue"
                      data-month="Feb"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">22</span>
                    </div>

                    <div
                      data-index="62"
                      data-week="Wed"
                      data-month="Feb"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">23</span>
                    </div>

                    <div
                      data-index="63"
                      data-week="Thu"
                      data-month="Feb"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">24</span>
                    </div>

                    <div
                      data-index="64"
                      data-week="Fri"
                      data-month="Feb"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">25</span>
                    </div>

                    <div
                      data-index="65"
                      data-week="Sat"
                      data-month="Feb"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">26</span>
                    </div>

                    <div
                      data-index="66"
                      data-week="Sun"
                      data-month="Feb"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">27</span>
                    </div>

                    <div
                      data-index="67"
                      data-week="Mon"
                      data-month="Feb"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">28</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="text-18 fw-500 text-center mb-20">
                  March 2023
                </div>

                <div className="table-calendar js-calendar-single">
                  <div className="table-calendar__header">
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                    <div>Sun</div>
                  </div>

                  <div className="table-calendar__grid overflow-hidden">
                    <div
                      data-index="68"
                      data-week="Sun"
                      data-month="Feb"
                      className="table-calendar__cell lh-1 text-light-7"
                    >
                      <span className="js-date">27</span>
                    </div>

                    <div
                      data-index="69"
                      data-week="Mon"
                      data-month="Feb"
                      className="table-calendar__cell lh-1 text-light-7"
                    >
                      <span className="js-date">28</span>
                    </div>

                    <div
                      data-index="70"
                      data-week="Tue"
                      data-month="Mar"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">1</span>
                    </div>

                    <div
                      data-index="71"
                      data-week="Wed"
                      data-month="Mar"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">2</span>
                    </div>

                    <div
                      data-index="72"
                      data-week="Thu"
                      data-month="Mar"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">3</span>
                    </div>

                    <div
                      data-index="73"
                      data-week="Fri"
                      data-month="Mar"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">4</span>
                    </div>

                    <div
                      data-index="74"
                      data-week="Sat"
                      data-month="Mar"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">5</span>
                    </div>

                    <div
                      data-index="75"
                      data-week="Sun"
                      data-month="Mar"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">6</span>
                    </div>

                    <div
                      data-index="76"
                      data-week="Mon"
                      data-month="Mar"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">7</span>
                    </div>

                    <div
                      data-index="77"
                      data-week="Tue"
                      data-month="Mar"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">8</span>
                    </div>

                    <div
                      data-index="78"
                      data-week="Wed"
                      data-month="Mar"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">9</span>
                    </div>

                    <div
                      data-index="79"
                      data-week="Thu"
                      data-month="Mar"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">10</span>
                    </div>

                    <div
                      data-index="80"
                      data-week="Fri"
                      data-month="Mar"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">11</span>
                    </div>

                    <div
                      data-index="81"
                      data-week="Sat"
                      data-month="Mar"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">12</span>
                    </div>

                    <div
                      data-index="82"
                      data-week="Sun"
                      data-month="Mar"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">13</span>
                    </div>

                    <div
                      data-index="83"
                      data-week="Mon"
                      data-month="Mar"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">14</span>
                    </div>

                    <div
                      data-index="84"
                      data-week="Tue"
                      data-month="Mar"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">15</span>
                    </div>

                    <div
                      data-index="85"
                      data-week="Wed"
                      data-month="Mar"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">16</span>
                    </div>

                    <div
                      data-index="86"
                      data-week="Thu"
                      data-month="Mar"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">17</span>
                    </div>

                    <div
                      data-index="87"
                      data-week="Fri"
                      data-month="Mar"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">18</span>
                    </div>

                    <div
                      data-index="88"
                      data-week="Sat"
                      data-month="Mar"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">19</span>
                    </div>

                    <div
                      data-index="89"
                      data-week="Sun"
                      data-month="Mar"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">20</span>
                    </div>

                    <div
                      data-index="90"
                      data-week="Mon"
                      data-month="Mar"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">21</span>
                    </div>

                    <div
                      data-index="91"
                      data-week="Tue"
                      data-month="Mar"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">22</span>
                    </div>

                    <div
                      data-index="92"
                      data-week="Wed"
                      data-month="Mar"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">23</span>
                    </div>

                    <div
                      data-index="93"
                      data-week="Thu"
                      data-month="Mar"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">24</span>
                    </div>

                    <div
                      data-index="94"
                      data-week="Fri"
                      data-month="Mar"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">25</span>
                    </div>

                    <div
                      data-index="95"
                      data-week="Sat"
                      data-month="Mar"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">26</span>
                    </div>

                    <div
                      data-index="96"
                      data-week="Sun"
                      data-month="Mar"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">27</span>
                    </div>

                    <div
                      data-index="97"
                      data-week="Mon"
                      data-month="Mar"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">28</span>
                    </div>

                    <div
                      data-index="98"
                      data-week="Tue"
                      data-month="Mar"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">29</span>
                    </div>

                    <div
                      data-index="99"
                      data-week="Wed"
                      data-month="Mar"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">30</span>
                    </div>

                    <div
                      data-index="100"
                      data-week="Thu"
                      data-month="Mar"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">31</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="text-18 fw-500 text-center mb-20">
                  April 2023
                </div>

                <div className="table-calendar js-calendar-single">
                  <div className="table-calendar__header">
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                    <div>Sun</div>
                  </div>

                  <div className="table-calendar__grid overflow-hidden">
                    <div
                      data-index="101"
                      data-week="Sun"
                      data-month="Mar"
                      className="table-calendar__cell lh-1 text-light-7"
                    >
                      <span className="js-date">27</span>
                    </div>

                    <div
                      data-index="102"
                      data-week="Mon"
                      data-month="Mar"
                      className="table-calendar__cell lh-1 text-light-7"
                    >
                      <span className="js-date">28</span>
                    </div>

                    <div
                      data-index="103"
                      data-week="Tue"
                      data-month="Mar"
                      className="table-calendar__cell lh-1 text-light-7"
                    >
                      <span className="js-date">29</span>
                    </div>

                    <div
                      data-index="104"
                      data-week="Wed"
                      data-month="Mar"
                      className="table-calendar__cell lh-1 text-light-7"
                    >
                      <span className="js-date">30</span>
                    </div>

                    <div
                      data-index="105"
                      data-week="Thu"
                      data-month="Mar"
                      className="table-calendar__cell lh-1 text-light-7"
                    >
                      <span className="js-date">31</span>
                    </div>

                    <div
                      data-index="106"
                      data-week="Fri"
                      data-month="Apr"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">1</span>
                    </div>

                    <div
                      data-index="107"
                      data-week="Sat"
                      data-month="Apr"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">2</span>
                    </div>

                    <div
                      data-index="108"
                      data-week="Sun"
                      data-month="Apr"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">3</span>
                    </div>

                    <div
                      data-index="109"
                      data-week="Mon"
                      data-month="Apr"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">4</span>
                    </div>

                    <div
                      data-index="110"
                      data-week="Tue"
                      data-month="Apr"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">5</span>
                    </div>

                    <div
                      data-index="111"
                      data-week="Wed"
                      data-month="Apr"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">6</span>
                    </div>

                    <div
                      data-index="112"
                      data-week="Thu"
                      data-month="Apr"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">7</span>
                    </div>

                    <div
                      data-index="113"
                      data-week="Fri"
                      data-month="Apr"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">8</span>
                    </div>

                    <div
                      data-index="114"
                      data-week="Sat"
                      data-month="Apr"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">9</span>
                    </div>

                    <div
                      data-index="115"
                      data-week="Sun"
                      data-month="Apr"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">10</span>
                    </div>

                    <div
                      data-index="116"
                      data-week="Mon"
                      data-month="Apr"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">11</span>
                    </div>

                    <div
                      data-index="117"
                      data-week="Tue"
                      data-month="Apr"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">12</span>
                    </div>

                    <div
                      data-index="118"
                      data-week="Wed"
                      data-month="Apr"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">13</span>
                    </div>

                    <div
                      data-index="119"
                      data-week="Thu"
                      data-month="Apr"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">14</span>
                    </div>

                    <div
                      data-index="120"
                      data-week="Fri"
                      data-month="Apr"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">15</span>
                    </div>

                    <div
                      data-index="121"
                      data-week="Sat"
                      data-month="Apr"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">16</span>
                    </div>

                    <div
                      data-index="122"
                      data-week="Sun"
                      data-month="Apr"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">17</span>
                    </div>

                    <div
                      data-index="123"
                      data-week="Mon"
                      data-month="Apr"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">18</span>
                    </div>

                    <div
                      data-index="124"
                      data-week="Tue"
                      data-month="Apr"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">19</span>
                    </div>

                    <div
                      data-index="125"
                      data-week="Wed"
                      data-month="Apr"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">20</span>
                    </div>

                    <div
                      data-index="126"
                      data-week="Thu"
                      data-month="Apr"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">21</span>
                    </div>

                    <div
                      data-index="127"
                      data-week="Fri"
                      data-month="Apr"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">22</span>
                    </div>

                    <div
                      data-index="128"
                      data-week="Sat"
                      data-month="Apr"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">23</span>
                    </div>

                    <div
                      data-index="129"
                      data-week="Sun"
                      data-month="Apr"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">24</span>
                    </div>

                    <div
                      data-index="130"
                      data-week="Mon"
                      data-month="Apr"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">25</span>
                    </div>

                    <div
                      data-index="131"
                      data-week="Tue"
                      data-month="Apr"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">26</span>
                    </div>

                    <div
                      data-index="132"
                      data-week="Wed"
                      data-month="Apr"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">27</span>
                    </div>

                    <div
                      data-index="133"
                      data-week="Thu"
                      data-month="Apr"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">28</span>
                    </div>

                    <div
                      data-index="134"
                      data-week="Fri"
                      data-month="Apr"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">29</span>
                    </div>

                    <div
                      data-index="135"
                      data-week="Sat"
                      data-month="Apr"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">30</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="text-18 fw-500 text-center mb-20">May 2023</div>

                <div className="table-calendar js-calendar-single">
                  <div className="table-calendar__header">
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                    <div>Sun</div>
                  </div>

                  <div className="table-calendar__grid overflow-hidden">
                    <div
                      data-index="136"
                      data-week="Sun"
                      data-month="May"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">1</span>
                    </div>

                    <div
                      data-index="137"
                      data-week="Mon"
                      data-month="May"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">2</span>
                    </div>

                    <div
                      data-index="138"
                      data-week="Tue"
                      data-month="May"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">3</span>
                    </div>

                    <div
                      data-index="139"
                      data-week="Wed"
                      data-month="May"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">4</span>
                    </div>

                    <div
                      data-index="140"
                      data-week="Thu"
                      data-month="May"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">5</span>
                    </div>

                    <div
                      data-index="141"
                      data-week="Fri"
                      data-month="May"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">6</span>
                    </div>

                    <div
                      data-index="142"
                      data-week="Sat"
                      data-month="May"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">7</span>
                    </div>

                    <div
                      data-index="143"
                      data-week="Sun"
                      data-month="May"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">8</span>
                    </div>

                    <div
                      data-index="144"
                      data-week="Mon"
                      data-month="May"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">9</span>
                    </div>

                    <div
                      data-index="145"
                      data-week="Tue"
                      data-month="May"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">10</span>
                    </div>

                    <div
                      data-index="146"
                      data-week="Wed"
                      data-month="May"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">11</span>
                    </div>

                    <div
                      data-index="147"
                      data-week="Thu"
                      data-month="May"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">12</span>
                    </div>

                    <div
                      data-index="148"
                      data-week="Fri"
                      data-month="May"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">13</span>
                    </div>

                    <div
                      data-index="149"
                      data-week="Sat"
                      data-month="May"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">14</span>
                    </div>

                    <div
                      data-index="150"
                      data-week="Sun"
                      data-month="May"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">15</span>
                    </div>

                    <div
                      data-index="151"
                      data-week="Mon"
                      data-month="May"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">16</span>
                    </div>

                    <div
                      data-index="152"
                      data-week="Tue"
                      data-month="May"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">17</span>
                    </div>

                    <div
                      data-index="153"
                      data-week="Wed"
                      data-month="May"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">18</span>
                    </div>

                    <div
                      data-index="154"
                      data-week="Thu"
                      data-month="May"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">19</span>
                    </div>

                    <div
                      data-index="155"
                      data-week="Fri"
                      data-month="May"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">20</span>
                    </div>

                    <div
                      data-index="156"
                      data-week="Sat"
                      data-month="May"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">21</span>
                    </div>

                    <div
                      data-index="157"
                      data-week="Sun"
                      data-month="May"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">22</span>
                    </div>

                    <div
                      data-index="158"
                      data-week="Mon"
                      data-month="May"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">23</span>
                    </div>

                    <div
                      data-index="159"
                      data-week="Tue"
                      data-month="May"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">24</span>
                    </div>

                    <div
                      data-index="160"
                      data-week="Wed"
                      data-month="May"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">25</span>
                    </div>

                    <div
                      data-index="161"
                      data-week="Thu"
                      data-month="May"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">26</span>
                    </div>

                    <div
                      data-index="162"
                      data-week="Fri"
                      data-month="May"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">27</span>
                    </div>

                    <div
                      data-index="163"
                      data-week="Sat"
                      data-month="May"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">28</span>
                    </div>

                    <div
                      data-index="164"
                      data-week="Sun"
                      data-month="May"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">29</span>
                    </div>

                    <div
                      data-index="165"
                      data-week="Mon"
                      data-month="May"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">30</span>
                    </div>

                    <div
                      data-index="166"
                      data-week="Tue"
                      data-month="May"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">31</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="text-18 fw-500 text-center mb-20">
                  June 2023
                </div>

                <div className="table-calendar js-calendar-single">
                  <div className="table-calendar__header">
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                    <div>Sun</div>
                  </div>

                  <div className="table-calendar__grid overflow-hidden">
                    <div
                      data-index="167"
                      data-week="Sun"
                      data-month="May"
                      className="table-calendar__cell lh-1 text-light-7"
                    >
                      <span className="js-date">29</span>
                    </div>

                    <div
                      data-index="168"
                      data-week="Mon"
                      data-month="May"
                      className="table-calendar__cell lh-1 text-light-7"
                    >
                      <span className="js-date">30</span>
                    </div>

                    <div
                      data-index="169"
                      data-week="Tue"
                      data-month="May"
                      className="table-calendar__cell lh-1 text-light-7"
                    >
                      <span className="js-date">31</span>
                    </div>

                    <div
                      data-index="170"
                      data-week="Wed"
                      data-month="Jun"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">1</span>
                    </div>

                    <div
                      data-index="171"
                      data-week="Thu"
                      data-month="Jun"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">2</span>
                    </div>

                    <div
                      data-index="172"
                      data-week="Fri"
                      data-month="Jun"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">3</span>
                    </div>

                    <div
                      data-index="173"
                      data-week="Sat"
                      data-month="Jun"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">4</span>
                    </div>

                    <div
                      data-index="174"
                      data-week="Sun"
                      data-month="Jun"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">5</span>
                    </div>

                    <div
                      data-index="175"
                      data-week="Mon"
                      data-month="Jun"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">6</span>
                    </div>

                    <div
                      data-index="176"
                      data-week="Tue"
                      data-month="Jun"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">7</span>
                    </div>

                    <div
                      data-index="177"
                      data-week="Wed"
                      data-month="Jun"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">8</span>
                    </div>

                    <div
                      data-index="178"
                      data-week="Thu"
                      data-month="Jun"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">9</span>
                    </div>

                    <div
                      data-index="179"
                      data-week="Fri"
                      data-month="Jun"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">10</span>
                    </div>

                    <div
                      data-index="180"
                      data-week="Sat"
                      data-month="Jun"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">11</span>
                    </div>

                    <div
                      data-index="181"
                      data-week="Sun"
                      data-month="Jun"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">12</span>
                    </div>

                    <div
                      data-index="182"
                      data-week="Mon"
                      data-month="Jun"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">13</span>
                    </div>

                    <div
                      data-index="183"
                      data-week="Tue"
                      data-month="Jun"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">14</span>
                    </div>

                    <div
                      data-index="184"
                      data-week="Wed"
                      data-month="Jun"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">15</span>
                    </div>

                    <div
                      data-index="185"
                      data-week="Thu"
                      data-month="Jun"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">16</span>
                    </div>

                    <div
                      data-index="186"
                      data-week="Fri"
                      data-month="Jun"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">17</span>
                    </div>

                    <div
                      data-index="187"
                      data-week="Sat"
                      data-month="Jun"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">18</span>
                    </div>

                    <div
                      data-index="188"
                      data-week="Sun"
                      data-month="Jun"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">19</span>
                    </div>

                    <div
                      data-index="189"
                      data-week="Mon"
                      data-month="Jun"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">20</span>
                    </div>

                    <div
                      data-index="190"
                      data-week="Tue"
                      data-month="Jun"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">21</span>
                    </div>

                    <div
                      data-index="191"
                      data-week="Wed"
                      data-month="Jun"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">22</span>
                    </div>

                    <div
                      data-index="192"
                      data-week="Thu"
                      data-month="Jun"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">23</span>
                    </div>

                    <div
                      data-index="193"
                      data-week="Fri"
                      data-month="Jun"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">24</span>
                    </div>

                    <div
                      data-index="194"
                      data-week="Sat"
                      data-month="Jun"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">25</span>
                    </div>

                    <div
                      data-index="195"
                      data-week="Sun"
                      data-month="Jun"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">26</span>
                    </div>

                    <div
                      data-index="196"
                      data-week="Mon"
                      data-month="Jun"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">27</span>
                    </div>

                    <div
                      data-index="197"
                      data-week="Tue"
                      data-month="Jun"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">28</span>
                    </div>

                    <div
                      data-index="198"
                      data-week="Wed"
                      data-month="Jun"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">29</span>
                    </div>

                    <div
                      data-index="199"
                      data-week="Thu"
                      data-month="Jun"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">30</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="text-18 fw-500 text-center mb-20">
                  July 2023
                </div>

                <div className="table-calendar js-calendar-single">
                  <div className="table-calendar__header">
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                    <div>Sun</div>
                  </div>

                  <div className="table-calendar__grid overflow-hidden">
                    <div
                      data-index="200"
                      data-week="Sun"
                      data-month="Jun"
                      className="table-calendar__cell lh-1 text-light-7"
                    >
                      <span className="js-date">26</span>
                    </div>

                    <div
                      data-index="201"
                      data-week="Mon"
                      data-month="Jun"
                      className="table-calendar__cell lh-1 text-light-7"
                    >
                      <span className="js-date">27</span>
                    </div>

                    <div
                      data-index="202"
                      data-week="Tue"
                      data-month="Jun"
                      className="table-calendar__cell lh-1 text-light-7"
                    >
                      <span className="js-date">28</span>
                    </div>

                    <div
                      data-index="203"
                      data-week="Wed"
                      data-month="Jun"
                      className="table-calendar__cell lh-1 text-light-7"
                    >
                      <span className="js-date">29</span>
                    </div>

                    <div
                      data-index="204"
                      data-week="Thu"
                      data-month="Jun"
                      className="table-calendar__cell lh-1 text-light-7"
                    >
                      <span className="js-date">30</span>
                    </div>

                    <div
                      data-index="205"
                      data-week="Fri"
                      data-month="Jul"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">1</span>
                    </div>

                    <div
                      data-index="206"
                      data-week="Sat"
                      data-month="Jul"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">2</span>
                    </div>

                    <div
                      data-index="207"
                      data-week="Sun"
                      data-month="Jul"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">3</span>
                    </div>

                    <div
                      data-index="208"
                      data-week="Mon"
                      data-month="Jul"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">4</span>
                    </div>

                    <div
                      data-index="209"
                      data-week="Tue"
                      data-month="Jul"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">5</span>
                    </div>

                    <div
                      data-index="210"
                      data-week="Wed"
                      data-month="Jul"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">6</span>
                    </div>

                    <div
                      data-index="211"
                      data-week="Thu"
                      data-month="Jul"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">7</span>
                    </div>

                    <div
                      data-index="212"
                      data-week="Fri"
                      data-month="Jul"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">8</span>
                    </div>

                    <div
                      data-index="213"
                      data-week="Sat"
                      data-month="Jul"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">9</span>
                    </div>

                    <div
                      data-index="214"
                      data-week="Sun"
                      data-month="Jul"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">10</span>
                    </div>

                    <div
                      data-index="215"
                      data-week="Mon"
                      data-month="Jul"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">11</span>
                    </div>

                    <div
                      data-index="216"
                      data-week="Tue"
                      data-month="Jul"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">12</span>
                    </div>

                    <div
                      data-index="217"
                      data-week="Wed"
                      data-month="Jul"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">13</span>
                    </div>

                    <div
                      data-index="218"
                      data-week="Thu"
                      data-month="Jul"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">14</span>
                    </div>

                    <div
                      data-index="219"
                      data-week="Fri"
                      data-month="Jul"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">15</span>
                    </div>

                    <div
                      data-index="220"
                      data-week="Sat"
                      data-month="Jul"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">16</span>
                    </div>

                    <div
                      data-index="221"
                      data-week="Sun"
                      data-month="Jul"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">17</span>
                    </div>

                    <div
                      data-index="222"
                      data-week="Mon"
                      data-month="Jul"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">18</span>
                    </div>

                    <div
                      data-index="223"
                      data-week="Tue"
                      data-month="Jul"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">19</span>
                    </div>

                    <div
                      data-index="224"
                      data-week="Wed"
                      data-month="Jul"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">20</span>
                    </div>

                    <div
                      data-index="225"
                      data-week="Thu"
                      data-month="Jul"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">21</span>
                    </div>

                    <div
                      data-index="226"
                      data-week="Fri"
                      data-month="Jul"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">22</span>
                    </div>

                    <div
                      data-index="227"
                      data-week="Sat"
                      data-month="Jul"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">23</span>
                    </div>

                    <div
                      data-index="228"
                      data-week="Sun"
                      data-month="Jul"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">24</span>
                    </div>

                    <div
                      data-index="229"
                      data-week="Mon"
                      data-month="Jul"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">25</span>
                    </div>

                    <div
                      data-index="230"
                      data-week="Tue"
                      data-month="Jul"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">26</span>
                    </div>

                    <div
                      data-index="231"
                      data-week="Wed"
                      data-month="Jul"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">27</span>
                    </div>

                    <div
                      data-index="232"
                      data-week="Thu"
                      data-month="Jul"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">28</span>
                    </div>

                    <div
                      data-index="233"
                      data-week="Fri"
                      data-month="Jul"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">29</span>
                    </div>

                    <div
                      data-index="234"
                      data-week="Sat"
                      data-month="Jul"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">30</span>
                    </div>

                    <div
                      data-index="235"
                      data-week="Sun"
                      data-month="Jul"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">31</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="text-18 fw-500 text-center mb-20">
                  August 2023
                </div>

                <div className="table-calendar js-calendar-single">
                  <div className="table-calendar__header">
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                    <div>Sun</div>
                  </div>

                  <div className="table-calendar__grid overflow-hidden">
                    <div
                      data-index="236"
                      data-week="Sun"
                      data-month="Jul"
                      className="table-calendar__cell lh-1 text-light-7"
                    >
                      <span className="js-date">31</span>
                    </div>

                    <div
                      data-index="237"
                      data-week="Mon"
                      data-month="Aug"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">1</span>
                    </div>

                    <div
                      data-index="238"
                      data-week="Tue"
                      data-month="Aug"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">2</span>
                    </div>

                    <div
                      data-index="239"
                      data-week="Wed"
                      data-month="Aug"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">3</span>
                    </div>

                    <div
                      data-index="240"
                      data-week="Thu"
                      data-month="Aug"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">4</span>
                    </div>

                    <div
                      data-index="241"
                      data-week="Fri"
                      data-month="Aug"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">5</span>
                    </div>

                    <div
                      data-index="242"
                      data-week="Sat"
                      data-month="Aug"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">6</span>
                    </div>

                    <div
                      data-index="243"
                      data-week="Sun"
                      data-month="Aug"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">7</span>
                    </div>

                    <div
                      data-index="244"
                      data-week="Mon"
                      data-month="Aug"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">8</span>
                    </div>

                    <div
                      data-index="245"
                      data-week="Tue"
                      data-month="Aug"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">9</span>
                    </div>

                    <div
                      data-index="246"
                      data-week="Wed"
                      data-month="Aug"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">10</span>
                    </div>

                    <div
                      data-index="247"
                      data-week="Thu"
                      data-month="Aug"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">11</span>
                    </div>

                    <div
                      data-index="248"
                      data-week="Fri"
                      data-month="Aug"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">12</span>
                    </div>

                    <div
                      data-index="249"
                      data-week="Sat"
                      data-month="Aug"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">13</span>
                    </div>

                    <div
                      data-index="250"
                      data-week="Sun"
                      data-month="Aug"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">14</span>
                    </div>

                    <div
                      data-index="251"
                      data-week="Mon"
                      data-month="Aug"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">15</span>
                    </div>

                    <div
                      data-index="252"
                      data-week="Tue"
                      data-month="Aug"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">16</span>
                    </div>

                    <div
                      data-index="253"
                      data-week="Wed"
                      data-month="Aug"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">17</span>
                    </div>

                    <div
                      data-index="254"
                      data-week="Thu"
                      data-month="Aug"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">18</span>
                    </div>

                    <div
                      data-index="255"
                      data-week="Fri"
                      data-month="Aug"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">19</span>
                    </div>

                    <div
                      data-index="256"
                      data-week="Sat"
                      data-month="Aug"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">20</span>
                    </div>

                    <div
                      data-index="257"
                      data-week="Sun"
                      data-month="Aug"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">21</span>
                    </div>

                    <div
                      data-index="258"
                      data-week="Mon"
                      data-month="Aug"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">22</span>
                    </div>

                    <div
                      data-index="259"
                      data-week="Tue"
                      data-month="Aug"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">23</span>
                    </div>

                    <div
                      data-index="260"
                      data-week="Wed"
                      data-month="Aug"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">24</span>
                    </div>

                    <div
                      data-index="261"
                      data-week="Thu"
                      data-month="Aug"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">25</span>
                    </div>

                    <div
                      data-index="262"
                      data-week="Fri"
                      data-month="Aug"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">26</span>
                    </div>

                    <div
                      data-index="263"
                      data-week="Sat"
                      data-month="Aug"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">27</span>
                    </div>

                    <div
                      data-index="264"
                      data-week="Sun"
                      data-month="Aug"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">28</span>
                    </div>

                    <div
                      data-index="265"
                      data-week="Mon"
                      data-month="Aug"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">29</span>
                    </div>

                    <div
                      data-index="266"
                      data-week="Tue"
                      data-month="Aug"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">30</span>
                    </div>

                    <div
                      data-index="267"
                      data-week="Wed"
                      data-month="Aug"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">31</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="text-18 fw-500 text-center mb-20">
                  September 2023
                </div>

                <div className="table-calendar js-calendar-single">
                  <div className="table-calendar__header">
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                    <div>Sun</div>
                  </div>

                  <div className="table-calendar__grid overflow-hidden">
                    <div
                      data-index="268"
                      data-week="Sun"
                      data-month="Aug"
                      className="table-calendar__cell lh-1 text-light-7"
                    >
                      <span className="js-date">28</span>
                    </div>

                    <div
                      data-index="269"
                      data-week="Mon"
                      data-month="Aug"
                      className="table-calendar__cell lh-1 text-light-7"
                    >
                      <span className="js-date">29</span>
                    </div>

                    <div
                      data-index="270"
                      data-week="Tue"
                      data-month="Aug"
                      className="table-calendar__cell lh-1 text-light-7"
                    >
                      <span className="js-date">30</span>
                    </div>

                    <div
                      data-index="271"
                      data-week="Wed"
                      data-month="Aug"
                      className="table-calendar__cell lh-1 text-light-7"
                    >
                      <span className="js-date">31</span>
                    </div>

                    <div
                      data-index="272"
                      data-week="Thu"
                      data-month="Sep"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">1</span>
                    </div>

                    <div
                      data-index="273"
                      data-week="Fri"
                      data-month="Sep"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">2</span>
                    </div>

                    <div
                      data-index="274"
                      data-week="Sat"
                      data-month="Sep"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">3</span>
                    </div>

                    <div
                      data-index="275"
                      data-week="Sun"
                      data-month="Sep"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">4</span>
                    </div>

                    <div
                      data-index="276"
                      data-week="Mon"
                      data-month="Sep"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">5</span>
                    </div>

                    <div
                      data-index="277"
                      data-week="Tue"
                      data-month="Sep"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">6</span>
                    </div>

                    <div
                      data-index="278"
                      data-week="Wed"
                      data-month="Sep"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">7</span>
                    </div>

                    <div
                      data-index="279"
                      data-week="Thu"
                      data-month="Sep"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">8</span>
                    </div>

                    <div
                      data-index="280"
                      data-week="Fri"
                      data-month="Sep"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">9</span>
                    </div>

                    <div
                      data-index="281"
                      data-week="Sat"
                      data-month="Sep"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">10</span>
                    </div>

                    <div
                      data-index="282"
                      data-week="Sun"
                      data-month="Sep"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">11</span>
                    </div>

                    <div
                      data-index="283"
                      data-week="Mon"
                      data-month="Sep"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">12</span>
                    </div>

                    <div
                      data-index="284"
                      data-week="Tue"
                      data-month="Sep"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">13</span>
                    </div>

                    <div
                      data-index="285"
                      data-week="Wed"
                      data-month="Sep"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">14</span>
                    </div>

                    <div
                      data-index="286"
                      data-week="Thu"
                      data-month="Sep"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">15</span>
                    </div>

                    <div
                      data-index="287"
                      data-week="Fri"
                      data-month="Sep"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">16</span>
                    </div>

                    <div
                      data-index="288"
                      data-week="Sat"
                      data-month="Sep"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">17</span>
                    </div>

                    <div
                      data-index="289"
                      data-week="Sun"
                      data-month="Sep"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">18</span>
                    </div>

                    <div
                      data-index="290"
                      data-week="Mon"
                      data-month="Sep"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">19</span>
                    </div>

                    <div
                      data-index="291"
                      data-week="Tue"
                      data-month="Sep"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">20</span>
                    </div>

                    <div
                      data-index="292"
                      data-week="Wed"
                      data-month="Sep"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">21</span>
                    </div>

                    <div
                      data-index="293"
                      data-week="Thu"
                      data-month="Sep"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">22</span>
                    </div>

                    <div
                      data-index="294"
                      data-week="Fri"
                      data-month="Sep"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">23</span>
                    </div>

                    <div
                      data-index="295"
                      data-week="Sat"
                      data-month="Sep"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">24</span>
                    </div>

                    <div
                      data-index="296"
                      data-week="Sun"
                      data-month="Sep"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">25</span>
                    </div>

                    <div
                      data-index="297"
                      data-week="Mon"
                      data-month="Sep"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">26</span>
                    </div>

                    <div
                      data-index="298"
                      data-week="Tue"
                      data-month="Sep"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">27</span>
                    </div>

                    <div
                      data-index="299"
                      data-week="Wed"
                      data-month="Sep"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">28</span>
                    </div>

                    <div
                      data-index="300"
                      data-week="Thu"
                      data-month="Sep"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">29</span>
                    </div>

                    <div
                      data-index="301"
                      data-week="Fri"
                      data-month="Sep"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">30</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="text-18 fw-500 text-center mb-20">
                  October 2023
                </div>

                <div className="table-calendar js-calendar-single">
                  <div className="table-calendar__header">
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                    <div>Sun</div>
                  </div>

                  <div className="table-calendar__grid overflow-hidden">
                    <div
                      data-index="302"
                      data-week="Sun"
                      data-month="Sep"
                      className="table-calendar__cell lh-1 text-light-7"
                    >
                      <span className="js-date">25</span>
                    </div>

                    <div
                      data-index="303"
                      data-week="Mon"
                      data-month="Sep"
                      className="table-calendar__cell lh-1 text-light-7"
                    >
                      <span className="js-date">26</span>
                    </div>

                    <div
                      data-index="304"
                      data-week="Tue"
                      data-month="Sep"
                      className="table-calendar__cell lh-1 text-light-7"
                    >
                      <span className="js-date">27</span>
                    </div>

                    <div
                      data-index="305"
                      data-week="Wed"
                      data-month="Sep"
                      className="table-calendar__cell lh-1 text-light-7"
                    >
                      <span className="js-date">28</span>
                    </div>

                    <div
                      data-index="306"
                      data-week="Thu"
                      data-month="Sep"
                      className="table-calendar__cell lh-1 text-light-7"
                    >
                      <span className="js-date">29</span>
                    </div>

                    <div
                      data-index="307"
                      data-week="Fri"
                      data-month="Sep"
                      className="table-calendar__cell lh-1 text-light-7"
                    >
                      <span className="js-date">30</span>
                    </div>

                    <div
                      data-index="308"
                      data-week="Sat"
                      data-month="Oct"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">1</span>
                    </div>

                    <div
                      data-index="309"
                      data-week="Sun"
                      data-month="Oct"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">2</span>
                    </div>

                    <div
                      data-index="310"
                      data-week="Mon"
                      data-month="Oct"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">3</span>
                    </div>

                    <div
                      data-index="311"
                      data-week="Tue"
                      data-month="Oct"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">4</span>
                    </div>

                    <div
                      data-index="312"
                      data-week="Wed"
                      data-month="Oct"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">5</span>
                    </div>

                    <div
                      data-index="313"
                      data-week="Thu"
                      data-month="Oct"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">6</span>
                    </div>

                    <div
                      data-index="314"
                      data-week="Fri"
                      data-month="Oct"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">7</span>
                    </div>

                    <div
                      data-index="315"
                      data-week="Sat"
                      data-month="Oct"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">8</span>
                    </div>

                    <div
                      data-index="316"
                      data-week="Sun"
                      data-month="Oct"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">2</span>
                    </div>

                    <div
                      data-index="317"
                      data-week="Mon"
                      data-month="Oct"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">3</span>
                    </div>

                    <div
                      data-index="318"
                      data-week="Tue"
                      data-month="Oct"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">4</span>
                    </div>

                    <div
                      data-index="319"
                      data-week="Wed"
                      data-month="Oct"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">5</span>
                    </div>

                    <div
                      data-index="320"
                      data-week="Thu"
                      data-month="Oct"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">6</span>
                    </div>

                    <div
                      data-index="321"
                      data-week="Fri"
                      data-month="Oct"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">7</span>
                    </div>

                    <div
                      data-index="322"
                      data-week="Sat"
                      data-month="Oct"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">8</span>
                    </div>

                    <div
                      data-index="323"
                      data-week="Sun"
                      data-month="Oct"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">9</span>
                    </div>

                    <div
                      data-index="324"
                      data-week="Mon"
                      data-month="Oct"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">10</span>
                    </div>

                    <div
                      data-index="325"
                      data-week="Tue"
                      data-month="Oct"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">11</span>
                    </div>

                    <div
                      data-index="326"
                      data-week="Wed"
                      data-month="Oct"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">12</span>
                    </div>

                    <div
                      data-index="327"
                      data-week="Thu"
                      data-month="Oct"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">13</span>
                    </div>

                    <div
                      data-index="328"
                      data-week="Fri"
                      data-month="Oct"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">14</span>
                    </div>

                    <div
                      data-index="329"
                      data-week="Sat"
                      data-month="Oct"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">15</span>
                    </div>

                    <div
                      data-index="330"
                      data-week="Sun"
                      data-month="Oct"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">16</span>
                    </div>

                    <div
                      data-index="331"
                      data-week="Mon"
                      data-month="Oct"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">17</span>
                    </div>

                    <div
                      data-index="332"
                      data-week="Tue"
                      data-month="Oct"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">18</span>
                    </div>

                    <div
                      data-index="333"
                      data-week="Wed"
                      data-month="Oct"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">19</span>
                    </div>

                    <div
                      data-index="334"
                      data-week="Thu"
                      data-month="Oct"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">20</span>
                    </div>

                    <div
                      data-index="335"
                      data-week="Fri"
                      data-month="Oct"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">21</span>
                    </div>

                    <div
                      data-index="336"
                      data-week="Sat"
                      data-month="Oct"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">22</span>
                    </div>

                    <div
                      data-index="337"
                      data-week="Sun"
                      data-month="Oct"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">23</span>
                    </div>

                    <div
                      data-index="338"
                      data-week="Mon"
                      data-month="Oct"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">24</span>
                    </div>

                    <div
                      data-index="339"
                      data-week="Tue"
                      data-month="Oct"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">25</span>
                    </div>

                    <div
                      data-index="340"
                      data-week="Wed"
                      data-month="Oct"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">26</span>
                    </div>

                    <div
                      data-index="341"
                      data-week="Thu"
                      data-month="Oct"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">27</span>
                    </div>

                    <div
                      data-index="342"
                      data-week="Fri"
                      data-month="Oct"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">28</span>
                    </div>

                    <div
                      data-index="343"
                      data-week="Sat"
                      data-month="Oct"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">29</span>
                    </div>

                    <div
                      data-index="344"
                      data-week="Sun"
                      data-month="Oct"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">30</span>
                    </div>

                    <div
                      data-index="345"
                      data-week="Mon"
                      data-month="Oct"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">31</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="text-18 fw-500 text-center mb-20">
                  November 2023
                </div>

                <div className="table-calendar js-calendar-single">
                  <div className="table-calendar__header">
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                    <div>Sun</div>
                  </div>

                  <div className="table-calendar__grid overflow-hidden">
                    <div
                      data-index="346"
                      data-week="Sun"
                      data-month="Oct"
                      className="table-calendar__cell lh-1 text-light-7"
                    >
                      <span className="js-date">30</span>
                    </div>

                    <div
                      data-index="347"
                      data-week="Mon"
                      data-month="Oct"
                      className="table-calendar__cell lh-1 text-light-7"
                    >
                      <span className="js-date">31</span>
                    </div>

                    <div
                      data-index="348"
                      data-week="Tue"
                      data-month="Nov"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">1</span>
                    </div>

                    <div
                      data-index="349"
                      data-week="Wed"
                      data-month="Nov"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">2</span>
                    </div>

                    <div
                      data-index="350"
                      data-week="Thu"
                      data-month="Nov"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">3</span>
                    </div>

                    <div
                      data-index="351"
                      data-week="Fri"
                      data-month="Nov"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">4</span>
                    </div>

                    <div
                      data-index="352"
                      data-week="Sat"
                      data-month="Nov"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">5</span>
                    </div>

                    <div
                      data-index="353"
                      data-week="Sun"
                      data-month="Nov"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">6</span>
                    </div>

                    <div
                      data-index="354"
                      data-week="Mon"
                      data-month="Nov"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">7</span>
                    </div>

                    <div
                      data-index="355"
                      data-week="Tue"
                      data-month="Nov"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">8</span>
                    </div>

                    <div
                      data-index="356"
                      data-week="Wed"
                      data-month="Nov"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">2</span>
                    </div>

                    <div
                      data-index="357"
                      data-week="Thu"
                      data-month="Nov"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">3</span>
                    </div>

                    <div
                      data-index="358"
                      data-week="Fri"
                      data-month="Nov"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">4</span>
                    </div>

                    <div
                      data-index="359"
                      data-week="Sat"
                      data-month="Nov"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">5</span>
                    </div>

                    <div
                      data-index="360"
                      data-week="Sun"
                      data-month="Nov"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">6</span>
                    </div>

                    <div
                      data-index="361"
                      data-week="Mon"
                      data-month="Nov"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">7</span>
                    </div>

                    <div
                      data-index="362"
                      data-week="Tue"
                      data-month="Nov"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">8</span>
                    </div>

                    <div
                      data-index="363"
                      data-week="Wed"
                      data-month="Nov"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">9</span>
                    </div>

                    <div
                      data-index="364"
                      data-week="Thu"
                      data-month="Nov"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">10</span>
                    </div>

                    <div
                      data-index="365"
                      data-week="Fri"
                      data-month="Nov"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">11</span>
                    </div>

                    <div
                      data-index="366"
                      data-week="Sat"
                      data-month="Nov"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">12</span>
                    </div>

                    <div
                      data-index="367"
                      data-week="Sun"
                      data-month="Nov"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">13</span>
                    </div>

                    <div
                      data-index="368"
                      data-week="Mon"
                      data-month="Nov"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">14</span>
                    </div>

                    <div
                      data-index="369"
                      data-week="Tue"
                      data-month="Nov"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">15</span>
                    </div>

                    <div
                      data-index="370"
                      data-week="Wed"
                      data-month="Nov"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">16</span>
                    </div>

                    <div
                      data-index="371"
                      data-week="Thu"
                      data-month="Nov"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">17</span>
                    </div>

                    <div
                      data-index="372"
                      data-week="Fri"
                      data-month="Nov"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">18</span>
                    </div>

                    <div
                      data-index="373"
                      data-week="Sat"
                      data-month="Nov"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">19</span>
                    </div>

                    <div
                      data-index="374"
                      data-week="Sun"
                      data-month="Nov"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">20</span>
                    </div>

                    <div
                      data-index="375"
                      data-week="Mon"
                      data-month="Nov"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">21</span>
                    </div>

                    <div
                      data-index="376"
                      data-week="Tue"
                      data-month="Nov"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">22</span>
                    </div>

                    <div
                      data-index="377"
                      data-week="Wed"
                      data-month="Nov"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">23</span>
                    </div>

                    <div
                      data-index="378"
                      data-week="Thu"
                      data-month="Nov"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">24</span>
                    </div>

                    <div
                      data-index="379"
                      data-week="Fri"
                      data-month="Nov"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">25</span>
                    </div>

                    <div
                      data-index="380"
                      data-week="Sat"
                      data-month="Nov"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">26</span>
                    </div>

                    <div
                      data-index="381"
                      data-week="Sun"
                      data-month="Nov"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">27</span>
                    </div>

                    <div
                      data-index="382"
                      data-week="Mon"
                      data-month="Nov"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">28</span>
                    </div>

                    <div
                      data-index="383"
                      data-week="Tue"
                      data-month="Nov"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">29</span>
                    </div>

                    <div
                      data-index="384"
                      data-week="Wed"
                      data-month="Nov"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">30</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="text-18 fw-500 text-center mb-20">
                  December 2023
                </div>

                <div className="table-calendar js-calendar-single">
                  <div className="table-calendar__header">
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                    <div>Sun</div>
                  </div>

                  <div className="table-calendar__grid overflow-hidden">
                    <div
                      data-index="385"
                      data-week="Sun"
                      data-month="Nov"
                      className="table-calendar__cell lh-1 text-light-7"
                    >
                      <span className="js-date">27</span>
                    </div>

                    <div
                      data-index="386"
                      data-week="Mon"
                      data-month="Nov"
                      className="table-calendar__cell lh-1 text-light-7"
                    >
                      <span className="js-date">28</span>
                    </div>

                    <div
                      data-index="387"
                      data-week="Tue"
                      data-month="Nov"
                      className="table-calendar__cell lh-1 text-light-7"
                    >
                      <span className="js-date">29</span>
                    </div>

                    <div
                      data-index="388"
                      data-week="Wed"
                      data-month="Nov"
                      className="table-calendar__cell lh-1 text-light-7"
                    >
                      <span className="js-date">30</span>
                    </div>

                    <div
                      data-index="389"
                      data-week="Thu"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">1</span>
                    </div>

                    <div
                      data-index="390"
                      data-week="Fri"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">2</span>
                    </div>

                    <div
                      data-index="391"
                      data-week="Sat"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">3</span>
                    </div>

                    <div
                      data-index="392"
                      data-week="Sun"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">4</span>
                    </div>

                    <div
                      data-index="393"
                      data-week="Mon"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">5</span>
                    </div>

                    <div
                      data-index="394"
                      data-week="Tue"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">6</span>
                    </div>

                    <div
                      data-index="395"
                      data-week="Wed"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">7</span>
                    </div>

                    <div
                      data-index="396"
                      data-week="Thu"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">8</span>
                    </div>

                    <div
                      data-index="397"
                      data-week="Fri"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">2</span>
                    </div>

                    <div
                      data-index="398"
                      data-week="Sat"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">3</span>
                    </div>

                    <div
                      data-index="399"
                      data-week="Sun"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">4</span>
                    </div>

                    <div
                      data-index="400"
                      data-week="Mon"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">5</span>
                    </div>

                    <div
                      data-index="401"
                      data-week="Tue"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">6</span>
                    </div>

                    <div
                      data-index="402"
                      data-week="Wed"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">7</span>
                    </div>

                    <div
                      data-index="403"
                      data-week="Thu"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">8</span>
                    </div>

                    <div
                      data-index="404"
                      data-week="Fri"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">9</span>
                    </div>

                    <div
                      data-index="405"
                      data-week="Sat"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">10</span>
                    </div>

                    <div
                      data-index="406"
                      data-week="Sun"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">11</span>
                    </div>

                    <div
                      data-index="407"
                      data-week="Mon"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">12</span>
                    </div>

                    <div
                      data-index="408"
                      data-week="Tue"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">13</span>
                    </div>

                    <div
                      data-index="409"
                      data-week="Wed"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">14</span>
                    </div>

                    <div
                      data-index="410"
                      data-week="Thu"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">15</span>
                    </div>

                    <div
                      data-index="411"
                      data-week="Fri"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">16</span>
                    </div>

                    <div
                      data-index="412"
                      data-week="Sat"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">17</span>
                    </div>

                    <div
                      data-index="413"
                      data-week="Sun"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">18</span>
                    </div>

                    <div
                      data-index="414"
                      data-week="Mon"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">19</span>
                    </div>

                    <div
                      data-index="415"
                      data-week="Tue"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">20</span>
                    </div>

                    <div
                      data-index="416"
                      data-week="Wed"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">21</span>
                    </div>

                    <div
                      data-index="417"
                      data-week="Thu"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">22</span>
                    </div>

                    <div
                      data-index="418"
                      data-week="Fri"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">23</span>
                    </div>

                    <div
                      data-index="419"
                      data-week="Sat"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">24</span>
                    </div>

                    <div
                      data-index="420"
                      data-week="Sun"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">25</span>
                    </div>

                    <div
                      data-index="421"
                      data-week="Mon"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">26</span>
                    </div>

                    <div
                      data-index="422"
                      data-week="Tue"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">27</span>
                    </div>

                    <div
                      data-index="423"
                      data-week="Wed"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">28</span>
                    </div>

                    <div
                      data-index="424"
                      data-week="Thu"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">29</span>
                    </div>

                    <div
                      data-index="425"
                      data-week="Fri"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">30</span>
                    </div>

                    <div
                      data-index="426"
                      data-week="Sat"
                      data-month="Dec"
                      className="table-calendar__cell lh-1 "
                    >
                      <span className="js-date">31</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button className="calendar-icon -left js-calendar-prev z-2">
              <i className="icon-arrow-left text-20"></i>
            </button>

            <button className="calendar-icon -right js-calendar-next z-2">
              <i className="icon-arrow-right text-20"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calender;
