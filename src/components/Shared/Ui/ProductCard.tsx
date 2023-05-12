import { LazyImage } from "@/components/Helpers/LazyImage";
import { Link } from "gatsby";
import React from "react";

interface ProductCardProps {
  imageSrc: string;
  productTitle: string;
  productDescription: string;
  links: { iosLink?: string; androidLink: string; websiteLink: string };
  slug?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  productDescription,
  productTitle,
  links,
  slug,
}) => {
  return (
    // <div className="col-lg-4 col-md-6 col-sm-12 grid-class">
    //   <div className="page-app ">
    //     <div className="icon">
    //       <LazyImage alt="app" height={255} width={255} src={imageSrc} />
    //     </div>
    //     <div className="app-content">
    //       <h5 className="title">{productTitle}</h5>
    //       <div className="text">{productDescription}</div>
    //       <div>
    //         <div className="d-flex justify-content-around app-links">
    //           {links?.iosLink && (
    //             <a
    //               href={links?.iosLink}
    //               target="_blank"
    //               rel="noreferrer"
    //               className="col-lg-2 col-md-3 col-sm-3 p-0"
    //             >
    //               <LazyImage height={24} width={24} src={"/images/app-store.png"} alt="store" />
    //             </a>
    //           )}
    //           {links?.androidLink && (
    //             <a
    //               href={links?.androidLink}
    //               target="_blank"
    //               rel="noreferrer"
    //               className="col-lg-2 col-md-3 col-sm-3 p-0"
    //             >
    //               <LazyImage height={24} width={24} src={"/images/playstore.png"} alt="store" />
    //             </a>
    //           )}
    //           {links?.websiteLink && (
    //             <a
    //               href={links?.websiteLink}
    //               target="_blank"
    //               rel="noreferrer"
    //               className="col-lg-2 col-md-3 col-sm-3 p-0"
    //             >
    //               <LazyImage height={24} width={24} src={"/images/web.png"} alt="store" />
    //             </a>
    //           )}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="col-lg-4 col-md-6 col-sm-12 grid-class" title={productTitle}>
      <div className="portfolio-content-box">
        <div className="portfolio-bg shrink">
          <LazyImage alt="app" height={255} width={255} src={imageSrc} />
        </div>
        <div className="content">
          <div className="row">
            <div className="col">
              <div className="">
                <h6 className="cut-text-2" title={productTitle}>
                  {productTitle}
                </h6>
              </div>
            </div>
            <div className="col">
              <div className="d-flex justify-content-end app-links">
                {links?.iosLink && (
                  <a
                    href={links?.iosLink}
                    target="_blank"
                    rel="noreferrer"
                    className="col-lg-2 col-md-3 col-sm-3 p-0 mx-2"
                  >
                    <LazyImage height={24} width={24} src={"/images/app-store.png"} alt="store" />
                  </a>
                )}
                {links?.androidLink && (
                  <a
                    href={links?.androidLink}
                    target="_blank"
                    rel="noreferrer"
                    className="col-lg-2 col-md-3 col-sm-3 p-0 mx-2"
                  >
                    <LazyImage height={24} width={24} src={"/images/playstore.png"} alt="store" />
                  </a>
                )}
                {links?.websiteLink && (
                  <a
                    href={links?.websiteLink}
                    target="_blank"
                    rel="noreferrer"
                    className="col-lg-2 col-md-3 col-sm-3 p-0 mx-2"
                  >
                    <LazyImage height={24} width={24} src={"/images/web.png"} alt="store" />
                  </a>
                )}
              </div>
            </div>
          </div>
          <p
            className="cut-text-3"
            style={{
              minHeight: "85px",
            }}
          >
            {productDescription}
          </p>
          {slug ? (
            <Link to={slug} className="btn btn-link" role="button">
              <u>More Details</u>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
};
