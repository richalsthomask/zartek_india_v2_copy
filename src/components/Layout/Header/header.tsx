import { useBaseURL } from "@/utils/hooks/useBaseUrl";
import { useIntersectionObserver } from "@/utils/hooks/useIntersectionObserver";
import { Link } from "gatsby";
import React, { FC, Fragment, useRef, useState } from "react";
import { BrandLogo } from "./Brandlogo";

export const HeaderComponent: FC = () => {
  const scrolledRef = useRef<HTMLDivElement>();
  const [switchToStickyHeader, setSwitchToStickyHeader] = useState<boolean>(false);
  const [burgerActive, setBurgerActive] = useState<boolean>(false);

  useIntersectionObserver(
    scrolledRef,
    () => setSwitchToStickyHeader(false),
    () => setSwitchToStickyHeader(true),
  );

  const url = useBaseURL();

  function handleLogoType(): "light" | "dark" {
    return switchToStickyHeader ? "light" : "dark";
  }

  return (
    <Fragment>
      <header className={`header-area ${switchToStickyHeader ? "header-sticky" : "welcome-bg"}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="main-nav">
                <BrandLogo logoMode={handleLogoType()} homeURL={url} />

                <ul className={`nav ${burgerActive ? "mobile-navs" : ""}`}>
                  <li>
                    <Link to={url + "/"}>HOME</Link>
                  </li>
                  <li>
                    <Link to={url + "/our-work/"}>OUR WORK</Link>
                  </li>
                  <li>
                    <Link to={url + "/about-us/"}>About Us</Link>
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
                    <Link to={url + "/contact/"} className="btn-nav-line">
                      CONTACT
                    </Link>
                  </li>
                </ul>
                <div
                  onClick={() => setBurgerActive(!burgerActive)}
                  role="button"
                  tabIndex={0}
                  className={`menu-trigger ${burgerActive ? "active" : ""}`}
                >
                  <span>Menu</span>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <div className="scroll-ref" ref={scrolledRef}></div>
    </Fragment>
  );
};
