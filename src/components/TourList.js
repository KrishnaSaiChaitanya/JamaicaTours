import React, { useEffect } from "react";

function TourCard(props) {
  function sectionSlider() {
    const sectionSlider = document.querySelectorAll(".js-section-slider");
    if (!sectionSlider.length) return;

    for (let i = 0; i < sectionSlider.length; i++) {
      const el = sectionSlider[i];

      let prevNavElement = el.querySelector(".js-prev");
      let nextNavElement = el.querySelector(".js-next");

      if (el.getAttribute("data-nav-prev"))
        prevNavElement = document.querySelector(
          `.${el.getAttribute("data-nav-prev")}`
        );
      if (el.getAttribute("data-nav-next"))
        nextNavElement = document.querySelector(
          `.${el.getAttribute("data-nav-next")}`
        );

      let gap = 0;
      let loop = false;
      let centered = false;
      let pagination = false;
      let scrollbar = false;

      if (el.getAttribute("data-gap")) gap = el.getAttribute("data-gap");
      if (el.hasAttribute("data-loop")) loop = true;
      if (el.hasAttribute("data-center")) centered = true;

      if (el.getAttribute("data-pagination")) {
        let paginationElement = document.querySelector(
          `.${el.getAttribute("data-pagination")}`
        );

        pagination = {
          el: paginationElement,
          bulletClass: "pagination__item",
          bulletActiveClass: "is-active",
          bulletElement: "div",
          clickable: true,
          renderBullet: function (index, className) {
            return (
              '<span class="' + className + '">' + 0 + (index + 1) + "</span>"
            );
          },
        };
      }

      if (el.hasAttribute("data-scrollbar")) {
        scrollbar = {
          el: ".js-scrollbar",
          draggable: true,
        };
      }

      const colsArray = el.getAttribute("data-slider-cols").split(" ");

      let cols_base = 1;
      let cols_xl = 1;
      let cols_lg = 1;
      let cols_md = 1;
      let cols_sm = 1;

      colsArray.forEach((el) => {
        if (el.includes("base")) cols_base = el.slice(-1);
        if (el.includes("xl")) cols_xl = el.slice(-1);
        if (el.includes("lg")) cols_lg = el.slice(-1);
        if (el.includes("md")) cols_md = el.slice(-1);
        if (el.includes("sm")) cols_sm = el.slice(-1);
      });

      new Swiper(el, {
        speed: 600,
        autoHeight: true,

        centeredSlides: centered,
        parallax: true,
        watchSlidesVisibility: true,
        loop: loop,
        loopAdditionalSlides: 1,
        preloadImages: false,
        lazy: true,

        scrollbar: scrollbar,
        pagination: pagination,
        spaceBetween: 10,

        // width: 330,
        slidesPerView: parseInt(cols_base),
        breakpoints: {
          1199: {
            slidesPerView: parseInt(cols_xl),
            width: null,
            spaceBetween: parseInt(gap),
          },
          991: {
            slidesPerView: parseInt(cols_lg),
            width: null,
            spaceBetween: parseInt(gap),
          },
          767: {
            slidesPerView: parseInt(cols_md),
            width: null,
            spaceBetween: parseInt(gap),
          },
          574: {
            slidesPerView: parseInt(cols_sm),
            width: null,
            spaceBetween: parseInt(gap),
          },
        },

        lazy: {
          loadPrevNext: true,
        },
        navigation: {
          prevEl: prevNavElement,
          nextEl: nextNavElement,
        },
      });
    }
  }
  useEffect(() => {
    sectionSlider();
  });
  return (
    <a
      href=""
      className="tourCard -type-1 py-10 px-10 border-1 rounded-12 bg-white -hover-shadow"
    >
      <div className="tourCard__header">
        <div className="tourCard__image ratio ratio-28:20">
          <img
            src={props.imageSrc}
            alt="image"
            className="img-ratio rounded-12"
          />
        </div>
        <button className="tourCard__favorite">
          <i className="icon-heart"></i>
        </button>
      </div>
      <div className="tourCard__content px-10 pt-10">
        <div className="tourCard__location d-flex items-center text-13 text-light-2">
          <i className="icon-pin d-flex text-16 text-light-2 mr-5"></i>
          {props.location}
        </div>
        <h3 className="tourCard__title text-16 fw-500 mt-5">
          <span>{props.title}</span>
        </h3>
        <div className="tourCard__rating d-flex items-center text-13 mt-5">
          <div className="d-flex x-gap-5">
            {/* {[...Array(props.rating)].map((_, index) => (
              <div key={index}>
                <i className="icon-star text-10 text-yellow-2"></i>
              </div>
            ))} */}
          </div>
          <span className="text-dark-1 ml-10">{`${props.rating} (269)`}</span>
        </div>
        <div className="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
          <div className="d-flex items-center">
            <i className="icon-clock text-16 mr-5"></i>
            {props.duration}
          </div>
          <div>
            From <span className="text-16 fw-500">{props.price}</span>
          </div>
        </div>
      </div>
    </a>
  );
}

function TourList() {
  const tours = [
    {
      imageSrc: "img/tourCards/1/1.png",
      location: "Paris, France",
      title: "Centipede Tour - Guided Arizona Desert Tour by ATV",
      rating: 4.8,
      duration: "4 days",
      price: "$189,25",
    },
    {
      imageSrc: "img/tourCards/1/2.png",
      location: "New York, USA",
      title: "Molokini and Turtle Town Snorkeling Adventure Aboard",
      rating: 4.8,
      duration: "4 days",
      price: "$225,00",
    },
    {
      imageSrc: "img/tourCards/1/3.png",
      location: "London, UK",
      title: "Westminster Walking Tour & Westminster Abbey Entry",
      rating: 4.8,
      duration: "4 days",
      price: "$943,00",
    },
    {
      imageSrc: "img/tourCards/1/4.png",
      location: "New York, USA",
      title: "All Inclusive Ultimate Circle Island Day Tour with Lunch",
      rating: 4.8,
      duration: "4 days",
      price: "$771,00",
    },
    {
      imageSrc: "img/tourCards/1/5.png",
      location: "Paris, France",
      title: "Centipede Tour - Guided Arizona Desert Tour by ATV",
      rating: 4.8,
      duration: "4 days",
      price: "$189,25",
    },
    {
      imageSrc: "img/tourCards/1/6.png",
      location: "New York, USA",
      title: "Molokini and Turtle Town Snorkeling Adventure Aboard",
      rating: 4.8,
      duration: "4 days",
      price: "$225,00",
    },
  ];

  return (
    <section className="layout-pt-xl layout-pb-xl">
      <div className="container">
        <div className="row">
          <div className="col-auto">
            <h2 className="text-30">You might also like...</h2>
          </div>
        </div>
        <div className="relative pt-40 sm:pt-20">
          <div
            className="overflow-hidden pb-5 js-section-slider"
            data-gap="30"
            data-slider-cols="xl-4 lg-3 md-2 sm-1 base-1"
            data-nav-prev="js-slider1-prev"
            data-nav-next="js-slider1-next"
          >
            <div className="swiper-wrapper">
              {tours.map((tour, index) => (
                <div key={index} className="swiper-slide">
                  <TourCard {...tour} />
                </div>
              ))}
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
  );
}

export default TourList;
