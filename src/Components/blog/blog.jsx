import React from "react";
import "./Blog.css";
import Image1 from "../../assests/blog-1.svg";
import Image2 from "../../assests/blog-2.svg";
import Image3 from "../../assests/blog-3.svg";

const Blog = () => {
  return (
    <section className="blog container" id="blog">
      <h2 className="section__title">Latest Posts</h2>
      <div className="blog__container grid">
        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#">
              {" "}
              <span className="blog__category">Reviews</span>
            </a>
            <a href="#">
              <img src={Image1} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">Finding Inner Peace is Simple</h3>
            <div className="blog__meta">
              <span>02 july,2024</span>
              <span className="blog__dot">.</span>
              <span>TherapAI</span>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#">
              {" "}
              <span className="blog__category">Tutorial</span>
            </a>
            <a href="#">
              <img src={Image2} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">
              Can Social Prescriptions Improve Cognitive and Mental Health?
            </h3>
            <div className="blog__meta">
              <span>06 July, 2024</span>
              <span className="blog__dot">.</span>
              <span>TherapAI</span>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#">
              {" "}
              <span className="blog__category">Personal Stories</span>
            </a>
            <a href="">
              <img src={Image3} alt="" className="blog__img" />
            </a>
          </div>
          <div className="blog__details">
            <h3 className="blog__title">
              Stories of lived experience written by the people who have lived
              it.
            </h3>
            <div className="blog__meta">
              <span>10 July, 2024</span>
              <span className="blog__dot">.</span>
              <span>TherapAI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
