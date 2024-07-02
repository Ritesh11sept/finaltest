import React from "react";
import "./Testimonials.css";
import Image1 from "../../assests/avatar-1.svg";
import Image3 from "../../assests/avatar-3.svg";

// import kro swipercore&rqd modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // import krte hain pagnation module
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Anitej Sood",
    subtitle: "VIT Vellore",
    comment:
      "TherapAI has been a game-changer for me. The 24/7 accessibility means I can get support whenever I need it, especially during those late-night anxiety attacks. It feels like I always have someone to talk to, and that's incredibly comforting.",
  },
  {
    id: 2,
    image: Image3,
    title: "Karan Mukherjee",
    subtitle: "IIM Ahemdabad",
    comment:
      "TherapAI helped me address unresolved childhood experiences that were impacting my ability to form secure attachments in adult relationships. Through this process, I gained valuable tools for building healthy and fulfilling connections.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials container section">
      <h2 className="section__title">Clients & Reviews</h2>
      <Swiper
        className="testimonials__container"
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {data.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide className="testimonials__item" key={id}>
              <div className="thumb">
                <img src={image} alt={title} />
              </div>
              <h3 className="testimonials__title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
