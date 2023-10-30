import React from "react";

const PhuketPage = () => {
  return (
    <div>
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

          <div className="relative pt-40 sm:pt-20">
            <div
              className="overflow-hidden js-section-slider d-flex"
              data-gap="30"
              data-slider-cols="xl-4 lg-3 md-2 sm-1 base-1"
              data-nav-prev="js-slider1-prev"
              data-nav-next="js-slider1-next"
            >
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <a
                    href=""
                    class="tourCard -type-1 py-10 px-10 border-1 rounded-12 bg-white -hover-shadow"
                  >
                    <div class="tourCard__header">
                      <div class="tourCard__image ratio ratio-28:20">
                        <img
                          src="img/tourCards/1/1.png"
                          alt="image"
                          class="img-ratio rounded-12"
                        />
                      </div>

                      <button class="tourCard__favorite">
                        <i class="icon-heart"></i>
                      </button>
                    </div>

                    <div class="tourCard__content px-10 pt-10">
                      <div class="tourCard__location d-flex items-center text-13 text-light-2">
                        <i class="icon-pin d-flex text-16 text-light-2 mr-5"></i>
                        Paris, France
                      </div>

                      <h3 class="tourCard__title text-16 fw-500 mt-5">
                        <span>
                          Centipede Tour - Guided Arizona Desert Tour by ATV
                        </span>
                      </h3>

                      <div class="tourCard__rating d-flex items-center text-13 mt-5">
                        <div class="d-flex x-gap-5">
                          <div>
                            <i class="icon-star text-10 text-yellow-2"></i>
                          </div>

                          <div>
                            <i class="icon-star text-10 text-yellow-2"></i>
                          </div>

                          <div>
                            <i class="icon-star text-10 text-yellow-2"></i>
                          </div>

                          <div>
                            <i class="icon-star text-10 text-yellow-2"></i>
                          </div>

                          <div>
                            <i class="icon-star text-10 text-yellow-2"></i>
                          </div>
                        </div>

                        <span class="text-dark-1 ml-10">4.8 (269)</span>
                      </div>

                      <div class="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
                        <div class="d-flex items-center">
                          <i class="icon-clock text-16 mr-5"></i>4 days
                        </div>

                        <div>
                          From <span class="text-16 fw-500">$189,25</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div class="swiper-slide">
                  <a
                    href=""
                    class="tourCard -type-1 py-10 px-10 border-1 rounded-12 bg-white -hover-shadow"
                  >
                    <div class="tourCard__header">
                      <div class="tourCard__image ratio ratio-28:20">
                        <img
                          src="img/tourCards/1/2.png"
                          alt="image"
                          class="img-ratio rounded-12"
                        />
                      </div>

                      <button class="tourCard__favorite">
                        <i class="icon-heart"></i>
                      </button>
                    </div>

                    <div class="tourCard__content px-10 pt-10">
                      <div class="tourCard__location d-flex items-center text-13 text-light-2">
                        <i class="icon-pin d-flex text-16 text-light-2 mr-5"></i>
                        New York, USA
                      </div>

                      <h3 class="tourCard__title text-16 fw-500 mt-5">
                        <span>
                          Molokini and Turtle Town Snorkeling Adventure Aboard
                        </span>
                      </h3>

                      <div class="tourCard__rating d-flex items-center text-13 mt-5">
                        <div class="d-flex x-gap-5">
                          <div>
                            <i class="icon-star text-10 text-yellow-2"></i>
                          </div>

                          <div>
                            <i class="icon-star text-10 text-yellow-2"></i>
                          </div>

                          <div>
                            <i class="icon-star text-10 text-yellow-2"></i>
                          </div>

                          <div>
                            <i class="icon-star text-10 text-yellow-2"></i>
                          </div>

                          <div>
                            <i class="icon-star text-10 text-yellow-2"></i>
                          </div>
                        </div>

                        <span class="text-dark-1 ml-10">4.8 (269)</span>
                      </div>

                      <div class="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
                        <div class="d-flex items-center">
                          <i class="icon-clock text-16 mr-5"></i>4 days
                        </div>

                        <div>
                          From <span class="text-16 fw-500">$225,00</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div class="swiper-slide">
                  <a
                    href=""
                    class="tourCard -type-1 py-10 px-10 border-1 rounded-12 bg-white -hover-shadow"
                  >
                    <div class="tourCard__header">
                      <div class="tourCard__image ratio ratio-28:20">
                        <img
                          src="img/tourCards/1/3.png"
                          alt="image"
                          class="img-ratio rounded-12"
                        />
                      </div>

                      <button class="tourCard__favorite">
                        <i class="icon-heart"></i>
                      </button>
                    </div>

                    <div class="tourCard__content px-10 pt-10">
                      <div class="tourCard__location d-flex items-center text-13 text-light-2">
                        <i class="icon-pin d-flex text-16 text-light-2 mr-5"></i>
                        London, UK
                      </div>

                      <h3 class="tourCard__title text-16 fw-500 mt-5">
                        <span>
                          Westminster Walking Tour &amp; Westminster Abbey Entry
                        </span>
                      </h3>

                      <div class="tourCard__rating d-flex items-center text-13 mt-5">
                        <div class="d-flex x-gap-5">
                          <div>
                            <i class="icon-star text-10 text-yellow-2"></i>
                          </div>

                          <div>
                            <i class="icon-star text-10 text-yellow-2"></i>
                          </div>

                          <div>
                            <i class="icon-star text-10 text-yellow-2"></i>
                          </div>

                          <div>
                            <i class="icon-star text-10 text-yellow-2"></i>
                          </div>

                          <div>
                            <i class="icon-star text-10 text-yellow-2"></i>
                          </div>
                        </div>

                        <span class="text-dark-1 ml-10">4.8 (269)</span>
                      </div>

                      <div class="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
                        <div class="d-flex items-center">
                          <i class="icon-clock text-16 mr-5"></i>4 days
                        </div>

                        <div>
                          From <span class="text-16 fw-500">$943,00</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div class="swiper-slide">
                  <a
                    href=""
                    class="tourCard -type-1 py-10 px-10 border-1 rounded-12 bg-white -hover-shadow"
                  >
                    <div class="tourCard__header">
                      <div class="tourCard__image ratio ratio-28:20">
                        <img
                          src="img/tourCards/1/4.png"
                          alt="image"
                          class="img-ratio rounded-12"
                        />
                      </div>

                      <button class="tourCard__favorite">
                        <i class="icon-heart"></i>
                      </button>
                    </div>

                    <div class="tourCard__content px-10 pt-10">
                      <div class="tourCard__location d-flex items-center text-13 text-light-2">
                        <i class="icon-pin d-flex text-16 text-light-2 mr-5"></i>
                        New York, USA
                      </div>

                      <h3 class="tourCard__title text-16 fw-500 mt-5">
                        <span>
                          All Inclusive Ultimate Circle Island Day Tour with
                          Lunch
                        </span>
                      </h3>

                      <div class="tourCard__rating d-flex items-center text-13 mt-5">
                        <div class="d-flex x-gap-5">
                          <div>
                            <i class="icon-star text-10 text-yellow-2"></i>
                          </div>

                          <div>
                            <i class="icon-star text-10 text-yellow-2"></i>
                          </div>

                          <div>
                            <i class="icon-star text-10 text-yellow-2"></i>
                          </div>

                          <div>
                            <i class="icon-star text-10 text-yellow-2"></i>
                          </div>

                          <div>
                            <i class="icon-star text-10 text-yellow-2"></i>
                          </div>
                        </div>

                        <span class="text-dark-1 ml-10">4.8 (269)</span>
                      </div>

                      <div class="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
                        <div class="d-flex items-center">
                          <i class="icon-clock text-16 mr-5"></i>4 days
                        </div>

                        <div>
                          From <span class="text-16 fw-500">$771,00</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div class="swiper-slide">
                  <a
                    href=""
                    class="tourCard -type-1 py-10 px-10 border-1 rounded-12 bg-white -hover-shadow"
                  >
                    <div class="tourCard__header">
                      <div class="tourCard__image ratio ratio-28:20">
                        <img
                          src="img/tourCards/1/5.png"
                          alt="image"
                          class="img-ratio rounded-12"
                        />
                      </div>

                      <button class="tourCard__favorite">
                        <i class="icon-heart"></i>
                      </button>
                    </div>

                    <div class="tourCard__content px-10 pt-10">
                      <div class="tourCard__location d-flex items-center text-13 text-light-2">
                        <i class="icon-pin d-flex text-16 text-light-2 mr-5"></i>
                        Paris, France
                      </div>

                      <h3 class="tourCard__title text-16 fw-500 mt-5">
                        <span>Space Center Houston Admission Ticket</span>
                      </h3>

                      <div class="tourCard__rating d-flex items-center text-13 mt-5">
                        <div class="d-flex x-gap-5">
                          <div>
                            <i class="icon-star text-10 text-yellow-2"></i>
                          </div>

                          <div>
                            <i class="icon-star text-10 text-yellow-2"></i>
                          </div>

                          <div>
                            <i class="icon-star text-10 text-yellow-2"></i>
                          </div>

                          <div>
                            <i class="icon-star text-10 text-yellow-2"></i>
                          </div>

                          <div>
                            <i class="icon-star text-10 text-yellow-2"></i>
                          </div>
                        </div>

                        <span class="text-dark-1 ml-10">4.8 (269)</span>
                      </div>

                      <div class="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
                        <div class="d-flex items-center">
                          <i class="icon-clock text-16 mr-5"></i>4 days
                        </div>

                        <div>
                          From <span class="text-16 fw-500">$189,25</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                {/* <div class="swiper-slide">
                  <a
                    href=""
                    class="tourCard -type-1 py-10 px-10 border-1 rounded-12 bg-white -hover-shadow"
                  >
                    <div class="tourCard__header">
                      <div class="tourCard__image ratio ratio-28:20">
                        <img
                          src="img/tourCards/1/6.png"
                          alt="image"
                          class="img-ratio rounded-12"
                        />
                      </div>

                      <button class="tourCard__favorite">
                        <i class="icon-heart"></i>
                      </button>
                    </div>

                    <div class="tourCard__content px-10 pt-10">
                      <div class="tourCard__location d-flex items-center text-13 text-light-2">
                        <i class="icon-pin d-flex text-16 text-light-2 mr-5"></i>
                        New York, USA
                      </div>

                      <h3 class="tourCard__title text-16 fw-500 mt-5">
                        <span>
                          Clear Kayak Tour of Shell Key Preserve and Tampa Bay
                          Area
                        </span>
                      </h3>

                      <div class="tourCard__rating d-flex items-center text-13 mt-5">
                        <div class="d-flex x-gap-5">
                          <div>
                            <i class="icon-star text-10 text-yellow-2"></i>
                          </div>

                          <div>
                            <i class="icon-star text-10 text-yellow-2"></i>
                          </div>

                          <div>
                            <i class="icon-star text-10 text-yellow-2"></i>
                          </div>

                          <div>
                            <i class="icon-star text-10 text-yellow-2"></i>
                          </div>

                          <div>
                            <i class="icon-star text-10 text-yellow-2"></i>
                          </div>
                        </div>

                        <span class="text-dark-1 ml-10">4.8 (269)</span>
                      </div>

                      <div class="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
                        <div class="d-flex items-center">
                          <i class="icon-clock text-16 mr-5"></i>4 days
                        </div>

                        <div>
                          From <span class="text-16 fw-500">$225,00</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div class="swiper-slide">
                  <a
                    href=""
                    class="tourCard -type-1 py-10 px-10 border-1 rounded-12 bg-white -hover-shadow"
                  >
                    <div class="tourCard__header">
                      <div class="tourCard__image ratio ratio-28:20">
                        <img
                          src="img/tourCards/1/7.png"
                          alt="image"
                          class="img-ratio rounded-12"
                        />
                      </div>

                      <button class="tourCard__favorite">
                        <i class="icon-heart"></i>
                      </button>
                    </div>

                    <div class="tourCard__content px-10 pt-10">
                      <div class="tourCard__location d-flex items-center text-13 text-light-2">
                        <i class="icon-pin d-flex text-16 text-light-2 mr-5"></i>
                        London, UK
                      </div>

                      <h3 class="tourCard__title text-16 fw-500 mt-5">
                        <span>
                          History and Hauntings of Salem Guided Walking Tour
                        </span>
                      </h3>

                      <div class="tourCard__rating d-flex items-center text-13 mt-5">
                        <div class="d-flex x-gap-5">
                          <div>
                            <i class="icon-star text-10 text-yellow-2"></i>
                          </div>

                          <div>
                            <i class="icon-star text-10 text-yellow-2"></i>
                          </div>

                          <div>
                            <i class="icon-star text-10 text-yellow-2"></i>
                          </div>

                          <div>
                            <i class="icon-star text-10 text-yellow-2"></i>
                          </div>

                          <div>
                            <i class="icon-star text-10 text-yellow-2"></i>
                          </div>
                        </div>

                        <span class="text-dark-1 ml-10">4.8 (269)</span>
                      </div>

                      <div class="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
                        <div class="d-flex items-center">
                          <i class="icon-clock text-16 mr-5"></i>4 days
                        </div>

                        <div>
                          From <span class="text-16 fw-500">$943,00</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div class="swiper-slide">
                  <a
                    href=""
                    class="tourCard -type-1 py-10 px-10 border-1 rounded-12 bg-white -hover-shadow"
                  >
                    <div class="tourCard__header">
                      <div class="tourCard__image ratio ratio-28:20">
                        <img
                          src="img/tourCards/1/9.png"
                          alt="image"
                          class="img-ratio rounded-12"
                        />
                      </div>

                      <button class="tourCard__favorite">
                        <i class="icon-heart"></i>
                      </button>
                    </div>

                    <div class="tourCard__content px-10 pt-10">
                      <div class="tourCard__location d-flex items-center text-13 text-light-2">
                        <i class="icon-pin d-flex text-16 text-light-2 mr-5"></i>
                        New York, USA
                      </div>

                      <h3 class="tourCard__title text-16 fw-500 mt-5">
                        <span>
                          Mauna Kea Summit Sunset and Stars Free Astro Photos
                          Hilo Kona Waikoloa Pick Up
                        </span>
                      </h3>

                      <div class="tourCard__rating d-flex items-center text-13 mt-5">
                        <div class="d-flex x-gap-5">
                          <div>
                            <i class="icon-star text-10 text-yellow-2"></i>
                          </div>

                          <div>
                            <i class="icon-star text-10 text-yellow-2"></i>
                          </div>

                          <div>
                            <i class="icon-star text-10 text-yellow-2"></i>
                          </div>

                          <div>
                            <i class="icon-star text-10 text-yellow-2"></i>
                          </div>

                          <div>
                            <i class="icon-star text-10 text-yellow-2"></i>
                          </div>
                        </div>

                        <span class="text-dark-1 ml-10">4.8 (269)</span>
                      </div>

                      <div class="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
                        <div class="d-flex items-center">
                          <i class="icon-clock text-16 mr-5"></i>4 days
                        </div>

                        <div>
                          From <span class="text-16 fw-500">$771,00</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div> */}
              </div>
            </div>

            <div className="navAbsolute">
              <button className="navAbsolute__button bg-white js-slider1-prev">
                <i className="icon-arrow-left text-14"></i>
              </button>

              <button className="navAbsolute__button bg-white js-slider1-next">
                <i className="icon-arrow-right text-14"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhuketPage;
