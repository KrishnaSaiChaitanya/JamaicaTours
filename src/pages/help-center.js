import React, { useEffect, useState } from "react";

const HelpCenter = () => {
  const Accordion = (function () {
    function init() {
      const targets = document.querySelectorAll(".js-accordion");
      if (!targets) return;

      for (let i = 0; i < targets.length; i++) {
        const items = targets[i].querySelectorAll(".accordion__item");

        for (let l = 0; l < items.length; l++) {
          const button = items[l].querySelector(".accordion__button");
          const content = items[l].querySelector(".accordion__content");
          const titleChange = items[l].querySelector(
            "[data-open-change-title]"
          );
          let buttonOrigTitle;
          let buttonNewTitle;

          if (items[l].classList.contains("js-accordion-item-active")) {
            items[l].classList.toggle("is-active");
            content.style.maxHeight = content.scrollHeight + "px";
          }

          if (titleChange) {
            buttonOrigTitle = titleChange.innerHTML;
            buttonNewTitle = titleChange.getAttribute("data-open-change-title");
          }

          button.addEventListener("click", (e) => {
            items[l].classList.toggle("is-active");

            if (titleChange) {
              if (items[l].classList.contains("is-active")) {
                titleChange.innerHTML = buttonNewTitle;
              } else {
                titleChange.innerHTML = buttonOrigTitle;
              }
            }

            if (content.style.maxHeight) {
              content.style.maxHeight = null;
            } else {
              content.style.maxHeight = content.scrollHeight + "px";
            }
          });
        }
      }
    }

    return {
      init: init,
    };
  })();
  useEffect(() => {
    Accordion.init();
  }, []);

  const accordionData = [
    {
      title: "Can I get a refund?",
      content:
        "Phang Nga Bay Sea Cave Canoeing & James Bond Island w/ Buffet Lunch by Big Boat cancellation policy: For a full refund, cancel at least 24 hours in advance of the start date of the experience. Discover and book Phang Nga Bay Sea Cave Canoeing & James Bond Island w/ Buffet Lunch by Big Boat",
    },
    {
      title: "Can I change the travel date?",
      content:
        "Phang Nga Bay Sea Cave Canoeing & James Bond Island w/ Buffet Lunch by Big Boat cancellation policy: For a full refund, cancel at least 24 hours in advance of the start date of the experience. Discover and book Phang Nga Bay Sea Cave Canoeing & James Bond Island w/ Buffet Lunch by Big Boat",
    },
    {
      title: "When and where does the tour end?",
      content:
        "Phang Nga Bay Sea Cave Canoeing & James Bond Island w/ Buffet Lunch by Big Boat cancellation policy: For a full refund, cancel at least 24 hours in advance of the start date of the experience. Discover and book Phang Nga Bay Sea Cave Canoeing & James Bond Island w/ Buffet Lunch by Big Boat",
    },
    {
      title: "Do you arrange airport transfers?",
      content:
        "Phang Nga Bay Sea Cave Canoeing & James Bond Island w/ Buffet Lunch by Big Boat cancellation policy: For a full refund, cancel at least 24 hours in advance of the start date of the experience. Discover and book Phang Nga Bay Sea Cave Canoeing & James Bond Island w/ Buffet Lunch by Big Boat",
    },
  ];

  return (
    <div className="mt-header3">
      <section className="pageHeader -type-2">
        <div className="pageHeader__bg">
          <img src="img/pageHeader/2.jpg" alt="image" />
          <img src="img/hero/1/shape.svg" alt="image" />
        </div>
        <div className="container">
          <div className="row justify-center">
            <div className="col-12">
              <div className="pageHeader__content">
                <h1 className="pageHeader__title">
                  Welcome to the Help Center
                </h1>
                <p className="pageHeader__text">
                  Lorem ipsum is placeholder text commonly used in the site.
                </p>
                <div className="pageHeader__search">
                  <input type="text" placeholder="Search for a topic" />
                  <button>
                    <i className="icon-search text-15 text-white"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-md">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-lg-4 col-md-6">
              <div className="px-50 py-45 border-1 rounded-12">
                <img src="img/icons/6/1.svg" alt="image" className="mb-20" />
                <h3 className="text-18 fw-500">Booking your activity</h3>
                <div className="mt-10">
                  Lorem ipsum is placeholder text commonly used in the site.
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="px-50 py-45 border-1 rounded-12">
                <img src="img/icons/6/2.svg" alt="image" className="mb-20" />
                <h3 className="text-18 fw-500">Payment &amp; receipts</h3>
                <div className="mt-10">
                  Lorem ipsum is placeholder text commonly used in the site.
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="px-50 py-45 border-1 rounded-12">
                <img src="img/icons/6/3.svg" alt="image" className="mb-20" />
                <h3 className="text-18 fw-500">
                  Booking changes &amp; refunds
                </h3>
                <div className="mt-10">
                  Lorem ipsum is placeholder text commonly used in the site.
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="px-50 py-45 border-1 rounded-12">
                <img src="img/icons/6/4.svg" alt="image" className="mb-20" />
                <h3 className="text-18 fw-500">Promo codes &amp; credits</h3>
                <div className="mt-10">
                  Lorem ipsum is placeholder text commonly used in the site.
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="px-50 py-45 border-1 rounded-12">
                <img src="img/icons/6/5.svg" alt="image" className="mb-20" />
                <h3 className="text-18 fw-500">On the participation day</h3>
                <div className="mt-10">
                  Lorem ipsum is placeholder text commonly used in the site.
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="px-50 py-45 border-1 rounded-12">
                <img src="img/icons/6/6.svg" alt="image" className="mb-20" />
                <h3 className="text-18 fw-500">Value Packs</h3>
                <div className="mt-10">
                  Lorem ipsum is placeholder text commonly used in the site.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-xl layout-pb-xl">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <h2 className="text-30 md:text-24">Frequently Asked Questions</h2>
            </div>
          </div>

          <div className="row justify-center pt-40">
            <div className="col-xl-8 col-lg-10">
              <div className="accordion -simple row y-gap-20 js-accordion">
                <div className="col-12">
                  <div className="accordion__item px-20 py-15 border-1 rounded-12">
                    <div className="accordion__button d-flex items-center justify-between">
                      <div className="button text-16 text-dark-1">
                        Can I get the refund?
                      </div>

                      <div className="accordion__icon size-30 flex-center bg-light-2 rounded-full">
                        <i className="icon-plus"></i>
                        <i className="icon-minus"></i>
                      </div>
                    </div>

                    <div className="accordion__content">
                      <div className="pt-20">
                        <p>
                          Phang Nga Bay Sea Cave Canoeing & James Bond Island w/
                          Buffet Lunch by Big Boat cancellation policy: For a
                          full refund, cancel at least 24 hours in advance of
                          the start date of the experience. Discover and book
                          Phang Nga Bay Sea Cave Canoeing & James Bond Island w/
                          Buffet Lunch by Big Boat
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="accordion__item px-20 py-15 border-1 rounded-12">
                    <div className="accordion__button d-flex items-center justify-between">
                      <div className="button text-16 text-dark-1">
                        Can I change the travel date?
                      </div>

                      <div className="accordion__icon size-30 flex-center bg-light-2 rounded-full">
                        <i className="icon-plus"></i>
                        <i className="icon-minus"></i>
                      </div>
                    </div>

                    <div className="accordion__content">
                      <div className="pt-20">
                        <p>
                          Phang Nga Bay Sea Cave Canoeing & James Bond Island w/
                          Buffet Lunch by Big Boat cancellation policy: For a
                          full refund, cancel at least 24 hours in advance of
                          the start date of the experience. Discover and book
                          Phang Nga Bay Sea Cave Canoeing & James Bond Island w/
                          Buffet Lunch by Big Boat
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="accordion__item px-20 py-15 border-1 rounded-12">
                    <div className="accordion__button d-flex items-center justify-between">
                      <div className="button text-16 text-dark-1">
                        When and where does the tour end?
                      </div>

                      <div className="accordion__icon size-30 flex-center bg-light-2 rounded-full">
                        <i className="icon-plus"></i>
                        <i className="icon-minus"></i>
                      </div>
                    </div>

                    <div className="accordion__content">
                      <div className="pt-20">
                        <p>
                          Phang Nga Bay Sea Cave Canoeing & James Bond Island w/
                          Buffet Lunch by Big Boat cancellation policy: For a
                          full refund, cancel at least 24 hours in advance of
                          the start date of the experience. Discover and book
                          Phang Nga Bay Sea Cave Canoeing & James Bond Island w/
                          Buffet Lunch by Big Boat
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="accordion__item px-20 py-15 border-1 rounded-12">
                    <div className="accordion__button d-flex items-center justify-between">
                      <div className="button text-16 text-dark-1">
                        Do you arrange airport transfers?
                      </div>

                      <div className="accordion__icon size-30 flex-center bg-light-2 rounded-full">
                        <i className="icon-plus"></i>
                        <i className="icon-minus"></i>
                      </div>
                    </div>

                    <div className="accordion__content">
                      <div className="pt-20">
                        <p>
                          Phang Nga Bay Sea Cave Canoeing & James Bond Island w/
                          Buffet Lunch by Big Boat cancellation policy: For a
                          full refund, cancel at least 24 hours in advance of
                          the start date of the experience. Discover and book
                          Phang Nga Bay Sea Cave Canoeing & James Bond Island w/
                          Buffet Lunch by Big Boat
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
