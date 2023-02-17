import React from "react";

import Slick from "react-slick";

const Testimonials: React.FC<{
  title: string;
  list: {
    id: string;
    userName: string;
    userDesignation: string;
    profilePic: {
      file: {
        url: string;
      };
    };
    feedback: {
      feedback: string;
    };
    rating: number;
  }[];
}> = ({ list, title }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (!list?.length) {
    return null;
  }

  return (
    <div className="container">
      <div className="col-12 my-5">
        <h3 className="text-center">{title}</h3>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Slick {...settings} id="testimonial-slider" className="owl-carousel">
            {list.map((each) => {
              return (
                <div key={each.id}>
                  <div className="testimonial rounded-2">
                    <div className="d-flex justify-content-start">
                      {new Array(each.rating).fill("").map((_, idx) => {
                        return (
                          <div key={idx}>
                            <img alt="..." src="/img/star-icon.svg" />
                          </div>
                        );
                      })}
                    </div>
                    <p className="mt-3">{each.feedback.feedback}</p>
                    <div className="d-flex justify-content-start">
                      <div className="mt-2">
                        <img className="img-fluid mr-3" alt="..." src={each.profilePic.file.url} />
                      </div>
                      <div>
                        <h6 className="mt-1 mb-0">
                          <strong>{each.userName}</strong>
                        </h6>
                        <p className="mb-0">
                          <small>{each.userDesignation}</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slick>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
