import Filters from "@/components/Filters";
import TourCard from "@/components/TourCard";
import TourSidebar from "@/components/TourSidebar";
import React, { useEffect } from "react";

function TourLayout() {
  function initMap() {
    if (!document.querySelector(".js-map")) return;

    const map = new google.maps.Map(document.querySelector(".js-map"), {
      zoom: 12,
      center: {
        lat: 40.69,
        lng: -73.88,
      },
    });

    const locations = [
      { lat: 40.80061, lng: -74.035242 },
      { lat: 40.73061, lng: -73.935242 },
      { lat: 40.74061, lng: -73.825242 },
      { lat: 40.70061, lng: -73.885242 },
      { lat: 40.67061, lng: -73.785242 },
      { lat: 40.68061, lng: -73.905242 },
    ];

    const contentString = `
    <div className="tourCard -type-1 pt-10 pb-15 px-10 border-1 rounded-12">
      <div className="tourCard__header">
        <div className="tourCard__image ratio ratio-28:20">
          <img src="img/tourCards/1/1.png" alt="image" className="img-ratio rounded-12">
        </div>

        <button className="tourCard__favorite">
          <i className="icon-heart"></i>
        </button>
      </div>

      <div className="tourCard__content px-10 pt-15">
        <div className="tourCard__location d-flex items-center text-13 text-light-2">
          <i className="icon-pin d-flex text-16 text-light-2 mr-5"></i>
          New York, USA
        </div>
        
        <h3 className="tourCard__title text-16 fw-500 mt-10">
          <span>Phi Phi Islands Day Tour from Phuket</span>
        </h3>

        <div className="tourCard__rating d-flex items-center text-13 mt-10">
          <div className="d-flex x-gap-5">
            <div><i className="icon-star text-10 text-yellow-2"></i></div>
            <div><i className="icon-star text-10 text-yellow-2"></i></div>
            <div><i className="icon-star text-10 text-yellow-2"></i></div>
            <div><i className="icon-star text-10 text-yellow-2"></i></div>
            <div><i className="icon-star text-10 text-yellow-2"></i></div>
          </div>

          <span className="text-dark-1 ml-10">4.8 (269)</span>
        </div>

        <div className="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-15 mt-15">
          <div className="d-flex items-center">
            <i className="icon-clock text-16 mr-5"></i>
            4 days
          </div>

          <div>From <span className="text-16 fw-500">$771,00</span></div>
        </div>
      </div>
    </div>
  `;
  }
  function dbSidebarToggle() {
    const target = document.querySelector(".js-toggle-db-sidebar");
    if (!target) return;

    const dashboard = document.querySelector(".js-dashboard");

    if (window.innerWidth < 575)
      dashboard.classList.remove("-is-sidebar-visible");

    target.addEventListener("click", () =>
      dashboard.classList.toggle("-is-sidebar-visible")
    );
  }
  const tour_data = [
    {
      location: "Paris, France",
      title: "Centipede Tour - Guided Arizona Desert Tour by ATV",
      rating: "4.8 (269)",
      duration: "4 days",
      price: "$189,25",
      imageSrc: "../../img/tourCards/1/1.png",
    },
    {
      location: "New York, USA",
      title: "Molokini and Turtle Town Snorkeling Adventure Aboard",
      rating: "4.8 (269)",
      duration: "4 days",
      price: "$225,00",
      imageSrc: "img/tourCards/1/2.png",
    },
    {
      location: "London, UK",
      title: "Westminster Walking Tour & Westminster Abbey Entry",
      rating: "4.8 (269)",
      duration: "4 days",
      price: "$943,00",
      imageSrc: "img/tourCards/1/3.png",
    },
    {
      location: "Paris, France",
      title: "Space Center Houston Admission Ticket",
      rating: "4.8 (269)",
      duration: "4 days",
      price: "$189,25",
      imageSrc: "img/tourCards/1/4.png",
    },
    {
      location: "New York, USA",
      title: "Clear Kayak Tour of Shell Key Preserve and Tampa Bay Area",
      rating: "4.8 (269)",
      duration: "4 days",
      price: "$225,00",
      imageSrc: "img/tourCards/1/5.png",
    },
    {
      location: "London, UK",
      title: "History and Hauntings of Salem Guided Walking Tour",
      rating: "4.8 (269)",
      duration: "4 days",
      price: "$943,00",
      imageSrc: "img/tourCards/1/6.png",
    },
    {
      location: "Paris, France",
      title: "All Inclusive Ultimate Circle Island Day Tour with Lunch",
      rating: "4.8 (269)",
      duration: "4 days",
      price: "$189,25",
      imageSrc: "img/tourCards/1/7.png",
    },
    {
      location: "New York, USA",
      title:
        "Mauna Kea Summit Sunset and Stars Free Astro Photos Hilo Kona Waikoloa Pick Up",
      rating: "4.8 (269)",
      duration: "4 days",
      price: "$225,00",
      imageSrc: "img/tourCards/1/8.png",
    },
    {
      location: "London, UK",
      title: "Starlight with Sea Cave Kayaking and Loy Krathong Floating",
      rating: "4.8 (269)",
      duration: "4 days",
      price: "$943,00",
      imageSrc: "img/tourCards/1/9.png",
    },
    {
      location: "Paris, France",
      title: "Full-Day Phi Phi Islands, Maiton island Trip by Speed Catamaran",
      rating: "4.8 (269)",
      duration: "4 days",
      price: "$189,25",
      imageSrc: "img/tourCards/1/10.png",
    },
    {
      location: "New York, USA",
      title: "Phi Phi Islands Day Tour from Phuket",
      rating: "4.8 (269)",
      duration: "4 days",
      price: "$225,00",
      imageSrc: "img/tourCards/1/11.png",
    },
    {
      location: "London, UK",
      title: "Karon View Point, Big Buddha & Wat Chalong",
      rating: "4.8 (269)",
      duration: "4 days",
      price: "$943,00",
      imageSrc: "img/tourCards/1/12.png",
    },
  ];

  useEffect(() => {
    initMap();
    dbSidebarToggle();
  });

  return (
    <div className="mt-header2">
      <Filters />
      <section className="halfMap -type-1 mb-30">
        <div className="halfMap__content">
          <div className="row">
            <div className="col-auto">
              <h2 className="text-30 md:text-24">
                Explore all things to do in Phuket
              </h2>
            </div>
          </div>
          <div className="row y-gap-20 justify-between items-center pt-30 md:pt-10 mb-30">
            <div className="col-auto">
              <TourSidebar />
            </div>
            <div className="col-auto">
              <div
                className="dropdown -type-2 js-dropdown js-form-dd"
                data-main-value=""
              >
                <div className="dropdown__button js-button">
                  <span>Sort by: </span>
                  <span className="js-title">Featured</span>
                  <i className="icon-chevron-down"></i>
                </div>

                <div className="dropdown__menu js-menu-items">
                  <div className="dropdown__item" data-value="fast">
                    Fast
                  </div>

                  <div className="dropdown__item" data-value="steady">
                    Steady
                  </div>

                  <div className="dropdown__item" data-value="speedy">
                    Speedy
                  </div>

                  <div className="dropdown__item" data-value="furious">
                    Furious
                  </div>

                  <div className="dropdown__item" data-value="grind">
                    Grind
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="halfMap__cards">
            <div className="row y-gap-30">
              {tour_data.map((tour, index) => (
                <div className="col-sm-6">
                  <a
                    href="#"
                    className="tourCard -type-1 py-10 px-10 border-1 rounded-12  -hover-shadow"
                  >
                    <TourCard key={index} {...tour} />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="d-flex justify-center flex-column mt-30">
            <div className="pagination justify-center">
              <button className="pagination__button button -accent-1 mr-15 -prev">
                <i className="icon-arrow-left text-15"></i>
              </button>

              <div className="pagination__count">
                <a href="#">1</a>
                <a href="#" className="is-active">
                  2
                </a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <div>...</div>
                <a href="#">20</a>
              </div>

              <button className="pagination__button button -accent-1 ml-15 -next">
                <i className="icon-arrow-right text-15"></i>
              </button>
            </div>

            <div className="text-14 text-center mt-20">
              Showing results 1-30 of 1,415
            </div>
          </div>
        </div>
        <div className="halfMap__map">
          <div className="map js-map"></div>
        </div>
      </section>
    </div>
  );
}

export default TourLayout;
