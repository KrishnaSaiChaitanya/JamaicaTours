import React from "react";

function blogs() {
  return (
    <div>
      <div>
        <section class="hero -type-1 -min-2">
          <div class="hero__bg">
            <img src="./img/hero/1/1.png" alt="image" />
            <img src="img/hero/1/shape.svg" alt="image" />
          </div>

          <div class="container">
            <div class="row justify-center">
              <div class="col-xl-12">
                <div class="hero__content">
                  <h1 class="hero__title">Your guide to everywhere</h1>

                  <p class="hero__text">
                    Find inspiration, guides and stories for wherever you're
                    going Select a destination
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="layout-pt-md layout-pb-xl">
          <div class="container">
            <div class="tabs -pills-3 pt-30 js-tabs">
              <div class="tabs__controls row x-gap-10 y-gap-10 justify-center js-tabs-controls">
                <div class="col-auto">
                  <button
                    class="tabs__button fw-500 rounded-200 js-tabs-button is-tab-el-active"
                    data-tab-target=".-tab-item-1"
                  >
                    All Guide
                  </button>
                </div>

                <div class="col-auto">
                  <button
                    class="tabs__button fw-500 rounded-200 js-tabs-button "
                    data-tab-target=".-tab-item-2"
                  >
                    Africa
                  </button>
                </div>

                {/* <div class="col-auto">
                  <button
                    class="tabs__button fw-500 rounded-200 js-tabs-button "
                    data-tab-target=".-tab-item-3"
                  >
                    Asia
                  </button>
                </div>

                <div class="col-auto">
                  <button
                    class="tabs__button fw-500 rounded-200 js-tabs-button "
                    data-tab-target=".-tab-item-4"
                  >
                    Europe
                  </button>
                </div>

                <div class="col-auto">
                  <button
                    class="tabs__button fw-500 rounded-200 js-tabs-button "
                    data-tab-target=".-tab-item-5"
                  >
                    North America
                  </button>
                </div>

                <div class="col-auto">
                  <button
                    class="tabs__button fw-500 rounded-200 js-tabs-button "
                    data-tab-target=".-tab-item-6"
                  >
                    Oceania
                  </button>
                </div>

                <div class="col-auto">
                  <button
                    class="tabs__button fw-500 rounded-200 js-tabs-button "
                    data-tab-target=".-tab-item-7"
                  >
                    South America Guide
                  </button>
                </div> */}
              </div>

              <div class="tabs__content pt-30 js-tabs-content">
                <div class="tabs__pane -tab-item-1 is-tab-el-active">
                  <div class="row y-gap-30">
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

                    <div class="col-lg-4 col-md-6">
                      <a href="#" class="blogCard -type-1">
                        <div class="blogCard__image ratio ratio-41:30">
                          <img
                            src="img/blogCards/1/4.png"
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
                            src="img/blogCards/1/5.png"
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
                            src="img/blogCards/1/6.png"
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
                            src="img/blogCards/1/7.png"
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
                            src="img/blogCards/1/8.png"
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
                            src="img/blogCards/1/9.png"
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

                <div class="tabs__pane -tab-item-2 ">
                  <div class="row y-gap-30">
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

                    <div class="col-lg-4 col-md-6">
                      <a href="#" class="blogCard -type-1">
                        <div class="blogCard__image ratio ratio-41:30">
                          <img
                            src="img/blogCards/1/4.png"
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
                            src="img/blogCards/1/5.png"
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
                            src="img/blogCards/1/6.png"
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
                            src="img/blogCards/1/7.png"
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
                            src="img/blogCards/1/8.png"
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
                            src="img/blogCards/1/9.png"
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

                <div class="tabs__pane -tab-item-7 ">
                  <div class="row y-gap-30">
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

                    <div class="col-lg-4 col-md-6">
                      <a href="#" class="blogCard -type-1">
                        <div class="blogCard__image ratio ratio-41:30">
                          <img
                            src="img/blogCards/1/4.png"
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
                            src="img/blogCards/1/5.png"
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
                            src="img/blogCards/1/6.png"
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
                            src="img/blogCards/1/7.png"
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
                            src="img/blogCards/1/8.png"
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
                            src="img/blogCards/1/9.png"
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
              </div>
            </div>

            <div class="d-flex justify-center flex-column mt-60">
              <div class="pagination justify-center">
                <button class="pagination__button button -accent-1 mr-15 -prev">
                  <i class="icon-arrow-left text-15"></i>
                </button>

                <div class="pagination__count">
                  <a href="#">1</a>
                  <a href="#" class="is-active">
                    2
                  </a>
                  <a href="#">3</a>
                  <a href="#">4</a>
                  <a href="#">5</a>
                  <div>...</div>
                  <a href="#">20</a>
                </div>

                <button class="pagination__button button -accent-1 ml-15 -next">
                  <i class="icon-arrow-right text-15"></i>
                </button>
              </div>

              <div class="text-14 text-center mt-20">
                Showing results 1-30 of 1,415
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default blogs;
