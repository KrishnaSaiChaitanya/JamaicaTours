import React, { useEffect } from "react";

const Booking = () => {
  useEffect(() => {
    const targets = document.querySelectorAll(".js-tabs");
    if (!targets) return;

    targets.forEach((el) => {
      singleTab(el);
    });
  }, []);

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
  return (
    <section className="layout-pt-md layout-pb-lg mt-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="bg-white rounded-12 shadow-2 py-15 px-20">
              <a href="login.html" className="text-accent-1">
                Sign in
              </a>
              to book with your saved details or
              <a href="register.html" className="text-accent-1">
                register
              </a>
              to manage your bookings on the go!
            </div>

            <div className="bg-white rounded-12 shadow-2 py-30 px-30 md:py-20 md:px-20 mt-30">
              <h2 className="text-30 md:text-24 fw-700">
                Let us know who you are
              </h2>
              <div class="row y-gap-30 contactForm pt-30">
                <div class="col-12">
                  <div class="form-input ">
                    <input type="text" required />
                    <label class="lh-1 text-16 text-light-1">Full Name</label>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-input ">
                    <input type="text" required />
                    <label class="lh-1 text-16 text-light-1">Email</label>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-input ">
                    <input type="text" required />
                    <label class="lh-1 text-16 text-light-1">
                      Phone Number
                    </label>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-input ">
                    <input type="text" required />
                    <label class="lh-1 text-16 text-light-1">Country</label>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-input ">
                    <input type="text" required />
                    <label class="lh-1 text-16 text-light-1">City</label>
                  </div>
                </div>

                <div class="col-12">
                  <div class="form-input ">
                    <input type="text" required />
                    <label class="lh-1 text-16 text-light-1">Address 1</label>
                  </div>
                </div>

                <div class="col-12">
                  <div class="form-input ">
                    <input type="text" required />
                    <label class="lh-1 text-16 text-light-1">Address 2</label>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-input ">
                    <input type="text" required />
                    <label class="lh-1 text-16 text-light-1">
                      State/Province/Region
                    </label>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-input ">
                    <input type="text" required />
                    <label class="lh-1 text-16 text-light-1">
                      ZIP code/Postal code
                    </label>
                  </div>
                </div>

                <div class="col-12">
                  <div class="form-input ">
                    <textarea required rows="8"></textarea>
                    <label class="lh-1 text-16 text-light-1">
                      Tour Content
                    </label>
                  </div>
                </div>

                <div class="col-12">
                  <div class="row y-gap-20 items-center justify-between">
                    <div class="col-auto">
                      <div class="text-14">
                        By proceeding with this booking, I agree to tourz Terms
                        of Use and Privacy Policy.
                      </div>
                    </div>

                    <div class="col-md-auto col-12">
                      <button class="button -md -dark-1 bg-accent-1 text-white col-12">
                        Next: Final details
                        <i class="icon-arrow-top-right text-16 ml-10"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-12 shadow-2 py-30 px-30 md:py-20 md:px-20 mt-30">
              <h2 className="text-30 md:text-24 fw-700 mb-30">
                How do you want to pay?
              </h2>
              <div class="tabs -pills-3 js-tabs">
                <div class="tabs__controls row x-gap-10 y-gap-10 js-tabs-controls">
                  <div class="col-auto">
                    <button
                      class="tabs__button fw-500 rounded-200 js-tabs-button is-tab-el-active"
                      data-tab-target=".-tab-item-1"
                    >
                      Credit/Debit Card
                    </button>
                  </div>

                  <div class="col-auto">
                    <button
                      class="tabs__button fw-500 rounded-200 js-tabs-button "
                      data-tab-target=".-tab-item-2"
                    >
                      Digital Payment
                    </button>
                  </div>
                </div>

                <div class="tabs__content pt-30 js-tabs-content">
                  <div class="tabs__pane -tab-item-1 is-tab-el-active">
                    <div class="contactForm">
                      <div class="form-input ">
                        <input type="text" required />
                        <label class="lh-1 text-16 text-light-1">
                          Select payment method *
                        </label>
                      </div>
                    </div>

                    <div class="row y-gap-30 pt-30">
                      <div class="col-lg-6">
                        <div class="row y-gap-30 contactForm">
                          <div class="col-12">
                            <div class="form-input ">
                              <input type="text" required />
                              <label class="lh-1 text-16 text-light-1">
                                Card holder name *
                              </label>
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="form-input ">
                              <input type="text" required />
                              <label class="lh-1 text-16 text-light-1">
                                Credit/debit card number *
                              </label>
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="form-input ">
                              <input type="text" required />
                              <label class="lh-1 text-16 text-light-1">
                                Expiry date *
                              </label>
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="form-input ">
                              <input type="text" required />
                              <label class="lh-1 text-16 text-light-1">
                                CVC/CVV *
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-6">
                        <img
                          src="img/tourSingle/booking/card.png"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="tabs__pane -tab-item-2">
                    <div class="contactForm">
                      <div class="form-input ">
                        <input type="text" required />
                        <label class="lh-1 text-16 text-light-1">
                          Select payment method *
                        </label>
                      </div>
                    </div>

                    <ul class="ulList mt-20">
                      <li>
                        You have chosen to pay by PayPal. You will be forwarded
                        to the PayPal website to proceed with this transaction.
                      </li>
                      <li>
                        The total amount you will be charged is: $2,338.01
                      </li>
                    </ul>

                    <div class="line mt-30 mb-30"></div>

                    <div class="row y-gap-15 justify-between items-center">
                      <div class="col">
                        <div class="d-flex">
                          <div class="form-checkbox mt-5">
                            <input type="checkbox" name="name" />

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
                          <div class="text-14 ml-10">
                            Get access to members-only deals, just like the
                            millions of other email subscribers
                          </div>
                        </div>
                      </div>

                      <div class="col-auto">
                        <button class="button -md -dark-1 bg-accent-1 text-white">
                          Complete My Order
                          <i class="icon-arrow-top-right text-16 ml-10"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="pl-50 md:pl-0">
              <div class="bg-white rounded-12 shadow-2 py-30 px-30 md:py-20 md:px-20">
                <h2 class="text-20 fw-500">Your booking details</h2>

                <div class="d-flex mt-30">
                  <img src="img/tourSingle/booking/1.png" alt="image" />
                  <div class="ml-20">
                    Zipline 18 Platform and ATV Adventure Tour From Phuket
                  </div>
                </div>

                <div class="line mt-20 mb-20"></div>

                <div class="">
                  <div class="d-flex items-center justify-between">
                    <div class="fw-500">Date:</div>
                    <div class="">06 April 2023</div>
                  </div>

                  <div class="d-flex items-center justify-between">
                    <div class="fw-500">Time:</div>
                    <div class="">10:00 am</div>
                  </div>

                  <div class="d-flex items-center justify-between">
                    <div class="fw-500">Duration:</div>
                    <div class="">12 Days</div>
                  </div>

                  <div class="d-flex items-center justify-between">
                    <div class="fw-500">Tickets:</div>
                    <div class="">Adult x2 = $98</div>
                  </div>

                  <div class="d-flex items-center justify-between">
                    <div class="fw-500"></div>
                    <div class="">Youth x3 = $383</div>
                  </div>

                  <div class="d-flex items-center justify-between">
                    <div class="fw-500"></div>
                    <div class="">Children x6 = $394</div>
                  </div>
                </div>

                <div class="line mt-20 mb-20"></div>

                <div class="y-gap-15">
                  <div class="d-flex justify-between">
                    <div class="fw-500">Service per booking</div>
                    <div class="">$30.00</div>
                  </div>

                  <div class="d-flex justify-between">
                    <div class="fw-500">
                      Service per person 1 Adult, 2 Youth, 4 Children
                    </div>
                    <div class="">$179.00</div>
                  </div>
                </div>

                <div class="line mt-20 mb-20"></div>

                <div class="">
                  <div class="d-flex items-center justify-between">
                    <div class="fw-500">Subtotal</div>
                    <div class="">$382</div>
                  </div>

                  <div class="d-flex items-center justify-between">
                    <div class="fw-500">Total</div>
                    <div class="">$23</div>
                  </div>

                  <div class="d-flex items-center justify-between">
                    <div class="fw-500">Amount Paid</div>
                    <div class="">$3.482</div>
                  </div>

                  <div class="d-flex items-center justify-between">
                    <div class="fw-500">Amount Due</div>
                    <div class="">$43.242</div>
                  </div>
                </div>
              </div>

              <div class="bg-white rounded-12 shadow-2 py-30 px-30 md:py-20 md:px-20 mt-30">
                <h2 class="text-20 fw-500">Do you have a promo code?</h2>

                <div class="contactForm mt-25">
                  <div class="form-input ">
                    <input type="text" required />
                    <label class="lh-1 text-16 text-light-1">Promo code</label>
                  </div>
                </div>

                <button class="button -md -outline-accent-1 text-accent-1 mt-30">
                  Apply
                  <i class="icon-arrow-top-right text-16 ml-10"></i>
                </button>
              </div>

              <div className="mt-30">
                <button className="button -md -dark-1 bg-accent-1 text-white col-12">
                  Complete My Order
                  <i className="icon-arrow-top-right text-16 ml-10"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
