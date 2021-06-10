import { useBaseURL } from "@/utils/hooks/useBaseUrl";
import { useIntersectionObserver } from "@/utils/hooks/useIntersectionObserver";
import { Link } from "gatsby";
import React, { FC, Fragment, useRef, useState } from "react";
import { BrandLogo } from "./Brandlogo";

export const HeaderComponent: FC = () => {
  const scrolledRef = useRef<HTMLDivElement>();
  const [switchToStickyHeader, setSwitchToStickyHeader] = useState<boolean>(false);
  useIntersectionObserver(
    scrolledRef,
    () => setSwitchToStickyHeader(false),
    () => setSwitchToStickyHeader(true),
  );

  const url = useBaseURL();

  return (
    <Fragment>
      <header className={`header-area ${switchToStickyHeader ? "header-sticky" : "welcome-bg"}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="main-nav">
                <BrandLogo logoMode={switchToStickyHeader ? "light" : "dark"} homeURL={url} />

                <ul className="nav">
                  <li>
                    <Link to={url}>HOME</Link>
                  </li>
                  <li>
                    <a href="our-work.html" target="_blank">
                      OUR WORK
                    </a>
                  </li>
                  <li>
                    <a href="about-us.html" target="_blank">
                      ABOUT US
                    </a>
                  </li>
                  <li>
                    <a href="services.html" target="_blank">
                      SERVICES
                    </a>
                  </li>
                  <li>
                    <a href="https://medium.com/zartek" target="_blank" rel="noreferrer">
                      BLOG
                    </a>
                  </li>

                  <li>
                    <a href="hire-dedicated-developer.html" target="_blank">
                      DEDICATED DEVELOPERS
                    </a>
                  </li>
                  <li>
                    <a href="contact.html" className="btn-nav-line" target="_blank">
                      CONTACT
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <div ref={scrolledRef}></div>
    </Fragment>
  );
};
