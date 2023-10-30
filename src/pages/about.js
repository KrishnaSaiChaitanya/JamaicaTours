import Footer from "@/components/Footer";
import React from "react";

function about() {
  return (
    <div className="">
      <section className="pageHeader -type-1">
        <div className="pageHeader__bg">
          <img src="img/pageHeader/1.jpg" alt="image" />
          <img src="img/hero/1/shape.svg" alt="image" />
        </div>
        <div className="container">
          <div className="row justify-center">
            <div className="col-12">
              <div className="pageHeader__content">
                <h1 className="pageHeader__title">About Us</h1>
                <p className="pageHeader__text">
                  A tropical paradise made for animal lovers replete with monkey
                  caves, dog foundations, and dolphins in the wild.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="layout-pt-lg">
        <div className="container">
          <div className="row y-gap-20 justify-between">
            <div className="col-lg-6">
              <h2 className="text-30 fw-700">
                Hello. Our agency has been present for over 29 years in the
                market. We make the most of all our customers.
              </h2>
            </div>
            <div className="col-lg-5">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br />
                <br />
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
              <button className="button -md -dark-1 bg-accent-1 text-white mt-30">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="layout-pt-xl">
        <div className="video relative container">
          <div className="video__bg">
            <img src="img/misc/1.png" alt="image" className="rounded-12" />
          </div>
          <div className="row justify-center pb-50 md:pb-0">
            <div className="col-auto">
              <a
                href="https://www.youtube.com/watch?v=ANYfx4-jyqY"
                className="d-block js-gallery"
                data-gallery="gallery1"
              >
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="30"
                    cy="30"
                    r="29"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <g clipPath="url(#clip0_79_4379)">
                    <path
                      d="M39.339 27.6922L27.5265 20.4107C26.6718 19.8846 25.6386 19.8627 24.7625 20.3522C23.8863 20.8416 23.3633 21.7331 23.3633 22.7366V37.2332C23.3633 38.7506 24.5859 39.9918 26.0887 40C26.0928 40 26.0969 40 26.1009 40C26.5705 40 27.0599 39.8528 27.517 39.5739C27.8847 39.3495 28.0009 38.8696 27.7765 38.502C27.5522 38.1342 27.0722 38.0181 26.7046 38.2424C26.4908 38.3728 26.282 38.4402 26.0971 38.4402C25.5301 38.4371 24.923 37.9514 24.923 37.2332V22.7367C24.923 22.3061 25.1474 21.9238 25.5232 21.7139C25.899 21.5039 26.3422 21.5133 26.7083 21.7387L38.5208 29.0202C38.8759 29.2388 39.0791 29.6033 39.0782 30.0202C39.0773 30.4371 38.8727 30.8008 38.5157 31.0187L29.9752 36.2479C29.6078 36.4728 29.4924 36.9529 29.7173 37.3202C29.9422 37.6876 30.4223 37.8031 30.7896 37.5781L39.3291 32.3495C40.1468 31.8507 40.636 30.9812 40.638 30.0234C40.64 29.0656 40.1542 28.1941 39.339 27.6922Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-xl">
        <div className="container">
          <div className="row">
            <div className="col-auto">
              <h2 className="text-30 md:text-24">Why choose Tourz</h2>
            </div>
          </div>

          <div className="row md:x-gap-20 pt-40 sm:pt-20 mobile-css-slider -w-280">
            <div className="col-lg-3 col-sm-6">
              <div className="featureIcon -type-1 pr-40 md:pr-0">
                <div className="featureIcon__icon">
                  <img src="img/icons/1/ticket.svg" alt="icon" />
                </div>

                <h3 className="featureIcon__title text-18 fw-500 mt-30">
                  Ultimate flexibility
                </h3>
                <p className="featureIcon__text mt-10">
                  You're in control, with free cancellation and payment options
                  to satisfy any plan or budget.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="featureIcon -type-1 pr-40 md:pr-0">
                <div className="featureIcon__icon">
                  <img src="img/icons/1/hot-air-balloon.svg" alt="icon" />
                </div>

                <h3 className="featureIcon__title text-18 fw-500 mt-30">
                  Memorable experiences
                </h3>
                <p className="featureIcon__text mt-10">
                  Browse and book tours and activities so incredible, you'll
                  want to tell your friends.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="featureIcon -type-1 pr-40 md:pr-0">
                <div className="featureIcon__icon">
                  <img src="img/icons/1/diamond.svg" alt="icon" />
                </div>

                <h3 className="featureIcon__title text-18 fw-500 mt-30">
                  Quality at our core
                </h3>
                <p className="featureIcon__text mt-10">
                  High-quality standards. Millions of reviews. A Tourz company.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="featureIcon -type-1 pr-40 md:pr-0">
                <div className="featureIcon__icon">
                  <img src="img/icons/1/medal.svg" alt="icon" />
                </div>

                <h3 className="featureIcon__title text-18 fw-500 mt-30">
                  Award-winning support
                </h3>
                <p className="featureIcon__text mt-10">
                  New price? New plan? No problem. We're here to help, 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="layout-pt-xl relative">
        <div className="relative xl:unset container">
          <div className="layout-pt-xl layout-pb-xl rounded-12">
            <div className="sectionBg">
              <img
                src="img/about/1/1.png"
                alt="image"
                className="img-ratio rounded-12 md:rounded-0"
              />
            </div>

            <div className="row y-gap-30 justify-center items-center">
              <div className="col-lg-4 col-md-6">
                <h2 className="text-40 lh-13">
                  We Make
                  <br className="md:d-none" />
                  World Travel Easy
                </h2>

                <p className="mt-10">
                  Traveling under your own power and at your own pace, you'll
                  connect more meaningfully with your destination and have more
                  fun!
                </p>
                <button className="button -md -dark-1 bg-accent-1 text-white mt-60 md:mt-30">
                  Explore Our Tours
                </button>
              </div>

              <div className="col-md-6">
                <div className="featuresGrid">
                  <div className="featuresGrid__item px-40 py-40 text-center bg-white rounded-12">
                    <img src="img/icons/2/1.svg" alt="icon" />
                    <div className="text-40 fw-700 text-accent-1 mt-20 lh-14">
                      240
                    </div>
                    <div>Total Destinations</div>
                  </div>

                  <div className="featuresGrid__item px-40 py-40 text-center bg-white rounded-12">
                    <img src="img/icons/2/2.svg" alt="icon" />
                    <div className="text-40 fw-700 text-accent-1 mt-20 lh-14">
                      3672
                    </div>
                    <div>Amazing Tours</div>
                  </div>

                  <div className="featuresGrid__item px-40 py-40 text-center bg-white rounded-12">
                    <img src="img/icons/2/3.svg" alt="icon" />
                    <div className="text-40 fw-700 text-accent-1 mt-20 lh-14">
                      92,842
                    </div>
                    <div>Happy Customer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="layout-pt-xl layout-pb-xl relative">
        <div className="sectionBg md:d-none">
          <img src="img/testimonials/1/1.png" alt="image" />
        </div>

        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <h2 className="text-30 md:text-24">Customer Reviews</h2>
            </div>
          </div>

          <div className="row justify-center pt-60 md:pt-20">
            <div className="col-xl-6 col-md-8 col-sm-10">
              <div
                className="overflow-hidden js-section-slider"
                data-slider-cols="xl-1 lg-1 md-1 sm-1 base-1"
                data-pagination="js-testimonials-pagination"
              >
                <div className="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="testimonials -type-1 pt-10 text-center">
                      <div class="testimonials__image size-100 rounded-full">
                        <img src="img/testimonials/1/2.png" alt="image" />

                        <div class="testimonials__icon">
                          <svg
                            width="16"
                            height="13"
                            viewBox="0 0 16 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.3165 0.838867C12.1013 1.81846 10.9367 3.43478 9.77215 5.63887C8.65823 7.84295 8 10.2429 7.8481 12.8389H12.4557C12.4051 8.87152 13.6203 5.24703 16 1.91642L13.3165 0.838867ZM5.51899 0.838867C4.25316 1.81846 3.08861 3.43478 1.92405 5.63887C0.810126 7.84295 0.151899 10.2429 0 12.8389H4.60759C4.55696 8.87152 5.77215 5.19805 8.20253 1.91642L5.51899 0.838867Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>

                      <div class="text-18 fw-500 text-accent-1 mt-60 md:mt-40">
                        Great quality!
                      </div>

                      <div class="text-20 fw-500 mt-20">
                        The tours in this website are great. I had been really
                        enjoy with my family! The team is very professional and
                        taking care of the customers. Will surely recommend to
                        my freind to join this company!
                      </div>

                      <div class="mt-20 md:mt-40">
                        <div class="lh-16 text-16 fw-500">Brooklyn Simmons</div>
                        <div class="lh-16">Web Developer</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pagination -type-1 justify-center pt-60 md:pt-40 js-testimonials-pagination">
                  <div className="pagination__button"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta -type-1">
        <div className="cta__bg">
          <img src="img/cta/1/bg.png" alt="image" />
        </div>

        <div className="container">
          <div className="row justify-between">
            <div className="col-xl-5 col-lg-6">
              <div className="cta__content">
                <h2 className="text-40 md:text-24 lh-13 text-white">
                  Get 5% off your 1st app booking
                </h2>

                <p className="mt-10 text-white">
                  Booking's better on the app. Use promo code "TourBooking" to
                  save!
                </p>

                <div className="text-18 text-white mt-40 md:mt-20">
                  Get a magic link sent to your email
                </div>

                <div className="mt-10">
                  <div className="singleInput -type-2 row x-gap-10 y-gap-10">
                    <div className="col-md-auto col-12">
                      <input type="email" placeholder="Email" className="" />
                    </div>
                    <div className="col-md-auto col-12">
                      <button className="button -md -accent-1 bg-white col-12 text-accent-2">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="cta__image">
                <img src="img/cta/1/1.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="layout-pt-xl">
        <div className="container">
          <div className="row">
            <div className="col-auto">
              <h2 className="text-30">Meet The Team</h2>
            </div>
          </div>

          <div className="row y-gap-30 pt-40 sm:pt-20">
            <div className="col-lg col-md-4 col-sm-6">
              <div className="ratio ratio-23:26">
                <img
                  src="img/team/1/1.jpg"
                  alt="image"
                  className="img-ratio bg-light-1 rounded-12"
                />
              </div>

              <h3 className="text-16 fw-500 mt-20">Arlene McCoy</h3>
              <p className="text-14 lh-16">Program Manager</p>
            </div>

            <div className="col-lg col-md-4 col-sm-6">
              <div className="ratio ratio-23:26">
                <img
                  src="img/team/1/2.jpg"
                  alt="image"
                  className="img-ratio bg-light-1 rounded-12"
                />
              </div>

              <h3 className="text-16 fw-500 mt-20">Esther Howard</h3>
              <p className="text-14 lh-16">Account Executive</p>
            </div>

            <div className="col-lg col-md-4 col-sm-6">
              <div className="ratio ratio-23:26">
                <img
                  src="img/team/1/3.jpg"
                  alt="image"
                  className="img-ratio bg-light-1 rounded-12"
                />
              </div>

              <h3 className="text-16 fw-500 mt-20">Cody Fisher</h3>
              <p className="text-14 lh-16">Quality Control Coordinator</p>
            </div>

            <div className="col-lg col-md-4 col-sm-6">
              <div className="ratio ratio-23:26">
                <img
                  src="img/team/1/4.jpg"
                  alt="image"
                  className="img-ratio bg-light-1 rounded-12"
                />
              </div>

              <h3 className="text-16 fw-500 mt-20">Bessie Cooper</h3>
              <p className="text-14 lh-16">Marketing Consultant</p>
            </div>
          </div>
        </div>
      </section>
      <section className="layout-pt-xl layout-pb-xl">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <h2 className="text-30">
                Trusted by all the largest travel brands
              </h2>
            </div>
          </div>

          <div className="row y-gap-30 justify-between pt-40 sm:pt-20">
            <div className="col-md-auto col-6">
              <img src="img/clients/1/1.svg" alt="image" />
            </div>

            <div className="col-md-auto col-6">
              <img src="img/clients/1/2.svg" alt="image" />
            </div>

            <div className="col-md-auto col-6">
              <img src="img/clients/1/3.svg" alt="image" />
            </div>

            <div className="col-md-auto col-6">
              <img src="img/clients/1/4.svg" alt="image" />
            </div>

            <div className="col-md-auto col-6">
              <img src="img/clients/1/5.svg" alt="image" />
            </div>

            <div className="col-md-auto col-6">
              <img src="img/clients/1/6.svg" alt="image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default about;
