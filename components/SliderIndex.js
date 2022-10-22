import React, { Component } from "react";
import Slider from "react-slick";

export default class SliderIndex extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      swipeToSlide: true,
      cssEase: "linear",
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img
              className="imgIndex1"
              src="https://assets.flowerstore.ph/public/tenantPH/app/assets/images/banner/747_AXIj8CZQJJuV4KIi9RmLcGeTR.jpg"
              alt="ne1"
            />
          </div>
          <div>
            <img
              className="imgIndex1"
              src="https://assets.flowerstore.ph/public/tenantPH/app/assets/images/banner/747_a9m2YDPwwhLx8GqDQbf6Wv9sI.jpg"
              alt="ne2"
            />
          </div>
          <div>
            <img
              className="imgIndex1"
              src="https://assets.flowerstore.ph/public/tenantPH/app/assets/images/banner/747_Wg5GqS4EStjZadVrckvxWqMzv.jpg"
              alt="ne2"
            />
          </div>
          <div>
            <img
              className="imgIndex1"
              src="https://assets.flowerstore.ph/public/tenantPH/app/assets/images/banner/747_CPr29TGtmoef8DbANQNkfAevB.webp"
              alt="ne2"
            />
          </div>
          <div>
            <img
              className="imgIndex1"
              src="https://assets.flowerstore.ph/public/tenantPH/app/assets/images/banner/747_MvyjH2XVz0V5XxKwtNrTlTB5T.jpg"
              alt="ne2"
            />
          </div>
          <div>
            <img
              className="imgIndex1"
              src="https://assets.flowerstore.ph/public/tenantPH/app/assets/images/banner/747_a9m2YDPwwhLx8GqDQbf6Wv9sI.jpg"
              alt="ne2"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
