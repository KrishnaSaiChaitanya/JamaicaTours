import React, { useEffect } from "react";

export default function Home() {
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

      <section class="hero -type-10">
        <div class="hero__bg">
          <img src="img/hero/10/1.jpg" alt="background" />
        </div>

        <div class="container">
          <div class="row justify-center text-center">
            <div class="col-xl-9 col-lg-10">
              <div class="hero__content">
                <h1 class="hero__title text-white">
                  Choose a Country For Your <br class="lg:d-none" />
                  Next Adventure?
                </h1>

                <div class="hero__text text-white mt-20">
                  From local escapes to far-flung adventures
                </div>

                <div class="hero__search">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.0001 4.29932C7.95277 4.29932 6.28711 5.96498 6.28711 8.01232C6.28711 10.0597 7.95277 11.7253 10.0001 11.7253C12.0475 11.7253 13.7131 10.0597 13.7131 8.01232C13.7131 5.96498 12.0475 4.29932 10.0001 4.29932ZM10.0001 10.162C8.8148 10.162 7.85047 9.19764 7.85047 8.01232C7.85047 6.82701 8.8148 5.86268 10.0001 5.86268C11.1854 5.86268 12.1498 6.82701 12.1498 8.01232C12.1498 9.19764 11.1854 10.162 10.0001 10.162Z"
                      fill="#05073C"
                    />
                    <path
                      d="M10.0006 0C5.58258 0 1.98828 3.59434 1.98828 8.01231V8.23379C1.98828 10.4682 3.2693 13.0719 5.79586 15.9726C7.62742 18.0754 9.4334 19.5416 9.50934 19.603L10.0006 20L10.4918 19.6031C10.5678 19.5417 12.3738 18.0754 14.2053 15.9726C16.7318 13.0719 18.0129 10.4682 18.0129 8.23383V8.01234C18.0129 3.59434 14.4186 0 10.0006 0ZM16.4495 8.23383C16.4495 12.0098 11.5843 16.5807 10.0006 17.9683C8.41648 16.5803 3.55164 12.0095 3.55164 8.23383V8.01234C3.55164 4.45641 6.44465 1.5634 10.0006 1.5634C13.5565 1.5634 16.4495 4.45641 16.4495 8.01234V8.23383Z"
                      fill="#05073C"
                    />
                  </svg>

                  <input type="text" placeholder="Search destinations" />

                  <button>
                    <i class="icon-search"></i>
                  </button>
                </div>

                <div class="heroTags">
                  <div class="heroTags__title text-white">
                    Or browse the selected type
                  </div>

                  <div class="heroTags__tags">
                    <div>
                      <button>
                        <i class="icon-bank text-26"></i>
                        <span>Culture</span>
                      </button>
                    </div>

                    <div>
                      <button>
                        <i class="icon-menu-3 text-26"></i>
                        <span>Food</span>
                      </button>
                    </div>

                    <div>
                      <button>
                        <i class="icon-mountain text-26"></i>
                        <span>Nature</span>
                      </button>
                    </div>

                    <div>
                      <button>
                        <i class="icon-hot-air-balloon-2 text-26"></i>
                        <span>Adventure</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="layout-pt-xl">
        <div className="container">
          <div className="row y-gap-10 justify-between items-center y-gap-10">
            <div className="col-auto">
              <h2 className="text-30 md:text-24">
                Best of
                <div
                  className="dropdown -type-list js-dropdown js-form-dd"
                  data-main-value="london"
                >
                  <div className="dropdown__button text-light-7 js-button">
                    <span className="js-title">London</span>
                    <i className="icon-chevron-down ml-5 text-18"></i>
                  </div>
                  <div className="dropdown__menu text-16 fw-500 border-1 js-menu-items">
                    <div className="dropdown__item" data-value="london">
                      London
                    </div>
                    <div className="dropdown__item" data-value="new_york">
                      New York
                    </div>
                    <div className="dropdown__item" data-value="berlin">
                      Berlin
                    </div>
                    <div className="dropdown__item" data-value="paris">
                      Paris
                    </div>
                  </div>
                </div>
              </h2>
            </div>
          </div>
          <div className="row y-gap-30 pt-40 sm:pt-20">
            <div className="col-lg-3 col-md-6">
              <a
                href=""
                className="tourCard -type-1 d-block border-1 bg-white hover-shadow-1 overflow-hidden rounded-12 bg-white -hover-shadow"
              >
                <div className="tourCard__header">
                  <div className="tourCard__image ratio ratio-28:20">
                    <img
                      src="img/tourCards/1/1.png"
                      alt="image"
                      className="img-ratio"
                    />
                  </div>
                  <button className="tourCard__favorite">
                    <i className="icon-heart"></i>
                  </button>
                </div>
                <div className="tourCard__content px-20 py-10">
                  <div className="tourCard__location d-flex items-center text-13 text-light-2">
                    <i className="icon-pin d-flex text-16 text-light-2 mr-5"></i>{" "}
                    Paris, France
                  </div>
                  <h3 className="tourCard__title text-16 fw-500 mt-5">
                    <span>
                      Centipede Tour - Guided Arizona Desert Tour by ATV
                    </span>
                  </h3>
                  <div className="tourCard__rating text-13 mt-5">
                    <div className="d-flex items-center">
                      <div className="d-flex x-gap-5">
                        <div>
                          <i className="icon-star text-10 text-yellow-2"></i>
                        </div>
                        <div>
                          <i className="icon-star text-10 text-yellow-2"></i>
                        </div>
                        <div>
                          <i className="icon-star text-10 text-yellow-2"></i>
                        </div>
                        <div>
                          <i className="icon-star text-10 text-yellow-2"></i>
                        </div>
                        <div>
                          <i className="icon-star text-10 text-yellow-2"></i>
                        </div>
                      </div>
                      <span className="text-dark-1 ml-10">4.8 (269)</span>
                    </div>
                  </div>
                  <div className="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
                    <div className="d-flex items-center">
                      <i className="icon-clock text-16 mr-5"></i>4 days
                    </div>
                    <div>
                      From <span className="text-16 fw-500">$189.25</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <a
                href=""
                className="tourCard -type-1 d-block border-1 bg-white hover-shadow-1 overflow-hidden rounded-12 bg-white -hover-shadow"
              >
                <div className="tourCard__header">
                  <div className="tourCard__image ratio ratio-28:20">
                    <img
                      src="img/tourCards/1/2.png"
                      alt="image"
                      className="img-ratio"
                    />
                  </div>
                  <button className="tourCard__favorite">
                    <i className="icon-heart"></i>
                  </button>
                </div>
                <div className="tourCard__content px-20 py-10">
                  <div className="tourCard__location d-flex items-center text-13 text-light-2">
                    <i className="icon-pin d-flex text-16 text-light-2 mr-5"></i>{" "}
                    Paris, France
                  </div>
                  <h3 className="tourCard__title text-16 fw-500 mt-5">
                    <span>
                      Centipede Tour - Guided Arizona Desert Tour by ATV
                    </span>
                  </h3>
                  <div className="tourCard__rating text-13 mt-5">
                    <div className="d-flex items-center">
                      <div className="d-flex x-gap-5">
                        <div>
                          <i className="icon-star text-10 text-yellow-2"></i>
                        </div>
                        <div>
                          <i className="icon-star text-10 text-yellow-2"></i>
                        </div>
                        <div>
                          <i className="icon-star text-10 text-yellow-2"></i>
                        </div>
                        <div>
                          <i className="icon-star text-10 text-yellow-2"></i>
                        </div>
                        <div>
                          <i className="icon-star text-10 text-yellow-2"></i>
                        </div>
                      </div>
                      <span className="text-dark-1 ml-10">4.8 (269)</span>
                    </div>
                  </div>
                  <div className="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
                    <div className="d-flex items-center">
                      <i className="icon-clock text-16 mr-5"></i>4 days
                    </div>
                    <div>
                      From <span className="text-16 fw-500">$189.25</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <a
                href=""
                className="tourCard -type-1 d-block border-1 bg-white hover-shadow-1 overflow-hidden rounded-12 bg-white -hover-shadow"
              >
                <div className="tourCard__header">
                  <div className="tourCard__image ratio ratio-28:20">
                    <img
                      src="img/tourCards/1/3.png"
                      alt="image"
                      className="img-ratio"
                    />
                  </div>
                  <button className="tourCard__favorite">
                    <i className="icon-heart"></i>
                  </button>
                </div>
                <div className="tourCard__content px-20 py-10">
                  <div className="tourCard__location d-flex items-center text-13 text-light-2">
                    <i className="icon-pin d-flex text-16 text-light-2 mr-5"></i>{" "}
                    Paris, France
                  </div>
                  <h3 className="tourCard__title text-16 fw-500 mt-5">
                    <span>
                      Centipede Tour - Guided Arizona Desert Tour by ATV
                    </span>
                  </h3>
                  <div className="tourCard__rating text-13 mt-5">
                    <div className="d-flex items-center">
                      <div className="d-flex x-gap-5">
                        <div>
                          <i className="icon-star text-10 text-yellow-2"></i>
                        </div>
                        <div>
                          <i className="icon-star text-10 text-yellow-2"></i>
                        </div>
                        <div>
                          <i className="icon-star text-10 text-yellow-2"></i>
                        </div>
                        <div>
                          <i className="icon-star text-10 text-yellow-2"></i>
                        </div>
                        <div>
                          <i className="icon-star text-10 text-yellow-2"></i>
                        </div>
                      </div>
                      <span className="text-dark-1 ml-10">4.8 (269)</span>
                    </div>
                  </div>
                  <div className="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
                    <div className="d-flex items-center">
                      <i className="icon-clock text-16 mr-5"></i>4 days
                    </div>
                    <div>
                      From <span className="text-16 fw-500">$189.25</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <a
                href=""
                className="tourCard -type-1 d-block border-1 bg-white hover-shadow-1 overflow-hidden rounded-12 bg-white -hover-shadow"
              >
                <div className="tourCard__header">
                  <div className="tourCard__image ratio ratio-28:20">
                    <img
                      src="img/tourCards/1/4.png"
                      alt="image"
                      className="img-ratio"
                    />
                  </div>
                  <button className="tourCard__favorite">
                    <i className="icon-heart"></i>
                  </button>
                </div>
                <div className="tourCard__content px-20 py-10">
                  <div className="tourCard__location d-flex items-center text-13 text-light-2">
                    <i className="icon-pin d-flex text-16 text-light-2 mr-5"></i>{" "}
                    Paris, France
                  </div>
                  <h3 className="tourCard__title text-16 fw-500 mt-5">
                    <span>
                      Centipede Tour - Guided Arizona Desert Tour by ATV
                    </span>
                  </h3>
                  <div className="tourCard__rating text-13 mt-5">
                    <div className="d-flex items-center">
                      <div className="d-flex x-gap-5">
                        <div>
                          <i className="icon-star text-10 text-yellow-2"></i>
                        </div>
                        <div>
                          <i className="icon-star text-10 text-yellow-2"></i>
                        </div>
                        <div>
                          <i className="icon-star text-10 text-yellow-2"></i>
                        </div>
                        <div>
                          <i className="icon-star text-10 text-yellow-2"></i>
                        </div>
                        <div>
                          <i className="icon-star text-10 text-yellow-2"></i>
                        </div>
                      </div>
                      <span className="text-dark-1 ml-10">4.8 (269)</span>
                    </div>
                  </div>
                  <div className="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
                    <div className="d-flex items-center">
                      <i className="icon-clock text-16 mr-5"></i>4 days
                    </div>
                    <div>
                      From <span className="text-16 fw-500">$189.25</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-xl layout-pb-xl">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-lg-4 col-md-6">
              <div className="featureCard -type-3 -style-2">
                <div className="featureCard__image">
                  <img src="img/cta/5/1.jpg" alt="image" />
                </div>
                <div className="featureCard__content">
                  <div className="text-white">
                    Enjoy these cool staycation promotions.
                  </div>
                  <h4 className="text-24 text-white fw-700 mt-5">
                    Best staycation deals
                  </h4>
                  <button className="button -md -accent-1 bg-white">
                    See activities
                    <i className="icon-arrow-top-right ml-10"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="featureCard -type-3 -style-2">
                <div className="featureCard__image">
                  <img src="img/cta/5/2.jpg" alt="image" />
                </div>
                <div className="featureCard__content">
                  <div className="text-white">
                    Dont forget to check out these activities.
                  </div>
                  <h4 className="text-24 text-white fw-700 mt-5">
                    All Time Favourite Activities in Dubai
                  </h4>
                  <button className="button -md -accent-1 bg-white">
                    See activities
                    <i className="icon-arrow-top-right ml-10"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="featureCard -type-3 -style-2">
                <div className="featureCard__image">
                  <img src="img/cta/5/3.jpg" alt="image" />
                </div>
                <div className="featureCard__content">
                  <div className="text-white">80% Discount</div>
                  <h4 className="text-24 text-white fw-700 mt-5">
                    Discover the wow of europe
                  </h4>
                  <button className="button -md -accent-1 bg-white">
                    See activities
                    <i className="icon-arrow-top-right ml-10"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-xl layout-pb-xl bg-accent-1-05">
        <div className="container">
          <div className="row y-gap-30 items-center justify-between">
            <div className="col-xl-4 col-lg-5">
              <h2 className="text-30 md:text-24">Popular things to do</h2>

              <p className="mt-30 md:mt-10">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>

              <button className="button -md -dark-1 bg-accent-1 text-white mt-30 md:mt-20">
                See All
                <i className="icon-arrow-top-right ml-10"></i>
              </button>
            </div>

            <div className="col-xl-6 col-lg-7">
              <div className="row y-gap-30">
                <div className="col-md-4 col-6">
                  <a href="#" className="featureCard -type-5 -hover-accent-1">
                    <div className="featureCard__icon">
                      <img src="img/icons/5/1.svg" alt="image" />
                    </div>

                    <h4 className="text-18 fw-500 mt-20">City Tours</h4>
                    <div className="lh-13 mt-5">100+ Tours</div>
                  </a>
                </div>

                <div className="col-md-4 col-6">
                  <a href="#" className="featureCard -type-5 -hover-accent-1">
                    <div className="featureCard__icon">
                      <img src="img/icons/5/2.svg" alt="image" />
                    </div>

                    <h4 className="text-18 fw-500 mt-20">Cultural Tours</h4>
                    <div className="lh-13 mt-5">100+ Tours</div>
                  </a>
                </div>

                <div className="col-md-4 col-6">
                  <a href="#" className="featureCard -type-5 -hover-accent-1">
                    <div className="featureCard__icon">
                      <img src="img/icons/5/3.svg" alt="image" />
                    </div>

                    <h4 className="text-18 fw-500 mt-20">Day Cruises</h4>
                    <div className="lh-13 mt-5">100+ Tours</div>
                  </a>
                </div>

                <div className="col-md-4 col-6">
                  <a href="#" className="featureCard -type-5 -hover-accent-1">
                    <div className="featureCard__icon">
                      <img src="img/icons/5/4.svg" alt="image" />
                    </div>

                    <h4 className="text-18 fw-500 mt-20">Bus Tours</h4>
                    <div className="lh-13 mt-5">100+ Tours</div>
                  </a>
                </div>

                <div className="col-md-4 col-6">
                  <a href="#" className="featureCard -type-5 -hover-accent-1">
                    <div className="featureCard__icon">
                      <img src="img/icons/5/5.svg" alt="image" />
                    </div>

                    <h4 className="text-18 fw-500 mt-20">Beach Tours</h4>
                    <div className="lh-13 mt-5">100+ Tours</div>
                  </a>
                </div>

                <div className="col-md-4 col-6">
                  <a href="#" className="featureCard -type-5 -hover-accent-1">
                    <div className="featureCard__icon">
                      <img src="img/icons/5/6.svg" alt="image" />
                    </div>

                    <h4 className="text-18 fw-500 mt-20">Food Tours</h4>
                    <div className="lh-13 mt-5">100+ Tours</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-xl layout-pb-xl">
        <div className="container">
          <div className="row y-gap-10 justify-between items-end">
            <div className="col-auto">
              <h2 className="text-30 md:text-24">Trending Destinations</h2>
            </div>

            <div className="col-auto">
              <button className="buttonArrow d-flex items-center">
                <span>See all</span>
                <i className="icon-arrow-top-right text-16 ml-10"></i>
              </button>
            </div>
          </div>

          <div className="row y-gap-30 md:y-gap-20 pt-40 sm:pt-20">
            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
              <a href="#" className="featureCard -type-7 -hover-image-scale">
                <div className="featureCard__image ratio ratio-23:30 -hover-image-scale__image rounded-12">
                  <img
                    src="img/features/2/1.jpg"
                    alt="image"
                    className="img-ratio rounded-12"
                  />
                </div>
                <div className="mt-20">
                  <h4 className="text-18 fw-500">Paris</h4>
                  <div className="text-14 lh-13 mt-5">100+ Tours</div>
                </div>
              </a>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
              <a href="#" className="featureCard -type-7 -hover-image-scale">
                <div className="featureCard__image ratio ratio-23:30 -hover-image-scale__image rounded-12">
                  <img
                    src="img/features/2/2.jpg"
                    alt="image"
                    className="img-ratio rounded-12"
                  />
                </div>
                <div className="mt-20">
                  <h4 className="text-18 fw-500">Singapore</h4>
                  <div className="text-14 lh-13 mt-5">100+ Tours</div>
                </div>
              </a>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
              <a href="#" className="featureCard -type-7 -hover-image-scale">
                <div className="featureCard__image ratio ratio-23:30 -hover-image-scale__image rounded-12">
                  <img
                    src="img/features/2/3.jpg"
                    alt="image"
                    className="img-ratio rounded-12"
                  />
                </div>
                <div className="mt-20">
                  <h4 className="text-18 fw-500">Roma</h4>
                  <div className="text-14 lh-13 mt-5">100+ Tours</div>
                </div>
              </a>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
              <a href="#" className="featureCard -type-7 -hover-image-scale">
                <div className="featureCard__image ratio ratio-23:30 -hover-image-scale__image rounded-12">
                  <img
                    src="img/features/2/4.jpg"
                    alt="image"
                    className="img-ratio rounded-12"
                  />
                </div>
                <div className="mt-20">
                  <h4 className="text-18 fw-500">Bangkok</h4>
                  <div className="text-14 lh-13 mt-5">100+ Tours</div>
                </div>
              </a>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
              <a href="#" className="featureCard -type-7 -hover-image-scale">
                <div className="featureCard__image ratio ratio-23:30 -hover-image-scale__image rounded-12">
                  <img
                    src="img/features/2/5.jpg"
                    alt="image"
                    className="img-ratio rounded-12"
                  />
                </div>
                <div className="mt-20">
                  <h4 className="text-18 fw-500">Bali</h4>
                  <div className="text-14 lh-13 mt-5">100+ Tours</div>
                </div>
              </a>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
              <a href="#" className="featureCard -type-7 -hover-image-scale">
                <div className="featureCard__image ratio ratio-23:30 -hover-image-scale__image rounded-12">
                  <img
                    src="img/features/2/6.jpg"
                    alt="image"
                    className="img-ratio rounded-12"
                  />
                </div>
                <div className="mt-20">
                  <h4 className="text-18 fw-500">Phuket</h4>
                  <div className="text-14 lh-13 mt-5">100+ Tours</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative layout-pt-xl layout-pb-xl lg:pt-0">
        <div className="sectionBg -type-2">
          <div className="bg-accent-1-05 rounded-24"></div>
          <img src="img/about/3/1.jpg" alt="image" className="rounded-24" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xl-4 offset-xl-1 col-lg-5">
              <h2 className="text-30 md:text-24">Why choose Tourz</h2>

              <div className="row y-gap-30 pt-60 sm:pt-30">
                <div className="col-12">
                  <div className="featureIcon -type-1 d-flex">
                    <div className="featureIcon__icon size-50">
                      <img src="img/icons/1/ticket.svg" alt="icon" />
                    </div>

                    <div className="ml-30">
                      <h3 className="featureIcon__title text-18 fw-500">
                        Ultimate flexibility
                      </h3>
                      <p className="featureIcon__text mt-10">
                        You’re in control, with free cancellation and payment.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="featureIcon -type-1 d-flex">
                    <div className="featureIcon__icon size-50">
                      <img src="img/icons/1/hot-air-balloon.svg" alt="icon" />
                    </div>

                    <div className="ml-30">
                      <h3 className="featureIcon__title text-18 fw-500">
                        Memorable experiences
                      </h3>
                      <p className="featureIcon__text mt-10">
                        Browse and book tours and activities so incredible.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="featureIcon -type-1 d-flex">
                    <div className="featureIcon__icon size-50">
                      <img src="img/icons/1/diamond.svg" alt="icon" />
                    </div>

                    <div className="ml-30">
                      <h3 className="featureIcon__title text-18 fw-500">
                        Quality at our core
                      </h3>
                      <p className="featureIcon__text mt-10">
                        High quality standards. Millions of reviews. A tourz
                        company.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-xl layout-pb-xl">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-lg-3 col-6">
              <div className="text-center">
                <img src="img/icons/3/1.svg" alt="icon" />
                <h3 className="text-40 md:text-30 lh-14 fw-700 mt-30 md:mt-15">
                  932M
                </h3>
                <p className="lh-15">Total Donations</p>
              </div>
            </div>

            <div className="col-lg-3 col-6">
              <div className="text-center">
                <img src="img/icons/3/2.svg" alt="icon" />
                <h3 className="text-40 md:text-30 lh-14 fw-700 mt-30 md:mt-15">
                  24M
                </h3>
                <p className="lh-15">Campaigns Closed</p>
              </div>
            </div>

            <div className="col-lg-3 col-6">
              <div className="text-center">
                <img src="img/icons/3/3.svg" alt="icon" />
                <h3 className="text-40 md:text-30 lh-14 fw-700 mt-30 md:mt-15">
                  10M
                </h3>
                <p className="lh-15">Happy People</p>
              </div>
            </div>

            <div className="col-lg-3 col-6">
              <div className="text-center">
                <img src="img/icons/3/4.svg" alt="icon" />
                <h3 className="text-40 md:text-30 lh-14 fw-700 mt-30 md:mt-15">
                  65M
                </h3>
                <p className="lh-15">Our Volunteers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
