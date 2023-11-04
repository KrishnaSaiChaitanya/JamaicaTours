import React from "react";

function TourCard({ imageSrc, location, title, rating, duration, price }) {
  return (
    <div>
      <div className="tourCard__header">
        <div className="tourCard__image ratio ratio-28:20">
          <img src={imageSrc} alt="image" className="img-ratio rounded-12" />
        </div>

        <button className="tourCard__favorite">
          <i className="icon-heart"></i>
        </button>
      </div>

      <div className="tourCard__content px-10 pt-10">
        <div className="tourCard__location d-flex items-center text-13 text-light-2">
          <i className="icon-pin d-flex text-16 text-light-2 mr-5"></i>
          {location}
        </div>

        <h3 className="tourCard__title text-16 fw-500 mt-5">
          <span>{title}</span>
        </h3>

        <div className="tourCard__rating d-flex items-center text-13 mt-5">
          <div className="d-flex x-gap-5">
            {Array.from({ length: rating }).map((_, index) => (
              <div key={index}>
                <i className="icon-star text-10 text-yellow-2"></i>
              </div>
            ))}
          </div>
          <span className="text-dark-1 ml-10">4.8 (269)</span>
        </div>

        <div className="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
          <div className="d-flex items-center">
            <i className="icon-clock text-16 mr-5"></i>
            {duration}
          </div>

          <div>
            From <span className="text-16 fw-500">{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourCard;
