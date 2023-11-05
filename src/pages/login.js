import React, { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    const { email, password } = formData;
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="mt-header2">
      <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-6 col-lg-7 col-md-9">
              <div className="text-center mb-60 md:mb-30">
                <h1 className="text-30">Log In</h1>
                <div className="text-18 fw-500 mt-20 md:mt-15">
                  We're glad to see you again!
                </div>
                <div className="mt-5">
                  Don't have an account?{" "}
                  <a href="register" className="text-accent-1">
                    Sign Up!
                  </a>
                </div>
              </div>

              <div className="contactForm border-1 rounded-12 px-60 py-60 md:px-25 md:py-30">
                <div className="form-input">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <label className="lh-1 text-16 text-light-1">
                    Email Address
                  </label>
                </div>

                <div className="form-input mt-30">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                  <label className="lh-1 text-16 text-light-1">Password</label>
                </div>

                <button
                  className="button -md -dark-1 bg-accent-1 text-white col-12 mt-30"
                  onClick={handleLogin}
                >
                  Log In
                  <i className="icon-arrow-top-right ml-10"></i>
                </button>

                <div className="relative line mt-50 mb-30">
                  <div className="line__word fw-500">OR</div>
                </div>

                <div className="row y-gap-15">
                  <div className="col">
                    <button className="button -md -outline-blue-1 text-blue-1 col-12">
                      {/* <i className="icon-facebook"></i> */}
                      Continue with Facebook
                    </button>
                  </div>

                  <div className="col">
                    <button className="button -md -outline-red-1 text-red-1 col-12">
                      <i className="icon-google "></i>
                      Continue with Google
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
