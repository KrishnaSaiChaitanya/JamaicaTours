import Calender from "@/components/Calender";
import TourList from "@/components/TourList";
import React, { useEffect, useState } from "react";

const TourDetail = () => {
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

  const Tabs = (function () {
    function init() {
      const targets = document.querySelectorAll(".js-tabs");
      if (!targets) return;

      targets.forEach((el) => {
        singleTab(el);
      });
    }

    function singleTab(target) {
      const controls = target.querySelector(".js-tabs-controls");
      const controlsItems = target.querySelectorAll(
        ".js-tabs-controls .js-tabs-button"
      );
      const content = target.querySelector(".js-tabs-content");

      for (let l = 0; l < controlsItems.length; l++) {
        const el = controlsItems[l];

        el.addEventListener("click", (e) => {
          const selector = el.getAttribute("data-tab-target");

          controls
            .querySelector(".is-tab-el-active")
            .classList.remove("is-tab-el-active");
          content
            .querySelector(".is-tab-el-active")
            .classList.remove("is-tab-el-active");

          el.classList.add("is-tab-el-active");
          content.querySelector(selector).classList.add("is-tab-el-active");
        });
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
  const [date, setdate] = useState("hjgh");
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
  function sectionSlider() {
    const sectionSlider = document.querySelectorAll(".js-section-slider");
    if (!sectionSlider.length) return;

    for (let i = 0; i < sectionSlider.length; i++) {
      const el = sectionSlider[i];

      let prevNavElement = el.querySelector(".js-prev");
      let nextNavElement = el.querySelector(".js-next");

      if (el.getAttribute("data-nav-prev"))
        prevNavElement = document.querySelector(
          `.${el.getAttribute("data-nav-prev")}`
        );
      if (el.getAttribute("data-nav-next"))
        nextNavElement = document.querySelector(
          `.${el.getAttribute("data-nav-next")}`
        );

      let gap = 0;
      let loop = false;
      let centered = false;
      let pagination = false;
      let scrollbar = false;

      if (el.getAttribute("data-gap")) gap = el.getAttribute("data-gap");
      if (el.hasAttribute("data-loop")) loop = true;
      if (el.hasAttribute("data-center")) centered = true;

      if (el.getAttribute("data-pagination")) {
        let paginationElement = document.querySelector(
          `.${el.getAttribute("data-pagination")}`
        );

        pagination = {
          el: paginationElement,
          bulletClass: "pagination__item",
          bulletActiveClass: "is-active",
          bulletElement: "div",
          clickable: true,
          renderBullet: function (index, className) {
            return (
              '<span class="' + className + '">' + 0 + (index + 1) + "</span>"
            );
          },
        };
      }

      if (el.hasAttribute("data-scrollbar")) {
        scrollbar = {
          el: ".js-scrollbar",
          draggable: true,
        };
      }

      const colsArray = el.getAttribute("data-slider-cols").split(" ");

      let cols_base = 1;
      let cols_xl = 1;
      let cols_lg = 1;
      let cols_md = 1;
      let cols_sm = 1;

      colsArray.forEach((el) => {
        if (el.includes("base")) cols_base = el.slice(-1);
        if (el.includes("xl")) cols_xl = el.slice(-1);
        if (el.includes("lg")) cols_lg = el.slice(-1);
        if (el.includes("md")) cols_md = el.slice(-1);
        if (el.includes("sm")) cols_sm = el.slice(-1);
      });

      new Swiper(el, {
        speed: 600,
        autoHeight: true,

        centeredSlides: centered,
        parallax: true,
        watchSlidesVisibility: true,
        loop: loop,
        loopAdditionalSlides: 1,
        preloadImages: false,
        lazy: true,

        scrollbar: scrollbar,
        pagination: pagination,
        spaceBetween: 10,

        // width: 330,
        slidesPerView: parseInt(cols_base),
        breakpoints: {
          1199: {
            slidesPerView: parseInt(cols_xl),
            width: null,
            spaceBetween: parseInt(gap),
          },
          991: {
            slidesPerView: parseInt(cols_lg),
            width: null,
            spaceBetween: parseInt(gap),
          },
          767: {
            slidesPerView: parseInt(cols_md),
            width: null,
            spaceBetween: parseInt(gap),
          },
          574: {
            slidesPerView: parseInt(cols_sm),
            width: null,
            spaceBetween: parseInt(gap),
          },
        },

        lazy: {
          loadPrevNext: true,
        },
        navigation: {
          prevEl: prevNavElement,
          nextEl: nextNavElement,
        },
      });
    }
  }

  useEffect(() => {
    // Call the init function from the Accordion object
    Accordion.init();
    Tabs.init();
    sectionSlider();
    calendarSlider();
    calendarInteraction();
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row justify-between py-30 mt-80">
          <div className="col-auto">
            <div className="text-14">THE 10 BEST Phuket Tours & Excursions</div>
          </div>
        </div>
      </div>

      <section className="tourSingleHero5">
        <div className="tourSingleHero5__image">
          <div
            className="js-section-slider"
            data-gap="0"
            data-slider-cols="xl-1 lg-1 md-1 sm-1 base-1"
            data-loop
            data-nav-prev="js-slider1-prev"
            data-nav-next="js-slider1-next"
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img src="img/tourSingle/3/1.png" alt="image" />
              </div>
              <div className="swiper-slide">
                <img src="img/tourSingle/3/1.png" alt="image" />
              </div>
              <div className="swiper-slide">
                <img src="img/tourSingle/3/1.png" alt="image" />
              </div>
            </div>

            <div className="navTourSingle">
              <button className="navTourSingle__button bg-white js-slider1-prev">
                <i className="icon-arrow-left text-14"></i>
              </button>

              <button className="navTourSingle__button bg-white js-slider1-next">
                <i className="icon-arrow-right text-14"></i>
              </button>
            </div>
          </div>

          <div className="icon">
            <svg
              width="1800"
              height="40"
              viewBox="0 0 1800 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-2.7895e-05 26.1652C-2.7895e-05 26.1652 46.3492 19.8469 88.8889 19.4061C132.063 18.9653 168.889 19.4061 221.587 21.6102C293.333 24.5489 431.746 36.4509 505.397 29.9856C579.048 23.5203 582.222 23.2265 619.683 19.1122C661.587 14.4102 746.667 5.00616 852.063 5.44698C964.444 5.88779 1168.25 29.8387 1252.06 28.6632C1260.95 28.5162 1293.97 27.4877 1318.73 25.7244C1342.86 23.9612 1378.41 20.1408 1426.67 18.8183C1446.98 18.2306 1479.37 17.202 1516.83 17.4959C1526.35 17.6428 1556.83 18.0836 1593.02 19.8469C1629.21 21.6102 1662.86 24.402 1693.33 25.2836C1758.73 26.8999 1800 24.5489 1800 24.5489V40.4182H-2.7895e-05V26.1652ZM144.127 23.8142C148.571 25.2836 156.825 24.402 171.429 24.402C186.032 24.402 210.159 26.1652 208.254 26.0183C206.349 25.8714 188.571 23.8142 170.159 23.2265C151.111 22.4918 140.318 22.3448 144.127 23.8142ZM260.952 27.7815C260.952 27.7815 276.19 28.0754 296.508 29.104C316.825 30.2795 361.905 33.2183 392.381 34.2468C444.444 35.8631 492.698 34.2468 488.254 34.0999C483.175 33.9529 427.302 34.9815 376.508 32.4836C355.556 31.455 317.46 29.2509 297.778 28.5162C276.825 27.6346 260.952 27.7815 260.952 27.7815ZM624.127 27.9285C613.333 28.9571 708.571 21.0224 741.587 18.9653C754.921 18.0836 780.952 16.6143 805.079 16.0265C829.841 15.4388 861.587 15.4388 860.952 15.2918C860.952 14.9979 824.127 14.1163 789.841 15.2918C755.556 16.4673 756.825 16.9081 741.587 17.6428C717.46 18.8183 634.921 26.8999 624.127 27.9285ZM535.873 30.2795C534.603 30.2795 540.952 30.8672 566.349 28.6632C591.746 26.4591 608.889 23.5203 610.159 23.2265C611.429 23.0795 587.936 25.8714 568.254 27.6346C549.206 29.3979 536.508 30.2795 535.873 30.2795ZM3.17458 31.6019C3.8095 31.455 15.238 29.9856 33.6507 27.9285C52.0634 25.8714 77.4603 23.8142 76.1904 23.9612C74.9206 23.9612 53.9683 24.8428 29.2064 27.6346C4.44445 30.4264 2.53965 31.7489 3.17458 31.6019ZM1601.27 23.3734C1600.63 23.6673 1613.33 23.6673 1629.84 25.1367C1646.35 26.606 1664.13 27.4877 1679.37 28.0754C1704.76 29.2509 1753.65 27.9285 1751.11 27.7815C1749.21 27.6346 1699.05 28.2224 1671.75 26.753C1657.78 26.0183 1656.51 26.0183 1635.56 24.402C1614.6 22.7857 1601.9 22.9326 1601.27 23.3734ZM1336.51 26.8999C1333.97 27.0469 1314.29 29.2509 1283.17 30.7203C1252.06 32.3366 1226.67 31.455 1226.67 31.8958C1226.67 32.3366 1233.02 33.2183 1266.03 32.3366C1299.05 31.455 1339.05 26.753 1336.51 26.8999ZM1345.4 30.5734C1344.13 30.4264 1323.81 32.4836 1309.21 33.0713C1294.6 33.5121 1297.14 33.806 1297.14 33.9529C1297.14 34.0999 1304.13 34.2468 1314.29 33.6591C1325.08 32.9244 1346.67 30.7203 1345.4 30.5734ZM1205.71 33.9529C1205.08 33.6591 1183.49 32.7774 1170.16 31.3081C1156.83 29.8387 1158.73 30.4264 1158.1 30.5734C1157.46 30.7203 1163.17 31.7489 1173.33 32.4836C1183.49 33.3652 1206.35 34.2468 1205.71 33.9529ZM1384.76 24.1081C1385.4 23.6673 1382.86 23.3734 1372.7 24.402C1362.54 25.4305 1356.19 26.3122 1358.73 26.1652C1361.27 26.0183 1364.44 25.5775 1374.6 24.9897C1385.4 24.402 1384.13 24.5489 1384.76 24.1081ZM1580.95 22.1979C1582.22 22.1979 1567.62 21.0224 1560 20.8755C1552.38 20.7285 1547.3 20.7285 1547.3 21.1693C1547.3 21.6102 1547.94 21.904 1557.46 21.7571C1567.62 21.6102 1579.68 22.1979 1580.95 22.1979ZM833.651 9.4143C834.286 9.26736 848.889 9.85512 881.27 9.85512C913.016 9.85512 967.619 13.3816 990.476 14.9979C1013.33 16.6143 926.984 9.26736 885.714 8.97349C844.444 8.67961 833.016 9.56124 833.651 9.4143Z"
                fill="white"
              />
              <path
                d="M88.2542 13.9694C88.8891 14.1163 117.461 13.5285 133.969 13.9694C180.318 14.9979 241.905 18.6714 239.365 18.2306C236.826 17.7897 152.381 13.6755 131.429 13.3816C100.318 12.7938 87.6193 13.9694 88.2542 13.9694Z"
                fill="white"
              />
              <path
                d="M356.191 26.0183C357.461 26.1652 384.763 27.4876 416.509 27.7815C448.255 28.0754 497.144 26.8999 494.604 27.0468C492.699 27.1938 457.144 29.6917 410.16 28.8101C363.176 27.9285 354.922 25.8713 356.191 26.0183Z"
                fill="white"
              />
              <path
                d="M501.587 20.7285C502.222 20.8754 488.889 22.1979 481.27 22.3448C473.651 22.4917 468.572 22.3448 468.572 21.904C468.572 21.4632 469.206 21.1693 478.73 21.3162C489.524 21.4632 500.953 20.5815 501.587 20.7285Z"
                fill="white"
              />
              <path
                d="M523.81 24.8428C523.81 24.9898 551.746 23.0796 563.81 21.6102C575.873 20.2878 603.175 17.0551 602.54 17.0551C601.905 16.9082 575.873 19.4061 562.54 20.8755C549.207 22.3449 523.81 24.6959 523.81 24.8428Z"
                fill="white"
              />
              <path
                d="M819.047 1.1859C819.682 1.33284 848.254 0.745088 864.761 1.1859C911.111 2.21447 972.698 5.88792 970.158 5.44711C967.619 5.00629 883.174 0.892027 862.222 0.598151C831.111 0.0103991 818.412 1.03896 819.047 1.1859Z"
                fill="white"
              />
              <path
                d="M1533.97 12.0593C1533.97 12.0593 1526.35 12.5001 1515.56 12.2062C1504.76 11.9123 1478.73 10.8838 1463.49 11.1776C1436.83 11.7654 1416.51 15.145 1419.05 14.998C1421.59 14.998 1446.35 11.7654 1473.65 12.2062C1485.08 12.3531 1506.03 12.9409 1516.19 12.794C1526.35 12.647 1533.97 12.0593 1533.97 12.0593Z"
                fill="white"
              />
              <path
                d="M1320.63 21.904C1319.36 21.757 1307.94 23.0795 1293.33 23.5203C1278.73 23.8141 1280 23.9611 1280 24.255C1280 24.4019 1291.43 24.8427 1301.59 24.255C1311.75 23.5203 1321.9 22.0509 1320.63 21.904Z"
                fill="white"
              />
              <path
                d="M1700.95 21.0223C1700.95 21.1692 1673.65 21.0223 1658.41 20.2876C1643.18 19.5529 1626.67 17.4958 1626.67 17.3488C1626.67 17.2019 1643.81 18.5243 1659.05 19.406C1673.65 20.2876 1700.32 20.8753 1700.95 21.0223Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row x-gap-10 y-gap-10 items-center">
                <div className="col-auto">
                  <button className="button -accent-1 text-14 py-5 px-15 bg-white text-accent-1 rounded-200">
                    Bestseller
                  </button>
                </div>
                <div className="col-auto">
                  <button className="button -accent-1 text-14 py-5 px-15 bg-light-1 rounded-200">
                    Free cancellation
                  </button>
                </div>
              </div>

              <h2 className="text-40 sm:text-30 lh-14 text-white mt-20">
                Phi Phi Islands Adventure Day Trip with
                <br />
                Seaview Lunch
              </h2>

              <div className="row y-gap-20 justify-between items-center pt-20">
                <div className="col-auto">
                  <div className="row x-gap-20 y-gap-20 items-center">
                    <div className="col-auto">
                      <div className="d-flex items-center text-white">
                        <div className="d-flex x-gap-5 pr-10">
                          <i className="flex-center icon-star text-yellow-2 text-12"></i>
                          <i className="flex-center icon-star text-yellow-2 text-12"></i>
                          <i className="flex-center icon-star text-yellow-2 text-12"></i>
                          <i className="flex-center icon-star text-yellow-2 text-12"></i>
                          <i className="flex-center icon-star text-yellow-2 text-12"></i>
                        </div>
                        4.8 (269)
                      </div>
                    </div>

                    <div className="col-auto">
                      <div className="d-flex items-center text-white">
                        <i className="icon-pin text-16 mr-5"></i>
                        Paris, France
                      </div>
                    </div>

                    <div className="col-auto">
                      <div className="d-flex items-center text-white">
                        <i className="icon-reservation text-16 mr-5"></i>
                        30K+ booked
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-auto">
                  <div className="d-flex x-gap-30 y-gap-10">
                    <a href="#" className="d-flex items-center text-white">
                      <i className="icon-share flex-center text-16 mr-10"></i>
                      Share
                    </a>

                    <a href="#" className="d-flex items-center text-white">
                      <i className="icon-heart flex-center text-16 mr-10"></i>
                      Wishlist
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="layout-pt-md js-pin-container">
        <div class="container">
          <div class="row y-gap-30 justify-between">
            <div class="col-lg-8">
              <div class="tabs -tourSingle js-tabs">
                <div class="tabs__controls row x-gap-30 y-gap-10 js-tabs-controls">
                  <div class="col-auto">
                    <button
                      class="tabs__button text-30 md:text-20 fw-700 js-tabs-button is-tab-el-active"
                      data-tab-target=".-tab-item-1"
                    >
                      Overview
                    </button>
                  </div>

                  <div class="col-auto">
                    <button
                      class="tabs__button text-30 md:text-20 fw-700 js-tabs-button "
                      data-tab-target=".-tab-item-2"
                    >
                      included
                    </button>
                  </div>

                  <div class="col-auto">
                    <button
                      class="tabs__button text-30 md:text-20 fw-700 js-tabs-button "
                      data-tab-target=".-tab-item-3"
                    >
                      Itinerary
                    </button>
                  </div>

                  <div class="col-auto">
                    <button
                      class="tabs__button text-30 md:text-20 fw-700 js-tabs-button "
                      data-tab-target=".-tab-item-4"
                    >
                      calendar
                    </button>
                  </div>

                  <div class="col-auto">
                    <button
                      class="tabs__button text-30 md:text-20 fw-700 js-tabs-button "
                      data-tab-target=".-tab-item-5"
                    >
                      FAQ
                    </button>
                  </div>

                  <div class="col-auto">
                    <button
                      class="tabs__button text-30 md:text-20 fw-700 js-tabs-button "
                      data-tab-target=".-tab-item-6"
                    >
                      Reviews
                    </button>
                  </div>
                </div>

                <div class="tabs__content pt-40 js-tabs-content">
                  <div class="tabs__pane -tab-item-1 is-tab-el-active">
                    <div class="row y-gap-20 justify-between items-center layout-pb-md">
                      <div class="col-lg-3 col-6">
                        <div class="d-flex items-center">
                          <div class="flex-center size-50 rounded-12 border-1">
                            <i class="text-20 icon-clock"></i>
                          </div>

                          <div class="ml-10">
                            <div class="lh-16">Duration</div>
                            <div class="text-14 text-light-2 lh-16">3 days</div>
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-3 col-6">
                        <div class="d-flex items-center">
                          <div class="flex-center size-50 rounded-12 border-1">
                            <i class="text-20 icon-teamwork"></i>
                          </div>

                          <div class="ml-10">
                            <div class="lh-16">Group Size</div>
                            <div class="text-14 text-light-2 lh-16">
                              10 people
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-3 col-6">
                        <div class="d-flex items-center">
                          <div class="flex-center size-50 rounded-12 border-1">
                            <i class="text-20 icon-birthday-cake"></i>
                          </div>

                          <div class="ml-10">
                            <div class="lh-16">Ages</div>
                            <div class="text-14 text-light-2 lh-16">
                              18-99 yrs
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-3 col-6">
                        <div class="d-flex items-center">
                          <div class="flex-center size-50 rounded-12 border-1">
                            <i class="text-20 icon-translate"></i>
                          </div>

                          <div class="ml-10">
                            <div class="lh-16">Languages</div>
                            <div class="text-14 text-light-2 lh-16">
                              English, Japanese
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h2 class="text-30">Tour Overview</h2>
                    <p class="mt-20">
                      The Phi Phi archipelago is a must-visit while in Phuket,
                      and this speedboat trip whisks you around the islands in
                      one day. Swim over the coral reefs of Pileh Lagoon, have
                      lunch at Phi Phi Leh, snorkel at Bamboo Island, and visit
                      Monkey Beach and Maya Bay, immortalized in "The Beach."
                      Boat transfers, snacks, buffet lunch, snorkeling
                      equipment, and Phuket hotel pickup and drop-off all
                      included.
                    </p>

                    <h3 class="text-20 fw-500 mt-20">Tour Highlights</h3>
                    <ul class="ulList mt-20">
                      <li>
                        Experience the thrill of a speedboat to the stunning Phi
                        Phi Islands
                      </li>
                      <li>
                        Be amazed by the variety of marine life in the
                        archepelago
                      </li>
                      <li>
                        Enjoy relaxing in paradise with white sand beaches and
                        azure turquoise water
                      </li>
                      <li>
                        Feel the comfort of a tour limited to 35 passengers
                      </li>
                      <li>
                        Catch a glimpse of the wild monkeys around Monkey Beach
                      </li>
                    </ul>
                  </div>

                  <div class="tabs__pane -tab-item-2">
                    <h2 class="text-30">What's included</h2>

                    <div class="row x-gap-130 y-gap-20 pt-20">
                      <div class="col-lg-6">
                        <div class="y-gap-15">
                          <div class="d-flex">
                            <i class="icon-check flex-center text-10 size-24 rounded-full text-green-2 bg-green-1 mr-15"></i>
                            Beverages, drinking water, morning tea and buffet
                            lunch
                          </div>
                          <div class="d-flex">
                            <i class="icon-check flex-center text-10 size-24 rounded-full text-green-2 bg-green-1 mr-15"></i>
                            Local taxes
                          </div>
                          <div class="d-flex">
                            <i class="icon-check flex-center text-10 size-24 rounded-full text-green-2 bg-green-1 mr-15"></i>
                            Hotel pickup and drop-off by air-conditioned minivan
                          </div>
                          <div class="d-flex">
                            <i class="icon-check flex-center text-10 size-24 rounded-full text-green-2 bg-green-1 mr-15"></i>
                            InsuranceTransfer to a private pier
                          </div>
                          <div class="d-flex">
                            <i class="icon-check flex-center text-10 size-24 rounded-full text-green-2 bg-green-1 mr-15"></i>
                            Soft drinks
                          </div>
                          <div class="d-flex">
                            <i class="icon-check flex-center text-10 size-24 rounded-full text-green-2 bg-green-1 mr-15"></i>
                            Tour Guide
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-6">
                        <div class="y-gap-15">
                          <div class="d-flex">
                            <i class="icon-cross flex-center text-10 size-24 rounded-full text-red-3 bg-red-4 mr-15"></i>
                            Towel
                          </div>
                          <div class="d-flex">
                            <i class="icon-cross flex-center text-10 size-24 rounded-full text-red-3 bg-red-4 mr-15"></i>
                            Tips
                          </div>
                          <div class="d-flex">
                            <i class="icon-cross flex-center text-10 size-24 rounded-full text-red-3 bg-red-4 mr-15"></i>
                            Alcoholic Beverages
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="tabs__pane -tab-item-3">
                    <h2 class="text-30">Itinerary</h2>

                    <div class="mt-30">
                      <div class="roadmap">
                        <div class="roadmap__item">
                          <div class="roadmap__iconBig">
                            <i class="icon-pin"></i>
                          </div>
                          <div class="roadmap__wrap">
                            <div class="roadmap__title">
                              Day 1: Airport Pick Up
                            </div>
                          </div>
                        </div>

                        <div class="roadmap__item">
                          <div class="roadmap__icon"></div>
                          <div class="roadmap__wrap">
                            <div class="roadmap__title">
                              Day 2: Temples & River Cruise
                            </div>
                            <div class="roadmap__content">
                              Like on all of our trips, we can collect you from
                              the airport when you land and take you directly to
                              your hotel. The first Day is just a check-in Day
                              so you have this freedom to explore the city and
                              get settled in.
                            </div>
                          </div>
                        </div>

                        <div class="roadmap__item">
                          <div class="roadmap__icon"></div>
                          <div class="roadmap__wrap">
                            <div class="roadmap__title">
                              Day 3: Massage &amp; Overnight Train
                            </div>
                          </div>
                        </div>

                        <div class="roadmap__item">
                          <div class="roadmap__icon"></div>
                          <div class="roadmap__wrap">
                            <div class="roadmap__title">
                              Day 4: Khao Sok National Park
                            </div>
                          </div>
                        </div>

                        <div class="roadmap__item">
                          <div class="roadmap__icon"></div>
                          <div class="roadmap__wrap">
                            <div class="roadmap__title">
                              Day 5: Travel to Koh Phangan
                            </div>
                          </div>
                        </div>

                        <div class="roadmap__item">
                          <div class="roadmap__icon"></div>
                          <div class="roadmap__wrap">
                            <div class="roadmap__title">
                              Day 6: Morning Chill &amp; Muay Thai Lesson
                            </div>
                          </div>
                        </div>

                        <div class="roadmap__item">
                          <div class="roadmap__iconBig">
                            <i class="icon-flag"></i>
                          </div>
                          <div class="roadmap__wrap">
                            <div class="roadmap__title">
                              Day 7: Island Boat Trip
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="tabs__pane -tab-item-4">
                    <h2 class="text-30">Availability Calendar</h2>
                    <Calender />

                    <span>{date}</span>
                  </div>

                  <div class="tabs__pane -tab-item-5">
                    <h2 class="text-30">FAQ</h2>

                    <div class="accordion -simple row y-gap-20 mt-30 js-accordion">
                      <div class="col-12">
                        <div class="accordion__item px-20 py-15 border-1 rounded-12">
                          <div class="accordion__button d-flex items-center justify-between">
                            <div class="button text-16 text-dark-1">
                              Can I get the refund?
                            </div>

                            <div class="accordion__icon size-30 flex-center bg-light-2 rounded-full">
                              <i class="icon-plus"></i>
                              <i class="icon-minus"></i>
                            </div>
                          </div>

                          <div class="accordion__content">
                            <div class="pt-20">
                              <p>
                                Phang Nga Bay Sea Cave Canoeing & James Bond
                                Island w/ Buffet Lunch by Big Boat cancellation
                                policy: For a full refund, cancel at least 24
                                hours in advance of the start date of the
                                experience. Discover and book Phang Nga Bay Sea
                                Cave Canoeing & James Bond Island w/ Buffet
                                Lunch by Big Boat
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="accordion__item px-20 py-15 border-1 rounded-12">
                          <div class="accordion__button d-flex items-center justify-between">
                            <div class="button text-16 text-dark-1">
                              Can I change the travel date?
                            </div>

                            <div class="accordion__icon size-30 flex-center bg-light-2 rounded-full">
                              <i class="icon-plus"></i>
                              <i class="icon-minus"></i>
                            </div>
                          </div>

                          <div class="accordion__content">
                            <div class="pt-20">
                              <p>
                                Phang Nga Bay Sea Cave Canoeing & James Bond
                                Island w/ Buffet Lunch by Big Boat cancellation
                                policy: For a full refund, cancel at least 24
                                hours in advance of the start date of the
                                experience. Discover and book Phang Nga Bay Sea
                                Cave Canoeing & James Bond Island w/ Buffet
                                Lunch by Big Boat
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="accordion__item px-20 py-15 border-1 rounded-12">
                          <div class="accordion__button d-flex items-center justify-between">
                            <div class="button text-16 text-dark-1">
                              When and where does the tour end?
                            </div>

                            <div class="accordion__icon size-30 flex-center bg-light-2 rounded-full">
                              <i class="icon-plus"></i>
                              <i class="icon-minus"></i>
                            </div>
                          </div>

                          <div class="accordion__content">
                            <div class="pt-20">
                              <p>
                                Phang Nga Bay Sea Cave Canoeing & James Bond
                                Island w/ Buffet Lunch by Big Boat cancellation
                                policy: For a full refund, cancel at least 24
                                hours in advance of the start date of the
                                experience. Discover and book Phang Nga Bay Sea
                                Cave Canoeing & James Bond Island w/ Buffet
                                Lunch by Big Boat
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="accordion__item px-20 py-15 border-1 rounded-12">
                          <div class="accordion__button d-flex items-center justify-between">
                            <div class="button text-16 text-dark-1">
                              Do you arrange airport transfers?
                            </div>

                            <div class="accordion__icon size-30 flex-center bg-light-2 rounded-full">
                              <i class="icon-plus"></i>
                              <i class="icon-minus"></i>
                            </div>
                          </div>

                          <div class="accordion__content">
                            <div class="pt-20">
                              <p>
                                Phang Nga Bay Sea Cave Canoeing & James Bond
                                Island w/ Buffet Lunch by Big Boat cancellation
                                policy: For a full refund, cancel at least 24
                                hours in advance of the start date of the
                                experience. Discover and book Phang Nga Bay Sea
                                Cave Canoeing & James Bond Island w/ Buffet
                                Lunch by Big Boat
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="tabs__pane -tab-item-6">
                    <h2 class="text-30">Customer Reviews</h2>

                    <div class="overallRating mt-30">
                      <div class="overallRating__list">
                        <div class="overallRating__item">
                          <div class="overallRating__content">
                            <div class="overallRating__icon">
                              <i class="icon-star-2 text-30 text-accent-1"></i>
                            </div>

                            <div class="overallRating__info">
                              <h5 class="text-16 fw-500">Overall Rating</h5>
                              <div class="lh-15">Excellent</div>
                            </div>
                          </div>

                          <div class="overallRating__rating d-flex items-center">
                            <i class="icon-star text-yellow-2 text-16"></i>
                            <div class="text-16 fw-500 ml-10">5.0</div>
                          </div>
                        </div>

                        <div class="overallRating__item">
                          <div class="overallRating__content">
                            <div class="overallRating__icon">
                              <i class="icon-pin-2 text-30 text-accent-1"></i>
                            </div>

                            <div class="overallRating__info">
                              <h5 class="text-16 fw-500">Location</h5>
                              <div class="lh-15">Excellent</div>
                            </div>
                          </div>

                          <div class="overallRating__rating d-flex items-center">
                            <i class="icon-star text-yellow-2 text-16"></i>
                            <div class="text-16 fw-500 ml-10">5.0</div>
                          </div>
                        </div>

                        <div class="overallRating__item">
                          <div class="overallRating__content">
                            <div class="overallRating__icon">
                              <i class="icon-application text-30 text-accent-1"></i>
                            </div>

                            <div class="overallRating__info">
                              <h5 class="text-16 fw-500">Amenities</h5>
                              <div class="lh-15">Excellent</div>
                            </div>
                          </div>

                          <div class="overallRating__rating d-flex items-center">
                            <i class="icon-star text-yellow-2 text-16"></i>
                            <div class="text-16 fw-500 ml-10">5.0</div>
                          </div>
                        </div>

                        <div class="overallRating__item">
                          <div class="overallRating__content">
                            <div class="overallRating__icon">
                              <i class="icon-utensils text-30 text-accent-1"></i>
                            </div>

                            <div class="overallRating__info">
                              <h5 class="text-16 fw-500">Food</h5>
                              <div class="lh-15">Excellent</div>
                            </div>
                          </div>

                          <div class="overallRating__rating d-flex items-center">
                            <i class="icon-star text-yellow-2 text-16"></i>
                            <div class="text-16 fw-500 ml-10">5.0</div>
                          </div>
                        </div>

                        <div class="overallRating__item">
                          <div class="overallRating__content">
                            <div class="overallRating__icon">
                              <i class="icon-price-tag text-30 text-accent-1"></i>
                            </div>

                            <div class="overallRating__info">
                              <h5 class="text-16 fw-500">Price</h5>
                              <div class="lh-15">Excellent</div>
                            </div>
                          </div>

                          <div class="overallRating__rating d-flex items-center">
                            <i class="icon-star text-yellow-2 text-16"></i>
                            <div class="text-16 fw-500 ml-10">5.0</div>
                          </div>
                        </div>

                        <div class="overallRating__item">
                          <div class="overallRating__content">
                            <div class="overallRating__icon">
                              <i class="icon-bed-2 text-30 text-accent-1"></i>
                            </div>

                            <div class="overallRating__info">
                              <h5 class="text-16 fw-500">Rooms</h5>
                              <div class="lh-15">Excellent</div>
                            </div>
                          </div>

                          <div class="overallRating__rating d-flex items-center">
                            <i class="icon-star text-yellow-2 text-16"></i>
                            <div class="text-16 fw-500 ml-10">5.0</div>
                          </div>
                        </div>

                        <div class="overallRating__item">
                          <div class="overallRating__content">
                            <div class="overallRating__icon">
                              <i class="icon-online-support-2 text-30 text-accent-1"></i>
                            </div>

                            <div class="overallRating__info">
                              <h5 class="text-16 fw-500">Tour Operator</h5>
                              <div class="lh-15">Excellent</div>
                            </div>
                          </div>

                          <div class="overallRating__rating d-flex items-center">
                            <i class="icon-star text-yellow-2 text-16"></i>
                            <div class="text-16 fw-500 ml-10">5.0</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="pt-30">
                      <div class="row justify-between">
                        <div class="col-auto">
                          <div class="d-flex items-center">
                            <div class="size-40 rounded-full">
                              <img
                                src="img/reviews/avatars/1.png"
                                alt="image"
                                class="img-cover"
                              />
                            </div>

                            <div class="text-16 fw-500 ml-20">Ali Tufan</div>
                          </div>
                        </div>

                        <div class="col-auto">
                          <div class="text-14 text-light-2">April 2023</div>
                        </div>
                      </div>

                      <div class="d-flex items-center mt-15">
                        <div class="d-flex x-gap-5">
                          <i class="icon-star text-yellow-2 text-10"></i>

                          <i class="icon-star text-yellow-2 text-10"></i>

                          <i class="icon-star text-yellow-2 text-10"></i>

                          <i class="icon-star text-yellow-2 text-10"></i>

                          <i class="icon-star text-yellow-2 text-10"></i>
                        </div>
                        <div class="text-16 fw-500 ml-10">
                          Take this tour! Its fantastic!
                        </div>
                      </div>

                      <p class="mt-10">
                        Great for 4-5 hours to explore. Really a lot to see and
                        tons of photo spots. Even have a passport for you to
                        collect all the stamps as a souvenir. Must see for a
                        Harry Potter fan.
                      </p>

                      <div class="row x-gap-20 y-gap-20 pt-20">
                        <div class="col-auto">
                          <div class="size-130">
                            <img
                              src="img/reviews/1/1.png"
                              alt="image"
                              class="img-cover rounded-12"
                            />
                          </div>
                        </div>

                        <div class="col-auto">
                          <div class="size-130">
                            <img
                              src="img/reviews/1/2.png"
                              alt="image"
                              class="img-cover rounded-12"
                            />
                          </div>
                        </div>

                        <div class="col-auto">
                          <div class="size-130">
                            <img
                              src="img/reviews/1/3.png"
                              alt="image"
                              class="img-cover rounded-12"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="d-flex x-gap-30 items-center mt-20">
                        <div>
                          <a href="#" class="d-flex items-center">
                            <i class="icon-like text-16 mr-10"></i>
                            Helpful
                          </a>
                        </div>
                        <div>
                          <a href="#" class="d-flex items-center">
                            <i class="icon-dislike text-16 mr-10"></i>
                            Not helpful
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="pt-30">
                      <div class="row justify-between">
                        <div class="col-auto">
                          <div class="d-flex items-center">
                            <div class="size-40 rounded-full">
                              <img
                                src="img/reviews/avatars/1.png"
                                alt="image"
                                class="img-cover"
                              />
                            </div>

                            <div class="text-16 fw-500 ml-20">Ali Tufan</div>
                          </div>
                        </div>

                        <div class="col-auto">
                          <div class="text-14 text-light-2">April 2023</div>
                        </div>
                      </div>

                      <div class="d-flex items-center mt-15">
                        <div class="d-flex x-gap-5">
                          <i class="icon-star text-yellow-2 text-10"></i>

                          <i class="icon-star text-yellow-2 text-10"></i>

                          <i class="icon-star text-yellow-2 text-10"></i>

                          <i class="icon-star text-yellow-2 text-10"></i>

                          <i class="icon-star text-yellow-2 text-10"></i>
                        </div>
                        <div class="text-16 fw-500 ml-10">
                          Take this tour! Its fantastic!
                        </div>
                      </div>

                      <p class="mt-10">
                        Great for 4-5 hours to explore. Really a lot to see and
                        tons of photo spots. Even have a passport for you to
                        collect all the stamps as a souvenir. Must see for a
                        Harry Potter fan.
                      </p>

                      <div class="row x-gap-20 y-gap-20 pt-20">
                        <div class="col-auto">
                          <div class="size-130">
                            <img
                              src="img/reviews/1/1.png"
                              alt="image"
                              class="img-cover rounded-12"
                            />
                          </div>
                        </div>

                        <div class="col-auto">
                          <div class="size-130">
                            <img
                              src="img/reviews/1/2.png"
                              alt="image"
                              class="img-cover rounded-12"
                            />
                          </div>
                        </div>

                        <div class="col-auto">
                          <div class="size-130">
                            <img
                              src="img/reviews/1/3.png"
                              alt="image"
                              class="img-cover rounded-12"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="d-flex x-gap-30 items-center mt-20">
                        <div>
                          <a href="#" class="d-flex items-center">
                            <i class="icon-like text-16 mr-10"></i>
                            Helpful
                          </a>
                        </div>
                        <div>
                          <a href="#" class="d-flex items-center">
                            <i class="icon-dislike text-16 mr-10"></i>
                            Not helpful
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="pt-30">
                      <div class="row justify-between">
                        <div class="col-auto">
                          <div class="d-flex items-center">
                            <div class="size-40 rounded-full">
                              <img
                                src="img/reviews/avatars/1.png"
                                alt="image"
                                class="img-cover"
                              />
                            </div>

                            <div class="text-16 fw-500 ml-20">Ali Tufan</div>
                          </div>
                        </div>

                        <div class="col-auto">
                          <div class="text-14 text-light-2">April 2023</div>
                        </div>
                      </div>

                      <div class="d-flex items-center mt-15">
                        <div class="d-flex x-gap-5">
                          <i class="icon-star text-yellow-2 text-10"></i>

                          <i class="icon-star text-yellow-2 text-10"></i>

                          <i class="icon-star text-yellow-2 text-10"></i>

                          <i class="icon-star text-yellow-2 text-10"></i>

                          <i class="icon-star text-yellow-2 text-10"></i>
                        </div>
                        <div class="text-16 fw-500 ml-10">
                          Take this tour! Its fantastic!
                        </div>
                      </div>

                      <p class="mt-10">
                        Great for 4-5 hours to explore. Really a lot to see and
                        tons of photo spots. Even have a passport for you to
                        collect all the stamps as a souvenir. Must see for a
                        Harry Potter fan.
                      </p>

                      <div class="row x-gap-20 y-gap-20 pt-20">
                        <div class="col-auto">
                          <div class="size-130">
                            <img
                              src="img/reviews/1/1.png"
                              alt="image"
                              class="img-cover rounded-12"
                            />
                          </div>
                        </div>

                        <div class="col-auto">
                          <div class="size-130">
                            <img
                              src="img/reviews/1/2.png"
                              alt="image"
                              class="img-cover rounded-12"
                            />
                          </div>
                        </div>

                        <div class="col-auto">
                          <div class="size-130">
                            <img
                              src="img/reviews/1/3.png"
                              alt="image"
                              class="img-cover rounded-12"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="d-flex x-gap-30 items-center mt-20">
                        <div>
                          <a href="#" class="d-flex items-center">
                            <i class="icon-like text-16 mr-10"></i>
                            Helpful
                          </a>
                        </div>
                        <div>
                          <a href="#" class="d-flex items-center">
                            <i class="icon-dislike text-16 mr-10"></i>
                            Not helpful
                          </a>
                        </div>
                      </div>
                    </div>

                    <button class="button -md -outline-accent-1 text-accent-1 mt-30">
                      See more reviews
                      <i class="icon-arrow-top-right text-16 ml-10"></i>
                    </button>

                    <h2 class="text-30 pt-60">Leave a Reply</h2>
                    <p class="mt-30">
                      Your email address will not be published. Required fields
                      are marked *
                    </p>

                    <div class="reviewsGrid pt-30">
                      <div class="reviewsGrid__item">
                        Location
                        <div class="d-flex x-gap-5 pl-20">
                          <i class="icon-star text-10 text-yellow-2"></i>

                          <i class="icon-star text-10 text-yellow-2"></i>

                          <i class="icon-star text-10 text-yellow-2"></i>

                          <i class="icon-star text-10 text-yellow-2"></i>

                          <i class="icon-star text-10 text-yellow-2"></i>
                        </div>
                      </div>

                      <div class="reviewsGrid__item">
                        Amenities
                        <div class="d-flex x-gap-5 pl-20">
                          <i class="icon-star text-10 text-yellow-2"></i>

                          <i class="icon-star text-10 text-yellow-2"></i>

                          <i class="icon-star text-10 text-yellow-2"></i>

                          <i class="icon-star text-10 text-yellow-2"></i>

                          <i class="icon-star text-10 text-yellow-2"></i>
                        </div>
                      </div>

                      <div class="reviewsGrid__item">
                        Food
                        <div class="d-flex x-gap-5 pl-20">
                          <i class="icon-star text-10 text-yellow-2"></i>

                          <i class="icon-star text-10 text-yellow-2"></i>

                          <i class="icon-star text-10 text-yellow-2"></i>

                          <i class="icon-star text-10 text-yellow-2"></i>

                          <i class="icon-star text-10 text-yellow-2"></i>
                        </div>
                      </div>

                      <div class="reviewsGrid__item">
                        Room
                        <div class="d-flex x-gap-5 pl-20">
                          <i class="icon-star text-10 text-yellow-2"></i>

                          <i class="icon-star text-10 text-yellow-2"></i>

                          <i class="icon-star text-10 text-yellow-2"></i>

                          <i class="icon-star text-10 text-yellow-2"></i>

                          <i class="icon-star text-10 text-yellow-2"></i>
                        </div>
                      </div>

                      <div class="reviewsGrid__item">
                        Price
                        <div class="d-flex x-gap-5 pl-20">
                          <i class="icon-star text-10 text-yellow-2"></i>

                          <i class="icon-star text-10 text-yellow-2"></i>

                          <i class="icon-star text-10 text-yellow-2"></i>

                          <i class="icon-star text-10 text-yellow-2"></i>

                          <i class="icon-star text-10 text-yellow-2"></i>
                        </div>
                      </div>

                      <div class="reviewsGrid__item">
                        Tour Operator
                        <div class="d-flex x-gap-5 pl-20">
                          <i class="icon-star text-10 text-yellow-2"></i>

                          <i class="icon-star text-10 text-yellow-2"></i>

                          <i class="icon-star text-10 text-yellow-2"></i>

                          <i class="icon-star text-10 text-yellow-2"></i>

                          <i class="icon-star text-10 text-yellow-2"></i>
                        </div>
                      </div>
                    </div>

                    <div class="contactForm y-gap-30 pt-30">
                      <div class="row y-gap-30">
                        <div class="col-md-6">
                          <div class="form-input ">
                            <input type="text" required />
                            <label class="lh-1 text-16 text-light-1">
                              Name
                            </label>
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-input ">
                            <input type="email" required />
                            <label class="lh-1 text-16 text-light-1">
                              Email
                            </label>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-12">
                          <div class="form-input ">
                            <input type="text" required />
                            <label class="lh-1 text-16 text-light-1">
                              Title
                            </label>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-12">
                          <div class="form-input ">
                            <textarea required rows="5"></textarea>
                            <label class="lh-1 text-16 text-light-1">
                              Comment
                            </label>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-12">
                          <button class="button -md -dark-1 bg-accent-1 text-white">
                            Post Comment
                            <i class="icon-arrow-top-right text-16 ml-10"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="d-flex justify-end js-pin-content">
                <div class="tourSingleSidebar -top-320">
                  <div class="d-flex items-center">
                    <div>From</div>
                    <div class="text-20 fw-500 ml-10">$1,200</div>
                  </div>

                  <div class="searchForm -type-1 -sidebar mt-20">
                    <div class="searchForm__form">
                      <div class="searchFormItem js-select-control js-form-dd js-calendar">
                        <div
                          class="searchFormItem__button"
                          data-x-click="calendar"
                        >
                          <div class="searchFormItem__icon size-50 rounded-12 bg-light-1 flex-center">
                            <i class="text-20 icon-calendar"></i>
                          </div>
                          <div class="searchFormItem__content">
                            <h5>From</h5>
                            <div>
                              <span class="js-first-date">Add dates</span>
                              <span class="js-last-date"></span>
                            </div>
                          </div>
                          <div class="searchFormItem__icon_chevron">
                            <i class="icon-chevron-down d-flex text-18"></i>
                          </div>
                        </div>

                        <div
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
                        </div>
                      </div>

                      <div class="searchFormItem js-select-control js-form-dd">
                        <div class="searchFormItem__button" data-x-click="time">
                          <div class="searchFormItem__icon size-50 rounded-12 bg-light-1 flex-center">
                            <i class="text-20 icon-clock"></i>
                          </div>
                          <div class="searchFormItem__content">
                            <h5>Time</h5>
                            <div class="js-select-control-chosen">
                              Choose time
                            </div>
                          </div>
                          <div class="searchFormItem__icon_chevron">
                            <i class="icon-chevron-down d-flex text-18"></i>
                          </div>
                        </div>

                        <div
                          class="searchFormItemDropdown -tour-type"
                          data-x="time"
                          data-x-toggle="is-active"
                        >
                          <div class="searchFormItemDropdown__container">
                            <div class="searchFormItemDropdown__list sroll-bar-1">
                              <div class="searchFormItemDropdown__item">
                                <button class="js-select-control-button">
                                  <span class="js-select-control-choice">
                                    12:00
                                  </span>
                                </button>
                              </div>

                              <div class="searchFormItemDropdown__item">
                                <button class="js-select-control-button">
                                  <span class="js-select-control-choice">
                                    13:00
                                  </span>
                                </button>
                              </div>

                              <div class="searchFormItemDropdown__item">
                                <button class="js-select-control-button">
                                  <span class="js-select-control-choice">
                                    14:00
                                  </span>
                                </button>
                              </div>

                              <div class="searchFormItemDropdown__item">
                                <button class="js-select-control-button">
                                  <span class="js-select-control-choice">
                                    15:00
                                  </span>
                                </button>
                              </div>

                              <div class="searchFormItemDropdown__item">
                                <button class="js-select-control-button">
                                  <span class="js-select-control-choice">
                                    16:00
                                  </span>
                                </button>
                              </div>

                              <div class="searchFormItemDropdown__item">
                                <button class="js-select-control-button">
                                  <span class="js-select-control-choice">
                                    17:00
                                  </span>
                                </button>
                              </div>

                              <div class="searchFormItemDropdown__item">
                                <button class="js-select-control-button">
                                  <span class="js-select-control-choice">
                                    18:00
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h5 class="text-18 fw-500 mb-20 mt-20">Tickets</h5>

                  <div>
                    <div class="d-flex items-center justify-between">
                      <div class="text-14">
                        Adult (18+ years) <span class="fw-500">$94.00</span>
                      </div>

                      <div class="d-flex items-center js-counter">
                        <button class="button size-30 border-1 rounded-full js-down">
                          <i class="icon-minus text-10"></i>
                        </button>

                        <div class="flex-center ml-10 mr-10">
                          <div class="text-14 size-20 js-count">3</div>
                        </div>

                        <button class="button size-30 border-1 rounded-full js-up">
                          <i class="icon-plus text-10"></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="mt-15">
                    <div class="d-flex items-center justify-between">
                      <div class="text-14">
                        Youth (13-17 years) <span class="fw-500">$84.00</span>
                      </div>

                      <div class="d-flex items-center js-counter">
                        <button class="button size-30 border-1 rounded-full js-down">
                          <i class="icon-minus text-10"></i>
                        </button>

                        <div class="flex-center ml-10 mr-10">
                          <div class="text-14 size-20 js-count">4</div>
                        </div>

                        <button class="button size-30 border-1 rounded-full js-up">
                          <i class="icon-plus text-10"></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="mt-15">
                    <div class="d-flex items-center justify-between">
                      <div class="text-14">
                        Children (0-12 years) <span class="fw-500">$20.00</span>
                      </div>

                      <div class="d-flex items-center js-counter">
                        <button class="button size-30 border-1 rounded-full js-down">
                          <i class="icon-minus text-10"></i>
                        </button>

                        <div class="flex-center ml-10 mr-10">
                          <div class="text-14 size-20 js-count">2</div>
                        </div>

                        <button class="button size-30 border-1 rounded-full js-up">
                          <i class="icon-plus text-10"></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  <h5 class="text-18 fw-500 mb-20 mt-20">Add Extra</h5>

                  <div class="d-flex items-center justify-between">
                    <div class="d-flex items-center">
                      <div class="form-checkbox">
                        <input type="checkbox" />
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
                      <div class="ml-10">Add Service per booking</div>
                    </div>

                    <div class="text-14">$40</div>
                  </div>

                  <div class="d-flex justify-between mt-20">
                    <div class="d-flex">
                      <div class="form-checkbox mt-5">
                        <input type="checkbox" />
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

                      <div class="ml-10">
                        Add Service per person
                        <div class="lh-16">
                          Adult: <span class="fw-500">$17.00</span> - Youth:{" "}
                          <span class="fw-500">$14.00</span>
                        </div>
                      </div>
                    </div>

                    <div class="text-14">$40</div>
                  </div>

                  <div class="line mt-20 mb-20"></div>

                  <div class="d-flex items-center justify-between">
                    <div class="text-18 fw-500">Total:</div>
                    <div class="text-18 fw-500">$392.09</div>
                  </div>

                  <button class="button -md -dark-1 col-12 bg-accent-1 text-white mt-20">
                    Book Now
                    <i class="icon-arrow-top-right ml-10"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TourList />
    </div>
  );
};

export default TourDetail;
