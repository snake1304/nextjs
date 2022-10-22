import React from "react";

const Footer = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      <footer className="w-100 py-4 flex-shrink-0">
        <div className="container py-4">
          <div className="row gy-4 gx-5">
            <div className="col-lg-4 col-md-6">
              <h5 className="h1 text-white">FlowerLuv</h5>
              <p className="small text-muted">
                Send beautiful, affordable flowers and gifts from only P399 with
                Free Same-Day Delivery in Metro Manila, Metro Cebu, Davao, and
                other selected areas. FlowerStore.ph is the Philippines' No. 1
                Online Gift Store providing all types of flower bouquets and
                gifts for all your needs! Cash On Delivery is accepted. No
                Credit Card required. Perfect for Birthdays, Anniversaries,
                Romance, I'm sorry, Valentine's Day, Mother's Day, and all other
                occasions. We also deliver sympathy funeral flowers.
              </p>
              <p className="small text-muted mb-0">
                &copy; Copyrights. All rights reserved.{" "}
                <a className="text-primary" href="https://bootstrapious.com/">
                  Bootstrapious.com
                </a>
              </p>
            </div>
            <div className="col-lg-2 col-md-6">
              {/* <h5 className="text-white mb-3">Quick links</h5>
              <ul className="list-unstyled text-muted">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="about">About</a>
                </li>
                <li>
                  <a href="#">Get started</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul> */}
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="text-white mb-3">Quick links</h5>
              <ul className="list-unstyled text-muted">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6">
              <h5 className="text-white mb-3">Assistant</h5>
              <form action="#">
                <div className="input-group mb-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Your email address"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn-primary"
                    id="button-addon2"
                    type="button"
                  >
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
