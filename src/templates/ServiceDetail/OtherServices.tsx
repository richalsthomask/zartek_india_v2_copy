import React, { FC } from "react";

export const OtherServices: FC = () => {
  return (
    <div className="col-lg-4 col-md-12 col-sm-12">
      <aside className="default-aside">
        <div className="sidebar">
          <ul>
            <li className="active">
              <a href="#">Website Development</a>
            </li>
            <li>
              <a href="android.html">Android App Development</a>
            </li>
            <li>
              <a href="flutter.html">Flutter App Development</a>
            </li>
            <li>
              <a href="uidesign.html">Design and User Experience</a>
            </li>
            <li>
              <a href="ios.html">iOS App Development</a>
            </li>
            <li>
              <a href="digital-marketing.html">Digital Marketing Strategy</a>
            </li>
            <li>
              <a href="business-development.html">Business Development Strategy</a>
            </li>
            <li>
              <a href="fundraising.html">Fund Raising strategy</a>
            </li>
          </ul>
          <div className="home-services-item box active">
            <h5 className="services-title">
              Tell us about your projects and we’ll get back to you with details on how we can make
              this work.
            </h5>
            <a className="btn-white-line" href="contact.html">
              Contact Us
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
};
