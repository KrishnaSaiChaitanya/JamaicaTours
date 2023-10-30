import React, { useEffect } from "react";

export default function Home() {
  return (
    <div>
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
                      fill="05073C"
                    />
                    <path
                      d="M10.0006 0C5.58258 0 1.98828 3.59434 1.98828 8.01231V8.23379C1.98828 10.4682 3.2693 13.0719 5.79586 15.9726C7.62742 18.0754 9.4334 19.5416 9.50934 19.603L10.0006 20L10.4918 19.6031C10.5678 19.5417 12.3738 18.0754 14.2053 15.9726C16.7318 13.0719 18.0129 10.4682 18.0129 8.23383V8.01234C18.0129 3.59434 14.4186 0 10.0006 0ZM16.4495 8.23383C16.4495 12.0098 11.5843 16.5807 10.0006 17.9683C8.41648 16.5803 3.55164 12.0095 3.55164 8.23383V8.01234C3.55164 4.45641 6.44465 1.5634 10.0006 1.5634C13.5565 1.5634 16.4495 4.45641 16.4495 8.01234V8.23383Z"
                      fill="05073C"
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
                  <a href="" className="featureCard -type-5 -hover-accent-1">
                    <div className="featureCard__icon">
                      <img src="img/icons/5/1.svg" alt="image" />
                    </div>

                    <h4 className="text-18 fw-500 mt-20">City Tours</h4>
                    <div className="lh-13 mt-5">100+ Tours</div>
                  </a>
                </div>

                <div className="col-md-4 col-6">
                  <a href="" className="featureCard -type-5 -hover-accent-1">
                    <div className="featureCard__icon">
                      <img src="img/icons/5/2.svg" alt="image" />
                    </div>

                    <h4 className="text-18 fw-500 mt-20">Cultural Tours</h4>
                    <div className="lh-13 mt-5">100+ Tours</div>
                  </a>
                </div>

                <div className="col-md-4 col-6">
                  <a href="" className="featureCard -type-5 -hover-accent-1">
                    <div className="featureCard__icon">
                      <img src="img/icons/5/3.svg" alt="image" />
                    </div>

                    <h4 className="text-18 fw-500 mt-20">Day Cruises</h4>
                    <div className="lh-13 mt-5">100+ Tours</div>
                  </a>
                </div>

                <div className="col-md-4 col-6">
                  <a href="" className="featureCard -type-5 -hover-accent-1">
                    <div className="featureCard__icon">
                      <img src="img/icons/5/4.svg" alt="image" />
                    </div>

                    <h4 className="text-18 fw-500 mt-20">Bus Tours</h4>
                    <div className="lh-13 mt-5">100+ Tours</div>
                  </a>
                </div>

                <div className="col-md-4 col-6">
                  <a href="" className="featureCard -type-5 -hover-accent-1">
                    <div className="featureCard__icon">
                      <img src="img/icons/5/5.svg" alt="image" />
                    </div>

                    <h4 className="text-18 fw-500 mt-20">Beach Tours</h4>
                    <div className="lh-13 mt-5">100+ Tours</div>
                  </a>
                </div>

                <div className="col-md-4 col-6">
                  <a href="" className="featureCard -type-5 -hover-accent-1">
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
              <a href="" className="featureCard -type-7 -hover-image-scale">
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
              <a href="" className="featureCard -type-7 -hover-image-scale">
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
              <a href="" className="featureCard -type-7 -hover-image-scale">
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
              <a href="" className="featureCard -type-7 -hover-image-scale">
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
              <a href="" className="featureCard -type-7 -hover-image-scale">
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
              <a href="" className="featureCard -type-7 -hover-image-scale">
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
      <section class="video">
        <div class="video__bg">
          <img src="img/video/bg.jpg" alt="image" />
        </div>

        <div class="container">
          <div class="row justify-center text-center">
            <div class="col-auto">
              <h2 class="text-70 lg:text-50 md:text-40 sm:text-24 text-white">
                Keep things flexible
              </h2>

              <p class="text-white mt-10">
                Use Reserve Now & Pay Later to secure the activities you
                <br class="lg:d-none" />
                don't want to miss without being locked in.
              </p>

              <a
                href="https://www.youtube.com/watch?v=ANYfx4-jyqY"
                class="d-block mt-30 md:mt-20 js-gallery"
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
                    stroke-width="2"
                  />
                  <g clip-path="url(#clip0_79_4379)">
                    <path
                      d="M39.339 27.6922L27.5265 20.4107C26.6718 19.8846 25.6386 19.8627 24.7625 20.3522C23.8863 20.8416 23.3633 21.7331 23.3633 22.7366V37.2332C23.3633 38.7506 24.5859 39.9918 26.0887 40C26.0928 40 26.0969 40 26.1009 40C26.5705 40 27.0599 39.8528 27.517 39.5739C27.8847 39.3495 28.0009 38.8696 27.7765 38.502C27.5522 38.1342 27.0722 38.0181 26.7046 38.2424C26.4908 38.3728 26.282 38.4402 26.0971 38.4402C25.5301 38.4371 24.923 37.9514 24.923 37.2332V22.7367C24.923 22.3061 25.1474 21.9238 25.5232 21.7139C25.899 21.5039 26.3422 21.5133 26.7083 21.7387L38.5208 29.0202C38.8759 29.2388 39.0791 29.6033 39.0782 30.0202C39.0773 30.4371 38.8727 30.8008 38.5157 31.0187L29.9752 36.2479C29.6078 36.4728 29.4924 36.9529 29.7173 37.3202C29.9422 37.6876 30.4223 37.8031 30.7896 37.5781L39.3291 32.3495C40.1468 31.8507 40.636 30.9812 40.638 30.0234C40.64 29.0656 40.1542 28.1941 39.339 27.6922Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_79_4379">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(22 20)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="layout-pt-xl layout-pb-xl bg-accent-1-05">
        <div class="container">
          <div class="row">
            <div class="col-auto">
              <h2 class="text-30 md:text-24">What our Travelers are saying</h2>
            </div>
          </div>

          <div class="row y-gap-30 pt-40 md:pt-30">
            <div class="col-lg-4 col-md-6">
              <div class="bg-white py-30 px-30 rounded-12">
                <h4 class="text-18 fw-500 text-accent-1">Great Work</h4>
                <div class="fw-500 mt-15">
                  “I think Educrat is the best theme I ever seen this year.
                  Amazing design, easy to customize and a design quality
                  superlative account on its cloud platform for the optimized
                  performance”
                </div>

                <div class="line mt-20 mb-20"></div>

                <div class="d-flex items-center">
                  <img
                    src="img/avatars/1/1.jpg"
                    alt="image"
                    class="size-60 object-cover rounded-full"
                  />
                  <div class="ml-20">
                    <div class="fw-500 lh-15">Courtney Henry</div>
                    <div class="text-14 lh-15">Web Designer</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <div class="bg-white py-30 px-30 rounded-12">
                <h4 class="text-18 fw-500 text-accent-1">Great Work</h4>
                <div class="fw-500 mt-15">
                  “I think Educrat is the best theme I ever seen this year.
                  Amazing design, easy to customize and a design quality
                  superlative account on its cloud platform for the optimized
                  performance”
                </div>

                <div class="line mt-20 mb-20"></div>

                <div class="d-flex items-center">
                  <img
                    src="img/avatars/1/1.jpg"
                    alt="image"
                    class="size-60 object-cover rounded-full"
                  />
                  <div class="ml-20">
                    <div class="fw-500 lh-15">Courtney Henry</div>
                    <div class="text-14 lh-15">Web Designer</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <div class="bg-white py-30 px-30 rounded-12">
                <h4 class="text-18 fw-500 text-accent-1">Great Work</h4>
                <div class="fw-500 mt-15">
                  “I think Educrat is the best theme I ever seen this year.
                  Amazing design, easy to customize and a design quality
                  superlative account on its cloud platform for the optimized
                  performance”
                </div>

                <div class="line mt-20 mb-20"></div>

                <div class="d-flex items-center">
                  <img
                    src="img/avatars/1/1.jpg"
                    alt="image"
                    class="size-60 object-cover rounded-full"
                  />
                  <div class="ml-20">
                    <div class="fw-500 lh-15">Courtney Henry</div>
                    <div class="text-14 lh-15">Web Designer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row y-gap-30 pt-40 md:pt-30">
            <div class="col-lg-4 col-md-6">
              <h4 class="text-30 fw-700">4.9</h4>
              <div class="mt-5">
                1000+ reviews on TripAdvisor.
                <br /> Certificate of Excellence
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <h4 class="text-30 fw-700">16M</h4>
              <div class="mt-5">Happy Customers</div>
            </div>

            <div class="col-lg-4 col-md-6">
              <h4 class="text-30 fw-700">Award winner</h4>
              <div class="mt-5">G2’s 2021 Best Software Awards</div>
            </div>
          </div>
        </div>
      </section>

      <section class="layout-pt-xl layout-pb-xl">
        <div class="container">
          <div class="row justify-between items-end y-gap-10">
            <div class="col-auto">
              <h2 class="text-30 md:text-24">Travel Articles</h2>
            </div>

            <div class="col-auto">
              <button class="buttonArrow d-flex items-center">
                <span>See all</span>
                <i class="icon-arrow-top-right text-16 ml-10"></i>
              </button>
            </div>
          </div>

          <div class="row y-gap-30 pt-40 sm:pt-20">
            <div class="col-lg-4 col-md-6">
              <a href="#" class="blogCard -type-1">
                <div class="blogCard__image ratio ratio-41:30">
                  <img
                    src="img/blogCards/1/1.png"
                    alt="image"
                    class="img-ratio rounded-12"
                  />
                  <div class="blogCard__badge">Trips</div>
                </div>

                <div class="blogCard__content mt-30">
                  <div class="blogCard__info text-14">
                    <div class="lh-13">April 06 2023</div>
                    <div class="blogCard__line"></div>
                    <div class="lh-13">By Ali Tufan</div>
                  </div>

                  <h3 class="blogCard__title text-18 fw-500 mt-10">
                    Kenya vs Tanzania Safari: The Better African Safari
                    Experience
                  </h3>
                </div>
              </a>
            </div>

            <div class="col-lg-4 col-md-6">
              <a href="#" class="blogCard -type-1">
                <div class="blogCard__image ratio ratio-41:30">
                  <img
                    src="img/blogCards/1/2.png"
                    alt="image"
                    class="img-ratio rounded-12"
                  />
                  <div class="blogCard__badge">Trips</div>
                </div>

                <div class="blogCard__content mt-30">
                  <div class="blogCard__info text-14">
                    <div class="lh-13">April 06 2023</div>
                    <div class="blogCard__line"></div>
                    <div class="lh-13">By Ali Tufan</div>
                  </div>

                  <h3 class="blogCard__title text-18 fw-500 mt-10">
                    Kenya vs Tanzania Safari: The Better African Safari
                    Experience
                  </h3>
                </div>
              </a>
            </div>

            <div class="col-lg-4 col-md-6">
              <a href="#" class="blogCard -type-1">
                <div class="blogCard__image ratio ratio-41:30">
                  <img
                    src="img/blogCards/1/3.png"
                    alt="image"
                    class="img-ratio rounded-12"
                  />
                  <div class="blogCard__badge">Trips</div>
                </div>

                <div class="blogCard__content mt-30">
                  <div class="blogCard__info text-14">
                    <div class="lh-13">April 06 2023</div>
                    <div class="blogCard__line"></div>
                    <div class="lh-13">By Ali Tufan</div>
                  </div>

                  <h3 class="blogCard__title text-18 fw-500 mt-10">
                    Kenya vs Tanzania Safari: The Better African Safari
                    Experience
                  </h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="layout-pt-xl layout-pb-xl relative">
        <div class="sectionBg">
          <img src="img/cta/13/bg.jpg" alt="image" class="img-cover" />
        </div>

        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <h2 class="text-30 text-white fw-700">
                Subscribe To Our Mailing List
                <br class="md:d-none" /> And Stay Up To Date
              </h2>
              <p class="text-white mt-30">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              <div class="singleInput type-1 mt-30">
                <input type="text" placeholder="Your email" />
                <button class="button -md -dark-1 bg-white">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
