import ConnectHeader from "@/components/Shared/ConnectHeader";
import { useBaseURL } from "@/utils/hooks/useBaseUrl";
import { useIntersectionObserver } from "@/utils/hooks/useIntersectionObserver";
import { Link } from "gatsby";
import React, { Fragment, useRef, useState } from "react";
import { BrandLogo } from "./Brandlogo";

export const HeaderComponent: React.FC = () => {
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
      <ConnectHeader />
      <header
        className={`header-area header-margin ${
          switchToStickyHeader ? "header-sticky" : "welcome-bg"
        }`}
      >
        <div className="header-padding">
          <div className="row">
            <div className="col-lg-12">
              <nav className="main-nav">
                <BrandLogo logoMode={handleLogoType()} homeURL={url} />

                <ul className={`nav ${burgerActive ? "mobile-navs" : ""}`}>
                  <li>
                    <Link to={url + "/"}>HOME</Link>
                  </li>
                  <li>
                    <Link to={"/our-work/"}>OUR WORK</Link>
                  </li>
                  <li>
                    <Link to={url + "/services/"}>SERVICES</Link>
                  </li>
                  <li>
                    <Link to={"/solutions/"}>SOLUTIONS</Link>
                  </li>
                  <li>
                    <Link to={"/blog/"}>BLOG</Link>
                  </li>
                  <li>
                    <Link to={"/hire-dedicated-developer/"}>DEDICATED DEVELOPERS</Link>
                  </li>
                  <li>
                    <Link to={"/careers/"}>CAREERS</Link>
                  </li>
                  <li>
                    <Link to={"/contact/"} className="btn-nav-line">
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
