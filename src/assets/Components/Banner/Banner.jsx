import React from "react";
import img1 from "../../../assets/img/banner/1.jpg";
import img2 from "../../../assets/img/banner/2.jpg";
import img3 from "../../../assets/img/banner/3.jpg";
import img4 from "../../../assets/img/banner/4.jpg";
import img5 from "../../../assets/img/banner/5.jpg";
import img6 from "../../../assets/img/banner/6.jpg";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-xl" />
          <div
            className="absolute rounded-xl flex items-center h-full top-0 left-0 
         bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] p-12"
          >
            <div className="text-white space-y-7 w-1/2">
              <h1 className="text-6xl">Affordable Price For Car Servicing</h1>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-4">
                <button className="btn btn-success">Discover More</button>
                <button className="btn btn-warning">Contact Us</button>
              </div>
            </div>
            <div className="absolute flex justify-end bottom-5 right-5 gap-2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
