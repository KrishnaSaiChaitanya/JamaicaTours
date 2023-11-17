import React from "react";

function Footer() {
  return (
    <div>
      {" "}
      <footer className="footer -type-1 -light bg-dark-1">
        <div className="footer__main">
          <div className="container">
            <div className="footer__info">
              <div className="row y-gap-20 justify-between">
                <div className="col-auto">
                  <div className="row y-gap-20 items-center">
                    <div className="col-auto">
                      <i className="icon-headphone text-50 text-white"></i>
                    </div>

                    <div className="col-auto">
                      <div className="text-20 fw-500 text-white text-white">
                        Speak to our expert at
                        <span className="text-white">1-800-453-6744</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-auto">
                  <div className="footerSocials">
                    <div className="footerSocials__title text-white">
                      Follow Us
                    </div>

                    <div className="footerSocials__icons text-white">
                      <a href="#" className="icon-facebook"></a>
                      <a href="#" className="icon-twitter"></a>
                      <a href="#" className="icon-instagram"></a>
                      <a href="#" className="icon-linkedin"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-white-15-top">
            <div className="container">
              <div className="footer__content">
                <div className="row y-gap-40 justify-between">
                  <div className="col-lg-4 col-md-6">
                    <h4 className="text-20 fw-500 text-white">Contact</h4>

                    <div className="y-gap-10 mt-20 text-white">
                      <a className="d-block" href="#">
                        328 Queensberry Street, North Melbourne VIC3051,
                        Australia.
                      </a>
                      <a className="d-block" href="#">
                        hi@viatours.com
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-auto col-6">
                    <h4 className="text-20 fw-500 text-white">Company</h4>

                    <div className="y-gap-10 mt-20">
                      <a className="d-block fw-500 text-white" href="#">
                        About Us
                      </a>

                      <a className="d-block fw-500 text-white" href="#">
                        Tourz Reviews
                      </a>

                      <a className="d-block fw-500 text-white" href="#">
                        Contact Us
                      </a>

                      <a className="d-block fw-500 text-white" href="#">
                        Travel Guides
                      </a>

                      <a className="d-block fw-500 text-white" href="#">
                        Data Policy
                      </a>

                      <a className="d-block fw-500 text-white" href="#">
                        Cookie Policy
                      </a>

                      <a className="d-block fw-500 text-white" href="#">
                        Legal
                      </a>

                      <a className="d-block fw-500 text-white" href="#">
                        Sitemap
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-auto col-6">
                    <h4 className="text-20 fw-500 text-white">Support</h4>

                    <div className="y-gap-10 mt-20">
                      <a className="d-block fw-500 text-white" href="#">
                        Get in Touch
                      </a>

                      <a className="d-block fw-500 text-white" href="#">
                        Help center
                      </a>

                      <a className="d-block fw-500 text-white" href="#">
                        Live chat
                      </a>

                      <a className="d-block fw-500 text-white" href="#">
                        How it works
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6">
                    <h4 className="text-20 fw-500 text-white">Newsletter</h4>
                    <p className="text-white mt-20">
                      Subscribe to the free newsletter and stay up to date
                    </p>

                    <div className="footer__newsletter">
                      <input type="Email" placeholder="Your email address" />
                      <button>Send</button>
                    </div>

                    <h4 className="text-20 fw-500 text-white mt-30">
                      Mobile Apps
                    </h4>

                    <div className="mt-10">
                      <a className="d-flex items-center text-white" href="#">
                        <i className="icon-apple text-16 mr-10"></i>
                        iOS App
                      </a>

                      <a
                        className="d-flex items-center text-white mt-10"
                        href="#"
                      >
                        <i className="icon-android text-16 mr-10"></i>
                        Android App
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-white-15-top">
          <div className="container">
            <div className="footer__bottom">
              <div className="row y-gap-5 justify-between items-center">
                <div className="col-auto text-white">
                  <div>© Copyright Viatours 2023</div>
                </div>

                <div className="col-auto">
                  <div className="footer__images d-flex items-center x-gap-10">
                    <img src="img/footer/cards/1.png" alt="image" />
                    <img src="img/footer/cards/2.png" alt="image" />
                    <img src="img/footer/cards/3.png" alt="image" />
                    <img src="img/footer/cards/4.png" alt="image" />
                    <img src="img/footer/cards/5.png" alt="image" />
                    <img src="img/footer/cards/6.png" alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
