import { MoreSolutionWeOffer } from "@/@types/types";
import MoreSolutionCard from "@/components/Shared/Ui/MoreSolutionCard";
import React, { FC } from "react";
import Slider from "react-slick";

interface SolutionsWeAlsoOfferProps {
  data: MoreSolutionWeOffer;
}

const SolutionsWeAlsoOffer: FC<SolutionsWeAlsoOfferProps> = ({
  data: { title, solutions, description },
}) => {
  const settings = {
    dots: true,
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
  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center"> {title} </h2>
      <div className="center-text">
        <p>{description}</p>
      </div>
      <Slider {...settings}>
        {solutions.map((each) => {
          return (
            <MoreSolutionCard
              key={each.id}
              coverImage={each.coverImage.file.url}
              shortDescription={each.shortDescription}
              slug={each.slug}
              title={each.title}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default SolutionsWeAlsoOffer;
