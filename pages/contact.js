import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_497hbog",
        "template_4fuwdbn",
        form.current,
        "H1_tOpdXCim5MmBvB"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="user_name" />
    //   <label>Email</label>
    //   <input type="email" name="user_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>
    <>
      <section className="about-section">
        <h1 className="h1-responsive font-weight-bold text-center my-3">
          Contact us
        </h1>
        <p className="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us
          directly.
        </p>

        <div className="row">
          <div className="col-md-8 mb-md-1 mb-1">
            <form
              style={{ paddingLeft: "50px" }}
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      className="form-control"
                    />
                    <label htmlFor="name" className="">
                      Your name
                    </label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="email"
                      name="user_email"
                      className="form-control"
                    />
                    <label htmlFor="email" className="">
                      Your email
                    </label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="7"
                      style={{ resize: "none" }}
                      className="form-control md-textarea"
                    ></textarea>
                    <label htmlFor="message">Your message</label>
                  </div>
                </div>
              </div>
              <div className="text-center text-md-left">
                <input className="buttonSend" type="submit" value="Send" />
                {/* <button
                  type="button"
                  className="btn btn-outline-success"
                  value="Send"
                >
                  Send
                </button> */}
              </div>
            </form>
          </div>

          <div className="col-md-4 text-center">
            <ul style={{ paddingRight: "20px" }} className="list-unstyled mb-0">
              <li>
                <i className="fas fa-map-marker-alt fa-2x"></i>
                <p>961 Hau Giang, Quan 6, TP HCM</p>
              </li>

              <li>
                <i className="fas fa-phone mt-4 fa-2x"></i>
                <p>+ 0968994777</p>
              </li>

              <li>
                <i className="fas fa-envelope mt-4 fa-2x"></i>
                <p>13giaminh13@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default contact;
