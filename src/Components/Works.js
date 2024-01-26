import React from "react";
import Project from "./Project";
import data from "../projects.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Works() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      id="works"
      className="w-screen h-screen   flex flex-col gap-20 p-14 bg-[#00A568]"
    >
      <div className="text-center font-kdam text-white text-4xl mt-10 pt-1 font-bold">
        WORKS
      </div>
      <div className="pt-32">
        <Slider {...settings}>
          {data.map((project) => (
            <Project
              key={project.id}
              project={project.project}
              demo={project.demo}
              code={project.code}
              src={project.src}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Works;
