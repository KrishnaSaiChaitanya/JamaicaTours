"use client";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
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
    headerSticky();
    return () => {
      window.removeEventListener("scroll", headerSticky);
    };
  }, []);
  return (
    <>
      <header className="header -type-10 js-header ">
        <div className="header__container">
          <div className="headerMobile__left">
            <button className="header__menuBtn js-menu-button">
              <i className="icon-main-menu text-white"></i>
            </button>
          </div>

          <div className="header__left">
            <div className="header__logo">
              <a href="index" className="header__logo">
                <img src="img/general/logo-light.svg" alt="logo icon" />
              </a>

              <div className="xl:d-none ml-30">
                <div className="desktopNav -light">
                  <div className="desktopNav__item">
                    <a href="">
                      Home <i className="icon-chevron-down"></i>
                    </a>

                    <div className="desktopNavSubnav">
                      <div className="desktopNavSubnav__content">
                        <div className="desktopNavSubnav__item">
                          <a href="index">Home 01</a>
                        </div>

                        <div className="desktopNavSubnav__item">
                          <a href="home-2">Home 02</a>
                        </div>

                        {/* ... Add more home links here ... */}
                      </div>
                    </div>
                  </div>

                  <div className="desktopNav__item">
                    <a href="">
                      Tour <i className="icon-chevron-down"></i>
                    </a>

                    <div className="desktopNavMega">
                      <div className="desktopNavMega__container">
                        <div className="desktopNavMega__lists">
                          <div className="desktopNavMega-list">
                            <div className="desktopNavMega-list__item">
                              <div className="desktopNavMega-list__title">
                                Tour List Style
                              </div>

                              <div className="desktopNavMega-list__list">
                                <div className="desktopNavMega-list__link">
                                  <a href="tour-list-1">Tour list 1</a>
                                </div>

                                <div className="desktopNavMega-list__link">
                                  <a href="tour-list-2">Tour list 2</a>
                                </div>

                                {/* ... Add more tour list links here ... */}
                              </div>
                            </div>
                          </div>

                          <div className="desktopNavMega-list">
                            <div className="desktopNavMega-list__item">
                              <div className="desktopNavMega-list__title">
                                Tour Single Style
                              </div>

                              <div className="desktopNavMega-list__list">
                                <div className="desktopNavMega-list__link">
                                  <a href="tour-single-1">Tour single 1</a>
                                </div>

                                <div className="desktopNavMega-list__link">
                                  <a href="tour-single-2">Tour single 2</a>
                                </div>

                                {/* ... Add more tour single links here ... */}
                              </div>
                            </div>
                          </div>

                          {/* ... Add more tour-related links here ... */}
                        </div>

                        <div className="desktopNavMega__info">
                          <div className="specialCardGrid row y-gap-30">
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
                    <a href="destinations">Destination</a>
                  </div>

                  <div className="desktopNav__item">
                    <a href="">Activities</a>
                  </div>

                  <div className="desktopNav__item">
                    <a href="">
                      Pages <i className="icon-chevron-down"></i>
                    </a>

                    <div className="desktopNavSubnav">
                      <div className="desktopNavSubnav__content">
                        <div className="desktopNavSubnav__item">
                          <a href="">
                            Dashboard <i className="icon-chevron-right"></i>
                          </a>
                        </div>

                        <div className="desktopNavSubnav__item">
                          <a href="">
                            Blog <i className="icon-chevron-right"></i>
                          </a>
                        </div>

                        <div className="desktopNavSubnav__item">
                          <a href="destinations">Destinations</a>
                        </div>

                        <div className="desktopNavSubnav__item">
                          <a href="about">About</a>
                        </div>

                        <div className="desktopNavSubnav__item">
                          <a href="help-center">Help center</a>
                        </div>

                        <div className="desktopNavSubnav__item">
                          <a href="terms">Terms</a>
                        </div>

                        <div className="desktopNavSubnav__item">
                          <a href="login">Login</a>
                        </div>

                        {/* ... Add more page links here ... */}
                      </div>
                    </div>
                  </div>

                  <div className="desktopNav__item">
                    <a href="contact">Contact</a>
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
                <div className="headerDropdown">
                  <div className="headerDropdown__container">
                    <div className="headerDropdown__item">
                      <button className="">U.S. Dollar</button>
                    </div>

                    {/* ... Add more currency options here ... */}
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
        </div>
      </div>
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
              <li class="menuNav__item -has-submenu js-has-submenu">
                <a>
                  Home
                  <i class="icon-chevron-right"></i>
                </a>

                <ul class="submenu">
                  <li class="submenu__item js-nav-list-back">
                    <a>Back</a>
                  </li>

                  <li class="submenu__item">
                    <a href="index.html">Home 01</a>
                  </li>

                  <li class="submenu__item">
                    <a href="home-2.html">Home 02</a>
                  </li>

                  <li class="submenu__item">
                    <a href="home-3.html">Home 03</a>
                  </li>

                  <li class="submenu__item">
                    <a href="home-4.html">Home 04</a>
                  </li>

                  <li class="submenu__item">
                    <a href="home-5.html">Home 05</a>
                  </li>

                  <li class="submenu__item">
                    <a href="home-6.html">Home 06</a>
                  </li>

                  <li class="submenu__item">
                    <a href="home-7.html">Home 07</a>
                  </li>

                  <li class="submenu__item">
                    <a href="home-8.html">Home 08</a>
                  </li>

                  <li class="submenu__item">
                    <a href="home-9.html">Home 09</a>
                  </li>

                  <li class="submenu__item">
                    <a href="home-10.html">Home 10</a>
                  </li>
                </ul>
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
                    <a href="tour-list-1.html">Tour list 1</a>
                  </li>

                  <li class="submenu__item">
                    <a href="tour-list-2.html">Tour list 2</a>
                  </li>

                  <li class="submenu__item">
                    <a href="tour-list-3.html">Tour list 3</a>
                  </li>

                  <li class="submenu__item">
                    <a href="tour-list-4.html">Tour list 4</a>
                  </li>

                  <li class="submenu__item">
                    <a href="tour-list-5.html">Tour list 5</a>
                  </li>

                  <li class="submenu__item">
                    <a href="tour-list-6.html">Tour list 6</a>
                  </li>

                  <li class="submenu__item">
                    <a href="tour-list-7.html">Tour list 7</a>
                  </li>

                  <li class="submenu__item">
                    <a href="tour-list-8.html">Tour list 8</a>
                  </li>

                  <li class="submenu__item">
                    <a href="tour-list-9.html">Tour list 9</a>
                  </li>

                  <li class="submenu__item">
                    <a href="tour-list-10.html">Tour list 10</a>
                  </li>

                  <li class="submenu__item">
                    <a href="tour-single-1.html">Tour single 1</a>
                  </li>

                  <li class="submenu__item">
                    <a href="tour-single-2.html">Tour single 2</a>
                  </li>

                  <li class="submenu__item">
                    <a href="tour-single-3.html">Tour single 3</a>
                  </li>

                  <li class="submenu__item">
                    <a href="tour-single-4.html">Tour single 4</a>
                  </li>

                  <li class="submenu__item">
                    <a href="tour-single-5.html">Tour single 5</a>
                  </li>

                  <li class="submenu__item">
                    <a href="booking-pages.html">Booking</a>
                  </li>
                </ul>
              </li>

              <li class="menuNav__item -has-submenu js-has-submenu">
                <a>
                  Dashboard
                  <i class="icon-chevron-right"></i>
                </a>

                <ul class="submenu">
                  <li class="submenu__item js-nav-list-back">
                    <a>Back</a>
                  </li>

                  <li class="submenu__item">
                    <a href="db-main.html">Dashboard</a>
                  </li>

                  <li class="submenu__item">
                    <a href="db-booking.html">Booking</a>
                  </li>

                  <li class="submenu__item">
                    <a href="db-listing.html">Listing</a>
                  </li>

                  <li class="submenu__item">
                    <a href="db-add-tour.html">Add tour</a>
                  </li>

                  <li class="submenu__item">
                    <a href="db-favorites.html">Favorites</a>
                  </li>

                  <li class="submenu__item">
                    <a href="db-messages.html">Messages</a>
                  </li>

                  <li class="submenu__item">
                    <a href="db-profile.html">Profile</a>
                  </li>
                </ul>
              </li>

              <li class="menuNav__item -has-submenu js-has-submenu">
                <a>
                  Blog
                  <i class="icon-chevron-right"></i>
                </a>

                <ul class="submenu">
                  <li class="submenu__item js-nav-list-back">
                    <a>Back</a>
                  </li>

                  <li class="submenu__item">
                    <a href="blog-list-1.html">Blog list 1</a>
                  </li>

                  <li class="submenu__item">
                    <a href="blog-list-2.html">Blog list 2</a>
                  </li>

                  <li class="submenu__item">
                    <a href="blog-list-3.html">Blog list 3</a>
                  </li>

                  <li class="submenu__item">
                    <a href="blog-single.html">Blog single</a>
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
                    <a href="destinations.html">Destinations</a>
                  </li>

                  <li class="submenu__item">
                    <a href="about.html">About</a>
                  </li>

                  <li class="submenu__item">
                    <a href="contact.html">Contact</a>
                  </li>

                  <li class="submenu__item">
                    <a href="help-center.html">Help center</a>
                  </li>

                  <li class="submenu__item">
                    <a href="terms.html">Terms</a>
                  </li>

                  <li class="submenu__item">
                    <a href="login.html">Login</a>
                  </li>

                  <li class="submenu__item">
                    <a href="register.html">Register</a>
                  </li>

                  <li class="submenu__item">
                    <a href="404.html">404 Page</a>
                  </li>

                  <li class="submenu__item">
                    <a href="invoice.html">Invoice</a>
                  </li>

                  <li class="submenu__item">
                    <a href="ui-elements.html">UI elements</a>
                  </li>
                </ul>
              </li>

              <li class="menuNav__item">
                <a href="contact.html">Contact</a>
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
                  <i class="icon-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
