import React from "react";

const PhuketPage = () => {
  return (
    <div className="mt-header3">
      <section className="pageHeader -type-1">
        <div className="pageHeader__bg">
          <img src="img/pageHeader/1.jpg" alt="image" />
          <img src="img/hero/1/shape.svg" alt="image" />
        </div>
        <div className="container">
          <div className="row justify-center">
            <div className="col-12">
              <div className="pageHeader__content">
                <h1 className="pageHeader__title">Phuket</h1>
                <p className="pageHeader__text">
                  Explore deals, travel guides, and things to do in Phuket
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-xl">
        <div className="container">
          <div className="row justify-between items-end y-gap-10">
            <div className="col-auto">
              <h2 className="text-30 md:text-24">Special Offers</h2>
            </div>

            <div className="col-auto">
              <button className="buttonArrow d-flex items-center ">
                <span>See all</span>
                <i className="icon-arrow-top-right text-16 ml-10"></i>
              </button>
            </div>
          </div>

          <div class="specialCardGrid row y-gap-30 md:y-gap-20 pt-40 sm:pt-20">
            <div class="col-xl-4 col-lg-6 col-md-6">
              <div class="specialCard">
                <div class="specialCard__image">
                  <img src="img/cta/10/1.jpg" alt="image" />
                </div>

                <div class="specialCard__content">
                  <div class="specialCard__subtitle">Enjoy Upto</div>
                  <h3 class="specialCard__title">60 % OFF</h3>
                  <div class="specialCard__text">on Your Booking</div>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-lg-6 col-md-6">
              <div class="specialCard">
                <div class="specialCard__image">
                  <img src="img/cta/10/2.jpg" alt="image" />
                </div>

                <div class="specialCard__content">
                  <div class="specialCard__subtitle">80% Discount</div>
                  <h3 class="specialCard__title">
                    Are You Ready
                    <br /> To Turkey Tour
                  </h3>
                  <div class="specialCard__text"></div>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-lg-6 col-md-6">
              <div class="specialCard">
                <div class="specialCard__image">
                  <img src="img/cta/10/3.jpg" alt="image" />
                </div>

                <div class="specialCard__content">
                  <div class="specialCard__subtitle"></div>
                  <h3 class="specialCard__title">
                    Discover the wow
                    <br /> of europe
                  </h3>
                  <div class="specialCard__text"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-xl">
        <div className="container">
          <div className="row y-gap-10 justify-between items-end y-gap-10">
            <div className="col-auto">
              <h2 className="text-30">Popular Tour in Phuket</h2>
            </div>

            <div className="col-auto">
              <button className="buttonArrow d-flex items-center ">
                <span>See all</span>
                <i className="icon-arrow-top-right text-16 ml-10"></i>
              </button>
            </div>
          </div>

          <div className="relative pb-40 sm:pb-20 row y-gap-30 pt-40 sm:pt-20">
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
    </div>
  );
};

export default PhuketPage;
