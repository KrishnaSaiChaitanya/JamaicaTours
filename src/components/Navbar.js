"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const destinations = "/destinations";
  function dropdown() {
    const targets = document.querySelectorAll(".js-dropdown");
    if (!targets.length) return;

    targets.forEach((target) => {
      const title = target.querySelector(".js-title");
      const button = target.querySelector(".js-button");
      const menuItems = target.querySelectorAll(".js-menu-items > *");

      if (button) {
        button.addEventListener("click", () => {
          closeAllDropdowns();
          target.classList.toggle("is-active");
        });
      }

      menuItems.forEach((el) => {
        el.addEventListener("click", () => {
          if (!target.classList.contains("js-dont-close")) {
            target.classList.toggle("is-active");
            title.innerHTML = el.innerHTML;
          }
        });
      });
    });
  }
  const Events = (function () {
    function init() {
      const targets = document.querySelectorAll("[data-x-click]");
      if (!targets) return;

      targets.forEach((eventTarget) => {
        const attributes = eventTarget.getAttribute("data-x-click").split(", ");

        attributes.forEach((el) => {
          const target = document.querySelector(`[data-x=${el}]`);

          eventTarget.addEventListener("click", () => {
            const toggleClass = target.getAttribute("data-x-toggle");
            if (!target.classList.contains(toggleClass)) {
              closeAllDropdowns();
            }
            target.classList.toggle(toggleClass);
          });
        });
      });
    }

    function ddInit() {
      const targets = document.querySelectorAll(".js-form-dd");
      if (!targets) return;

      targets.forEach((el) => {
        const eventTarget = el.querySelector("[data-x-dd-click]");
        const attributes = eventTarget
          .getAttribute("data-x-dd-click")
          .split(", ");

        attributes.forEach((el2) => {
          const target = el.querySelector(`[data-x-dd=${el2}]`);
          const toggleClass = target.getAttribute("data-x-dd-toggle");

          eventTarget.addEventListener("click", () => {
            if (eventTarget.querySelector(".js-dd-focus"))
              eventTarget.querySelector(".js-dd-focus").focus();

            if (target.classList.contains(toggleClass)) {
              target.classList.remove(toggleClass);
              el.classList.remove("-is-dd-wrap-active");
            } else {
              closeAllDropdowns();
              target.classList.add(toggleClass);
              el.classList.add("-is-dd-wrap-active");
            }
          });
        });
      });
    }

    return {
      ddInit: ddInit,
      closeAllDropdowns: closeAllDropdowns,
      init: init,
    };
  })();
  const toggleSidebar = () => {
    console.log("hello");
    setIsOpen(!isOpen);
    if (open) {
      const menuDiv = document.getElementById("menu");
      if (menuDiv) {
        menuDiv.style.opacity = 1;
        menuDiv.classList.add("is-active");
      }
    } else {
      const menuDiv = document.getElementById("menu");
      if (menuDiv) {
        menuDiv.style.opacity = "0";
        menuDiv.classList.remove("is-active");
      }
    }
  };
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
  function menuEvents() {
    let isMenuOpen = false;
    const menuButtons = document.querySelectorAll(".js-menu-button");

    menuButtons.forEach((el) => {
      el.addEventListener("click", (e) => {
        if (!isMenuOpen) {
          menuOpen();
          isMenuOpen = true;
        } else {
          menuClose();
          isMenuOpen = false;
        }
      });
    });
  }

  function menuOpen() {
    const menu = document.querySelector(".js-menu");
    const header = document.querySelector(".js-header");

    gsap.timeline().to(menu, {
      opacity: 1,
      onStart: () => {
        menu.classList.add("-is-active");
        document.body.classList.add("overflow-hidden");
        header.classList.add("-dark");
      },
    });
  }
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  function menuClose() {
    const menu = document.querySelector(".js-menu");
    const header = document.querySelector(".js-header");

    gsap.timeline().to(menu, {
      opacity: 0,
      onStart: () => {
        menu.classList.remove("-is-active");
        document.body.classList.remove("overflow-hidden");
        header.classList.remove("-dark");
      },
    });
  }
  function priceRangeSliderInit() {
    const targets = document.querySelectorAll(".js-price-rangeSlider");

    targets.forEach((el) => {
      const slider = el.querySelector(".js-slider");

      noUiSlider.create(slider, {
        start: [20, 70000],
        step: 1,
        connect: true,
        range: {
          min: 0,
          max: 100000,
        },
        format: {
          to: function (value) {
            return "$" + value.toFixed(0);
          },

          from: function (value) {
            return value;
          },
        },
      });

      const snapValues = [
        el.querySelector(".js-lower"),
        el.querySelector(".js-upper"),
      ];

      slider.noUiSlider.on("update", function (values, handle) {
        snapValues[handle].innerHTML = values[handle];
      });
    });
  }
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
  useEffect(() => {
    function headerSticky() {
      const target = document.querySelector(".js-header");
      if (!target) return;

      window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
          target.classList.add("-is-sticky");
        } else {
          target.classList.remove("-is-sticky");
        }
      });
    }
    const Header = (function () {
      let navList;
      let navBtnListBack;
      let menuDeepLevel;
      let timeline = gsap.timeline();

      function updateVars() {
        navList = document.querySelector(".js-navList");
        navBtnListBack = document.querySelectorAll(".js-nav-list-back");
        menuDeepLevel = 0;
      }

      function init() {
        updateVars();
        menuListBindEvents();
      }

      function deepLevelCheck(level) {
        return level;
      }

      function menuListBindEvents() {
        const listItems = document.querySelectorAll(
          ".js-navList .js-has-submenu"
        );
        if (!listItems.length) return;

        navBtnListBack.forEach((el) => {
          el.addEventListener("click", () => {
            const visibleList = navList.querySelector("ul.-is-active");
            const parentList = visibleList.parentElement.parentElement;

            menuDeepLevel--;
            menuListStepAnimate(visibleList, parentList, menuDeepLevel);
          });
        });

        listItems.forEach((el) => {
          const parenta = el.querySelector("li > a");
          parenta.removeAttribute("href");

          parenta.addEventListener("click", () => {
            const parent = el.parentElement;
            const subnavList = el.lastElementChild;

            menuDeepLevel++;
            menuListStepAnimate(
              parent,
              subnavList,
              menuDeepLevel,
              parenta.innerHTML
            );
          });
        });
      }

      function menuListStepAnimate(hideList, showList, level) {
        let hideListItems = hideList.children;
        hideListItems = Array.from(hideListItems);
        const hideListas = hideListItems.map((item) =>
          item.querySelector("li > a")
        );

        let showListItems = showList.children;
        showListItems = Array.from(showListItems);
        const showListas = showListItems.map((item) =>
          item.querySelector("li > a")
        );

        // let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        // if (width < 1199 || document.querySelector('.js-desktopMenu')) {}

        timeline.clear();

        if (!deepLevelCheck(level)) {
          gsap.to(navBtnListBack, {
            ease: "quart.inOut",
            duration: 0.6,
            opacity: 0,
          });
        }

        timeline.to(hideListas, {
          ease: "quart.out",
          stagger: -0.04,
          duration: 0.8,
          y: "100%",
          onStart: () => {
            showList.classList.add("-is-active");
          },
          onComplete: () => {
            hideList.classList.remove("-is-active");
          },
        });

        if (deepLevelCheck(level)) {
          timeline.to(
            navBtnListBack,
            {
              ease: "quart.inOut",
              duration: 0.6,
              y: "0px",
              opacity: 1,
            },
            ">-0.5"
          );
        }

        timeline.to(
          showListas,
          {
            ease: "quart.out",
            stagger: 0.08,
            duration: 0.9,
            y: "0%",
          },
          ">-0.6"
        );
      }

      function headerSticky() {
        const header = document.querySelector(".js-header");
        if (!header) return;

        let classList = "";

        if (header.getAttribute("data-add-bg")) {
          classList = header.getAttribute("data-add-bg");
        }

        new ScrollMagic.Scene({ offset: "6px" })
          .setClassToggle(header, classList)
          .addTo(App.SMcontroller);

        new ScrollMagic.Scene({ offset: "6px" })
          .setClassToggle(header, "is-sticky")
          .addTo(App.SMcontroller);
      }

      return {
        headerSticky: headerSticky,
        init: init,
      };
    })();
    window.onclick = function (event) {
      if (!event.target.closest(".js-form-dd")) {
        console.log("test");
        closeAllDropdowns();
      }

      if (!event.target.closest(".js-select")) {
        const targets = document.querySelectorAll(".js-select");
        if (!targets) return;

        targets.forEach((el) => {
          if (el.querySelector(".-is-visible")) {
            el.querySelector(".-is-visible").classList.remove("-is-visible");
          }
        });
      }

      if (!event.target.closest(".js-multiple-select")) {
        const targets = document.querySelectorAll(".js-multiple-select");
        if (!targets) return;

        targets.forEach((el) => {
          if (el.querySelector(".-is-visible")) {
            el.querySelector(".-is-visible").classList.remove("-is-visible");
          }
        });
      }
    };
    Header.init();
    headerSticky();
    menuEvents();
    Tabs.init();
    dropdown();

    return () => {
      window.removeEventListener("scroll", headerSticky);
    };
  }, []);
  return (
    <>
      <header className="header -type-10 js-header ">
        <div
          className={
            isHomePage ? "header__container " : "header__container homepage"
          }
        >
          <div className="headerMobile__left">
            <button
              className="header__menuBtn js-menu-button"
              // onClick={toggleSidebar}
            >
              <i className="icon-main-menu text-white"></i>
            </button>
          </div>

          <div className="header__left">
            <div className="header__logo">
              <a herf="index" className="header__logo">
                <img src="img/general/logo-light.svg" alt="logo icon" />
              </a>

              <div className="xl:d-none ml-30">
                <div className="desktopNav -light">
                  <div className="desktopNav__item">
                    <Link
                      href={{
                        pathname: "/",
                      }}
                    >
                      Home
                    </Link>
                  </div>

                  <div className="desktopNav__item">
                    <a>
                      Tour <i className="icon-chevron-down"></i>
                    </a>

                    <div className="desktopNavMega">
                      <div className="desktopNavMega__container">
                        <div className="desktopNavMega__lists">
                          <div className="desktopNavMega-list">
                            <div className="desktopNavMega-list__item">
                              <div className="desktopNavMega-list__list">
                                <Link
                                  href={{
                                    pathname: "/single-tour",
                                  }}
                                >
                                  Tour Single Page
                                </Link>
                                <Link
                                  href={{
                                    pathname: "/tours-list",
                                  }}
                                >
                                  Tour List
                                </Link>
                                <Link
                                  href={{
                                    pathname: "/tour-layout",
                                  }}
                                >
                                  Tour Map
                                </Link>
                                <Link
                                  href={{
                                    pathname: "/booking",
                                  }}
                                >
                                  Booking
                                </Link>
                                <Link
                                  href={{
                                    pathname: "/booking-status",
                                  }}
                                >
                                  Booking Status
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="desktopNavMega__info">
                          <div className="specialCardGrid row y-gap-20">
                            <div className="col-12">
                              <div className="specialCard">
                                <div className="specialCard__image">
                                  <img src="img/cta/10/1.jpg" alt="image" />
                                </div>

                                <div className="specialCard__content">
                                  <div className="specialCard__subtitle">
                                    Enjoy Upto
                                  </div>
                                  <h3 className="specialCard__title">
                                    60 % OFF
                                  </h3>
                                  <div className="specialCard__text">
                                    on Your Booking
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-12">
                              <div className="specialCard">
                                <div className="specialCard__image">
                                  <img src="img/cta/10/2.jpg" alt="image" />
                                </div>

                                <div className="specialCard__content">
                                  <div className="specialCard__subtitle">
                                    80% Discount
                                  </div>
                                  <h3 className="specialCard__title">
                                    Are You Ready
                                    <br /> To Turkey Tour
                                  </h3>
                                  <div className="specialCard__text"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="desktopNav__item">
                    <Link
                      href={{
                        pathname: "/destinations",
                      }}
                    >
                      Destination
                    </Link>
                  </div>

                  <div className="desktopNav__item">
                    <a>
                      Pages <i className="icon-chevron-down"></i>
                    </a>

                    <div className="desktopNavSubnav">
                      <div className="desktopNavSubnav__content">
                        <div className="desktopNavSubnav__item">
                          <Link
                            href={{
                              pathname: "/destinations",
                            }}
                          >
                            Destination
                          </Link>
                        </div>

                        <div className="desktopNavSubnav__item">
                          <Link
                            href={{
                              pathname: "/about",
                            }}
                          >
                            About
                          </Link>
                        </div>

                        <div className="desktopNavSubnav__item">
                          <Link
                            href={{
                              pathname: "/help-center",
                            }}
                          >
                            Help Center
                          </Link>
                        </div>

                        <div className="desktopNavSubnav__item">
                          <Link
                            href={{
                              pathname: "/terms",
                            }}
                          >
                            Terms
                          </Link>
                        </div>

                        <div className="desktopNavSubnav__item">
                          <Link
                            href={{
                              pathname: "/blogs",
                            }}
                          >
                            Blogs
                          </Link>
                        </div>
                        <div className="desktopNavSubnav__item">
                          <Link
                            href={{
                              pathname: "/tour-layout",
                            }}
                          >
                            Tours List
                          </Link>
                        </div>

                        <div className="desktopNavSubnav__item">
                          <Link
                            href={{
                              pathname: "/login",
                            }}
                          >
                            Login
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="desktopNav__item">
                    <Link
                      href={{
                        pathname: "/contact",
                      }}
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="headerMobile__right">
            <button className="d-flex">
              <i className="icon-search text-18 text-white"></i>
            </button>

            <button className="d-flex ml-20">
              <i className="icon-person text-18 text-white"></i>
            </button>
          </div>

          <div className="header__right">
            <div className="headerDropdown -hover-light text-white js-form-dd">
              <div
                className="headerDropdown__button"
                data-x-click="header-currency"
              >
                USD
                <i className="icon-chevron-down text-18"></i>
              </div>

              <div
                className="headerDropdown__content"
                data-x="header-currency"
                data-x-toggle="is-active"
              >
                <div class="headerDropdown">
                  <div class="headerDropdown__container">
                    <div class="headerDropdown__item">
                      <button class="">U.S. Dollar</button>
                    </div>

                    <div class="headerDropdown__item">
                      <button class="">Euro</button>
                    </div>

                    <div class="headerDropdown__item">
                      <button class="">British Pound</button>
                    </div>

                    <div class="headerDropdown__item">
                      <button class="">Turkish Lira</button>
                    </div>

                    <div class="headerDropdown__item">
                      <button class="">Canadian Dollar</button>
                    </div>

                    <div class="headerDropdown__item">
                      <button class="">Australian Dollar</button>
                    </div>

                    <div class="headerDropdown__item">
                      <button class="">Swiss Franc</button>
                    </div>

                    <div class="headerDropdown__item">
                      <button class="">Singapore Dollar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a href="register" className="text-white ml-10">
              Sign up
            </a>

            <a
              href="login"
              className="button -sm -outline-white text-white rounded-200 ml-30"
            >
              Log in
            </a>
          </div>
        </div>
      </header>

      <div class="menu js-menu">
        <div class="menu__overlay js-menu-button"></div>

        <div class="menu__container">
          <div class="menu__header">
            <h4>Main Menu</h4>

            <button class="js-menu-button">
              <i class="icon-cross text-10"></i>
            </button>
          </div>

          <div class="menu__content">
            <ul class="menuNav js-navList">
              <li class="menuNav__item">
                <a href="/">Home</a>
              </li>

              <li class="menuNav__item -has-submenu js-has-submenu">
                <a>
                  Tour
                  <i class="icon-chevron-right"></i>
                </a>

                <ul class="submenu">
                  <li class="submenu__item js-nav-list-back">
                    <a>Back</a>
                  </li>
                  <li class="submenu__item">
                    <a href="booking">Booking</a>
                  </li>
                  <li class="submenu__item">
                    <a href="/blog">Booking Status</a>
                  </li>
                  <li class="submenu__item">
                    <a href="/tours-list">Tour List</a>
                  </li>
                  <li class="submenu__item">
                    <a href="/tour-layout">Tour Map</a>
                  </li>
                  <li class="submenu__item">
                    <a href="/single-tour">Single Tour</a>
                  </li>
                </ul>
              </li>

              <li class="menuNav__item -has-submenu js-has-submenu">
                <a>
                  Pages
                  <i class="icon-chevron-right"></i>
                </a>

                <ul class="submenu">
                  <li class="submenu__item js-nav-list-back">
                    <a>Back</a>
                  </li>

                  <li class="submenu__item">
                    <a href="/destinations">Destination</a>
                  </li>

                  <li class="submenu__item">
                    <a href="/about">About</a>
                  </li>

                  <li class="submenu__item">
                    <a href="/contact">Contact</a>
                  </li>

                  <li class="submenu__item">
                    <a href="/help-center">Help Center</a>
                  </li>

                  <li class="submenu__item">
                    <a href="/terms">Terms</a>
                  </li>

                  <li class="submenu__item">
                    <a href="/login">Login</a>
                  </li>

                  <li class="submenu__item">
                    <a href="/register">Register</a>
                  </li>

                  <li class="submenu__item">
                    <a href="/invoice">Invoice</a>
                  </li>
                  <li class="submenu__item">
                    <a href="/blogs">Blogs</a>
                  </li>
                  <li class="submenu__item">
                    <a href="/blog">Blog Page</a>
                  </li>
                </ul>
              </li>

              <li class="menuNav__item">
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>

          <div class="menu__footer">
            <i class="icon-headphone text-50"></i>

            <div class="text-20 lh-12 fw-500 mt-20">
              <div>Speak to our expert at</div>
              <div class="text-accent-1">1-800-453-6744</div>
            </div>

            <div class="d-flex items-center x-gap-10 pt-30">
              <div>
                <a class="d-block">
                  <i class="icon-facebook"></i>
                </a>
              </div>

              <div>
                <a class="d-block">
                  <i class="icon-twitter"></i>
                </a>
              </div>

              <div>
                <a class="d-block">
                  <i class="icon-instagram"></i>
                </a>
              </div>

              <div>
                <a class="d-block">
                  <i class="icon-aedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
