import React from "react";

const about = () => {
  return (
    <div className="about-section">
      <div className="inner-width">
        <h1>About Us</h1>
        <div className="border"></div>
        <div className="about-section-row">
          <div className="about-section-col">
            <div className="about">
              <h5> Welcome to FlowerLuv!</h5>
              <p>
                We aim to offer our customers a variety of the latest beautiful,
                flowers and gifts. We’ve come a long way, so we know exactly
                which direction to take when supplying you with high quality yet
                budget-friendly products. We offer all of this while providing
                excellent customer service and friendly support. We always keep
                an eye on the latest trends in flowers and gifts and put our
                customers’ wishes first. That is why we have satisfied customers
                all over the world, and are thrilled to be a part of the flowers
                and gifts industry. The interests of our customers are always
                top priority for us, so we hope you will enjoy our products as
                much as we enjoy making them available to you.
              </p>
              {/* <a href="#">Read More</a> */}
            </div>
          </div>
          <div className="about-section-col">
            <div className="skills">
              <div className="skill">
                <div className="title">Web Develpor</div>
                <div className="progress">
                  <div className="progress-bar p1">
                    <span>90%</span>
                  </div>
                </div>
              </div>

              <div className="skill">
                <div className="title">UI Design</div>
                <div className="progress">
                  <div className="progress-bar p2">
                    <span>70%</span>
                  </div>
                </div>
              </div>

              <div className="skill">
                <div className="title">UX Design</div>
                <div className="progress">
                  <div className="progress-bar p3">
                    <span>50%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
