import React from "react";
import ImgAvatar from "../../assets/dev_me.jpg";
import "./testimonials.css";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [1, 2, 3, 4];

const Testimonials = () => {
  return (
    <section>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map((i, index) => {
          return (
            <SwiperSlide key={index} className="testimonials__card">
              <div className="testimonials__avatar">
                <img src={ImgAvatar} alt="" />
              </div>
              <h4>Tina Snow</h4>
              <small>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptate animi, est quae corporis numquam dolores mollitia
                ipsam vel necessitatibus non hic expedita velit soluta, nihil,
                cum at placeat debitis voluptatum.
              </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
