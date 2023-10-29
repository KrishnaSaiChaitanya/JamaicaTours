import React from "react";

function about() {
  return (
    <div>
      <header className="header -type-10 js-header">
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
                    <a href="#">
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
                    <a href="#">
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
                    <a href="#">Activities</a>
                  </div>

                  <div className="desktopNav__item">
                    <a href="#">
                      Pages <i className="icon-chevron-down"></i>
                    </a>

                    <div className="desktopNavSubnav">
                      <div className="desktopNavSubnav__content">
                        <div className="desktopNavSubnav__item">
                          <a href="#">
                            Dashboard <i className="icon-chevron-right"></i>
                          </a>
                        </div>

                        <div className="desktopNavSubnav__item">
                          <a href="#">
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
      <section class="nopage mt-header">
        <div class="container">
          <div class="row y-gap-30 justify-between items-center">
            <div class="col-xl-6 col-lg-6">
              <img src="img/404/1.svg" alt="image" />
            </div>

            <div class="col-xl-5 col-lg-6">
              <div class="nopage__content pr-30 lg:pr-0">
                <h1>
                  40<span class="text-accent-1">4</span>
                </h1>
                <h2 class="text-30 md:text-24 fw-700">
                  Oops! It looks like youre lost.
                </h2>
                <p>
                  The page youre looking for isnt available. Try to search again
                  or use the go to.
                </p>

                <button class="button -md -dark-1 bg-accent-1 text-white mt-25">
                  Go back to homepage
                  <i class="icon-arrow-top-right ml-10"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default about;
