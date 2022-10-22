import React, { Component } from "react";
import Slider from "react-slick";

export default class SliderVertical extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
      swipeToSlide: true,
      cssEase: "linear",
      beforeChange: function (currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function (currentSlide) {
        console.log("after change", currentSlide);
      },
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img
              className="imgIndex2"
              src="https://assets.flowerstore.ph/public/tenantPH/app/assets/images/banner/747_a9m2YDPwwhLx8GqDQbf6Wv9sI.jpg"
              alt="ne2"
            />
          </div>
          <div>
            <img
              className="imgIndex2"
              src="https://assets.flowerstore.ph/public/tenantPH/app/assets/images/banner/747_CPr29TGtmoef8DbANQNkfAevB.webp"
              alt="ne2"
            />
          </div>
          <div>
            <img
              className="imgIndex2"
              src="https://assets.flowerstore.ph/public/tenantPH/app/assets/images/banner/747_MvyjH2XVz0V5XxKwtNrTlTB5T.jpg"
              alt="ne2"
            />
          </div>
          <div>
            <img
              className="imgIndex2"
              src="https://assets.flowerstore.ph/public/tenantPH/app/assets/images/banner/747_a9m2YDPwwhLx8GqDQbf6Wv9sI.jpg"
              alt="ne2"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
