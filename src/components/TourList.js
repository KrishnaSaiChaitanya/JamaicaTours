import React from "react";

function TourCard(props) {
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
