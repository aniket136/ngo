import React from "react";
import cardimage from "../assets/card.png";
import cardimage1 from "../assets/card1.png";
import cardimage2 from "../assets/card2.png";

const BannerCard = ({ title, text, imgSrc }) => (
  <div className="col-md-4 text-center d-flex flex-column align-items-center">
    <h4 className="fs-4 fw-bolder">{title}</h4>
    <p className="my-1">{text}</p>
    <img src={imgSrc} alt={title} className="card_img my-2" />
  </div>
);

const Banner = () => {
  return (
    <div className="banner-section text-white py-5">
      <div className="container-xl">
        <div className="banner rounded-4 px-4">
          {/* Banner Heading */}
          <div className="banner-top text-center mb-4">
            <h1 className="fs-1 fw-semibold">How We Make A Difference?</h1>
            <p className="fs-6 fw-medium">Everything you need to know about supporting education</p>
          </div>

          {/* Banner Content */}
          <div className="banner-content">
            <div className="row">
              <BannerCard
                title="Build & Support Schools"
                text="We construct and renovate schools in underserved areas, ensuring children have access to safe, equipped learning environments."
                imgSrc={cardimage}
              />
              <BannerCard
                title="Provide Essential Resources"
                text="We supply textbooks, school supplies, and digital tools, and offer teacher training to enhance the quality of education and support students' learning needs."
                imgSrc={cardimage1}
              />
              <BannerCard
                title="Scholarships and Programs"
                text="We award scholarships to bright, underprivileged students and run educational programs, paving the way for a brighter future."
                imgSrc={cardimage2}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
